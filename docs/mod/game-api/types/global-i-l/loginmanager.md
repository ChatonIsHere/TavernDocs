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
| <Link id="m-ctor" /><code>{"LoginManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> | <span className="api-desc">Saved login settings and credentials, injected.</span> |
| <Link id="m-postloginactions" /><code>{"private readonly List<Action> postLoginActions"}</code> | <span className="api-desc">Actions waiting for the next successful login.</span> |
| <Link id="m-userservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | <span className="api-desc">Injected user service used for automatic login.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloggedin" /><code>{"static bool IsLoggedIn { get; }"}</code> | <span className="api-desc">True when the API client has logged-in user info.</span> |
| <Link id="m-isloggedinwithoculusaccount" /><code>{"static bool IsLoggedInWithOculusAccount { get; set; }"}</code> | <span className="api-desc">Set when logging in on Quest. Marked obsolete.</span> |
| <Link id="m-preferences" /><code><Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" Preferences { get; }"}</code> | <span className="api-desc">Saved login preferences (username, remember details, credentials).</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-attemptinglogin" /><code>{"static event Action AttemptingLogin"}</code> | <span className="api-desc">Raised when an automatic or manual login starts.</span> |
| <Link id="m-loggedin" /><code>{"static event Action LoggedIn"}</code> | <span className="api-desc">Raised after a successful login, once post-login actions have run.</span> |
| <Link id="m-loggedout" /><code>{"static event Action LoggedOut"}</code> | <span className="api-desc">Raised after `Logout`.</span> |
| <Link id="m-loginattemptfailed" /><code>{"static event Action<string> LoginAttemptFailed"}</code> | <span className="api-desc">Raised with the error message when a login fails.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpostloginaction" /><code>{"void AddPostLoginAction(Action action)"}</code> | <span className="api-desc">Runs the action now if already logged in, otherwise queues it to run after the next successful login.</span> |
| <Link id="m-loginasync" /><code>{"async Task<IResult> LoginAsync(string username, string password)"}</code> | <span className="api-desc">Logs in with a hashed password. Email logins return success without running post-login actions or raising `LoggedIn`.</span> |
| <Link id="m-logout" /><code>{"IResult Logout()"}</code> | <span className="api-desc">Logs out, clears saved credentials and raises `LoggedOut`. On Android it opens the registration scene.</span> |
| <Link id="m-processsuccessfullogin" /><code>{"void ProcessSuccessfulLogin()"}</code> | <span className="api-desc">Saves credentials, runs queued post-login actions and raises `LoggedIn`.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks automatic login to application startup.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/mod/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences)"}</code> | <span className="api-desc">Receives the user service and login preferences from dependency injection.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autologinasync" /><code>{"private async void AutoLoginAsync()"}</code> | <span className="api-desc">Runs when the app has started: tries an automatic login through the user service and handles success or failure.</span> |
| <Link id="m-executepostloginactions" /><code>{"private void ExecutePostLoginActions()"}</code> | <span className="api-desc">Runs and clears the actions queued with `AddPostLoginAction`, and marks Quest logins as Oculus.</span> |
| <Link id="m-processautologinfailed" /><code>{"private async Task ProcessAutoLoginFailed(IResult loginResult)"}</code> | <span className="api-desc">Raises `LoginAttemptFailed` and, on Android, loads the registration scene.</span> |

</details>
