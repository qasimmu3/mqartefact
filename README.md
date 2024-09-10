# mqartefact

# Description
This is a front-end (i.e. clickable) web application designed as part of my MSc Cybersecurity Dissertation, focusing on delivering a user-centric experience for cybersecurity awareness. This web app is a proof of concept for the user-centric cybersecurity awareness framework in my dissertation.

The application leverages was designed using WordPress CMS (specifically Elementor plug-in), HTML5, CSS3, and JavaScript (React and Vue.js libraries).

# Accessing Code
- Download code zip file from GitHub 
- Access the web app using any modern browser

# User Dashboard
- User Login - open **login.html** and enter any username and password (clickable app - just requires any input). Do not enroll into MFA, just click "Sent TOTP". Enter any 6 characters for the TOTP code.
- Complete the onboarding assessment form. Selections are required to move to the next question.
- Three trainings are available. Note - right/wrong answer will be provided right away. Reference future enhancements.
- Upon onboarding, two badges will be earned. A list of full badges can be viewed.

# Admin Dashboard
-  Admin Login - open **admin-login.html** and enter any username and password (clickable app - just requires any input). Enter any 6 characters for the TOTP code.
-  You'll be presented with the admin dashboard

# Future Enhancements
- Implement a secure backend to handle user AAA (authentication, authorization, auditing) using industry standards (e.g. OAuth 2.0, OpenID Connect)
- Ensure all sensitive data is encrypted using HTTPS
- Introduce role-based access control (RBAC) to control user dashboard and admin dashbaord access
- Provide quiz results after completion
- Implement input validation and sanitization to prevent attacked (e.g. SQL injections and cross-site scripting (CSS))
- Perform a penteration test before handling live data
- Perform a vulnerability assessment before handling live data
