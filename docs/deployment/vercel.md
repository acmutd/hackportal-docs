---
sidebar_position: 2
---

# Vercel

Vercel is a cloud platform for static sites and Serverless Functions. We recommend using Vercel to deploy your project because HackPortal uses Next.js, a React framework made by Vercel.

# Getting Started

1. Create a Vercel account [here](https://vercel.com/signup).

2. Create a new project and link it to your desired git repository.

3. Add the following environment variables for Firebase and the Resume Upload Service Account. You can either create a new Firbase Project for your production environment or use the same project as your development environment.

If you like to refer back to how to set up your Firebase project, please refer to the [Firebase Setup](/docs/category/setup-firebase) section.

```yaml
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_RESUME_UPLOAD_PASSWORD=
NEXT_PUBLIC_RESUME_UPLOAD_SERVICE_ACCOUNT=
NEXT_PUBLIC_VAPID_KEY=
NEXT_PUBLIC_MEASUREMENT_ID=
SERVICE_ACCOUNT_CLIENT_EMAIL=
SERVICE_ACCOUNT_PRIVATE_KEY=
SERVICE_ACCOUNT_PROJECT_ID=
```

4. Click on the "Deploy" button.

5. Once the deployment is complete, click on the "Visit" button to view your project.

Congratulations! You have successfully deployed your project to Vercel.
