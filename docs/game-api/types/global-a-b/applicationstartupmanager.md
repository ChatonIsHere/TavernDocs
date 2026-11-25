---
title: "ApplicationStartupManager"
description: "Runs once at launch."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationStartupManager

A **class** in `Root.Township`, no namespace.

Runs once at launch.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#applicationstartupmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ApplicationStartupManager()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-a-b/applicationstartupmanager">{"ApplicationStartupManager"}</Link>{" instance"}</code> |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isloadingallcosmeticsintoramineditor" /><code>{"private bool isLoadingAllCosmeticsIntoRAMInEditor"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-serverhostcontroller" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" serverHostController"}</code> |
| <Link id="m-validversionservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{" validVersionService"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isskippingmenu" /><code>{"static bool IsSkippingMenu { get; set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-started" /><code>{"static event Action Started"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-disableregularstartupactions" /><code>{"static void DisableRegularStartupActions()"}</code> |
| <Link id="m-getlastlaunchedsceneindex" /><code>{"static int GetLastLaunchedSceneIndex()"}</code> |
| <Link id="m-jointutorialasync" /><code>{"static async Task<bool> JoinTutorialAsync()"}</code> |
| <Link id="m-playerhasnotcompletedtutorial" /><code>{"static bool PlayerHasNotCompletedTutorial()"}</code> |
| <Link id="m-runstartupactions" /><code>{"static async void RunStartupActions(bool checksTutorial)"}</code> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/assembly-other/ivalidversionservice">{"IValidVersionService"}</Link>{" validVersionService, "}<Link to="/game-api/types/global-i-l/iserverhostcontroller">{"IServerHostController"}</Link>{" injectedServerHostController)"}</code> |

<details>
<summary>23 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-approveall" /><code>{"private bool ApproveAll(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)"}</code> |
| <Link id="m-attemptgamelaunchedevent" /><code>{"private void AttemptGameLaunchedEvent()"}</code> |
| <Link id="m-attemptserverjoinasync" /><code>{"private static async Task<bool> AttemptServerJoinAsync(string[] joinArgs)"}</code> |
| <Link id="m-attemptserverstartasync" /><code>{"private static async Task<bool> AttemptServerStartAsync(string[] startServerArguments)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkversion" /><code>{"private async void CheckVersion()"}</code> |
| <Link id="m-cleanstorecredentials" /><code>{"private void CleanStoreCredentials()"}</code> |
| <Link id="m-handlepostlogin" /><code>{"private void HandlePostLogin()"}</code> |
| <Link id="m-hasofflinepermissions" /><code>{"private bool HasOfflinePermissions()"}</code> |
| <Link id="m-ignoresecurityprotocol" /><code>{"private void IgnoreSecurityProtocol()"}</code> |
| <Link id="m-joinlocalserver" /><code>{"private static async Task<bool> JoinLocalServer()"}</code> |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> |
| <Link id="m-onloggedin" /><code>{"private void OnLoggedIn()"}</code> |
| <Link id="m-onloginattemptfailed" /><code>{"private void OnLoginAttemptFailed(string message)"}</code> |
| <Link id="m-onstarted" /><code>{"private static void OnStarted()"}</code> |
| <Link id="m-postgamelaunchedevent" /><code>{"private static async void PostGameLaunchedEvent(int? userId = null)"}</code> |
| <Link id="m-regularstartupactions" /><code>{"private static void RegularStartupActions()"}</code> |
| <Link id="m-start" /><code>{"private async void Start()"}</code> |
| <Link id="m-startlocalserver" /><code>{"private static async Task<bool> StartLocalServer(int serverSceneIndex)"}</code> |
| <Link id="m-startup" /><code>{"private void Startup()"}</code> |
| <Link id="m-storeofflinecredentials" /><code>{"private void StoreOfflineCredentials()"}</code> |
| <Link id="m-storeofflinecredentials-2" /><code>{"private static void StoreOfflineCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" userCredentials)"}</code> |
| <Link id="m-storeupdatedofflinecredentials" /><code>{"private void StoreUpdatedOfflineCredentials("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" oldCredentials, "}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" newCredentials)"}</code> |

</details>
