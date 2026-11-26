---
title: "UserService"
description: "IUserService for the generic platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserService

A **class** in `Alta.Platform.Generic`, `Alta.Platform.Generic`.

`IUserService` for the generic platform. There is no platform user, so the user parts are empty or throw; authentication calls go to an inner `AuthenticationService`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IUserService`](/mod/game-api/types/assembly-other/iuserservice), [`IAuthenticationService`](/mod/game-api/types/assembly-other/iauthenticationservice)
- **Attributes** `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserService("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient, "}<Link to="/mod/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authUtility)"}</code> | <span className="api-desc">Creates an `UserService` from `apiClient` and `authUtility`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-authservice" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/iauthenticationservice">{"IAuthenticationService"}</Link>{" authService"}</code> | <span className="api-desc">The inner `AuthenticationService` that does the work.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-externalplatformsigninrequired" /><code>{"bool ExternalPlatformSigninRequired { get; }"}</code> | <span className="api-desc">From the inner service; always false.</span> |
| <Link id="m-features" /><code><Link to="/mod/game-api/types/assembly-other/iauthenticationfeatures">{"IAuthenticationFeatures"}</Link>{" Features { get; }"}</code> | <span className="api-desc">From the inner service; everything off.</span> |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | <span className="api-desc">Always false: there is no platform user. This is not the Alta API login.</span> |
| <Link id="m-loggedinuser" /><code><Link to="/mod/game-api/types/assembly-other/iuser">{"IUser"}</Link>{" LoggedInUser { get; }"}</code> | <span className="api-desc">Always null.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-noservicesmessage" /><code>{"private static string NoServicesMessage { get; }"}</code> | <span className="api-desc">Error text saying this platform has no user services.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autologinasync" /><code>{"Task<IResult> AutoLoginAsync()"}</code> | <span className="api-desc">Passes through to the inner `AuthenticationService`.</span> |
| <Link id="m-getaccesstoken" /><code>{"Task<IResult<string>> GetAccessToken()"}</code> | <span className="api-desc">Passes through; always an error here.</span> |
| <Link id="m-getaccesstoken-2" /><code>{"Task<IResult<string>> GetAccessToken(bool forceRefresh)"}</code> | <span className="api-desc">Passes through; always an error here.</span> |
| <Link id="m-getusername" /><code>{"string GetUsername()"}</code> | <span className="api-desc">Throws `NotImplementedException`.</span> |
| <Link id="m-getuserwithid" /><code>{"Task<IResult<"}<Link to="/mod/game-api/types/assembly-other/iuser">{"IUser"}</Link>{">> GetUserWithId(string userId)"}</code> | <span className="api-desc">Throws `NotImplementedException`.</span> |
| <Link id="m-linkplatformaccount" /><code>{"Task<IResult> LinkPlatformAccount()"}</code> | <span className="api-desc">Passes through; throws.</span> |
| <Link id="m-loginwithplatformcredentials" /><code>{"Task<IResult> LoginWithPlatformCredentials()"}</code> | <span className="api-desc">Passes through; throws.</span> |
| <Link id="m-refreshloggedinuser" /><code>{"Task<IResult> RefreshLoggedInUser()"}</code> | <span className="api-desc">Succeeds in the editor; throws `NotImplementedException` in builds.</span> |
| <Link id="m-registeraccount" /><code>{"Task<IResult<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{">> RegisterAccount(string username, string password, string email, string referral)"}</code> | <span className="api-desc">Passes through to register an Alta account.</span> |
| <Link id="m-unlinkplatformaccount" /><code>{"Task<IResult> UnlinkPlatformAccount()"}</code> | <span className="api-desc">Passes through; throws.</span> |
