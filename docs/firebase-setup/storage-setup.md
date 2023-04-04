---
sidebar_position: 4
---

# Storage Setup

1. Click **Build**.
2. Click **Storage**.
3. Click **Get Started**.
4. Select **Start in production mode**
5. Click **Next**.
6. Select your **Cloud Storage location**, remember you **can't** change this later.
7. Click **Done**.

## Rules

1. Click **Rules**.
2. Replace the rules with the following if you want to allow everyone to read and can only write if they are authenticated:

```CEL
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      // Allow access by all users
      allow read;
      allow write : if request.auth != null;
    }
  }
}
```

3. Click **Publish**.

## Create folders for images

1. Click **Files**.
2. Click the icon next to **Upload files**, to **Create a folder**.
3. Create folders for :

`member_images/`

`speaker_images/`

`sponsor_images/`

These folders will contain images of the team members, the keynote speakers, and the sponsor logos respectively. Upload the images to the folders and reference them in the database.

For example, if there was a "default.png" in the speaker_images/ folder, then the "fileName" field of the "members" collection needs to contain the string "default.png".







