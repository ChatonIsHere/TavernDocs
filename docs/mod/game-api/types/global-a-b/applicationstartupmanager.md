---
title: "ApplicationStartupManager"
description: "Startup component in the first scene: checks internet and version, hooks login events, then decides what to do after login (start a server, join one, join..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationStartupManager

A **class** in `Root.Township`, the global namespace.

Startup component in the first scene: checks internet and version, hooks login events, then decides what to do after login (start a server, join one, join the tutorial, or load the main menu). Both sides; a server is started through the `/start_server` flag.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state#applicationstartupmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplicationStartupManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/applicationstartupmanager">{"ApplicationStartupManager"}</Link>{" instance"}</code> | <span className="api-desc">Static field, not assigned in this file.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isloadingallcosmeticsintoramineditor" /><code>{"private bool isLoadingAllCosmeticsIntoRAMInEditor"}</code> | <span className="api-desc">Inspector flag, not used in this file.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-serverhostcontroller" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" serverHostController"}</code> | <span className="api-desc">Injected `IServerHostController`. Set by `Inject` but not used in this file.</span> |
| <Link id="m-validversionservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{" validVersionService"}</code> | <span className="api-desc">Injected service used by `CheckVersion`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isskippingmenu" /><code>{"static bool IsSkippingMenu { get; set; }"}</code> | <span className="api-desc">Static flag other code can set to skip the menu. Not read in this file.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-started" /><code>{"static event Action Started"}</code> | <span className="api-desc">Raised once startup has hooked login and checked the version.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableregularstartupactions" /><code>{"static void DisableRegularStartupActions()"}</code> | <span className="api-desc">Unhooks `RegularStartupActions` from login, so logging in doesn't run the usual startup flow.</span> |
| <Link id="m-getlastlaunchedsceneindex" /><code>{"static int GetLastLaunchedSceneIndex()"}</code> | <span className="api-desc">Returns the scene index saved by `StartLocalServer`, or `MenuSettings.LocalGameScene` if none or out of range.</span> |
| <Link id="m-jointutorialasync" /><code>{"static async Task<bool> JoinTutorialAsync()"}</code> | <span className="api-desc">Asks matchmaking for a tutorial server and joins it. Returns false if none is found.</span> |
| <Link id="m-playerhasnotcompletedtutorial" /><code>{"static bool PlayerHasNotCompletedTutorial()"}</code> | <span className="api-desc">True if the access token lacks `server_access_pre_alpha` (or `server_access_tester` on Quest), which is how the game tells a player still needs the tutorial.</span> |
| <Link id="m-runstartupactions" /><code>{"static async void RunStartupActions(bool checksTutorial)"}</code> | <span className="api-desc">Tries `/start_server`, then `/join_server`, then the tutorial, then an Oculus deep link, and loads the main menu if none worked (unless headless).</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{" validVersionService, "}<Link to="/mod/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" injectedServerHostController)"}</code> | <span className="api-desc">VContainer injection of the version service and server host controller.</span> |

<details className="api-private">
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-approveall" /><code>{"private bool ApproveAll(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)"}</code> | <span className="api-desc">Certificate callback that accepts every TLS certificate. Used by `IgnoreSecurityProtocol`.</span> |
| <Link id="m-attemptgamelaunchedevent" /><code>{"private void AttemptGameLaunchedEvent()"}</code> | <span className="api-desc">Posts the GameLaunch analytics event now, or after the login attempt when started with `/access_token`. Skipped with `/agones`.</span> |
| <Link id="m-attemptserverjoinasync" /><code>{"private static async Task<bool> AttemptServerJoinAsync(string[] joinArgs)"}</code> | <span className="api-desc">Parses a server id from the `/join_server` argument, fetches that server from the API and joins it.</span> |
| <Link id="m-attemptserverstartasync" /><code>{"private static async Task<bool> AttemptServerStartAsync(string[] startServerArguments)"}</code> | <span className="api-desc">Parses id, headless flag and port from `/start_server` and starts that server. Id -1 starts the local test server.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the working directory to the folder above the game's data folder.</span> |
| <Link id="m-checkversion" /><code>{"private async void CheckVersion()"}</code> | <span className="api-desc">Asks `IValidVersionService` if this version is valid and shows a popup if not.</span> |
| <Link id="m-cleanstorecredentials" /><code>{"private void CleanStoreCredentials()"}</code> | <span className="api-desc">On logout: clears the stored offline token and stops tracking credential refreshes.</span> |
| <Link id="m-handlepostlogin" /><code>{"private void HandlePostLogin()"}</code> | <span className="api-desc">Posts the GameLaunch analytics event with the logged in user's id, if any.</span> |
| <Link id="m-hasofflinepermissions" /><code>{"private bool HasOfflinePermissions()"}</code> | <span className="api-desc">True if the user has the `play_offline` permission.</span> |
| <Link id="m-ignoresecurityprotocol" /><code>{"private void IgnoreSecurityProtocol()"}</code> | <span className="api-desc">Turns off TLS certificate checks for all web requests. Not called in this file.</span> |
| <Link id="m-joinlocalserver" /><code>{"private static async Task<bool> JoinLocalServer()"}</code> | <span className="api-desc">Joins a dev server on localhost port 1757, or starts a local test if that fails and `StartLocalTestOnServerJoinFail` is set.</span> |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onloggedin" /><code>{"private void OnLoggedIn()"}</code> | <span className="api-desc">Login handler that posts the launch event. It re-adds itself to `LoggedIn` instead of removing itself, so it probably fires again on later logins.</span> |
| <Link id="m-onloginattemptfailed" /><code>{"private void OnLoginAttemptFailed(string message)"}</code> | <span className="api-desc">Posts the launch event without a user id after a failed login, and unhooks itself.</span> |
| <Link id="m-onstarted" /><code>{"private static void OnStarted()"}</code> | <span className="api-desc">Raises the `Started` event.</span> |
| <Link id="m-postgamelaunchedevent" /><code>{"private static async void PostGameLaunchedEvent(int? userId = null)"}</code> | <span className="api-desc">Posts a GameLaunch analytics event with the source (`/source` flag, or Launcher), version and user id.</span> |
| <Link id="m-regularstartupactions" /><code>{"private static void RegularStartupActions()"}</code> | <span className="api-desc">Runs once on the first login: calls `RunStartupActions` without the tutorial check.</span> |
| <Link id="m-start" /><code>{"private async void Start()"}</code> | <span className="api-desc">Client: loads the no-internet scene if offline. Otherwise runs `Startup`.</span> |
| <Link id="m-startlocalserver" /><code>{"private static async Task<bool> StartLocalServer(int serverSceneIndex)"}</code> | <span className="api-desc">Starts a local server for the given scene index and saves the index for `GetLastLaunchedSceneIndex`.</span> |
| <Link id="m-startup" /><code>{"private void Startup()"}</code> | <span className="api-desc">Hooks login and logout handlers, checks the version and handles the launch analytics event.</span> |
| <Link id="m-storeofflinecredentials" /><code>{"private void StoreOfflineCredentials()"}</code> | <span className="api-desc">If the user may play offline, stores the access token as the offline token and keeps it updated on refresh.</span> |
| <Link id="m-storeofflinecredentials-2" /><code>{"private static void StoreOfflineCredentials("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" userCredentials)"}</code> | <span className="api-desc">If the user may play offline, stores the access token as the offline token and keeps it updated on refresh.</span> |
| <Link id="m-storeupdatedofflinecredentials" /><code>{"private void StoreUpdatedOfflineCredentials("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> | <span className="api-desc">Stores the new access token as the offline token when the login refreshes.</span> |

</details>
