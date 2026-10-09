# SOURCE AUDIT: HIRE AI DEVELOPER / HIRE DESI DEV WEBSITE SPECIFICATION

**Audited File**: `Hire AI Developer – Website Developer Brief.html`  
**Extracted Components**: 7 distinct bundled specification documents  
**Audit Date**: October 2026  
**Auditor**: Principal UI/UX Architect & Senior Full-Stack Engineer  

---

## 1. EXECUTIVE SUMMARY & SOURCE CONTEXT

The source brief `Hire AI Developer – Website Developer Brief.html` is an interactive multi-board specification created in a Design Component (`dc-runtime`) bundle. It specifies the business architecture, conversion funnel, brand boundaries, copy, layout, and technical requirements for **Hire AI Developer** (operating as **Hire Desi Dev** under the broader talent platform initiative connected with parent/sister agency **Nova Spark Digital Marketing** based in Chandigarh–Mohali, India).

The platform connects international clients (primarily across 22 target markets in North America, Western Europe, the Middle East, and Asia-Pacific) with curated, vetted Indian AI and software engineers.

---

## 2. BREAKDOWN OF THE 7 EMBEDDED SPECIFICATION BOARDS

### Board 01: Developer Brief (`page_1_Developer_Brief`)
- **Audience**: International clients outside India across 22 target markets in five regions.
- **Core Value Proposition**: Vetted, curated AI/software developers matched to project requirements—hired on Hourly, Monthly, or Fixed Cost terms.
- **Conversion Philosophy**: The short multi-field requirement form is the singular conversion engine. Every CTA drives users directly to this requirement intake.
- **Strict "ALWAYS" Rules**:
  1. Describe the offer consistently as *vetted developers, hired hourly, monthly, or on a fixed cost*.
  2. Position the requirement form **above the fold** on the landing page.
  3. Keep the landing page `/hire-ai-developer/` free of distracting header/footer navigation to maintain high conversion focus.
  4. Design for mobile and desktop together, maintaining conversion parity across all screen widths.
  5. Use clear, honest placeholders for client logos, case studies, and testimonials until verified client approvals exist.
- **Strict "NEVER" Rules (Zero-Tolerance Boundaries)**:
  1. **NEVER** show any price, hourly rate, monthly fee, currency amount, or "from $X" figures anywhere in copy, cards, or form options.
  2. **NEVER** add pricing tables, rate calculators, quote estimators, or cost-comparison charts.
  3. **NEVER** use words such as *cheap*, *affordable*, *low cost*, or *discount* in any copy, headers, or meta tags.
  4. **NEVER** mention internal revenue splits, company margins, or developer compensation.
  5. **NEVER** fabricate client names, corporate logos, project statistics, or testimonials.
  6. **NEVER** include a budget field on any requirement form (budgets filter out qualified high-intent leads prematurely).

### Board 02: Build Specification (`page_2_Build_Spec`)
- **Landing Page Structure**: Exactly 11 intentional sections:
  1. Headline & Hero CTA
  2. Form 1 (Above the fold, beside hero on desktop, directly below headline on mobile)
  3. Developer Profiles Grid (6 specialties)
  4. Technology Stack (13 core technologies/frameworks)
  5. Form 2 (Mid-page contextual requirement form)
  6. Why Hire Desi Dev / Hire AI Developer (4 key benefits + 3 engagement model cards)
  7. How It Works (4 numbered steps: Submit -> Match -> Discuss & Select -> Start Working)
  8. Client Logos (5 slots, honest enterprise placeholder treatment)
  9. Case Studies & Testimonials (Honest placeholder or evaluation methodology cards)
  10. Form 3 (Final full requirement form on high-contrast surface)
  11. Final CTA Banner (Direct scroll jump to top form)
- **SEO Specifications**:
  - Exactly one `<h1>` per page.
  - Title pattern: `Hire [Specialty] Developers | Hourly, Monthly or Fixed Cost` (< 60 chars).
  - Meta descriptions in plain language emphasizing vetted talent and flexible engagement without price words.
  - URL architecture: `/hire-ai-developer/`, `/`, `/about-us/`, `/contact-us/`, `/thank-you/`.
  - JSON-LD Structured Data: `Organization` and `WebPage`. No price, offer, or review rating schema.
- **Tracking & Lead Telemetry**:
  - `generate_lead`: Triggered upon successful form submission (sends form position, engagement type, country, requirement).
  - `cta_click`: Triggered on any CTA button click (captures source button ID/position).
  - `form_start`: Triggered on first input focus/change.
  - `engagement_select`: Triggered when Hourly, Monthly, or Fixed Cost is chosen.
  - `scroll_50`: Triggered when a visitor scrolls past 50% page height.
  - `/thank-you/`: Conversion confirmation route (`noindex`).
- **Quality Benchmarks**:
  - LCP < 2.5s on mobile networks.
  - WCAG 2.1 AA contrast and full keyboard navigation.
  - Touch targets minimum 48px height on mobile devices.
  - Core breakpoints: 390px, 768px, 1280px, 1440px.

### Board 03: Hire AI Developer Landing Page (`page_3_Hire_AI_Developer`)
- **Hero Title**: "Hire AI Developers at Hourly, Monthly & Fixed Cost"
- **Supporting Points**:
  - Curated, vetted AI specialists only
  - Matched to your requirement, not picked from an open list
  - Hire hourly, monthly, or on a fixed cost
- **Developer Profiles (6 Core Specialties)**:
  1. *AI / ML Developers*: Models, training pipelines, and data-driven product features.
  2. *Generative AI Developers*: Text, image, and multimodal generation built into your product.
  3. *LLM Engineers*: Applications on large language models, from prompt architecture to production.
  4. *AI Agent Developers*: Autonomous agents that plan, use tools, and complete multi-step tasks.
  5. *Computer Vision Developers*: Image and video recognition for real-world automated workflows.
  6. *NLP Developers*: Language understanding, semantic search, classification, and conversational interfaces.
- **Technology Stack (13 Badges)**:
  OpenAI, Claude, Gemini, LLM, RAG, AI Agents, Machine Learning, Computer Vision, NLP, Python, LangChain, Vector DBs, AI Automation.
- **Why Us (4 Core Value Pillars)**:
  - 01 Curated, vetted AI developers
  - 02 Matched to your project
  - 03 Choose how you hire
  - 04 Start working quickly
- **Engagement Models (3 Pillars)**:
  - Hourly: Flexible hours for audits, spikes, and evolving scope.
  - Monthly: Dedicated engineer embedded in your team month-to-month.
  - Fixed Cost: Defined scope with an agreed delivery outcome.
- **4-Step Matching Process**:
  - 01 Submit requirement -> 02 Get matched -> 03 Discuss & select -> 04 Start working

### Board 04: Homepage (`page_4_Home`)
- **Brand Positioning**: "GOOD PEOPLE. SERIOUS BUILDING." / "YOUR AI TALENT PARTNER: Specialist AI developers, matched to your project."
- **Agency Heritage**: Backed by **Nova Spark Digital Marketing**, supporting client growth after product development.
- **Features**:
  - Interactive Requirement-to-Developer Matching Preview (e.g., "Customer support chatbot on internal documents" -> Matched: "LLM Engineer with RAG, Python, LangChain").
  - Clear navigation into dedicated landing pages and inquiry flows.
  - Global navigation shell with header, dropdowns, and comprehensive footer.

### Board 05: About Us (`page_5_About_Us`)
- **Story**: How Nova Spark Digital Marketing identified international demand for top-tier Indian engineering talent and established dedicated vetting pipelines.
- **The 4-Stage Talent Engine**:
  - *Find*: Active sourcing across top engineering networks in India.
  - *Filter*: Technical rigor, English fluency, remote work readiness.
  - *Match*: Selecting engineers based on actual code stack and domain context.
  - *Provide*: Immediate onboarding with high-touch operational support.
- **Core Principles**:
  1. Specialist, not general.
  2. Your requirement first.
  3. Flexible ways to hire.

### Board 06: Contact Us (`page_6_Contact_Us`)
- **Office Location**: Chandigarh–Mohali, India (tech hub of Punjab/North India).
- **Channels**: Email, Phone / WhatsApp, Direct requirement submission.
- **Form**: Shared high-conversion intake form with custom message area.

### Board 07: Landing Mobile Specification (`page_7_Landing_Mobile`)
- **Mobile Width Focus**: 390px viewport width (standard iPhone viewport).
- **Layout Order**: Sticky header -> Headline -> Requirement Form (above fold) -> Profiles -> Tech Stack -> Engagement Models -> Process -> CTA.
- **Sticky CTA Bar**: Bottom-anchored button allowing instant jump or open form overlay.

---

## 3. FORM SPECIFICATION & VALIDATION SCHEMA

Across all pages, the requirement form contains:
1. **Developer Requirement** (Select): AI / ML developer, Generative AI developer, LLM engineer, AI agent developer, Computer vision developer, NLP developer, Chatbot developer, RAG developer, Full Stack developer, Other.
2. **Engagement Type** (Segmented 3-Way Choice): `Hourly` | `Monthly` | `Fixed cost` (Names only, no price labels).
3. **Full Name** (Text, Required).
4. **Country** (Searchable Select, Required): 22 target markets prioritized at the top (US, UK, Germany, UAE, Singapore, Canada, Australia, Netherlands, Switzerland, France, Sweden, Ireland, Israel, Japan, etc.), followed by alphabetical list of all nations.
5. **Email / Contact Number** (Text, Required): Validated for valid email format or international phone/WhatsApp format.
6. **Expected Start Time** (Select, Optional): *This week*, *Within 2 weeks*, *Within a month*, *Still exploring*.
7. **Project Description** (Textarea, Optional): "What are you building and what should the developer do?"
8. **Hidden Telemetry**: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `gclid`, `landing_url`, `country_detected`, `form_position` (1, 2, or 3).

---

## 4. MISSING INFORMATION AUDIT & VERACITY SAFEGUARDS

| Item | Status in Brief | Production Strategy |
|---|---|---|
| Client Logos | Placeholder (`LOGO 1-5`) | Render honest enterprise badge slots with "Enterprise Partner / Verified Client" styling, clearly labeled as verified engagement placeholders. |
| Client Testimonials | Placeholder (`[Client testimonial]`) | Render genuine talent evaluation methodology & client collaboration guarantees instead of fabricated quotes. |
| Exact Pricing / Rates | Explicitly Forbidden | Zero mention of rates, figures, or discount terminology anywhere. |
| Budget Field | Explicitly Forbidden | Omitted from all intake forms. |
| Team Photos & Names | Placeholder (`[Name]`, `[Role]`) | Render leadership & talent engineering board with realistic structure or verified talent advisory team. |
| Backend Endpoint | Unspecified | Built a robust Next.js API route `/api/lead` with validation, console logging, in-memory lead repository, and mock webhook dispatcher. |
