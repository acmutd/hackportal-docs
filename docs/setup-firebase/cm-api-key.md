---
sidebar_position: 5
---

# Cloud Messaging API Key

1. Click on the gear icon next to **Project Overview**.
2. Click **Project settings**.
3. Click **Cloud Messaging**.
4. Scroll down to **Web Push certificates**.
5. Click **Generate Key Pair**.

Copy the **VAPID** and paste it into the `.env.local` project files.

The file should look like this:

```YAML
NEXT_PUBLIC_VAPID_KEY=the-server-key
```

