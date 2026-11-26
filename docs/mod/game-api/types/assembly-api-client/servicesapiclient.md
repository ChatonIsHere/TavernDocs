---
title: "ServicesApiClient"
description: "Online client for general services: public IP lookup, password resets, sign-up codes, verification and identity tokens."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServicesApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for general services: public IP lookup, password resets, sign-up codes, verification and identity tokens. Reached as `ApiAccess.ApiClient.ServicesClient`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IServicesApiClient`](/mod/game-api/types/assembly-api-client/iservicesapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ServicesApiClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `ServicesApiClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateidentitytokenasync" /><code>{"async Task<JwtSecurityToken> GenerateIdentityTokenAsync(object userData)"}</code> | <span className="api-desc">Asks the API for an identity token carrying the given user data.</span> |
| <Link id="m-getpublicipaddressasync" /><code>{"async Task<IPAddress> GetPublicIpAddressAsync()"}</code> | <span className="api-desc">Asks the API for this machine's public IP. Awaited while a local server starts, so a dead API delays startup.</span> |
| <Link id="m-isvalidshortlivedidentitytokenasync" /><code>{"async Task<bool> IsValidShortLivedIdentityTokenAsync(JwtSecurityToken token)"}</code> | <span className="api-desc">Asks the API whether a short-lived identity token is valid. Used by the server's join check.</span> |
| <Link id="m-requestpasswordresetasync" /><code>{"async Task RequestPasswordResetAsync(string email)"}</code> | <span className="api-desc">Requests a password reset email.</span> |
| <Link id="m-requestsignupcodeasync" /><code>{"async Task RequestSignUpCodeAsync(string firstName, string lastName, string email, string referral, string campaign)"}</code> | <span className="api-desc">Requests a sign-up code for the given name and email.</span> |
| <Link id="m-resetpasswordasync" /><code>{"async Task ResetPasswordAsync(int userId, string newPasswordHash, string resetToken)"}</code> | <span className="api-desc">Sets a new password using a reset token.</span> |
| <Link id="m-verifyuserasync" /><code>{"async Task VerifyUserAsync(int userIdentifier, string verificationToken)"}</code> | <span className="api-desc">Verifies a user with a verification token.</span> |
