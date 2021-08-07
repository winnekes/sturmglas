import { handleAuth } from "@auth0/nextjs-auth0";

// Here magic happens through Auth0
// This exposes the following api paths:
//  - /api/auth/login
//  - /api/auth/logout
//  - /api/auth/callback
//  - /api/auth/me
export default handleAuth();
