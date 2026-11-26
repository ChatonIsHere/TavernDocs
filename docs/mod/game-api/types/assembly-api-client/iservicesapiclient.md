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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineServicesApiClient`](/mod/game-api/types/assembly-api-client/offlineservicesapiclient), [`ServicesApiClient`](/mod/game-api/types/assembly-api-client/servicesapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateidentitytokenasync" /><code>{"Task<JwtSecurityToken> GenerateIdentityTokenAsync(object userData)"}</code> | <span className="api-desc">Asks the API to sign an identity token holding the given user data.</span> |
| <Link id="m-getpublicipaddressasync" /><code>{"Task<IPAddress> GetPublicIpAddressAsync()"}</code> | <span className="api-desc">Asks the API for this machine's public IP. Awaited while a local server starts, so a dead API delays startup.</span> |
| <Link id="m-isvalidshortlivedidentitytokenasync" /><code>{"Task<bool> IsValidShortLivedIdentityTokenAsync(JwtSecurityToken token)"}</code> | <span className="api-desc">Asks the API whether a short-lived identity token is valid. The server's join check uses it.</span> |
| <Link id="m-requestpasswordresetasync" /><code>{"Task RequestPasswordResetAsync(string email)"}</code> | <span className="api-desc">Sends a password reset email.</span> |
| <Link id="m-requestsignupcodeasync" /><code>{"Task RequestSignUpCodeAsync(string firstName, string lastName, string email, string referral, string campaign)"}</code> | <span className="api-desc">Obsolete: asks for a sign-up code for a name and email.</span> |
| <Link id="m-resetpasswordasync" /><code>{"Task ResetPasswordAsync(int userId, string newPasswordHash, string resetToken)"}</code> | <span className="api-desc">Sets a new password hash using a reset token.</span> |
| <Link id="m-verifyuserasync" /><code>{"Task VerifyUserAsync(int userIdentifier, string verificationToken)"}</code> | <span className="api-desc">Verifies a user's email with a verification token.</span> |

## Used in

Members of other types that take, return or hold a `IServicesApiClient`:

<div className="api-used-in">

[`HighLevelApiClient.ServicesClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-servicesclient), [`IHighLevelApiClient.ServicesClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-servicesclient), [`OfflineHighLevelApiClient.ServicesClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-servicesclient).

</div>
