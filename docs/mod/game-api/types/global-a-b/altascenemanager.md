---
title: "AltaSceneManager"
description: "Static helper that loads and unloads the registration, main menu, game and loading scenes, with a loading screen shown in between."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaSceneManager

A **static class** in `Root.Township`, the global namespace.

Static helper that loads and unloads the registration, main menu, game and loading scenes, with a loading screen shown in between. Mostly client flow, but the server also uses `LoadGameScene` and `ReturnToMainMenuAsync` when hosting.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state#altascenemanager)

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gamescene" /><code>{"private static Scene gameScene"}</code> | <span className="api-desc">The loaded game scene.</span> |
| <Link id="m-gamesceneloadop" /><code>{"private static AsyncOperation gameSceneLoadOp"}</code> | <span className="api-desc">The running background load of the game scene, or null.</span> |
| <Link id="m-isgamesceneactivated" /><code>{"private static bool isGameSceneActivated"}</code> | <span className="api-desc">True once the game scene has been made the active scene.</span> |
| <Link id="m-isgamescenefullloaded" /><code>{"private static bool isGameSceneFullLoaded"}</code> | <span className="api-desc">Flag for a fully loaded game scene. Reset on unload; checked by `LoadGameScene` to skip loading.</span> |
| <Link id="m-isonline" /><code>{"private static bool isOnline"}</code> | <span className="api-desc">False after `LoadNoInternetScene`, which stops any further scene changes.</span> |
| <Link id="m-loadingdelay" /><code>{"private const int LoadingDelay"}</code> | <span className="api-desc">Delay in milliseconds used between polls of scene load and unload operations.</span> |
| <Link id="m-loadingobjectaddressablehandle" /><code>{"private static AsyncOperationHandle<GameObject> loadingObjectAddressableHandle"}</code> | <span className="api-desc">Addressables handle for the loading screen prefab.</span> |
| <Link id="m-loadingscene" /><code>{"private static Scene loadingScene"}</code> | <span className="api-desc">The temporary loading scene, if one exists.</span> |
| <Link id="m-loadingscenename" /><code>{"private const string LoadingSceneName"}</code> | <span className="api-desc">Name of the temporary loading scene, "Loading Scene".</span> |
| <Link id="m-loadingscenetcs" /><code>{"private static TaskCompletionSource<bool> loadingSceneTcs"}</code> | <span className="api-desc">Completed when the loading screen is removed. `LoadNoInternetScene` waits on it.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-menuscene" /><code>{"private static Scene menuScene"}</code> | <span className="api-desc">The main menu scene.</span> |
| <Link id="m-registrationscene" /><code>{"private static Scene registrationScene"}</code> | <span className="api-desc">Backing field for `RegistrationScene`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloading" /><code>{"static bool IsLoading { get; private set; }"}</code> | <span className="api-desc">True while a scene change is in progress. Blocks other scene changes.</span> |
| <Link id="m-loadprogress" /><code>{"static float LoadProgress { get; private set; }"}</code> | <span className="api-desc">Progress (0 to 1) of the scene load currently running, for the loading screen.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canchangescene" /><code>{"private static bool CanChangeScene { get; }"}</code> | <span className="api-desc">True when no load is running and the game hasn't switched to the no-internet scene. Every public load checks this first.</span> |
| <Link id="m-registrationscene-2" /><code>{"private static Scene RegistrationScene { get; }"}</code> | <span className="api-desc">The registration scene named in `MenuSettings`, looked up and cached on first use.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createloadingscene" /><code>{"static async Task CreateLoadingScene()"}</code> | <span className="api-desc">Creates the empty "Loading Scene", makes it active and spawns the loading screen object in it. Reuses the scene if it already exists.</span> |
| <Link id="m-loadgamescene" /><code>{"static async Task LoadGameScene(int sceneIndex)"}</code> | <span className="api-desc">Unloads the main menu and loads the game scene at the given index in `MenuSettings.GameScenes`, then sets it active and finds its `NetworkScene`. Called by `GameMode`.</span> |
| <Link id="m-loadmainmenusceneasync" /><code>{"static async Task LoadMainMenuSceneAsync()"}</code> | <span className="api-desc">Shows the loading screen, unloads the registration scene and loads the main menu scene.</span> |
| <Link id="m-loadnointernetscene" /><code>{"static async void LoadNoInternetScene()"}</code> | <span className="api-desc">Fades out, unloads the registration, menu and game scenes and loads "No Internet Scene". Blocks further scene changes.</span> |
| <Link id="m-loadregistrationsceneasync" /><code>{"static async Task LoadRegistrationSceneAsync()"}</code> | <span className="api-desc">Unloads the main menu and loads the registration (login) scene, or just activates it if it's already loaded.</span> |
| <Link id="m-loadtutorialasync" /><code>{"static async Task<bool> LoadTutorialAsync()"}</code> | <span className="api-desc">Shows the loading screen, unloads the registration scene and joins the tutorial through `ApplicationStartupManager.JoinTutorialAsync`. Returns false if that fails.</span> |
| <Link id="m-returntomainmenuasync" /><code>{"static async Task ReturnToMainMenuAsync()"}</code> | <span className="api-desc">Resets game scene state, shows the loading screen, unloads the game scene and loads the main menu.</span> |
| <Link id="m-unloadgamesceneasync" /><code>{"static async Task UnloadGameSceneAsync()"}</code> | <span className="api-desc">Unloads the game scene and resets the game scene flags. Logs an error if it isn't loaded.</span> |

<details className="api-private">
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cleanuploadingscene" /><code>{"private static void CleanUpLoadingScene(Scene targetScene)"}</code> | <span className="api-desc">Moves the loading scene's non-temporary objects into the target scene, then removes the loading screen.</span> |
| <Link id="m-createloadingscenecamera" /><code>{"private static async Task CreateLoadingSceneCamera()"}</code> | <span className="api-desc">Spawns the loading screen prefab from Addressables into the loading scene. Does nothing on a headless server.</span> |
| <Link id="m-delayreleaseloadingobject" /><code>{"private static async void DelayReleaseLoadingObject()"}</code> | <span className="api-desc">Android only: releases the loading screen's Addressables handle one frame after the loading scene unloads.</span> |
| <Link id="m-destroytempsceneobjects" /><code>{"private static void DestroyTempSceneObjects()"}</code> | <span className="api-desc">Destroys root objects in the active scene that have a `TempSceneObject` component.</span> |
| <Link id="m-finishloadinggamesceneinbackground" /><code>{"private static async Task FinishLoadingGameSceneInBackground(string gameSceneName)"}</code> | <span className="api-desc">Waits for the background game scene load to reach 90%, allows activation, waits for it to finish and warms its shaders.</span> |
| <Link id="m-flagloadingstarted" /><code>{"private static void FlagLoadingStarted(string loadOperationName)"}</code> | <span className="api-desc">Sets `IsLoading` to true and logs which operation started.</span> |
| <Link id="m-flagloadingstopped" /><code>{"private static void FlagLoadingStopped(string loadOperationName)"}</code> | <span className="api-desc">Sets `IsLoading` to false and logs which operation stopped.</span> |
| <Link id="m-loadmainmenusceneinternalasync" /><code>{"private static async Task LoadMainMenuSceneInternalAsync()"}</code> | <span className="api-desc">Loads the menu scene additively (or just activates it if already loaded), updating `LoadProgress`, then warms its shaders.</span> |
| <Link id="m-loadsceneasync" /><code>{"private static async Task LoadSceneAsync(string sceneName, LoadSceneMode mode)"}</code> | <span className="api-desc">Loads a scene by name in the given mode and updates `LoadProgress` until it's done.</span> |
| <Link id="m-moveobjectstotargetscene" /><code>{"private static void MoveObjectsToTargetScene(Scene sourceScene, Scene targetScene, bool isForcingAllObjects)"}</code> | <span className="api-desc">Moves root objects from one scene to another, skipping `TempSceneObject` ones unless forced.</span> |
| <Link id="m-onlocalplayerset" /><code>{"private static void OnLocalPlayerSet("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Hooked to `PlayerController.LocalPlayerSet` during a game load. Removes the loading screen once the local player exists.</span> |
| <Link id="m-removeloadingscreen" /><code>{"private static void RemoveLoadingScreen()"}</code> | <span className="api-desc">Unloads the loading scene, destroys temporary objects, clears `IsLoading` and completes the loading task.</span> |
| <Link id="m-startloadinggamesceneinbackground" /><code>{"private static void StartLoadingGameSceneInBackground(string sceneName)"}</code> | <span className="api-desc">Starts an additive load of the game scene with activation held back until `FinishLoadingGameSceneInBackground`.</span> |
| <Link id="m-switchfrommenutogamescene" /><code>{"private static void SwitchFromMenuToGameScene()"}</code> | <span className="api-desc">Makes the game scene active and sets `NetworkSceneManager.Current` to the `NetworkScene` found on its root objects.</span> |
| <Link id="m-trygetloadingscene" /><code>{"private static bool TryGetLoadingScene(out Scene scene)"}</code> | <span className="api-desc">Finds the loading scene, from the cached value or by name.</span> |
| <Link id="m-trygetmenuscene" /><code>{"private static bool TryGetMenuScene(out Scene scene)"}</code> | <span className="api-desc">Finds the main menu scene, from the cached value or by the name in `MenuSettings`.</span> |
| <Link id="m-unloadinitialactivesceneineditor" /><code>{"private static async Task UnloadInitialActiveSceneInEditor(Scene originalActiveScene)"}</code> | <span className="api-desc">Editor only: unloads a game scene that was open in the editor before play started.</span> |
| <Link id="m-unloadloadingscene" /><code>{"private static void UnloadLoadingScene()"}</code> | <span className="api-desc">Starts unloading the loading scene and clears the cached handle.</span> |
| <Link id="m-unloadmainmenuscene" /><code>{"private static async Task UnloadMainMenuScene()"}</code> | <span className="api-desc">Tells `VrMainMenu` to prepare, then unloads the main menu scene if it's loaded.</span> |
| <Link id="m-unloadregistrationsceneasync" /><code>{"private static async Task UnloadRegistrationSceneAsync()"}</code> | <span className="api-desc">Unloads the registration scene if it's loaded.</span> |
| <Link id="m-warmupsceneshaders" /><code>{"private static async Task WarmUpSceneShaders(Scene scene)"}</code> | <span className="api-desc">Runs `Warm` on every `ShaderVariantWarmer` found on the scene's root objects.</span> |

</details>
