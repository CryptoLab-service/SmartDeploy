# **App Name**: NYSC SmartDeploy

## Core Features:

- User Authentication: Secure user registration and login with Firebase Auth (Google Sign-In & Email/Password).
- State Data Retrieval: Fetch state development data from Firestore to match PCM skills and courses.
- Profile Input Form: Collect user data, including personal, academic, and skill information.
- Automated Deployment: Determine deployment state using a Cloud Function based on statutory rules, health/marital concessions, course of study and skills.
- Intelligent PPA Selection Tool: Use AI to find suitable places of primary assignment, factoring in sustainable development goal alignment, available Firestore state development data, user skills, and academic focus; provides clear explanations of assignment choices as output.
- Deployment History: Save input data and deployment results to Firestore.
- Guest Mode: Allow users to test the deployment logic without creating an account.

## Style Guidelines:

- Primary color: Nigerian flag green (#008751), conveying a sense of civic duty, growth, and national pride.
- Background color: Light beige (#F5F5DC), similar to the color of the NYSC uniform, offers a neutral and professional backdrop.
- Accent color: Deep orange (#D46A4C) (analogous to green), is used sparingly to draw the user's eye to important UI elements.
- Font pairing: 'Inter' (sans-serif) for body text and 'Space Grotesk' (sans-serif) for headlines.
- Use clear and concise icons from a set like Font Awesome, emphasizing ease of recognition and accessibility. Prioritize visual metaphors linked to career paths and Nigerian landmarks or symbols.
- Employ a clean, card-based design, ensuring that all elements are logically grouped and easy to find. Use a grid system and consider placing the most important information (e.g. deployment result) at the top of the viewport.
- Implement subtle transitions and animations, particularly for form submissions and result displays. Loading animations and progress indicators enhance user experience without being distracting.