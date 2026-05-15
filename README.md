# Sovereign School OS

> AI-native operating system for K-12 schools. Privacy-first (browser-only, localStorage), multi-portal (student / teacher / administration), with adaptive AI Hero mentors, one-click content factory, and equity dashboards.

[![Status](https://img.shields.io/badge/status-live-brightgreen)]() [![Stack](https://img.shields.io/badge/stack-React%2019%20%2B%20TS%20%2B%20Vite-blue)]() [![Privacy](https://img.shields.io/badge/data-localStorage--only-orange)]() [![Award](https://img.shields.io/badge/Winner-Tsinghua%20AIID%202025-yellow)]()

---

## Why this exists

Teachers in K-12 are drowning in administrative work; students are stuck in one-size-fits-all curricula; administrators have no real-time view of school health. The standard SaaS edtech response is to ship more dashboards, more cloud, more vendor lock-in — none of which addresses the core problem: there's no time, and there's no privacy.

Sovereign School OS rebuilds the classroom around AI under three hard constraints:

1. **Zero server-side logic.** The entire app runs in the user's browser. No cloud database. No backend.
2. **localStorage as the database.** All sensitive data lives in the user's browser, FERPA-compliant by construction.
3. **One source of truth per portal.** Students, teachers, and administrators each get a bespoke AI co-pilot — not the same chatbot with different prompts.

Winner of the **Tsinghua AIID Yearly Competition** in partnership with NetDragon.

---

## Three portals, three workflows

### Student Portal — adaptive learning universe
Students pick a historical or cultural "Hero" as their AI mentor. The Hero adapts narrative based on real-time performance: struggling students get gentler reteaching; advanced students get harder variants. Pipeline parses AI text responses into interactive React widgets (multiple choice, fill-in-the-blank, math input) directly in the chat stream.

### Teacher Portal — content factory
The "5-Minute Lesson Plan" generator takes a topic + grade level and emits a complete plan with rubric, slides, worksheets, and an interactive adventure. The "Adventure Architect" turns any standard into a stateful, prefetching game-loop with adaptive narrative branching. The AI Coach surfaces patterns from incident logs for proactive intervention.

### Administration Portal — equity holodeck
A conversational AI Copilot for transforming raw school data into actionable insights ("Generate a fairness report by demographic across the last 6 months"). Equity Dashboard proactively identifies bias in grading distribution. Support Hub flags at-risk students before crisis.

---

## Architecture

```
Browser (single-page app, React 19 + TypeScript + Vite)
  ├── /components       — UI layer, portal-segmented
  │   ├── /student      — student-portal-specific components
  │   ├── /teacher      — teacher-portal-specific components
  │   ├── /administration — admin-portal-specific components
  │   ├── /common       — reusable presentation components
  │   └── /icons        — SVG icon library
  ├── /services         — "client-side backend" / ORM-like layer
  │   ├── geminiService.ts        — single LLM API interface
  │   ├── studentDataService.ts   — student CRUD against localStorage
  │   ├── lessonService.ts        — lesson plan persistence
  │   └── …                       — 12 more domain services
  ├── /hooks            — reusable React hooks (e.g. useRecorder)
  └── /utils            — pure helper functions (parsers, etc.)

localStorage
  ├── students[]        — profile, performance, incidents
  ├── lessons[]         — plans, kits, versions
  ├── conversations[]   — chatbot history per portal
  └── …                 — all persistent state
```

**Architectural principles:**
1. Zero server-side logic
2. localStorage is the database (no IndexedDB, no Firestore, no cloud)
3. Components never read localStorage directly — always through a service
4. Single point of contact for all AI calls (geminiService.ts)

---

## Technical highlights

### Adaptive Hero persona
Adaptive difficulty: before each prompt, the client computes the student's performance level (Struggling / Average / Advanced) and injects a sub-prompt that guides explanation complexity. The Hero stays in character ("Cleopatra explaining the Pythagorean theorem") via system prompt enforcement.

### Interactive widget parser
A purpose-built parsable markup language (`[MULTIPLE_CHOICE:Question|Correct|Wrong]`, `[FILL_IN_BLANK:Sentence with {answer}]`) lets the LLM embed comprehension-check widgets directly in its response. The interactiveParser parses the markup and renders real interactive React components inline in the chat.

### Structured lesson generation
Lesson plans are generated as strict typed JSON via `responseSchema` — a schema mirroring the TypeScript `LessonPlan` interface forces the model to return data as reliable as a REST endpoint.

### Adventure Architect: stateful game loop
The Adventure Architect runs a prefetching, stateful game loop: while the student is on stage N, the next stage is being generated in the background based on their stage-N performance. The prefetch result waits in state until the student clicks "Next," then becomes the current stage and triggers the next prefetch. Adaptive narrative without perceived latency.

### Deeper reasoning with thinkingConfig
For features requiring complex pedagogical reasoning (AI Coach for professional development), `thinkingConfig` with maximum thinking budget is enabled — the model uses more internal tokens for reasoning before generating, producing more thoughtful in-depth answers.

---

## Privacy model

**Student data never leaves the browser.** Profiles, incidents, performance — all client-side only. Prompts to the LLM are constructed client-side; no central server sees student PII.

**Implications:**
- Data is tied to a specific device/browser. Clearing the cache deletes everything.
- No cross-device sync in this architecture (deliberate trade-off for privacy).
- FERPA-compliant by construction. No vendor processor agreements needed.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19.1.1 + TypeScript ~5.9.3 + Vite 7.1.7 |
| Styling | Tailwind CSS |
| Document generation | jspdf, jszip, pdf.js (in-browser, no server upload) |
| AI reasoning | Frontier multimodal LLM (text, image, video, audio) |
| Image generation | In-browser API call |
| Video generation | Async generation with prefetch pipeline |
| Audio | Transcription + text-to-speech |

---

## Codebase structure

See `STRUCTURE.md` for the complete file tree (170+ files across 6 portal directories).

---

## Testing strategy

- **Unit** (vitest/jest): pure utilities like `interactiveParser.ts`, services with mocked localStorage.
- **Component** (React Testing Library): UI flows with the LLM service mocked — never real API calls in tests.
- **E2E** (Cypress/Playwright): network interception to stub the LLM endpoint. Multi-step adaptive-narrative flows tested with predefined responses for speed and determinism.

---

## What's hard about this

Three things this project taught me:

1. **Browser-only storage is a feature, not a limitation.** Once you commit to localStorage as the source of truth, you stop needing auth, cloud sync, GDPR data processing agreements, or backend ops. The privacy guarantee is structural, not promised.

2. **The LLM is a constrained component, not a god-mode controller.** Every model call routes through a service, every output is parsed for structure, every fallback is explicit. Resilience comes from architecture, not from "the model will figure it out."

3. **Adaptive UX is a prefetching problem.** The AdventureGame.tsx pattern — always be generating the next node in the background — is what makes 5-second LLM latency feel like sub-second UX.

---

## License

MIT for code. Documentation CC-BY-4.0.

---

**Sami EL AKKAD** — Tsinghua AIID · sam25@mails.tsinghua.edu.cn · Built in collaboration with NetDragon for the Tsinghua AIID Yearly Competition 2025.
