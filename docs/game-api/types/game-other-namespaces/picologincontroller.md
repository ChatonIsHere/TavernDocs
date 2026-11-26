---
title: "PicoLoginController"
description: "class PicoLoginController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PicoLoginController

A **class** in `Root.Township`, `Features.Core.Device.Pico`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PicoLoginController()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-accountrequiredanimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" accountRequiredAnimator"}</code> |
| <Link id="m-externalloginrequiredtext" /><code>{"private const string ExternalLoginRequiredText"}</code> |
| <Link id="m-isloggingin" /><code>{"private bool isLoggingIn"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-loginbutton" /><code>{"private "}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" loginButton"}</code> |
| <Link id="m-logininstructiontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" loginInstructionText"}</code> |
| <Link id="m-picologinpromptanimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" picoLoginPromptAnimator"}</code> |
| <Link id="m-seatedstandinganimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" seatedStandingAnimator"}</code> |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-backtositstand" /><code>{"void BackToSitStand()"}</code> |
| <Link id="m-initpicoaccountflow" /><code>{"void InitPicoAccountFlow()"}</code> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService)"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-onloginbuttonpressed" /><code>{"private async void OnLoginButtonPressed()"}</code> |
| <Link id="m-onloginfailed" /><code>{"private void OnLoginFailed(string reason)"}</code> |
| <Link id="m-onloginsuccess" /><code>{"private void OnLoginSuccess()"}</code> |
| <Link id="m-tryupdateloggedinuser" /><code>{"private async Task<bool> TryUpdateLoggedInUser()"}</code> |
| <Link id="m-tryupdateuseraccesstoken" /><code>{"private async Task<bool> TryUpdateUserAccessToken()"}</code> |

</details>
