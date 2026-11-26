---
title: "RedesignedAltaAccountLinker"
description: "Client login screen that signs in to an Alta account and links it to the player's platform account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RedesignedAltaAccountLinker

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client login screen that signs in to an Alta account and links it to the player's platform account. Built on `LoginAndRegisterHelper`.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`LoginAndRegisterHelper`](/game-api/types/global-i-l/loginandregisterhelper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RedesignedAltaAccountLinker()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | Injected high-level API client. |
| <Link id="m-errortext" /><code>{"private GameObject errorText"}</code> | Object shown when login fails. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger. |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | Injected login preferences, where the username is saved. |
| <Link id="m-onfailedtolink" /><code>{"private UnityEvent onFailedToLink"}</code> | Event fired when linking fails. |
| <Link id="m-onvalidlink" /><code>{"private UnityEvent onValidLink"}</code> | Event fired when linking succeeds or isn't supported. |
| <Link id="m-onvalidlogin" /><code>{"private UnityEvent onValidLogin"}</code> | Event fired when username and password login succeeds. |
| <Link id="m-scalingfadeanimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" scalingFadeAnimator"}</code> | Animator used by `LogoutAndFade`. |
| <Link id="m-screenname" /><code>{"private const string ScreenName"}</code> | Analytics screen name, `Account Linking`. |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | Injected platform user service that does the linking. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlogin" /><code>{"async void AttemptLogin()"}</code> | Logs in with the username and password fields and fires `onValidLogin` on success. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Logs out of the API unless the UI is locked. |
| <Link id="m-logoutandfade" /><code>{"void LogoutAndFade(GameObject fadeToOnLogout)"}</code> | Logs out and fades to the given screen, unless the UI is locked. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" api, "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPrefs)"}</code> | VContainer injection of the user service, API client and login preferences. |
| <Link id="m-internalsubmit" /><code>{"protected override async Task InternalSubmit()"}</code> | Saves the username, then links the platform account, or skips linking if the platform doesn't support it. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linkplatformaccountasync" /><code>{"private async Task LinkPlatformAccountAsync()"}</code> | Links the platform account. On error shows the message, logs out and fires `onFailedToLink`; on success finishes login and fires `onValidLink`. |
| <Link id="m-loginwithusernameandpassword" /><code>{"private async Task<bool> LoginWithUsernameAndPassword(string username, string password)"}</code> | Hashes the password and logs in by email (if the name has an @) or username. Returns false and shows the error on failure. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Reports the linking screen start to signup analytics. |
| <Link id="m-processaccountlinkingnotsupported" /><code>{"private void ProcessAccountLinkingNotSupported()"}</code> | Warns, finishes login without linking and fires `onValidLink`. |
| <Link id="m-saveusername" /><code>{"private void SaveUsername()"}</code> | Stores the logged-in username in login preferences. |

</details>
