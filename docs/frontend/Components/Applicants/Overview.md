---
sidebar_position: 6
---

The `ApplicantOverview` component is a React component designed to display detailed information about a job applicant. It is part of a larger HR management system and is used to provide a comprehensive overview of an applicant's personal information, resume, and AI-generated summary.

- **File Path**: `\hr-frontend\src\components\applicants\ApplicantOverview.js`

- **Dependencies**:
  - `@heroicons/react` for icons.
  - `react-pdf` for PDF rendering.
### Key Features

- **Personal Information Display**: Shows the applicant's personal details such as email, contact number, address, and social media links.
- **Resume Handling**: Allows viewing and downloading the applicant's resume.
- **AI Summary**: Displays an AI-generated summary of the applicant's resume.
- **Comments Integration**: Integrates with a comments drawer for adding and viewing comments related to the applicant.

### Props
- `jobId`: The ID of the job the applicant has applied for.
- `applicant`: An object containing the applicant's personal information.
- `resumeDetail`: An object containing details about the applicant's resume.

### State Management
- `resumeUrl`: Stores the URL of the resume for viewing.
- `showModal`: Controls the visibility of the resume modal.
- `isMasked`: Toggles the visibility of sensitive information (e.g., salary).
- `comments`: Stores comments related to the applicant.
- `numPages`: Stores the number of pages in the PDF resume.
- `pageNumber`: Tracks the current page number of the PDF resume.
- `loadingComments`: Indicates whether comments are being loaded.
- `menuOpen`: Controls the visibility of a dropdown menu.
- `currentComment`: Stores the current comment being typed.
- `open`: Controls the visibility of the comments drawer.

### Contexts
- `AuthContext`: Provides authentication tokens and user details.
- `AvatarContext`: Manages avatars for team members.

### Functions
- **handleMenuToggle**: Toggles the visibility of a dropdown menu.
- **onDocumentLoadSuccess**: Callback function triggered when the PDF document is successfully loaded.
- **openOutlook**: Opens the default email client with a pre-filled email.
- **handlePdfView**: Fetches and displays the applicant's resume in a modal.
- **handleDownload**: Downloads the applicant's resume.
- **handleClickOutside**: Closes the dropdown menu when clicking outside of it.

### Rendering
The component renders a detailed view of the applicant's information, including:
- **Personal Information**: Email, contact number, address, social media links, etc.
- **Resume**: Options to view or download the resume.
- **AI Summary**: An AI-generated summary of the resume.
- **Comments Drawer**: A drawer for adding and viewing comments.


### Styling
The component uses Tailwind CSS for styling, ensuring a responsive and modern design. The layout is divided into two main sections:
- **Left Panel**: Displays personal information and resume details.
- **Right Panel**: Displays the AI-generated summary.

---

