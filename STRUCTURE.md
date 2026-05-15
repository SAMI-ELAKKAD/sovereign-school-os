# Project Directory Structure

This document outlines the complete file and directory structure for the Sovereign School OS application.

```
/
├── App.tsx
├── README.md
├── components/
│   ├── administration/
│   │   ├── AICopilotView.tsx
│   │   ├── AdminDashboardView.tsx
│   │   ├── AdministrationPortal.tsx
│   │   ├── ApprovalsView.tsx
│   │   ├── CommunicationsView.tsx
│   │   ├── ComplianceLogView.tsx
│   │   ├── DeleteUserConfirmationModal.tsx
│   │   ├── FairnessDashboardView.tsx
│   │   ├── SchoolArchiveView.tsx
│   │   ├── StaffOverviewView.tsx
│   │   ├── StudentSupportView.tsx
│   │   ├── UserManagementView.tsx
│   │   └── UserModal.tsx
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── CalendarView.tsx
│   │   ├── Chatbot.tsx
│   │   ├── Input.tsx
│   │   ├── MarkdownRenderer.tsx
│   │   └── Select.tsx
│   ├── icons/
│   │   ├── SettingsIcon.tsx
│   │   └── StudentIcons.tsx
│   ├── student/
│   │   ├── AICoderView.tsx
│   │   ├── AITeacherView.tsx
│   │   ├── AdaptiveLearningPathView.tsx
│   │   ├── AdventuresView.tsx
│   │   ├── ArtStudioView.tsx
│   │   ├── AssignmentsAndQuizzesView.tsx
│   │   ├── AssignmentsView.tsx
│   │   ├── ClassSummariesView.tsx
│   │   ├── DebateCoachView.tsx
│   │   ├── EngineeringSandboxView.tsx
│   │   ├── FinancialLiteracyView.tsx
│   │   ├── FocusModeBanner.tsx
│   │   ├── GraphingCalculator.tsx
│   │   ├── HistoryExplorerView.tsx
│   │   ├── LearningHubView.tsx
│   │   ├── LearningJournalView.tsx
│   │   ├── LiteratureCompanionView.tsx
│   │   ├── MathSolverView.tsx
│   │   ├── MusicComposerView.tsx
│   │   ├── ProfileSettingsView.tsx
│   │   ├── ProgressView.tsx
│   │   ├── QuestsView.tsx
│   │   ├── QuizResultView.tsx
│   │   ├── QuizView.tsx
│   │   ├── ReflectionView.tsx
│   │   ├── ScienceLabView.tsx
│   │   ├── StoriesView.tsx
│   │   ├── StudentDashboardView.tsx
│   │   ├── StudentHeader.tsx
│   │   ├── StudentLessonDisplay.tsx
│   │   ├── StudentPortal.tsx
│   │   └── interactive/
│   │       └── InteractiveWidgets.tsx
│   ├── teacher/
│   │   ├── AICoachView.tsx
│   │   ├── AstraForTeachers.tsx
│   │   ├── AdventureArchitectView.tsx
│   │   ├── AttentionGauge.tsx
│   │   ├── ClassRoster.tsx
│   │   ├── CommunicationsView.tsx
│   │   ├── CourseSummaryView.tsx
│   │   ├── DashboardView.tsx
│   │   ├── FlashcardModal.tsx
│   │   ├── IEPCopilotView.tsx
│   │   ├── ImageEditor.tsx
│   │   ├── ImageGenerator.tsx
│   │   ├── IncidentModal.tsx
│   │   ├── IncidentsView.tsx
│   │   ├── LessonPlannerView.tsx
│   │   ├── LessonVideoGenerator.tsx
│   │   ├── MyLibraryView.tsx
│   │   ├── QuizGenerator.tsx
│   │   ├── SmartSuggestionModal.tsx
│   │   ├── StudentDashboardView.tsx
│   │   ├── TeacherPortal.tsx
│   │   ├── VideoGenerator.tsx
│   │   └── VideoPromptGenerator.tsx
│   ├── Chip.tsx
│   ├── ClassRoster.tsx
│   ├── CommunicationsView.tsx
│   ├── GenerationOutput.tsx
│   ├── IEPCopilotView.tsx
│   ├── IncidentsView.tsx
│   ├── LessonPlannerView.tsx
│   ├── MainApp.tsx
│   ├── Onboarding.tsx
│   ├── SettingsModal.tsx
│   ├── SmartSuggestionModal.tsx
│   ├── StoryGeneratorView.tsx
│   ├── StudentDashboardView.tsx
│   └── TeacherPortal.tsx
├── hooks/
│   ├── useRecorder.ts
│   └── useUserProfile.ts
├── index.html
├── index.tsx
├── metadata.json
├── services/
│   ├── approvalService.ts
│   ├── archiveService.ts
│   ├── calendarService.ts
│   ├── chatHistoryService.ts
│   ├── communicationService.ts
│   ├── complianceLogService.ts
│   ├── courseSummaryService.ts
│   ├── focusService.ts
│   ├── geminiService.ts
│   ├── heroData.ts
│   ├── lessonService.ts
│   ├── lessonTemplateService.ts
│   ├── lessonVersionService.ts
│   ├── priorityService.ts
│   └── studentDataService.ts
├── types.ts
└── utils/
    ├── interactiveParser.ts
    ├── parser.ts
    ├── pdfParser.ts
    └── video.ts
```

## Layer overview

- components/administration/ : Admin portal views, including user management, fairness dashboards, approvals, compliance audit log, and the conversational AI co-pilot.
- components/teacher/ : Teacher portal: the 5-Minute Lesson Planner, Adventure Architect, Image/Video generators, attention gauge, IEP co-pilot, incident logging.
- components/student/ : Student portal: adaptive learning paths, AI tutors, science lab, math solver, art studio, music composer, debate coach, quests, reflection.
- components/common/ : Buttons, inputs, selects, calendar, markdown renderer, chatbot shell shared across portals.
- services/ : Browser-side service layer. localStorage-backed. No network I/O outside the AI text/image/video calls.
- utils/ : Parsing helpers for interactive widgets, lesson markdown, PDF ingestion, and video metadata.
- hooks/ : React hooks for audio recording and the user profile (role gate).

For the architecture rationale and product positioning, see [README.md](./README.md).
