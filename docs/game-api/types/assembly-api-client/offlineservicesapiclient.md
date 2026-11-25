---
title: "OfflineServicesApiClient"
description: "class OfflineServicesApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineServicesApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServicesApiClient`](/game-api/types/assembly-api-client/iservicesapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineServicesApiClient()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateidentitytokenasync" /><code>{"Task<JwtSecurityToken> GenerateIdentityTokenAsync(object userData)"}</code> |  |
| <Link id="m-getpublicipaddressasync" /><code>{"Task<IPAddress> GetPublicIpAddressAsync()"}</code> |  |
| <Link id="m-isvalidshortlivedidentitytokenasync" /><code>{"Task<bool> IsValidShortLivedIdentityTokenAsync(JwtSecurityToken token)"}</code> |  |
| <Link id="m-requestpasswordresetasync" /><code>{"Task RequestPasswordResetAsync(string email)"}</code> |  |
| <Link id="m-requestsignupcodeasync" /><code>{"Task RequestSignUpCodeAsync(string firstName, string lastName, string email, string referral, string campaign)"}</code> |  |
| <Link id="m-resetpasswordasync" /><code>{"Task ResetPasswordAsync(int userId, string newPasswordHash, string resetToken)"}</code> |  |
| <Link id="m-uploadfile" /><code>{"Task UploadFile(FileStream file, string fileName)"}</code> |  |
| <Link id="m-verifyuserasync" /><code>{"Task VerifyUserAsync(int userIdentifier, string verificationToken)"}</code> |  |
