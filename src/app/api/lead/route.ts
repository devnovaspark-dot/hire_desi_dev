import { NextResponse } from "next/server";

// In-memory store for development/demo leads (persists during process lifetime)
interface StoredLead {
  leadId: string;
  developerRequirement: string;
  engagementType: "Hourly" | "Monthly" | "Fixed cost";
  name: string;
  country: string;
  contact: string;
  expectedStart?: string;
  description?: string;
  formPosition: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  gclid?: string;
  landing_url?: string;
  ip?: string;
  userAgent?: string;
  createdAt: string;
}

const leadsStore: StoredLead[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      developerRequirement,
      engagementType,
      name,
      country,
      contact,
      expectedStart,
      description,
      formPosition,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      gclid,
      landing_url,
    } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!contact || typeof contact !== "string" || contact.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Valid work email or contact phone is required." },
        { status: 400 }
      );
    }

    if (!["Hourly", "Monthly", "Fixed cost"].includes(engagementType)) {
      return NextResponse.json(
        { success: false, error: "Invalid engagement type specified." },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const leadId = `HDD-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    // Extract request headers for telemetry
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const newLead: StoredLead = {
      leadId,
      developerRequirement: developerRequirement || "AI / ML developer",
      engagementType,
      name: name.trim(),
      country: country || "Unknown",
      contact: contact.trim(),
      expectedStart,
      description: description?.trim() || "",
      formPosition: formPosition || "1",
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      gclid,
      landing_url,
      ip,
      userAgent,
      createdAt: new Date().toISOString(),
    };

    leadsStore.unshift(newLead);

    // Structured server log for lead monitoring
    console.log("==================================================");
    console.log(`[LEAD RECEIVED: ${leadId}]`);
    console.log(`Client: ${newLead.name} (${newLead.country})`);
    console.log(`Contact: ${newLead.contact}`);
    console.log(`Requirement: ${newLead.developerRequirement}`);
    console.log(`Engagement: ${newLead.engagementType}`);
    console.log(`Form Position: ${newLead.formPosition}`);
    console.log(`UTMs: ${newLead.utm_source || "direct"} / ${newLead.utm_campaign || "none"}`);
    console.log("==================================================");

    return NextResponse.json(
      {
        success: true,
        leadId,
        message: "Requirement received. Your matched developer will be proposed shortly.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[LEAD INGESTION ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to process requirement." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Read-only endpoint for debugging lead count
  return NextResponse.json({
    totalLeads: leadsStore.length,
    latestLeads: leadsStore.slice(0, 10).map((l) => ({
      leadId: l.leadId,
      name: l.name,
      country: l.country,
      requirement: l.developerRequirement,
      engagement: l.engagementType,
      createdAt: l.createdAt,
    })),
  });
}
