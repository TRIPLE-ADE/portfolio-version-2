export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  content?: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  store?: string;
  result?: string;
  context: string;
  role: string;
  status: "Live" | "Released" | "Prototype";
  outcome: string;
  outcomeLabel: string;
  recognition?: string;
  cardSize?: "wide";
  featuredOnHome?: boolean;
}

export const projects: Project[] = [
  {
    id: "private-ai-note",
    featuredOnHome: true,
    title: "Private AI Note",
    description:
      "An offline-first, privacy-focused AI note-taking Android application with on-device intelligence.",
    longDescription:
      "A React Native application that keeps core AI note workflows on-device, reducing cloud dependency while improving privacy and offline reliability.",
    context: "Independent product",
    role: "Solo product engineer",
    status: "Released",
    outcome: "100% offline",
    outcomeLabel: "Core user-content and AI workflows",
    content: `
# Private AI Note (Android)

**Offline-first AI note-taking with private, on-device intelligence**

🟢 *Works 100% offline — no internet required*

---

## Problem

Most AI note-taking apps require an internet connection and send user data to external servers. This creates **privacy risks**, **latency**, and **dependency on cloud availability**, which is unacceptable for users who want to store **sensitive personal, academic, or work notes**.

Users needed a way to:
* Take notes anywhere (even offline)
* Use AI features without exposing their data
* Interact with notes naturally (chat, summarize, generate, transcribe)

---

## Solution

I built **Private AI Note**, an Android application where **all AI processing runs entirely on the user’s device**.

The app allows users to:
* Write and manage notes offline
* Chat with their notes
* Generate and summarize content
* Record voice notes and transcribe them locally
* Use AI features **without an internet connection**

Core note and AI workflows are designed to run locally, so users can work without sending their notes to a cloud AI service.

---

## My Role

**Solo project — end to end**
* Product idea & UX decisions
* Mobile app development
* AI integration & on-device inference
* Performance optimization for mobile devices
* Play Store deployment

---

## Technical Approach & Architecture

### Frontend
* **React Native (Expo)** for cross-platform development
* Clean, minimal UI focused on speed and usability

### AI & Privacy
* **On-device AI model** (offline inference)
* No cloud APIs for AI processing
* Notes, recordings, and core AI outputs are processed locally
* Sentry may collect crash and application-performance telemetry, but not note or recording content

This design prioritizes:
* Privacy by default
* Low latency
* Offline reliability

### Core Features Flow
* Notes are created and stored locally
* AI actions (chat, summarize, generate) run directly on device
* Audio recordings are transcribed locally
* No network dependency for core functionality

---

## Key Challenges & Trade-offs
* **Running AI models on mobile** required balancing performance and accuracy to avoid overheating or lag.
* **Memory management** was critical to keep the app responsive on lower-end devices.
* Offline speech-to-text needed careful optimization to maintain reasonable transcription quality.

---

## Impact
* Fully functional **offline AI note-taking**
* Zero server cost for AI inference
* A clear privacy boundary between local user content and operational telemetry
* Shipped and published on the **Google Play Store**
* Reached the **100+ downloads** band on Google Play

---

## Why This Project Matters
This project demonstrates my ability to:
* Build **privacy-first products**
* Integrate AI responsibly
* Ship real-world mobile applications
* Make architectural decisions under real constraints

It reflects how I approach engineering: **user trust, performance, and practicality first**.

---

## Links
* **Live Demo:** [https://private-ai-note.vercel.app](https://private-ai-note.vercel.app/)
* **Google Play:** [https://play.google.com/store/apps/details?id=com.tripletech.ainote](https://play.google.com/store/apps/details?id=com.tripletech.ainote)
        `,
    tags: ["React Native", "Expo", "AI", "On-Device ML", "Android"],
    image: "/projects/private-ai-note.webp",
    link: "https://private-ai-note.vercel.app/",
    store: "https://play.google.com/store/apps/details?id=com.tripletech.ainote&hl=en",
    cardSize: "wide",
  },
  {
    id: "triplex-ecommerce",
    featuredOnHome: true,
    title: "Triplex E-commerce",
    description:
      "A full-stack wearable-commerce experience with CMS-managed inventory, persistent carts, authenticated orders, and verified payments.",
    longDescription:
      "An independently developed commerce platform combining a polished storefront with dependable content, identity, cart, payment, and inventory workflows.",
    context: "Independent product",
    role: "Solo full-stack product engineer",
    status: "Live",
    outcome: "End-to-end commerce",
    outcomeLabel: "Catalog, cart, checkout, and order history",
    content: `
# Triplex E-commerce

**A premium wearable-commerce experience built as a complete product system**

---

## Product Goal

Triplex was built to demonstrate more than a storefront UI. The goal was to create a dependable commerce flow where content editors can manage products, customers can keep their carts across devices, and orders remain consistent through authentication, payment, and inventory changes.

---

## My Role

**Sole product and engineering ownership**
* Product and interaction design
* Next.js application architecture
* Commerce data modelling and Sanity Studio configuration
* Authentication, cart, checkout, and order-history implementation
* Stripe payment and webhook integration
* Deployment, error handling, and production hardening

---

## Engineering Approach

### Content and Identity
* Sanity manages products, categories, collections, and order content
* Clerk provides authentication and protected customer order history
* Dynamic metadata supports product discovery and shareable pages

### Cart and Checkout
* Zustand and local storage provide immediate client-side cart state
* Upstash Redis persists carts across authenticated devices
* Stripe handles checkout, with signed webhooks used to confirm payment events

### Order and Inventory Reliability
* Prices and stock are revalidated on the server before checkout
* Duplicate-order protection prevents repeated payment events from creating multiple orders
* Inventory updates are handled as part of the confirmed order workflow

---

## Why This Project Matters

Triplex demonstrates full-stack product judgment: joining interface quality with content operations, secure identity, payment processing, persistent state, and defensive server-side validation.

---

## Links
* **Live application:** [https://triplex-ecommerce.vercel.app](https://triplex-ecommerce.vercel.app)
* **Source:** [https://github.com/TRIPLE-ADE/e-commerce](https://github.com/TRIPLE-ADE/e-commerce)
        `,
    tags: ["Next.js", "TypeScript", "Sanity", "Clerk", "Stripe", "Upstash Redis"],
    image: "/projects/triplex.webp",
    link: "https://triplex-ecommerce.vercel.app",
    github: "https://github.com/TRIPLE-ADE/e-commerce",
  },
  {
    id: "clypr",
    featuredOnHome: true,
    title: "Clypr",
    description:
      "A privacy gateway that gives people one communication handle and control over how messages reach them.",
    longDescription:
      "A six-person Internet Computer project where I led frontend delivery and project coordination, connecting a React experience to a canister backend.",
    context: "ICP WCHL25 national round",
    role: "Frontend engineer & project manager · 6-person team",
    status: "Live",
    outcome: "Privacy gateway",
    outcomeLabel: "One handle with user-controlled message routing",
    recognition: "3rd Place · ICP WCHL25 Nigeria Funnel",
    content: `
# Clypr

**A privacy gateway for controlled, identity-light communication**

---

## Problem

Sharing a phone number or personal account often exposes more identity and access than a conversation requires. Clypr gives users a single communication handle while allowing them to control how messages are routed to their preferred channels.

---

## My Contribution

I worked as the **Frontend Engineer and Project Manager** in a six-person team.

My responsibilities included:
* Building the React and Vite landing experience
* Translating the product concept into clear user-facing flows
* Integrating the frontend with the Internet Computer canister backend
* Coordinating scope, delivery priorities, and team progress

The other five team members contributed backend, canister, product, and supporting delivery work. The recognition belongs to the team; the responsibilities above describe my personal contribution.

---

## Outcome and Recognition

The team delivered a public Internet Computer deployment and received **Third Place in the Nigeria Funnel of the ICP WCHL25 National Round**.

---

## Links
* **Live product:** [https://l545n-vqaaa-aaaap-qqd6a-cai.icp0.io](https://l545n-vqaaa-aaaap-qqd6a-cai.icp0.io)
* **Official result:** [https://dorahacks.io/hackathon/wchl25-national-round/winner](https://dorahacks.io/hackathon/wchl25-national-round/winner)
* **Project milestones:** [https://dorahacks.io/buidl/30160/milestones](https://dorahacks.io/buidl/30160/milestones)
        `,
    tags: ["React", "Vite", "TypeScript", "Internet Computer", "Web3"],
    image: "/projects/clypr.webp",
    link: "https://l545n-vqaaa-aaaap-qqd6a-cai.icp0.io",
    result: "https://dorahacks.io/hackathon/wchl25-national-round/winner",
  },
  {
    id: "workforce-integrity-engine",
    featuredOnHome: true,
    title: "Workforce Integrity Engine",
    description:
      "A payroll-risk intelligence prototype that helps institutions detect suspicious workforce behavior before salary disbursement.",
    longDescription:
      "A four-person Squad Hackathon prototype combining explainable risk scoring, human investigation workflows, audit visibility, and payment controls for proactive payroll-integrity review.",
    context: "Squad Hackathon 3.0",
    role: "Frontend engineer · 4-person team",
    status: "Prototype",
    outcome: "Pre-payment review demo",
    outcomeLabel: "Risk scoring, investigation, and controlled disbursement",
    recognition: "Top-20 team stage · Squad Hackathon 3.0",
    content: `
# Workforce Integrity Engine

**Continuous payroll-integrity intelligence with human-controlled payment intervention**

---

## Problem

Traditional payroll systems process transactions but often discover ghost workers, duplicate accounts, salary anomalies, and stale identity records only after funds have been disbursed.

Workforce Integrity Engine was designed as an intelligence layer above existing payroll infrastructure, helping institutional finance and audit teams identify suspicious behavior before a payment leaves.

---

## Solution

The prototype correlates payroll records, attendance behavior, verification freshness, historical trust patterns, peer-group deviations, and payout anomalies.

It demonstrates an operational review workflow designed to:
* Generate evolving employee trust scores
* Surface explainable anomaly evidence
* Identify suspicious relationships such as shared payout accounts
* Route high-risk records to human investigators
* Pause, approve, or release payments through Squad-backed workflows
* Preserve an audit history of model signals and human decisions

---

## My Contribution

I worked as the **Frontend Engineer in a four-person team**.

My responsibilities included:
* Building the Next.js interface for payroll review and risk investigation
* Presenting multi-signal risk scores without reducing decisions to opaque AI labels
* Implementing workflows for anomaly evidence, trust monitoring, and payment intervention
* Connecting frontend journeys to project APIs and Squad's test environment
* Collaborating with backend and machine-learning engineers during rapid hackathon delivery

The wider team delivered the backend, intelligence models, data workflows, and supporting product work. The hackathon result belongs to the team; the responsibilities above describe my personal contribution.

---

## Product and Engineering Approach

### Explainable Risk Intelligence
* Deterministic fraud rules detect conditions such as duplicate payout accounts and unusual salary changes
* Statistical anomaly detection surfaces deviations from historical and peer-group behavior
* Every flagged record includes evidence and reasoning for investigator review

### Human-in-the-Loop Controls
The prototype does not make irreversible employment or financial decisions autonomously. Its demo flow requires investigators to review the evidence before approving, escalating, blocking, or releasing a disbursement.

### Squad Integration
The prototype connects its frontend workflows to Squad APIs and a virtual-account test environment for identity checks, payout controls, and transaction-linked audit flows. In the demo, payment release follows the relevant human-review step.

### Frontend Stack
* Next.js and TypeScript
* Tailwind CSS
* TanStack Query for server-state workflows
* Zustand for focused client state
* Recharts for operational risk visualisation

---

## Outcome and Recognition

The team delivered a public working prototype and reports advancing to the **top-20 team stage of Squad Hackathon 3.0**. [Independent event coverage](https://techeconomy.ng/squad-hackathon-3-0-records-10x-growth-as-team-block-x-wins-top-prize) reported more than 1,600 undergraduate applicants; the top-20 figure describes the team's competition stage rather than an individual ranking.

---

## Why This Project Matters

Workforce Integrity Engine demonstrates frontend engineering for a high-stakes operational system: dense data, explainable machine-learning signals, financial controls, audit requirements, and human judgment all need to work together clearly.

---

## Links
* **Live product:** [https://payroll-guard.vercel.app](https://payroll-guard.vercel.app)
* **Source:** [https://github.com/TRIPLE-ADE/team-payroll-ghost](https://github.com/TRIPLE-ADE/team-payroll-ghost)
        `,
    tags: ["Next.js", "TypeScript", "TanStack Query", "Squad API", "Fintech"],
    image: "/projects/pay-guard.webp",
    link: "https://payroll-guard.vercel.app",
    github: "https://github.com/TRIPLE-ADE/team-payroll-ghost",
    cardSize: "wide",
  },
  {
    id: "findcare",
    title: "FindCare",
    description:
      "AI-assisted platform connecting patients with relevant health practitioners through smart diagnosis insights.",
    longDescription:
      "A healthcare platform prototype developed as a capstone project for the Microsoft ADC Student League. It features AI-assisted matching and structured consultation summaries.",
    context: "Microsoft ADC capstone",
    role: "Frontend engineer · Team",
    status: "Prototype",
    outcome: "2-sided flow",
    outcomeLabel: "Patients and practitioners",
    content: `
# FindCare

**AI-assisted platform connecting patients with relevant health practitioners**

---

## Problem

Patients often struggle to:
* Understand their symptoms
* Find the *right* health practitioner for their needs
* Communicate symptoms clearly during consultations

At the same time, health practitioners face:
* Poorly structured patient information
* Time lost during initial consultations
* Difficulty reaching patients who match their expertise

---

## Solution

**FindCare** is a platform that connects patients to health practitioners using **AI-assisted diagnosis insights** to improve matching and communication.

The platform helps:
* Patients get preliminary, non-definitive insights based on their symptoms
* Practitioners receive **structured summaries** instead of raw chat messages
* Both sides save time and improve consultation quality

> ⚠️ The AI does **not replace medical professionals** — it supports better decision-making and routing.

---

## Key Features

### Patient Experience
* Chat-based symptom description
* AI-generated summaries of patient concerns
* Search for practitioners by specialization
* Book calls for consultations

### Practitioner Experience
* AI-assisted diagnosis insights
* Patient recommendations based on symptom patterns
* Structured summaries of patient chats
* Relevant medical context surfaced before consultations

---

## My Role

**Frontend Engineer (Team Project)**
* Built core user interfaces for patient and practitioner flows
* Implemented search and practitioner discovery UI
* Integrated booking and consultation flows with backend APIs
* Translated product requirements into responsive, accessible UI
* Collaborated closely with backend and AI team members

This project strengthened my ability to work in **cross-functional teams** under real delivery timelines.

---

## Technical Stack (Frontend)
* Modern frontend framework (React-based - Next.js)
* Component-driven UI architecture
* API-driven state management
* Emphasis on usability and clarity for sensitive health workflows
* Tailwind CSS for responsive styling

---

## Key Challenges & Learnings
* Designing **clear, calm UX** for health-related interactions
* Handling incomplete or ambiguous patient input gracefully
* Ensuring AI outputs were **presented as assistance, not medical conclusions**
* Coordinating frontend delivery with evolving backend APIs

This required constant iteration and close communication with the team.

---

## Impact
* Delivered a functional end-to-end healthcare platform prototype
* Demonstrated AI-assisted patient–practitioner matching
* Successfully completed as a **capstone project** for the **Microsoft ADC Student League Programme**

---

## Why This Project Matters
This project shows my ability to:
* Build user-focused frontend systems in regulated domains
* Collaborate effectively in a team environment
* Translate AI outputs into understandable UI
* Ship real products under structured programs

---

## Links
* **Live Demo:** [https://find-care.netlify.app](https://find-care.netlify.app/)
        `,
    tags: ["React", "Next.js", "Tailwind CSS", "AI Integration", "Healthcare"],
    image: "/projects/find-care.webp",
    link: "https://find-care.netlify.app/",
  },
  {
    id: "smart-school-finance",
    title: "Smart School Finance Hub",
    description:
      "A fintech platform helping students save, invest, and automate tuition payments to ensure educational continuity.",
    longDescription:
      "A financial inclusion prototype designed to help students plan, grow, and automate school-fee payments. It advanced to the ten-team presentation stage of Squad Hackathon 2.0.",
    context: "Squad × GTCO Hackathon",
    role: "Mobile engineer · Team",
    status: "Prototype",
    outcome: "Functional prototype",
    outcomeLabel: "Student savings and tuition flows",
    recognition: "Ten-team presentation stage · Squad Hackathon 2.0",
    content: `
# Smart School Finance Hub

**A fintech platform helping students save, invest, and automate tuition payments—so no student drops out due to financial hardship**

---

## Problem

Many students struggle to pay school fees due to:
* Poor financial planning and lack of savings culture
* Irregular income sources
* Limited flexibility in tuition payment systems

As a result, capable students are forced to **delay or abandon their education**—a problem highlighted during and after the COVID-19 pandemic.

We were inspired by real stories like *Samuel*, a bright student who dropped out after 2020 due to financial constraints, despite having academic potential.

---

## Solution

**Smart School Finance Hub** is a financial inclusion platform that helps students **plan, grow, and automate school fee payments**.

The platform is designed to **partner directly with schools**, allowing funds to be **remitted straight to school accounts**, reducing misuse and ensuring transparency.

---

## Key Features

### Student-Focused
* **AI-Driven Smart Savings**
  Personalized savings plans based on income and spending behavior.
* **Micro-Investments**
  Invest small amounts over time to grow school fees.
* **Automated Tuition Payments**
  Scheduled, worry-free payments directly to schools.
* **Flexible Payment Options**
  Installments, scheduled payments, or crowdfunding support.
* **Emergency Support**
  Integration with loans, scholarships, and financial aid.

### Payments
* SquadCo integration
* Bank transfer support (optional)

---

## My Role

**Frontend Engineer (Team Project)**
* Built the mobile application using **React Native (Expo)**
* Implemented student-facing flows for savings, payments, and dashboards
* Collaborated with backend engineers who handled APIs, payments, and data logic
* Worked closely with designers and teammates during rapid hackathon iteration
* Focused on usability and clarity for financially sensitive workflows

---

## Technical Stack (Frontend)
* **Expo (React Native)** for rapid cross-platform development
* Component-based UI architecture
* API-driven state management
* Mobile-first UX optimized for low-friction financial actions
* Styled with StyleSheet

---

## Challenges & Learnings
* Designing **trustworthy financial UI** for students
* Communicating long-term value (savings & investments) in simple terms
* Shipping a complete product under **hackathon time constraints**
* Coordinating frontend progress with backend teams in parallel

---

## Impact & Recognition
* Advanced to the **ten-team presentation stage** of **Squad Hackathon 2.0**
* Validated as a scalable fintech-for-education concept
* Demonstrated direct school partnership payment model
* Delivered a functional mobile product within a short timeframe

---

## Why This Project Matters
This project demonstrates my ability to:
* Build **real-world fintech mobile applications**
* Collaborate effectively in team-based environments
* Ship under pressure with clear product thinking
* Translate complex financial concepts into intuitive UI

It also reflects my interest in building **technology with social impact**.

---

## Demo & Links
* 🎥 **YouTube Demo:** [https://youtube.com/shorts/_0H_HvfSh0w](https://youtube.com/shorts/_0H_HvfSh0w)
        `,
    tags: ["React Native", "Expo", "Fintech", "Social Impact", "Hackathon"],
    image: "/projects/smart-school.webp",
    link: "https://youtube.com/shorts/_0H_HvfSh0w",
  },
];

export const homepageProjects = projects.filter((project) => project.featuredOnHome);
