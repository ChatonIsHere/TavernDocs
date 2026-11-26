---
title: "LoginScreen"
description: "Client desktop login screen: username and password fields, remember me toggle and error text, shown when the app starts without a login."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginScreen

A **class** in `Root.Township`, the global namespace.

Client desktop login screen: username and password fields, remember me toggle and error text, shown when the app starts without a login.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginScreen()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allloginui" /><code>{"private GameObject allLoginUI"}</code> | <span className="api-desc">Parent of the login fields, hidden while logging in.</span> |
| <Link id="m-attemptlogintext" /><code>{"private GameObject attemptLoginText"}</code> | <span className="api-desc">Object shown while a login is in progress.</span> |
| <Link id="m-errortext" /><code>{"private Text errorText"}</code> | <span className="api-desc">Text showing the last login error.</span> |
| <Link id="m-loadinggametext" /><code>{"private Text loadingGameText"}</code> | <span className="api-desc">Text shown until the app has started.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-logincanvas" /><code>{"private GameObject loginCanvas"}</code> | <span className="api-desc">The whole login canvas.</span> |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | <span className="api-desc">Injected login settings.</span> |
| <Link id="m-passwordinput" /><code>{"private InputField passwordInput"}</code> | <span className="api-desc">Password field.</span> |
| <Link id="m-remembermetoggle" /><code>{"private Toggle rememberMeToggle"}</code> | <span className="api-desc">Remember me toggle.</span> |
| <Link id="m-usernameinput" /><code>{"private InputField usernameInput"}</code> | <span className="api-desc">Username or email field.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"async void LoginAsync()"}</code> | <span className="api-desc">Logs in with the entered name or email and hashed password, shows API errors, then passes success to `LoginManager`.</span> |
| <Link id="m-openforgotpasswordlink" /><code>{"void OpenForgotPasswordLink()"}</code> | <span className="api-desc">Opens the Township Tale reset password page.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences)"}</code> | <span className="api-desc">Receives the login preferences.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applicationstarted" /><code>{"private void ApplicationStarted()"}</code> | <span className="api-desc">Hides the loading text and shows the login canvas if not logged in.</span> |
| <Link id="m-disablecanvas" /><code>{"private void DisableCanvas()"}</code> | <span className="api-desc">Hides the login canvas.</span> |
| <Link id="m-enablecanvas" /><code>{"private void EnableCanvas()"}</code> | <span className="api-desc">Shows the login canvas.</span> |
| <Link id="m-loggedin" /><code>{"private void LoggedIn()"}</code> | <span className="api-desc">Hides the canvas and clears the error text.</span> |
| <Link id="m-loggedout" /><code>{"private void LoggedOut()"}</code> | <span className="api-desc">Shows the login canvas again.</span> |
| <Link id="m-showattemptinglogintext" /><code>{"private void ShowAttemptingLoginText(bool isShowing)"}</code> | <span className="api-desc">Swaps the login fields for the attempting login text, or back.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hides the canvas and hooks the toggle and `LoginManager` events.</span> |
| <Link id="m-updaterememberme" /><code>{"private void UpdateRememberMe(bool value)"}</code> | <span className="api-desc">Saves the remember me choice.</span> |

</details>
