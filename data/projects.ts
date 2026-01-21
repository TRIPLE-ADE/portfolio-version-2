export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    content?: string;
    tags: string[];
    image: string;
    link?: string;
    github?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "private-ai-note",
        title: "Private AI Note",
        description: "An offline-first, privacy-focused AI note-taking Android application with on-device intelligence.",
        longDescription: "A mobile application built with React Native and Expo that runs AI models entirely on-device, ensuring zero data leakage.",
        content: `
# Private AI Note (Android)

**Offline-first AI note-taking app with on-device intelligence and zero data leakage**

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

No data is sent to external servers. User notes **never leave the device**.

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
* Notes, audio, and AI outputs are processed locally

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
* Strong privacy guarantees for users
* Shipped and published on the **Google Play Store**

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
        `,
        tags: ["React Native", "Expo", "AI", "On-Device ML", "Android"],
        image: "/projects/ai-note.png",
        link: "https://private-ai-note.vercel.app/",
        featured: true,
    },
    {
        id: "findcare",
        title: "FindCare",
        description: "AI-assisted platform connecting patients with relevant health practitioners through smart diagnosis insights.",
        longDescription: "A healthcare platform prototype developed as a capstone project for the Microsoft ADC Student League. It features AI-assisted matching and structured consultation summaries.",
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
        image: "/projects/find-care.png",
        link: "https://find-care.netlify.app/",
        featured: true,
    },
    {
        id: "smart-school-finance",
        title: "Smart School Finance Hub",
        description: "A fintech platform helping students save, invest, and automate tuition payments to ensure educational continuity.",
        longDescription: "A financial inclusion platform designed to help students plan, grow, and automate school fee payments. Recognized as a Top 8 finalist at the Squad × GTCO Hackathon.",
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
* 🏆 **Top 8 out of 100+ teams** at the **Squad × GTCO Hackathon**
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
        image: "/projects/smart-school.jpg",
        link: "https://youtube.com/shorts/_0H_HvfSh0w",
        featured: true,
    },
    // {
    //     id: "nexus-saas",
    //     title: "Nexus AI Platform",
    //     description: "Built a scalable SaaS platform that automates customer support using LLMs, reducing support tickets by 40%.",
    //     longDescription: "A comprehensive AI-driven support platform designed for enterprise scale. Built with Next.js, OpenAI, and Pinecone for vector search.",
    //     tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    //     image: "/projects/nexus-ai.png",
    //     link: "https://nexus-ai.demo",
    //     github: "https://github.com/TRIPLE-ADE/nexus-ai",
    //     featured: true,
    // },
    // {
    //     id: "eco-store",
    //     title: "EcoCommerce Optimizer",
    //     description: "An e-commerce engine focused on performance and high conversion, achieving sub-second load times.",
    //     longDescription: "Leveraging ISR and Edge Functions to deliver a lightning-fast shopping experience. Optimized for mobile-first users.",
    //     tags: ["React", "Hono", "Cloudflare Workers", "Drizzle"],
    //     image: "/projects/eco-store.png",
    //     link: "https://eco-store.demo",
    //     featured: true,
    // },
    // {
    //     id: "fin-dash",
    //     title: "Financial Insight Dashboard",
    //     description: "Real-time analytics dashboard for fintech startups to monitor transaction health and fraud patterns.",
    //     longDescription: "Complex data visualization using Recharts and real-time updates via WebSockets. Helping businesses make data-driven decisions.",
    //     tags: ["Next.js", "D3.js", "PostgreSQL", "Prisma"],
    //     image: "/projects/fin-dash.png",
    //     github: "https://github.com/TRIPLE-ADE/fin-dash",
    //     featured: true,
    // }
];
