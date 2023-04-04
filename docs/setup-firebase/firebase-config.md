---
sidebar_position: 4
---

# Firebase Config

Your config should look like this:

```js
const firebaseConfig = {
  apiKey: "the-api-key",
  authDomain: "the-auth-domain",
  projectId: "the-project-id",
  storageBucket: "the-storage-bucket",
  messagingSenderId: "the-messaging-sender-id",
  appId: "the-app-id",
  measurementId: "the-measurement-id",
};
```

Copy the config and paste it into the `.env.local` project files. 

The file should look like this:

```YAML
NEXT_PUBLIC_FIREBASE_API_KEY=the-api-key
NEXT_PUBLIC_FIREBASE_APP_ID=the-app-id
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=the-auth-domain
NEXT_PUBLIC_FIREBASE_MESSAGING_SEND_ID=the-messaging-sender-id
NEXT_PUBLIC_FIREBASE_PROJECT_ID=the-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=the-storage-bucket
NEXT_PUBLIC_MEASUREMENT_ID=the-measurement-id
```

The `NEXT_PUBLIC_MEASUREMENT_ID=` an optional variable for Measuring Google Analytics.

Click **Continue to Console**.