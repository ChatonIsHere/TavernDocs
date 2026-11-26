---
title: "IServicesApiClient"
description: "Alta web API helper calls: public IP lookup, passwords, verification and identity tokens."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServicesApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API helper calls: public IP lookup, passwords, verification and identity tokens. `ApiAccess.ApiClient.ServicesClient`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineServicesApiClient`](/game-api/types/assembly-api-client/offlineservicesapiclient), [`ServicesApiClient`](/game-api/types/assembly-api-client/servicesapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateidentitytokenasync" /><code>{"Task<JwtSecurityToken> GenerateIdentityTokenAsync(object userData)"}</code> | Asks the API to sign an identity token holding the given user data. |
| <Link id="m-getpublicipaddressasync" /><code>{"Task<IPAddress> GetPublicIpAddressAsync()"}</code> | Asks the API for this machine's public IP. Awaited while a local server starts, so a dead API delays startup. |
| <Link id="m-isvalidshortlivedidentitytokenasync" /><code>{"Task<bool> IsValidShortLivedIdentityTokenAsync(JwtSecurityToken token)"}</code> | Asks the API whether a short-lived identity token is valid. The server's join check uses it. |
| <Link id="m-requestpasswordresetasync" /><code>{"Task RequestPasswordResetAsync(string email)"}</code> | Sends a password reset email. |
| <Link id="m-requestsignupcodeasync" /><code>{"Task RequestSignUpCodeAsync(string firstName, string lastName, string email, string referral, string campaign)"}</code> | Obsolete: asks for a sign-up code for a name and email. |
| <Link id="m-resetpasswordasync" /><code>{"Task ResetPasswordAsync(int userId, string newPasswordHash, string resetToken)"}</code> | Sets a new password hash using a reset token. |
| <Link id="m-verifyuserasync" /><code>{"Task VerifyUserAsync(int userIdentifier, string verificationToken)"}</code> | Verifies a user's email with a verification token. |

## Used in

Members of other types that take, return or hold a `IServicesApiClient`:

[`HighLevelApiClient.ServicesClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-servicesclient), [`IHighLevelApiClient.ServicesClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-servicesclient), [`OfflineHighLevelApiClient.ServicesClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-servicesclient).
