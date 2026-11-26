---
title: "AuthenticationService"
description: "Authentication for the generic platform (Windows and the server build): logs in to the Alta API with command line arguments, a refresh token or editor..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AuthenticationService

A **class** in `Alta.Platform.Generic`, `Alta.Platform.Generic`.

Authentication for the generic platform (Windows and the server build): logs in to the Alta API with command line arguments, a refresh token or editor credentials. Platform login and linking aren't supported.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IAuthenticationService`](/game-api/types/assembly-other/iauthenticationservice)
- **Attributes** `UsedImplicitly`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AuthenticationService("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient, "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility)"}</code> | Creates an `AuthenticationService` from `apiClient` and `authenticationUtility`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | The high-level Alta API client. |
| <Link id="m-authenticationutility" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility"}</code> | Helper that does the actual login calls. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-externalplatformsigninrequired" /><code>{"bool ExternalPlatformSigninRequired { get; }"}</code> | Always false. |
| <Link id="m-features" /><code><Link to="/game-api/types/assembly-other/iauthenticationfeatures">{"IAuthenticationFeatures"}</Link>{" Features { get; }"}</code> | An `AuthenticationFeatures` with everything off. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloggedin" /><code>{"private bool IsLoggedIn { get; }"}</code> | True when the API client has a logged-in user. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autologinasync" /><code>{"async Task<IResult> AutoLoginAsync()"}</code> | Does nothing if already logged in; otherwise tries editor override credentials, then command line arguments, then the saved refresh token. |
| <Link id="m-getaccesstoken" /><code>{"Task<IResult<string>> GetAccessToken()"}</code> | Always returns an error; platform access tokens aren't supported here. |
| <Link id="m-getaccesstoken-2" /><code>{"async Task<IResult<string>> GetAccessToken(bool forceRefresh)"}</code> | Always returns an error; platform access tokens aren't supported here. |
| <Link id="m-linkplatformaccount" /><code>{"Task<IResult> LinkPlatformAccount()"}</code> | Throws `NotSupportedException`. |
| <Link id="m-loginwithplatformcredentials" /><code>{"Task<IResult> LoginWithPlatformCredentials()"}</code> | Throws `NotSupportedException`. |
| <Link id="m-registeraccount" /><code>{"async Task<IResult<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{">> RegisterAccount(string username, string password, string email, string referral)"}</code> | Hashes the password and registers a new Alta account through the API, returning the new user's info. |
| <Link id="m-unlinkplatformaccount" /><code>{"Task<IResult> UnlinkPlatformAccount()"}</code> | Throws `NotSupportedException`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loginusingeditoroverridecredentials" /><code>{"private async Task<IResult> LoginUsingEditorOverrideCredentials()"}</code> | Editor only: logs in with the username and password from the editor API settings. Called by `AutoLoginAsync`. |

</details>
