---
title: "IServicesApiClient"
description: "interface IServicesApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServicesApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineServicesApiClient`](/game-api/types/assembly-api-client/offlineservicesapiclient), [`ServicesApiClient`](/game-api/types/assembly-api-client/servicesapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateidentitytokenasync" /><code>{"Task<JwtSecurityToken> GenerateIdentityTokenAsync(object userData)"}</code> |  |
| <Link id="m-getpublicipaddressasync" /><code>{"Task<IPAddress> GetPublicIpAddressAsync()"}</code> |  |
| <Link id="m-isvalidshortlivedidentitytokenasync" /><code>{"Task<bool> IsValidShortLivedIdentityTokenAsync(JwtSecurityToken token)"}</code> |  |
| <Link id="m-requestpasswordresetasync" /><code>{"Task RequestPasswordResetAsync(string email)"}</code> |  |
| <Link id="m-requestsignupcodeasync" /><code>{"Task RequestSignUpCodeAsync(string firstName, string lastName, string email, string referral, string campaign)"}</code> |  |
| <Link id="m-resetpasswordasync" /><code>{"Task ResetPasswordAsync(int userId, string newPasswordHash, string resetToken)"}</code> |  |
| <Link id="m-verifyuserasync" /><code>{"Task VerifyUserAsync(int userIdentifier, string verificationToken)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IServicesApiClient`:

[`HighLevelApiClient.ServicesClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-servicesclient), [`IHighLevelApiClient.ServicesClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-servicesclient), [`OfflineHighLevelApiClient.ServicesClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-servicesclient).
