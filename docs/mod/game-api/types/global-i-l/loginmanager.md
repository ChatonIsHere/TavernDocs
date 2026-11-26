---
title: "LoginManager"
description: "Logs the client in to the Alta API: automatic login at startup, or username (or email) and password."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginManager

A **class** in `Root.Township`, the global namespace.

Logs the client in to the Alta API: automatic login at startup, or username (or email) and password. Raises static events and runs queued actions after login. Get it with `SingletonBehaviour<LoginManager>.Instance`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`SingletonBehaviour<LoginManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`LoginManager`](/mod/game-api/types/global-i-l/loginmanager)
- **Attributes** `ApplicationShutdownOrder`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | Saved login settings and credentials, injected. |
| <Link id="m-postloginactions" /><code>{"private readonly List<Action> postLoginActions"}</code> | Actions waiting for the next successful login. |
| <Link id="m-userservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | Injected user service used for automatic login. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloggedin" /><code>{"static bool IsLoggedIn { get; }"}</code> | True when the API client has logged-in user info. |
| <Link id="m-isloggedinwithoculusaccount" /><code>{"static bool IsLoggedInWithOculusAccount { get; set; }"}</code> | Set when logging in on Quest. Marked obsolete. |
| <Link id="m-preferences" /><code><Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" Preferences { get; }"}</code> | Saved login preferences (username, remember details, credentials). |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-attemptinglogin" /><code>{"static event Action AttemptingLogin"}</code> | Raised when an automatic or manual login starts. |
| <Link id="m-loggedin" /><code>{"static event Action LoggedIn"}</code> | Raised after a successful login, once post-login actions have run. |
| <Link id="m-loggedout" /><code>{"static event Action LoggedOut"}</code> | Raised after `Logout`. |
| <Link id="m-loginattemptfailed" /><code>{"static event Action<string> LoginAttemptFailed"}</code> | Raised with the error message when a login fails. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpostloginaction" /><code>{"void AddPostLoginAction(Action action)"}</code> | Runs the action now if already logged in, otherwise queues it to run after the next successful login. |
| <Link id="m-loginasync" /><code>{"async Task<IResult> LoginAsync(string username, string password)"}</code> | Logs in with a hashed password. Email logins return success without running post-login actions or raising `LoggedIn`. |
| <Link id="m-logout" /><code>{"IResult Logout()"}</code> | Logs out, clears saved credentials and raises `LoggedOut`. On Android it opens the registration scene. |
| <Link id="m-processsuccessfullogin" /><code>{"void ProcessSuccessfulLogin()"}</code> | Saves credentials, runs queued post-login actions and raises `LoggedIn`. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks automatic login to application startup. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences)"}</code> | Receives the user service and login preferences from dependency injection. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autologinasync" /><code>{"private async void AutoLoginAsync()"}</code> | Runs when the app has started: tries an automatic login through the user service and handles success or failure. |
| <Link id="m-executepostloginactions" /><code>{"private void ExecutePostLoginActions()"}</code> | Runs and clears the actions queued with `AddPostLoginAction`, and marks Quest logins as Oculus. |
| <Link id="m-processautologinfailed" /><code>{"private async Task ProcessAutoLoginFailed(IResult loginResult)"}</code> | Raises `LoginAttemptFailed` and, on Android, loads the registration scene. |

</details>
