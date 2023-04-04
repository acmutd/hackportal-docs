---
sidebar_position: 7
---

# Resume Upload Account 

1. Click **Build**.
2. Click **Authentication**.
3. Click **Get started**.
4. Click **Set up sign-in method**.
5. Click **Email/Password**.
6. Click **Enable**.
7. Click **Save**.
8. Click **Users**.
9. Click **Add User**.
10. Enter an **Email** you want to use for the resume upload.
11. Enter a **Password** you want to use for the resume upload.
12. Click **Add User**.

Copy the **Email** and **Password** and paste it into the `.env.local` project files.

The file should look like this:

```YAML
NEXT_PUBLIC_RESUME_UPLOAD_SERVICE_ACCOUNT=the-email
NEXT_PUBLIC_RESUME_UPLOAD_PASSWORD=the-password
```
