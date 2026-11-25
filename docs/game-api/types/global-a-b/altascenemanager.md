---
title: "AltaSceneManager"
description: "Every scene is loaded additively."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaSceneManager

A **static class** in `Root.Township`, no namespace.

Every scene is loaded additively. Main thread; the async methods poll with `Task.Delay` and continue on the main thread.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state#altascenemanager)

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-gamescene" /><code>{"private static Scene gameScene"}</code> |
| <Link id="m-gamesceneloadop" /><code>{"private static AsyncOperation gameSceneLoadOp"}</code> |
| <Link id="m-isgamesceneactivated" /><code>{"private static bool isGameSceneActivated"}</code> |
| <Link id="m-isgamescenefullloaded" /><code>{"private static bool isGameSceneFullLoaded"}</code> |
| <Link id="m-isonline" /><code>{"private static bool isOnline"}</code> |
| <Link id="m-loadingdelay" /><code>{"private const int LoadingDelay"}</code> |
| <Link id="m-loadingobjectaddressablehandle" /><code>{"private static AsyncOperationHandle<GameObject> loadingObjectAddressableHandle"}</code> |
| <Link id="m-loadingscene" /><code>{"private static Scene loadingScene"}</code> |
| <Link id="m-loadingscenename" /><code>{"private const string LoadingSceneName"}</code> |
| <Link id="m-loadingscenetcs" /><code>{"private static TaskCompletionSource<bool> loadingSceneTcs"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-menuscene" /><code>{"private static Scene menuScene"}</code> |
| <Link id="m-registrationscene" /><code>{"private static Scene registrationScene"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isloading" /><code>{"static bool IsLoading { get; private set; }"}</code> |
| <Link id="m-loadprogress" /><code>{"static float LoadProgress { get; private set; }"}</code> |

<details>
<summary>2 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-canchangescene" /><code>{"private static bool CanChangeScene { get; }"}</code> |
| <Link id="m-registrationscene-2" /><code>{"private static Scene RegistrationScene { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-createloadingscene" /><code>{"static async Task CreateLoadingScene()"}</code> |
| <Link id="m-loadgamescene" /><code>{"static async Task LoadGameScene(int sceneIndex)"}</code> |
| <Link id="m-loadmainmenusceneasync" /><code>{"static async Task LoadMainMenuSceneAsync()"}</code> |
| <Link id="m-loadnointernetscene" /><code>{"static async void LoadNoInternetScene()"}</code> |
| <Link id="m-loadregistrationsceneasync" /><code>{"static async Task LoadRegistrationSceneAsync()"}</code> |
| <Link id="m-loadtutorialasync" /><code>{"static async Task<bool> LoadTutorialAsync()"}</code> |
| <Link id="m-returntomainmenuasync" /><code>{"static async Task ReturnToMainMenuAsync()"}</code> |
| <Link id="m-unloadgamesceneasync" /><code>{"static async Task UnloadGameSceneAsync()"}</code> |

<details>
<summary>21 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cleanuploadingscene" /><code>{"private static void CleanUpLoadingScene(Scene targetScene)"}</code> |
| <Link id="m-createloadingscenecamera" /><code>{"private static async Task CreateLoadingSceneCamera()"}</code> |
| <Link id="m-delayreleaseloadingobject" /><code>{"private static async void DelayReleaseLoadingObject()"}</code> |
| <Link id="m-destroytempsceneobjects" /><code>{"private static void DestroyTempSceneObjects()"}</code> |
| <Link id="m-finishloadinggamesceneinbackground" /><code>{"private static async Task FinishLoadingGameSceneInBackground(string gameSceneName)"}</code> |
| <Link id="m-flagloadingstarted" /><code>{"private static void FlagLoadingStarted(string loadOperationName)"}</code> |
| <Link id="m-flagloadingstopped" /><code>{"private static void FlagLoadingStopped(string loadOperationName)"}</code> |
| <Link id="m-loadmainmenusceneinternalasync" /><code>{"private static async Task LoadMainMenuSceneInternalAsync()"}</code> |
| <Link id="m-loadsceneasync" /><code>{"private static async Task LoadSceneAsync(string sceneName, LoadSceneMode mode)"}</code> |
| <Link id="m-moveobjectstotargetscene" /><code>{"private static void MoveObjectsToTargetScene(Scene sourceScene, Scene targetScene, bool isForcingAllObjects)"}</code> |
| <Link id="m-onlocalplayerset" /><code>{"private static void OnLocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-removeloadingscreen" /><code>{"private static void RemoveLoadingScreen()"}</code> |
| <Link id="m-startloadinggamesceneinbackground" /><code>{"private static void StartLoadingGameSceneInBackground(string sceneName)"}</code> |
| <Link id="m-switchfrommenutogamescene" /><code>{"private static void SwitchFromMenuToGameScene()"}</code> |
| <Link id="m-trygetloadingscene" /><code>{"private static bool TryGetLoadingScene(out Scene scene)"}</code> |
| <Link id="m-trygetmenuscene" /><code>{"private static bool TryGetMenuScene(out Scene scene)"}</code> |
| <Link id="m-unloadinitialactivesceneineditor" /><code>{"private static async Task UnloadInitialActiveSceneInEditor(Scene originalActiveScene)"}</code> |
| <Link id="m-unloadloadingscene" /><code>{"private static void UnloadLoadingScene()"}</code> |
| <Link id="m-unloadmainmenuscene" /><code>{"private static async Task UnloadMainMenuScene()"}</code> |
| <Link id="m-unloadregistrationsceneasync" /><code>{"private static async Task UnloadRegistrationSceneAsync()"}</code> |
| <Link id="m-warmupsceneshaders" /><code>{"private static async Task WarmUpSceneShaders(Scene scene)"}</code> |

</details>
