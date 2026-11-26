---
title: "MenuSettings"
description: "Global settings asset for the menu and startup: scene names, server list colours and materials, selection orb tuning and editor-only startup flags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuSettings

A **class** in `Root.Township`, the global namespace.

Global settings asset for the menu and startup: scene names, server list colours and materials, selection orb tuning and editor-only startup flags. Get it with `GlobalSettings<MenuSettings>.Instance`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<MenuSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`MenuSettings`](/mod/game-api/types/global-m-o/menusettings), [`MenuSettings.Create`](/mod/game-api/types/global-m-o/menusettings-create)
- **Nested types** [`AfterStartActionType`](/mod/game-api/types/global-m-o/menusettings-afterstartactiontype), [`Create`](/mod/game-api/types/global-m-o/menusettings-create), [`MenuType`](/mod/game-api/types/global-m-o/menusettings-menutype)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MenuSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bundleversioncode" /><code>{"int bundleVersionCode"}</code> | <span className="api-desc">Build bundle version code stored on the asset.</span> |
| <Link id="m-isalwaysonfocus" /><code>{"bool isAlwaysOnFocus"}</code> | <span className="api-desc">Editor only: makes the game act as if the window always has focus.</span> |

<details className="api-private">
<summary>32 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-afterstartaction" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/menusettings-afterstartactiontype">{"MenuSettings.AfterStartActionType"}</Link>{" afterStartAction"}</code> | <span className="api-desc">Backing field for `AfterStartAction`.</span> |
| <Link id="m-distancetohapticstrength" /><code>{"private AnimationCurve distanceToHapticStrength"}</code> | <span className="api-desc">Backing field for `DistanceToHapticstrength`.</span> |
| <Link id="m-distancetoscreenfade" /><code>{"private AnimationCurve distanceToScreenFade"}</code> | <span className="api-desc">Backing field for `DistanceToScreenFade`.</span> |
| <Link id="m-elementnormalmaterial" /><code>{"private Material elementNormalMaterial"}</code> | <span className="api-desc">Backing field for `ElementNormalMaterial`.</span> |
| <Link id="m-elementselectedmaterial" /><code>{"private Material elementSelectedMaterial"}</code> | <span className="api-desc">Backing field for `ElementSelectedMaterial`.</span> |
| <Link id="m-emptypingbarcolor" /><code>{"private Color emptyPingBarColor"}</code> | <span className="api-desc">Backing field for `EmptyPingBarColor`.</span> |
| <Link id="m-gamescenes" /><code>{"private string[] gameScenes"}</code> | <span className="api-desc">Backing field for `GameScenes`.</span> |
| <Link id="m-instantiatingplatformmanagertask" /><code>{"private static TaskCompletionSource<GameObject> instantiatingPlatformManagerTask"}</code> | <span className="api-desc">Pending load of the platform manager, so parallel calls to `InstantiatePlatformManagerAsync` wait for one load.</span> |
| <Link id="m-isclearingsavewhendirectlaunching" /><code>{"private bool isClearingSaveWhenDirectLaunching"}</code> | <span className="api-desc">Whether local test saves are cleared on direct launch.</span> |
| <Link id="m-isdisablingastarcalculation" /><code>{"private bool isDisablingAstarCalculation"}</code> | <span className="api-desc">Backing field for `IsDisablingAstarCalculation`.</span> |
| <Link id="m-isdisablingoculusservicesineditor" /><code>{"private bool isDisablingOculusServicesInEditor"}</code> | <span className="api-desc">Backing field for `IsDisablingOculusServicesInEditor`.</span> |
| <Link id="m-isforcedheadless" /><code>{"private bool isForcedHeadless"}</code> | <span className="api-desc">Backing field for `IsForcedHeadless`.</span> |
| <Link id="m-isjoiningtutorialfirsttimeineditor" /><code>{"private bool isJoiningTutorialFirstTimeInEditor"}</code> | <span className="api-desc">Backing field for `IsJoiningTutorialFirstTimeInEditor`.</span> |
| <Link id="m-isrequestingowneditemsineditor" /><code>{"private bool isRequestingOwnedItemsInEditor"}</code> | <span className="api-desc">Backing field for `IsRequestingOwnedItemsInEditor`.</span> |
| <Link id="m-minpingperlevel" /><code>{"private int[] minPingPerLevel"}</code> | <span className="api-desc">Backing field for `MinPingPerLevel`; defaults to 35, 100 and 250 ms.</span> |
| <Link id="m-minpointerprefabsizeforinflation" /><code>{"private float minPointerPrefabSizeForInflation"}</code> | <span className="api-desc">Backing field for `MinPointerPrefabSizeForInflation`.</span> |
| <Link id="m-nointernetscene" /><code>{"private string noInternetScene"}</code> | <span className="api-desc">Backing field for `NoInternetScene`.</span> |
| <Link id="m-pingbarcolor" /><code>{"private Gradient pingBarColor"}</code> | <span className="api-desc">Backing field for `PingBarColor`.</span> |
| <Link id="m-pingcolorhighlight" /><code>{"private Color pingColorHighlight"}</code> | <span className="api-desc">Backing field for `PingColorHighlight`.</span> |
| <Link id="m-platformmanager" /><code>{"private static GameObject platformManager"}</code> | <span className="api-desc">The platform manager object, loaded once from Addressables and kept across scenes.</span> |
| <Link id="m-playabilitycolorgradient" /><code>{"private Gradient playabilityColorGradient"}</code> | <span className="api-desc">Backing field for `PlayabilityColorGradient`.</span> |
| <Link id="m-pointerprefabinflationmultiplier" /><code>{"private float pointerPrefabInflationMultiplier"}</code> | <span className="api-desc">Backing field for `PointerPrefabInflationMultiplier`.</span> |
| <Link id="m-registrationscene" /><code>{"private string registrationScene"}</code> | <span className="api-desc">Backing field for `RegistrationScene`.</span> |
| <Link id="m-selectionorbinfacematerial" /><code>{"private Material selectionOrbInFaceMaterial"}</code> | <span className="api-desc">Backing field for `SelectionOrbInFaceMaterial`.</span> |
| <Link id="m-selectionorbinvalidmaterial" /><code>{"private Material selectionOrbInvalidMaterial"}</code> | <span className="api-desc">Backing field for `SelectionOrbInvalidMaterial`.</span> |
| <Link id="m-selectionorbletgothreshold" /><code>{"private float selectionOrbLetGoThreshold"}</code> | <span className="api-desc">Backing field for `SelectionOrbLetGoThreshold`.</span> |
| <Link id="m-selectionorbvalidmaterial" /><code>{"private Material selectionOrbValidMaterial"}</code> | <span className="api-desc">Backing field for `SelectionOrbValidMaterial`.</span> |
| <Link id="m-startlocaltestonserverjoinfail" /><code>{"private bool startLocalTestOnServerJoinFail"}</code> | <span className="api-desc">Backing field for `StartLocalTestOnServerJoinFail`.</span> |
| <Link id="m-startmenusceneonserverjoinfail" /><code>{"private bool startMenuSceneOnServerJoinFail"}</code> | <span className="api-desc">Backing field for `StartMenuSceneOnServerJoinFail`.</span> |
| <Link id="m-toggleoffcolor" /><code>{"private Color toggleOffColor"}</code> | <span className="api-desc">Backing field for `ToggleOffColor`.</span> |
| <Link id="m-toggleoncolor" /><code>{"private Color toggleOnColor"}</code> | <span className="api-desc">Backing field for `ToggleOnColor`.</span> |
| <Link id="m-vrmenuscene" /><code>{"private string vrMenuScene"}</code> | <span className="api-desc">Backing field for `MenuSceneName`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-afterstartaction-2" /><code><Link to="/mod/game-api/types/global-m-o/menusettings-afterstartactiontype">{"MenuSettings.AfterStartActionType"}</Link>{" AfterStartAction { get; set; }"}</code> | <span className="api-desc">What the game does after startup in a dev build (none, local test, local server, join local server). Read only in debug inspector.</span> |
| <Link id="m-distancetohapticstrength-2" /><code>{"AnimationCurve DistanceToHapticstrength { get; }"}</code> | <span className="api-desc">Curve from distance to haptic strength, used by the menu selection orbs.</span> |
| <Link id="m-distancetoscreenfade-2" /><code>{"AnimationCurve DistanceToScreenFade { get; }"}</code> | <span className="api-desc">Curve from distance to screen fade amount, used by the menu selection orbs.</span> |
| <Link id="m-elementnormalmaterial-2" /><code>{"Material ElementNormalMaterial { get; }"}</code> | <span className="api-desc">Material for a server list element that is not selected.</span> |
| <Link id="m-elementselectedmaterial-2" /><code>{"Material ElementSelectedMaterial { get; }"}</code> | <span className="api-desc">Material for the selected server list element.</span> |
| <Link id="m-emptypingbarcolor-2" /><code>{"Color EmptyPingBarColor { get; }"}</code> | <span className="api-desc">Colour of the unfilled bars in a server's ping indicator.</span> |
| <Link id="m-gamescenes-2" /><code>{"string[] GameScenes { get; }"}</code> | <span className="api-desc">Names of the scenes that can be loaded as a game world.</span> |
| <Link id="m-isdisablingastarcalculation-2" /><code>{"bool IsDisablingAstarCalculation { get; }"}</code> | <span className="api-desc">Editor only: skips A* pathfinding work in play mode to start faster, which stops creature pathfinding.</span> |
| <Link id="m-isdisablingoculusservicesineditor-2" /><code>{"bool IsDisablingOculusServicesInEditor { get; }"}</code> | <span className="api-desc">Editor only: skips Oculus services startup in play mode to start faster.</span> |
| <Link id="m-isforcedheadless-2" /><code>{"bool IsForcedHeadless { get; }"}</code> | <span className="api-desc">Forces headless mode.</span> |
| <Link id="m-isjoiningtutorialfirsttimeineditor-2" /><code>{"bool IsJoiningTutorialFirstTimeInEditor { get; }"}</code> | <span className="api-desc">Editor only: whether a first-time player is sent to the tutorial.</span> |
| <Link id="m-isrequestingowneditemsineditor-2" /><code>{"bool IsRequestingOwnedItemsInEditor { get; }"}</code> | <span className="api-desc">Editor only: whether to fetch the player's owned items.</span> |
| <Link id="m-localgamescene" /><code>{"int LocalGameScene { get; }"}</code> | <span className="api-desc">Index in `GameScenes` of the active scene, or -1 (with an error log) if it is not a game scene.</span> |
| <Link id="m-localgamescenename" /><code>{"string LocalGameSceneName { get; }"}</code> | <span className="api-desc">Name of the active game scene, from `GameScenes` at `LocalGameScene`.</span> |
| <Link id="m-menuscenename" /><code>{"string MenuSceneName { get; }"}</code> | <span className="api-desc">Name of the VR main menu scene.</span> |
| <Link id="m-minpingperlevel-2" /><code>{"int[] MinPingPerLevel { get; }"}</code> | <span className="api-desc">Ping thresholds in ms for each ping bar level (default 35, 100, 250).</span> |
| <Link id="m-minpointerprefabsizeforinflation-2" /><code>{"float MinPointerPrefabSizeForInflation { get; }"}</code> | <span className="api-desc">Minimum pointer bounds size before `PointerPrefabInflationMultiplier` is applied.</span> |
| <Link id="m-nointernetscene-2" /><code>{"string NoInternetScene { get; }"}</code> | <span className="api-desc">Name of the scene shown when there is no internet connection.</span> |
| <Link id="m-pingbarcolor-2" /><code>{"Gradient PingBarColor { get; }"}</code> | <span className="api-desc">Gradient used to colour the ping bars.</span> |
| <Link id="m-pingcolorhighlight-2" /><code>{"Color PingColorHighlight { get; }"}</code> | <span className="api-desc">Highlight colour for the ping indicator.</span> |
| <Link id="m-playabilitycolorgradient-2" /><code>{"Gradient PlayabilityColorGradient { get; }"}</code> | <span className="api-desc">Gradient a server element evaluates with the server's playability value to pick its colour.</span> |
| <Link id="m-pointerprefabinflationmultiplier-2" /><code>{"float PointerPrefabInflationMultiplier { get; }"}</code> | <span className="api-desc">How much pointer target bounds are scaled up to make small objects easier to point at.</span> |
| <Link id="m-registrationscene-2" /><code>{"string RegistrationScene { get; }"}</code> | <span className="api-desc">Name of the account registration scene.</span> |
| <Link id="m-selectionorbinfacematerial-2" /><code>{"Material SelectionOrbInFaceMaterial { get; }"}</code> | <span className="api-desc">Material for a menu selection orb held close to the face.</span> |
| <Link id="m-selectionorbinvalidmaterial-2" /><code>{"Material SelectionOrbInvalidMaterial { get; }"}</code> | <span className="api-desc">Material for a menu selection orb in an invalid spot.</span> |
| <Link id="m-selectionorbletgothreshold-2" /><code>{"float SelectionOrbLetGoThreshold { get; }"}</code> | <span className="api-desc">Distance from the head within which a held action orb counts as used when let go.</span> |
| <Link id="m-selectionorbvalidmaterial-2" /><code>{"Material SelectionOrbValidMaterial { get; }"}</code> | <span className="api-desc">Material for a menu selection orb in a valid spot.</span> |
| <Link id="m-startlocaltestonserverjoinfail-2" /><code>{"bool StartLocalTestOnServerJoinFail { get; }"}</code> | <span className="api-desc">If set, startup falls back to a local test when joining a server fails.</span> |
| <Link id="m-startmenusceneonserverjoinfail-2" /><code>{"bool StartMenuSceneOnServerJoinFail { get; }"}</code> | <span className="api-desc">If set, startup falls back to the menu scene when joining a server fails.</span> |
| <Link id="m-toggleoffcolor-2" /><code>{"Color ToggleOffColor { get; }"}</code> | <span className="api-desc">Colour of a server selection toggle when off.</span> |
| <Link id="m-toggleoncolor-2" /><code>{"Color ToggleOnColor { get; }"}</code> | <span className="api-desc">Colour of a server selection toggle when on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlestartupactionasync" /><code>{"async Task<bool> HandleStartupActionAsync()"}</code> | <span className="api-desc">Stub in this build: always returns false without doing anything.</span> |
| <Link id="m-instantiateplatformmanagerasync" /><code>{"static async Task InstantiatePlatformManagerAsync()"}</code> | <span className="api-desc">Loads the addressable `<platform>/Platform Manager` prefab once, keeps it across scene loads, and waits if a load is already running.</span> |
| <Link id="m-localgameserveraccess" /><code><Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" LocalGameServerAccess(int sceneIndex = -1)"}</code> | <span className="api-desc">Server access for a local loopback server, for a scene index or the active scene. Used by local test commands.</span> |
| <Link id="m-localgameserverinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" LocalGameServerInfo(int sceneIndex = -1)"}</code> | <span className="api-desc">Builds the server info for a local dev server: loopback address, port 1757, the given or active scene index.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initlocalserversave" /><code>{"private void InitLocalServerSave()"}</code> | <span className="api-desc">Deletes the local server save if `isClearingSaveWhenDirectLaunching` is set. Nothing calls it.</span> |

</details>
