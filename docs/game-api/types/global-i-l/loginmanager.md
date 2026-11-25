---
title: "LoginManager"
description: "Logs the client in to the Alta API: automatic login at startup, or username (or email) and password."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginManager

A **class** in `Root.Township`, no namespace.

Logs the client in to the Alta API: automatic login at startup, or username (or email) and password. Raises static events and runs queued actions after login. Get it with `SingletonBehaviour<LoginManager>.Instance`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`SingletonBehaviour<LoginManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`LoginManager`](/game-api/types/global-i-l/loginmanager)
- **Attributes** `ApplicationShutdownOrder`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-loginpreferences" /><code>{"private "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences"}</code> |  |
| <Link id="m-postloginactions" /><code>{"private readonly List<Action> postLoginActions"}</code> |  |
| <Link id="m-userservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloggedin" /><code>{"static bool IsLoggedIn { get; }"}</code> | True when the API client has logged-in user info. |
| <Link id="m-isloggedinwithoculusaccount" /><code>{"static bool IsLoggedInWithOculusAccount { get; set; }"}</code> | Set when logging in on Quest. Marked obsolete. |
| <Link id="m-preferences" /><code><Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" Preferences { get; }"}</code> | Saved login preferences (username, remember details, credentials). |

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
| <Link id="m-autologinasync" /><code>{"private async void AutoLoginAsync()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks automatic login to application startup. |
| <Link id="m-executepostloginactions" /><code>{"private void ExecutePostLoginActions()"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/game-api/types/assembly-other/iloginpreferences">{"ILoginPreferences"}</Link>{" loginPreferences)"}</code> | Receives the user service and login preferences from dependency injection. |
| <Link id="m-processautologinfailed" /><code>{"private async Task ProcessAutoLoginFailed(IResult loginResult)"}</code> |  |
