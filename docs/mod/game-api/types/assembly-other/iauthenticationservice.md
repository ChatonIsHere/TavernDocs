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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`AuthenticationService`](/mod/game-api/types/assembly-other/authenticationservice), [`UserService`](/mod/game-api/types/assembly-other/userservice), [`IUserService`](/mod/game-api/types/assembly-other/iuserservice)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-externalplatformsigninrequired" /><code>{"bool ExternalPlatformSigninRequired { get; }"}</code> | <span className="api-desc">Whether the player must sign in through the platform (such as Oculus) first.</span> |
| <Link id="m-features" /><code><Link to="/mod/game-api/types/assembly-other/iauthenticationfeatures">{"IAuthenticationFeatures"}</Link>{" Features { get; }"}</code> | <span className="api-desc">What this service supports.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autologinasync" /><code>{"Task<IResult> AutoLoginAsync()"}</code> | <span className="api-desc">Tries to log in without asking the player.</span> |
| <Link id="m-getaccesstoken" /><code>{"Task<IResult<string>> GetAccessToken()"}</code> | <span className="api-desc">Gets the current access token, optionally forcing a refresh.</span> |
| <Link id="m-getaccesstoken-2" /><code>{"Task<IResult<string>> GetAccessToken(bool forceRefresh)"}</code> | <span className="api-desc">Gets the current access token, optionally forcing a refresh.</span> |
| <Link id="m-linkplatformaccount" /><code>{"Task<IResult> LinkPlatformAccount()"}</code> | <span className="api-desc">Links the platform account to the Alta account.</span> |
| <Link id="m-loginwithplatformcredentials" /><code>{"Task<IResult> LoginWithPlatformCredentials()"}</code> | <span className="api-desc">Logs in with the platform's credentials.</span> |
| <Link id="m-registeraccount" /><code>{"Task<IResult<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{">> RegisterAccount(string username, string password, string email, string referral)"}</code> | <span className="api-desc">Creates a new Alta account with username, password, email and referral.</span> |
| <Link id="m-unlinkplatformaccount" /><code>{"Task<IResult> UnlinkPlatformAccount()"}</code> | <span className="api-desc">Unlinks the platform account.</span> |

## Used in

Members of other types that take, return or hold a `IAuthenticationService`:

<div className="api-used-in">

[`UserService.authService`](/mod/game-api/types/assembly-other/userservice#m-authservice).

</div>
