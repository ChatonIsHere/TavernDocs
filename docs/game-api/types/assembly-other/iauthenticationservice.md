---
title: "IAuthenticationService"
description: "interface IAuthenticationService in Alta.Platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAuthenticationService

An **interface** in `Alta.Platform`, `Alta.Platform`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AuthenticationService`](/game-api/types/assembly-other/authenticationservice), [`UserService`](/game-api/types/assembly-other/userservice), [`IUserService`](/game-api/types/assembly-other/iuserservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-externalplatformsigninrequired" /><code>{"bool ExternalPlatformSigninRequired { get; }"}</code> |  |
| <Link id="m-features" /><code><Link to="/game-api/types/assembly-other/iauthenticationfeatures">{"IAuthenticationFeatures"}</Link>{" Features { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autologinasync" /><code>{"Task<IResult> AutoLoginAsync()"}</code> |  |
| <Link id="m-getaccesstoken" /><code>{"Task<IResult<string>> GetAccessToken()"}</code> |  |
| <Link id="m-getaccesstoken-2" /><code>{"Task<IResult<string>> GetAccessToken(bool forceRefresh)"}</code> |  |
| <Link id="m-linkplatformaccount" /><code>{"Task<IResult> LinkPlatformAccount()"}</code> |  |
| <Link id="m-loginwithplatformcredentials" /><code>{"Task<IResult> LoginWithPlatformCredentials()"}</code> |  |
| <Link id="m-registeraccount" /><code>{"Task<IResult<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{">> RegisterAccount(string username, string password, string email, string referral)"}</code> |  |
| <Link id="m-unlinkplatformaccount" /><code>{"Task<IResult> UnlinkPlatformAccount()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAuthenticationService`:

[`UserService.authService`](/game-api/types/assembly-other/userservice#m-authservice).
