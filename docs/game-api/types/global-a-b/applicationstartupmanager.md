---
title: "ApplicationStartupManager"
description: "Startup component in the first scene: checks internet and version, hooks login events, then decides what to do after login (start a server, join one, join..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationStartupManager

A **class** in `Root.Township`, no namespace.

Startup component in the first scene: checks internet and version, hooks login events, then decides what to do after login (start a server, join one, join the tutorial, or load the main menu). Both sides; a server is started through the `/start_server` flag.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#applicationstartupmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplicationStartupManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-a-b/applicationstartupmanager">{"ApplicationStartupManager"}</Link>{" instance"}</code> | Static field, not assigned in this file. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloadingallcosmeticsintoramineditor" /><code>{"private bool isLoadingAllCosmeticsIntoRAMInEditor"}</code> | Inspector flag, not used in this file. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-serverhostcontroller" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" serverHostController"}</code> | Injected `IServerHostController`. Set by `Inject` but not used in this file. |
| <Link id="m-validversionservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{" validVersionService"}</code> | Injected service used by `CheckVersion`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isskippingmenu" /><code>{"static bool IsSkippingMenu { get; set; }"}</code> | Static flag other code can set to skip the menu. Not read in this file. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-started" /><code>{"static event Action Started"}</code> | Raised once startup has hooked login and checked the version. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableregularstartupactions" /><code>{"static void DisableRegularStartupActions()"}</code> | Unhooks `RegularStartupActions` from login, so logging in doesn't run the usual startup flow. |
| <Link id="m-getlastlaunchedsceneindex" /><code>{"static int GetLastLaunchedSceneIndex()"}</code> | Returns the scene index saved by `StartLocalServer`, or `MenuSettings.LocalGameScene` if none or out of range. |
| <Link id="m-jointutorialasync" /><code>{"static async Task<bool> JoinTutorialAsync()"}</code> | Asks matchmaking for a tutorial server and joins it. Returns false if none is found. |
| <Link id="m-playerhasnotcompletedtutorial" /><code>{"static bool PlayerHasNotCompletedTutorial()"}</code> | True if the access token lacks `server_access_pre_alpha` (or `server_access_tester` on Quest), which is how the game tells a player still needs the tutorial. |
| <Link id="m-runstartupactions" /><code>{"static async void RunStartupActions(bool checksTutorial)"}</code> | Tries `/start_server`, then `/join_server`, then the tutorial, then an Oculus deep link, and loads the main menu if none worked (unless headless). |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{" validVersionService, "}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" injectedServerHostController)"}</code> | VContainer injection of the version service and server host controller. |

<details>
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-approveall" /><code>{"private bool ApproveAll(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)"}</code> | Certificate callback that accepts every TLS certificate. Used by `IgnoreSecurityProtocol`. |
| <Link id="m-attemptgamelaunchedevent" /><code>{"private void AttemptGameLaunchedEvent()"}</code> | Posts the GameLaunch analytics event now, or after the login attempt when started with `/access_token`. Skipped with `/agones`. |
| <Link id="m-attemptserverjoinasync" /><code>{"private static async Task<bool> AttemptServerJoinAsync(string[] joinArgs)"}</code> | Parses a server id from the `/join_server` argument, fetches that server from the API and joins it. |
| <Link id="m-attemptserverstartasync" /><code>{"private static async Task<bool> AttemptServerStartAsync(string[] startServerArguments)"}</code> | Parses id, headless flag and port from `/start_server` and starts that server. Id -1 starts the local test server. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the working directory to the folder above the game's data folder. |
| <Link id="m-checkversion" /><code>{"private async void CheckVersion()"}</code> | Asks `IValidVersionService` if this version is valid and shows a popup if not. |
| <Link id="m-cleanstorecredentials" /><code>{"private void CleanStoreCredentials()"}</code> | On logout: clears the stored offline token and stops tracking credential refreshes. |
| <Link id="m-handlepostlogin" /><code>{"private void HandlePostLogin()"}</code> | Posts the GameLaunch analytics event with the logged in user's id, if any. |
| <Link id="m-hasofflinepermissions" /><code>{"private bool HasOfflinePermissions()"}</code> | True if the user has the `play_offline` permission. |
| <Link id="m-ignoresecurityprotocol" /><code>{"private void IgnoreSecurityProtocol()"}</code> | Turns off TLS certificate checks for all web requests. Not called in this file. |
| <Link id="m-joinlocalserver" /><code>{"private static async Task<bool> JoinLocalServer()"}</code> | Joins a dev server on localhost port 1757, or starts a local test if that fails and `StartLocalTestOnServerJoinFail` is set. |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> | Empty. |
| <Link id="m-onloggedin" /><code>{"private void OnLoggedIn()"}</code> | Login handler that posts the launch event. It re-adds itself to `LoggedIn` instead of removing itself, so it probably fires again on later logins. |
| <Link id="m-onloginattemptfailed" /><code>{"private void OnLoginAttemptFailed(string message)"}</code> | Posts the launch event without a user id after a failed login, and unhooks itself. |
| <Link id="m-onstarted" /><code>{"private static void OnStarted()"}</code> | Raises the `Started` event. |
| <Link id="m-postgamelaunchedevent" /><code>{"private static async void PostGameLaunchedEvent(int? userId = null)"}</code> | Posts a GameLaunch analytics event with the source (`/source` flag, or Launcher), version and user id. |
| <Link id="m-regularstartupactions" /><code>{"private static void RegularStartupActions()"}</code> | Runs once on the first login: calls `RunStartupActions` without the tutorial check. |
| <Link id="m-start" /><code>{"private async void Start()"}</code> | Client: loads the no-internet scene if offline. Otherwise runs `Startup`. |
| <Link id="m-startlocalserver" /><code>{"private static async Task<bool> StartLocalServer(int serverSceneIndex)"}</code> | Starts a local server for the given scene index and saves the index for `GetLastLaunchedSceneIndex`. |
| <Link id="m-startup" /><code>{"private void Startup()"}</code> | Hooks login and logout handlers, checks the version and handles the launch analytics event. |
| <Link id="m-storeofflinecredentials" /><code>{"private void StoreOfflineCredentials()"}</code> | If the user may play offline, stores the access token as the offline token and keeps it updated on refresh. |
| <Link id="m-storeofflinecredentials-2" /><code>{"private static void StoreOfflineCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" userCredentials)"}</code> | If the user may play offline, stores the access token as the offline token and keeps it updated on refresh. |
| <Link id="m-storeupdatedofflinecredentials" /><code>{"private void StoreUpdatedOfflineCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> | Stores the new access token as the offline token when the login refreshes. |

</details>
