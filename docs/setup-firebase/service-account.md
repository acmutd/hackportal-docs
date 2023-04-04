---
sidebar_position: 6
---

# Service Account Keys

1. Scroll back up to the top of the page.
2. Click **Service accounts**.
3. Scroll down to **Firebase Admin SDK**.
4. Under the **Firebase Admin SDK** section, click **Generate new private key**.
5. Click **Generate key**.
6. Once the JSON is downloaded, open it.

It should look like this: 

```json
{
  "type": "service_account",
  "project_id": "the-project-id",
  "private_key_id": "the-private-key-id",
  "private_key": "the-private-key",
  "client_email": "the-client-email",
  "client_id": "the-client-id",
  "auth_uri": "the-auth-uri",
  "token_uri": "the-token-uri",
  "auth_provider_x509_cert_url": "the-auth-provider-x509-cert-url",
  "client_x509_cert_url": "the-client-x509-cert-url"
}
```

Copy the **private_key** and paste it into the `.env.local` project files.

The file should look like this:

```YAML
SERVICE_ACCOUNT_PRIVATE_KEY=the-private-key
```

Copy the **client_email** and paste it into the `.env.local` project files.

The file should look like this:

```YAML
SERVICE_ACCOUNT_CLIENT_EMAIL=the-client-email
```

Copy the **project_id** and paste it into the `.env.local` project files.

The file should look like this:

```YAML
SERVICE_ACCOUNT_PROJECT_ID=the-project-id
```




