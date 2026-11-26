---
title: "PicoLoginController"
description: "Client menu panel for signing in with a Pico account."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PicoLoginController

A **class** in `Root.Township`, `Features.Core.Device.Pico`.

Client menu panel for signing in with a Pico account. Gets a Pico token, then logs in to the game account with platform credentials, or moves on to account registration if none exists.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PicoLoginController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accountrequiredanimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" accountRequiredAnimator"}</code> | Panel shown when an account must be registered or linked. |
| <Link id="m-externalloginrequiredtext" /><code>{"private const string ExternalLoginRequiredText"}</code> | Instruction text shown on the panel before the player presses login. |
| <Link id="m-isloggingin" /><code>{"private bool isLoggingIn"}</code> | Stops a second press while a login is in progress. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-loginbutton" /><code>{"private "}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" loginButton"}</code> | The button that starts the Pico login. |
| <Link id="m-logininstructiontext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" loginInstructionText"}</code> | Text showing instructions or the last error. |
| <Link id="m-picologinpromptanimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" picoLoginPromptAnimator"}</code> | Panel holding the Pico login prompt. |
| <Link id="m-seatedstandinganimator" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" seatedStandingAnimator"}</code> | Panel for the seated or standing choice that this flow starts from. |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | Injected user service used for tokens and login. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backtositstand" /><code>{"void BackToSitStand()"}</code> | Fades from the account-required panel back to the seated or standing choice. |
| <Link id="m-initpicoaccountflow" /><code>{"void InitPicoAccountFlow()"}</code> | Moves from the seated or standing panel to the Pico login prompt, or to the account-required panel if a user is already logged in. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService)"}</code> | Receives the user service from VContainer. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the login button. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the login button and resets its text and enabled state. |
| <Link id="m-onloginbuttonpressed" /><code>{"private async void OnLoginButtonPressed()"}</code> | Checks the platform is Pico, refreshes the token and user, then tries a platform login, loading the main menu on success. |
| <Link id="m-onloginfailed" /><code>{"private void OnLoginFailed(string reason)"}</code> | Shows the failure reason and re-enables the login button. |
| <Link id="m-onloginsuccess" /><code>{"private void OnLoginSuccess()"}</code> | Pico login worked but no game account was found: fades to the account-required panel. |
| <Link id="m-tryupdateloggedinuser" /><code>{"private async Task<bool> TryUpdateLoggedInUser()"}</code> | Refreshes the logged-in user unless one is already logged in; returns whether that worked. |
| <Link id="m-tryupdateuseraccesstoken" /><code>{"private async Task<bool> TryUpdateUserAccessToken()"}</code> | Force-refreshes the access token when external platform sign-in is required; returns false on error or an empty token. |

</details>
