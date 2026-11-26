---
title: "AuthenticationService"
description: "class AuthenticationService in Alta.Platform.Generic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthenticationService

A **class** in `Alta.Platform.Generic`, `Alta.Platform.Generic`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationService`](/game-api/types/assembly-other/iauthenticationservice)
- **Attributes** `UsedImplicitly`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AuthenticationService("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient, "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> |
| <Link id="m-authenticationutility" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-externalplatformsigninrequired" /><code>{"bool ExternalPlatformSigninRequired { get; }"}</code> |
| <Link id="m-features" /><code><Link to="/game-api/types/assembly-other/iauthenticationfeatures">{"IAuthenticationFeatures"}</Link>{" Features { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-isloggedin" /><code>{"private bool IsLoggedIn { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-autologinasync" /><code>{"async Task<IResult> AutoLoginAsync()"}</code> |
| <Link id="m-getaccesstoken" /><code>{"Task<IResult<string>> GetAccessToken()"}</code> |
| <Link id="m-getaccesstoken-2" /><code>{"async Task<IResult<string>> GetAccessToken(bool forceRefresh)"}</code> |
| <Link id="m-linkplatformaccount" /><code>{"Task<IResult> LinkPlatformAccount()"}</code> |
| <Link id="m-loginwithplatformcredentials" /><code>{"Task<IResult> LoginWithPlatformCredentials()"}</code> |
| <Link id="m-registeraccount" /><code>{"async Task<IResult<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{">> RegisterAccount(string username, string password, string email, string referral)"}</code> |
| <Link id="m-unlinkplatformaccount" /><code>{"Task<IResult> UnlinkPlatformAccount()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-loginusingeditoroverridecredentials" /><code>{"private async Task<IResult> LoginUsingEditorOverrideCredentials()"}</code> |

</details>
