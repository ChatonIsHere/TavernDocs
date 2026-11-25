---
title: "ServicesApiClient"
description: "class ServicesApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServicesApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IServicesApiClient`](/game-api/types/assembly-api-client/iservicesapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ServicesApiClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateidentitytokenasync" /><code>{"async Task<JwtSecurityToken> GenerateIdentityTokenAsync(object userData)"}</code> |  |
| <Link id="m-getpublicipaddressasync" /><code>{"async Task<IPAddress> GetPublicIpAddressAsync()"}</code> |  |
| <Link id="m-isvalidshortlivedidentitytokenasync" /><code>{"async Task<bool> IsValidShortLivedIdentityTokenAsync(JwtSecurityToken token)"}</code> |  |
| <Link id="m-requestpasswordresetasync" /><code>{"async Task RequestPasswordResetAsync(string email)"}</code> |  |
| <Link id="m-requestsignupcodeasync" /><code>{"async Task RequestSignUpCodeAsync(string firstName, string lastName, string email, string referral, string campaign)"}</code> |  |
| <Link id="m-resetpasswordasync" /><code>{"async Task ResetPasswordAsync(int userId, string newPasswordHash, string resetToken)"}</code> |  |
| <Link id="m-verifyuserasync" /><code>{"async Task VerifyUserAsync(int userIdentifier, string verificationToken)"}</code> |  |
