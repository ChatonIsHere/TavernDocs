---
title: "RedesignedAltaAccountLinker"
description: "Client login screen that signs in to an Alta account and links it to the player's platform account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RedesignedAltaAccountLinker

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client login screen that signs in to an Alta account and links it to the player's platform account. Built on `LoginAndRegisterHelper`.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`LoginAndRegisterHelper`](/mod/game-api/types/global-i-l/loginandregisterhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RedesignedAltaAccountLinker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> | <span className="api-desc">Injected high-level API client.</span> |
| <Link id="m-errortext" /><code>{"private GameObject errorText"}</code> | <span className="api-desc">Object shown when login fails.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger.</span> |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | <span className="api-desc">Injected login preferences, where the username is saved.</span> |
| <Link id="m-onfailedtolink" /><code>{"private UnityEvent onFailedToLink"}</code> | <span className="api-desc">Event fired when linking fails.</span> |
| <Link id="m-onvalidlink" /><code>{"private UnityEvent onValidLink"}</code> | <span className="api-desc">Event fired when linking succeeds or isn't supported.</span> |
| <Link id="m-onvalidlogin" /><code>{"private UnityEvent onValidLogin"}</code> | <span className="api-desc">Event fired when username and password login succeeds.</span> |
| <Link id="m-scalingfadeanimator" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" scalingFadeAnimator"}</code> | <span className="api-desc">Animator used by `LogoutAndFade`.</span> |
| <Link id="m-screenname" /><code>{"private const string ScreenName"}</code> | <span className="api-desc">Analytics screen name, `Account Linking`.</span> |
| <Link id="m-userservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | <span className="api-desc">Injected platform user service that does the linking.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlogin" /><code>{"async void AttemptLogin()"}</code> | <span className="api-desc">Logs in with the username and password fields and fires `onValidLogin` on success.</span> |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | <span className="api-desc">Logs out of the API unless the UI is locked.</span> |
| <Link id="m-logoutandfade" /><code>{"void LogoutAndFade(GameObject fadeToOnLogout)"}</code> | <span className="api-desc">Logs out and fades to the given screen, unless the UI is locked.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" api, "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPrefs)"}</code> | <span className="api-desc">VContainer injection of the user service, API client and login preferences.</span> |
| <Link id="m-internalsubmit" /><code>{"protected override async Task InternalSubmit()"}</code> | <span className="api-desc">Saves the username, then links the platform account, or skips linking if the platform doesn't support it.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linkplatformaccountasync" /><code>{"private async Task LinkPlatformAccountAsync()"}</code> | <span className="api-desc">Links the platform account. On error shows the message, logs out and fires `onFailedToLink`; on success finishes login and fires `onValidLink`.</span> |
| <Link id="m-loginwithusernameandpassword" /><code>{"private async Task<bool> LoginWithUsernameAndPassword(string username, string password)"}</code> | <span className="api-desc">Hashes the password and logs in by email (if the name has an @) or username. Returns false and shows the error on failure.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Reports the linking screen start to signup analytics.</span> |
| <Link id="m-processaccountlinkingnotsupported" /><code>{"private void ProcessAccountLinkingNotSupported()"}</code> | <span className="api-desc">Warns, finishes login without linking and fires `onValidLink`.</span> |
| <Link id="m-saveusername" /><code>{"private void SaveUsername()"}</code> | <span className="api-desc">Stores the logged-in username in login preferences.</span> |

</details>
