---
title: "OfflineServicesApiClient"
description: "Offline stand-in for the services client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineServicesApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the services client. Only the public IP lookup answers; the rest throw `OfflineException`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServicesApiClient`](/mod/game-api/types/assembly-api-client/iservicesapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineServicesApiClient()"}</code> | Creates an `OfflineServicesApiClient` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateidentitytokenasync" /><code>{"Task<JwtSecurityToken> GenerateIdentityTokenAsync(object userData)"}</code> | Throws `OfflineException`. |
| <Link id="m-getpublicipaddressasync" /><code>{"Task<IPAddress> GetPublicIpAddressAsync()"}</code> | Returns the loopback address straight away. |
| <Link id="m-isvalidshortlivedidentitytokenasync" /><code>{"Task<bool> IsValidShortLivedIdentityTokenAsync(JwtSecurityToken token)"}</code> | Throws `OfflineException`. |
| <Link id="m-requestpasswordresetasync" /><code>{"Task RequestPasswordResetAsync(string email)"}</code> | Throws `OfflineException`. |
| <Link id="m-requestsignupcodeasync" /><code>{"Task RequestSignUpCodeAsync(string firstName, string lastName, string email, string referral, string campaign)"}</code> | Throws `OfflineException`. |
| <Link id="m-resetpasswordasync" /><code>{"Task ResetPasswordAsync(int userId, string newPasswordHash, string resetToken)"}</code> | Throws `OfflineException`. |
| <Link id="m-uploadfile" /><code>{"Task UploadFile(FileStream file, string fileName)"}</code> | Throws `OfflineException`. |
| <Link id="m-verifyuserasync" /><code>{"Task VerifyUserAsync(int userIdentifier, string verificationToken)"}</code> | Throws `OfflineException`. |
