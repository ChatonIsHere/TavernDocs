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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PicoLoginController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accountrequiredanimator" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" accountRequiredAnimator"}</code> | <span className="api-desc">Panel shown when an account must be registered or linked.</span> |
| <Link id="m-externalloginrequiredtext" /><code>{"private const string ExternalLoginRequiredText"}</code> | <span className="api-desc">Instruction text shown on the panel before the player presses login.</span> |
| <Link id="m-isloggingin" /><code>{"private bool isLoggingIn"}</code> | <span className="api-desc">Stops a second press while a login is in progress.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-loginbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{" loginButton"}</code> | <span className="api-desc">The button that starts the Pico login.</span> |
| <Link id="m-logininstructiontext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" loginInstructionText"}</code> | <span className="api-desc">Text showing instructions or the last error.</span> |
| <Link id="m-picologinpromptanimator" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" picoLoginPromptAnimator"}</code> | <span className="api-desc">Panel holding the Pico login prompt.</span> |
| <Link id="m-seatedstandinganimator" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" seatedStandingAnimator"}</code> | <span className="api-desc">Panel for the seated or standing choice that this flow starts from.</span> |
| <Link id="m-userservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | <span className="api-desc">Injected user service used for tokens and login.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-backtositstand" /><code>{"void BackToSitStand()"}</code> | <span className="api-desc">Fades from the account-required panel back to the seated or standing choice.</span> |
| <Link id="m-initpicoaccountflow" /><code>{"void InitPicoAccountFlow()"}</code> | <span className="api-desc">Moves from the seated or standing panel to the Pico login prompt, or to the account-required panel if a user is already logged in.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService)"}</code> | <span className="api-desc">Receives the user service from VContainer.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the login button.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the login button and resets its text and enabled state.</span> |
| <Link id="m-onloginbuttonpressed" /><code>{"private async void OnLoginButtonPressed()"}</code> | <span className="api-desc">Checks the platform is Pico, refreshes the token and user, then tries a platform login, loading the main menu on success.</span> |
| <Link id="m-onloginfailed" /><code>{"private void OnLoginFailed(string reason)"}</code> | <span className="api-desc">Shows the failure reason and re-enables the login button.</span> |
| <Link id="m-onloginsuccess" /><code>{"private void OnLoginSuccess()"}</code> | <span className="api-desc">Pico login worked but no game account was found: fades to the account-required panel.</span> |
| <Link id="m-tryupdateloggedinuser" /><code>{"private async Task<bool> TryUpdateLoggedInUser()"}</code> | <span className="api-desc">Refreshes the logged-in user unless one is already logged in; returns whether that worked.</span> |
| <Link id="m-tryupdateuseraccesstoken" /><code>{"private async Task<bool> TryUpdateUserAccessToken()"}</code> | <span className="api-desc">Force-refreshes the access token when external platform sign-in is required; returns false on error or an empty token.</span> |

</details>
