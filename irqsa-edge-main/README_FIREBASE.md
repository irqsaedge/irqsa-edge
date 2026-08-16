# Irqsa Edge Firebase setup

This project is wired to Firebase project `irqsaedge-911e1` and can use the values in `src/lib/firebase.ts` by default. Vite environment variables can override them.

## Firebase services

Enable these providers/services in Firebase Console:

- Authentication: Google, Email/Password (Phone is optional)
- Firestore Database
- Realtime Database

Realtime Database URL:
`https://irqsaedge-911e1-default-rtdb.firebaseio.com/`

## Auth flow

Visitors can browse without signing in. Authentication is requested when they submit the Contact / Start Project form, open the client support chat, or open the client dashboard.

Supported methods: Continue with Google, email/password signup/login, and password reset.

## Vercel / Firebase authorized domains

In Firebase Console → Authentication → Settings → Authorized domains, add:

- `irqsaedge.pro`
- `www.irqsaedge.pro`
- the exact Vercel deployment hostname (for example `irqsa-edge-xxxx.vercel.app`)

Do not add `https://`; add the hostname only.

## Admin inbox

1. Sign in to the website once with the account that should be the Irqsa Edge admin.
2. Firebase Console → Authentication → Users → copy that user's UID.
3. In Realtime Database create `admins/YOUR_UID` with boolean value `true`.
4. In Firestore create document `admins/YOUR_UID` with `active: true`.
5. Visit `/admin/inbox`.

## Deploy rules

The repository includes `firestore.rules`, `database.rules.json`, and `firebase.json`.

```bash
firebase login
firebase use irqsaedge-911e1
firebase deploy --only firestore:rules,database
```

Do not commit a Firebase service-account private key. The Firebase web config is intended for client-side use.

## WhatsApp

The floating WhatsApp button is configured for `03396450615` using the international number `923396450615`.
