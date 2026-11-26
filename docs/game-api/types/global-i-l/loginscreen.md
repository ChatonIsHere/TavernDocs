---
title: "LoginScreen"
description: "Client desktop login screen: username and password fields, remember me toggle and error text, shown when the app starts without a login."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginScreen

A **class** in `Root.Township`, no namespace.

Client desktop login screen: username and password fields, remember me toggle and error text, shown when the app starts without a login.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LoginScreen()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allloginui" /><code>{"private GameObject allLoginUI"}</code> | Parent of the login fields, hidden while logging in. |
| <Link id="m-attemptlogintext" /><code>{"private GameObject attemptLoginText"}</code> | Object shown while a login is in progress. |
| <Link id="m-errortext" /><code>{"private Text errorText"}</code> | Text showing the last login error. |
| <Link id="m-loadinggametext" /><code>{"private Text loadingGameText"}</code> | Text shown until the app has started. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-logincanvas" /><code>{"private GameObject loginCanvas"}</code> | The whole login canvas. |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | Injected login settings. |
| <Link id="m-passwordinput" /><code>{"private InputField passwordInput"}</code> | Password field. |
| <Link id="m-remembermetoggle" /><code>{"private Toggle rememberMeToggle"}</code> | Remember me toggle. |
| <Link id="m-usernameinput" /><code>{"private InputField usernameInput"}</code> | Username or email field. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"async void LoginAsync()"}</code> | Logs in with the entered name or email and hashed password, shows API errors, then passes success to `LoginManager`. |
| <Link id="m-openforgotpasswordlink" /><code>{"void OpenForgotPasswordLink()"}</code> | Opens the Township Tale reset password page. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences)"}</code> | Receives the login preferences. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applicationstarted" /><code>{"private void ApplicationStarted()"}</code> | Hides the loading text and shows the login canvas if not logged in. |
| <Link id="m-disablecanvas" /><code>{"private void DisableCanvas()"}</code> | Hides the login canvas. |
| <Link id="m-enablecanvas" /><code>{"private void EnableCanvas()"}</code> | Shows the login canvas. |
| <Link id="m-loggedin" /><code>{"private void LoggedIn()"}</code> | Hides the canvas and clears the error text. |
| <Link id="m-loggedout" /><code>{"private void LoggedOut()"}</code> | Shows the login canvas again. |
| <Link id="m-showattemptinglogintext" /><code>{"private void ShowAttemptingLoginText(bool isShowing)"}</code> | Swaps the login fields for the attempting login text, or back. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hides the canvas and hooks the toggle and `LoginManager` events. |
| <Link id="m-updaterememberme" /><code>{"private void UpdateRememberMe(bool value)"}</code> | Saves the remember me choice. |

</details>
