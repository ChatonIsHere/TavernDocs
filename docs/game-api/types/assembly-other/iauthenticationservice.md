---
title: "IAuthenticationService"
description: "Signs the player in to the Alta account service and supplies access tokens."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAuthenticationService

An **interface** in `Alta.Platform`, `Alta.Platform`.

Signs the player in to the Alta account service and supplies access tokens. Client side; `AuthenticationService` in Alta.Platform.Generic implements it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`AuthenticationService`](/game-api/types/assembly-other/authenticationservice), [`UserService`](/game-api/types/assembly-other/userservice), [`IUserService`](/game-api/types/assembly-other/iuserservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-externalplatformsigninrequired" /><code>{"bool ExternalPlatformSigninRequired { get; }"}</code> | Whether the player must sign in through the platform (such as Oculus) first. |
| <Link id="m-features" /><code><Link to="/game-api/types/assembly-other/iauthenticationfeatures">{"IAuthenticationFeatures"}</Link>{" Features { get; }"}</code> | What this service supports. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autologinasync" /><code>{"Task<IResult> AutoLoginAsync()"}</code> | Tries to log in without asking the player. |
| <Link id="m-getaccesstoken" /><code>{"Task<IResult<string>> GetAccessToken()"}</code> | Gets the current access token, optionally forcing a refresh. |
| <Link id="m-getaccesstoken-2" /><code>{"Task<IResult<string>> GetAccessToken(bool forceRefresh)"}</code> | Gets the current access token, optionally forcing a refresh. |
| <Link id="m-linkplatformaccount" /><code>{"Task<IResult> LinkPlatformAccount()"}</code> | Links the platform account to the Alta account. |
| <Link id="m-loginwithplatformcredentials" /><code>{"Task<IResult> LoginWithPlatformCredentials()"}</code> | Logs in with the platform's credentials. |
| <Link id="m-registeraccount" /><code>{"Task<IResult<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{">> RegisterAccount(string username, string password, string email, string referral)"}</code> | Creates a new Alta account with username, password, email and referral. |
| <Link id="m-unlinkplatformaccount" /><code>{"Task<IResult> UnlinkPlatformAccount()"}</code> | Unlinks the platform account. |

## Used in

Members of other types that take, return or hold a `IAuthenticationService`:

[`UserService.authService`](/game-api/types/assembly-other/userservice#m-authservice).
