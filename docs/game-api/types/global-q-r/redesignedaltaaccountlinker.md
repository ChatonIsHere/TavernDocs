---
title: "RedesignedAltaAccountLinker"
description: "class RedesignedAltaAccountLinker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RedesignedAltaAccountLinker

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`LoginAndRegisterHelper`](/game-api/types/global-i-l/loginandregisterhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RedesignedAltaAccountLinker()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" apiClient"}</code> |  |
| <Link id="m-errortext" /><code>{"private GameObject errorText"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> |  |
| <Link id="m-onfailedtolink" /><code>{"private UnityEvent onFailedToLink"}</code> |  |
| <Link id="m-onvalidlink" /><code>{"private UnityEvent onValidLink"}</code> |  |
| <Link id="m-onvalidlogin" /><code>{"private UnityEvent onValidLogin"}</code> |  |
| <Link id="m-scalingfadeanimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" scalingFadeAnimator"}</code> |  |
| <Link id="m-screenname" /><code>{"private const string ScreenName"}</code> |  |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptlogin" /><code>{"async void AttemptLogin()"}</code> |  |
| <Link id="m-logout" /><code>{"void Logout()"}</code> |  |
| <Link id="m-logoutandfade" /><code>{"void LogoutAndFade(GameObject fadeToOnLogout)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclient">{"IHighLevelApiClient"}</Link>{" api, "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPrefs)"}</code> |  |
| <Link id="m-internalsubmit" /><code>{"protected override async Task InternalSubmit()"}</code> |  |
| <Link id="m-linkplatformaccountasync" /><code>{"private async Task LinkPlatformAccountAsync()"}</code> |  |
| <Link id="m-loginwithusernameandpassword" /><code>{"private async Task<bool> LoginWithUsernameAndPassword(string username, string password)"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-processaccountlinkingnotsupported" /><code>{"private void ProcessAccountLinkingNotSupported()"}</code> |  |
| <Link id="m-saveusername" /><code>{"private void SaveUsername()"}</code> |  |
