a full-stack job tracker application that helps users organize and manage their job search process. The application should allow users to create profiles, search for job listings, save favorite jobs, track application statuses, and set reminders for follow-ups. Features should include user authentication, job listing integration (via APIs or web scraping), custom tagging and categorization of jobs, and resume/CV management. Additionally, implement features such as analytics for job application progress and email integration for communication with potential employers. The project should be completed within three weeks by a single developer.

Entities:
#User : represents the user of the application and contains basic user information such as username, password, and email. Each user has a corresponding UserProfile which contains additional details like first name, last name, skills, experience, education, saved jobs, applications, and tags.
#JobListing : represents a job listing with attributes such as title, company, location, type, salary, deadline, and description.
#Application : represents a job application made by a user for a specific job listing. It includes details such as the job listing applied for, application status, dates, follow-up tasks, and feedback.
#Tag : represents a custom tag or category that users can assign to job listings or applications for organization and filtering purposes.
#Resume : represents the user's resume or CV, which can be uploaded and managed within the application.

