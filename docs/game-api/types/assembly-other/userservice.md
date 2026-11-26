---
title: "UserService"
description: "class UserService in Alta.Platform.Generic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserService

A **class** in `Alta.Platform.Generic`, `Alta.Platform.Generic`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IUserService`](/game-api/types/assembly-other/iuserservice), [`IAuthenticationService`](/game-api/types/assembly-other/iauthenticationservice)
- **Attributes** `UsedImplicitly`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UserService("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient, "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authUtility)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-authservice" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/iauthenticationservice">{"IAuthenticationService"}</Link>{" authService"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-externalplatformsigninrequired" /><code>{"bool ExternalPlatformSigninRequired { get; }"}</code> |
| <Link id="m-features" /><code><Link to="/game-api/types/assembly-other/iauthenticationfeatures">{"IAuthenticationFeatures"}</Link>{" Features { get; }"}</code> |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> |
| <Link id="m-loggedinuser" /><code><Link to="/game-api/types/assembly-other/iuser">{"IUser"}</Link>{" LoggedInUser { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-noservicesmessage" /><code>{"private static string NoServicesMessage { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-autologinasync" /><code>{"Task<IResult> AutoLoginAsync()"}</code> |
| <Link id="m-getaccesstoken" /><code>{"Task<IResult<string>> GetAccessToken()"}</code> |
| <Link id="m-getaccesstoken-2" /><code>{"Task<IResult<string>> GetAccessToken(bool forceRefresh)"}</code> |
| <Link id="m-getusername" /><code>{"string GetUsername()"}</code> |
| <Link id="m-getuserwithid" /><code>{"Task<IResult<"}<Link to="/game-api/types/assembly-other/iuser">{"IUser"}</Link>{">> GetUserWithId(string userId)"}</code> |
| <Link id="m-linkplatformaccount" /><code>{"Task<IResult> LinkPlatformAccount()"}</code> |
| <Link id="m-loginwithplatformcredentials" /><code>{"Task<IResult> LoginWithPlatformCredentials()"}</code> |
| <Link id="m-refreshloggedinuser" /><code>{"Task<IResult> RefreshLoggedInUser()"}</code> |
| <Link id="m-registeraccount" /><code>{"Task<IResult<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{">> RegisterAccount(string username, string password, string email, string referral)"}</code> |
| <Link id="m-unlinkplatformaccount" /><code>{"Task<IResult> UnlinkPlatformAccount()"}</code> |
