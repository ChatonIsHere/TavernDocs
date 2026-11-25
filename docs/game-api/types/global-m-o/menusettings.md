---
title: "MenuSettings"
description: "Global settings asset for the menu and startup: scene names, server list colours and materials, selection orb tuning and editor-only startup flags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuSettings

A **class** in `Root.Township`, no namespace.

Global settings asset for the menu and startup: scene names, server list colours and materials, selection orb tuning and editor-only startup flags. Get it with `GlobalSettings<MenuSettings>.Instance`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`GlobalSettings<MenuSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`MenuSettings`](/game-api/types/global-m-o/menusettings), [`MenuSettings.Create`](/game-api/types/global-m-o/menusettings-create)
- **Nested types** [`AfterStartActionType`](/game-api/types/global-m-o/menusettings-afterstartactiontype), [`Create`](/game-api/types/global-m-o/menusettings-create), [`MenuType`](/game-api/types/global-m-o/menusettings-menutype)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MenuSettings()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bundleversioncode" /><code>{"int bundleVersionCode"}</code> | Build bundle version code stored on the asset. |
| <Link id="m-isalwaysonfocus" /><code>{"bool isAlwaysOnFocus"}</code> | Editor only: makes the game act as if the window always has focus. |

<details>
<summary>32 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-afterstartaction" /><code>{"private "}<Link to="/game-api/types/global-m-o/menusettings-afterstartactiontype">{"MenuSettings.AfterStartActionType"}</Link>{" afterStartAction"}</code> |
| <Link id="m-distancetohapticstrength" /><code>{"private AnimationCurve distanceToHapticStrength"}</code> |
| <Link id="m-distancetoscreenfade" /><code>{"private AnimationCurve distanceToScreenFade"}</code> |
| <Link id="m-elementnormalmaterial" /><code>{"private Material elementNormalMaterial"}</code> |
| <Link id="m-elementselectedmaterial" /><code>{"private Material elementSelectedMaterial"}</code> |
| <Link id="m-emptypingbarcolor" /><code>{"private Color emptyPingBarColor"}</code> |
| <Link id="m-gamescenes" /><code>{"private string[] gameScenes"}</code> |
| <Link id="m-instantiatingplatformmanagertask" /><code>{"private static TaskCompletionSource<GameObject> instantiatingPlatformManagerTask"}</code> |
| <Link id="m-isclearingsavewhendirectlaunching" /><code>{"private bool isClearingSaveWhenDirectLaunching"}</code> |
| <Link id="m-isdisablingastarcalculation" /><code>{"private bool isDisablingAstarCalculation"}</code> |
| <Link id="m-isdisablingoculusservicesineditor" /><code>{"private bool isDisablingOculusServicesInEditor"}</code> |
| <Link id="m-isforcedheadless" /><code>{"private bool isForcedHeadless"}</code> |
| <Link id="m-isjoiningtutorialfirsttimeineditor" /><code>{"private bool isJoiningTutorialFirstTimeInEditor"}</code> |
| <Link id="m-isrequestingowneditemsineditor" /><code>{"private bool isRequestingOwnedItemsInEditor"}</code> |
| <Link id="m-minpingperlevel" /><code>{"private int[] minPingPerLevel"}</code> |
| <Link id="m-minpointerprefabsizeforinflation" /><code>{"private float minPointerPrefabSizeForInflation"}</code> |
| <Link id="m-nointernetscene" /><code>{"private string noInternetScene"}</code> |
| <Link id="m-pingbarcolor" /><code>{"private Gradient pingBarColor"}</code> |
| <Link id="m-pingcolorhighlight" /><code>{"private Color pingColorHighlight"}</code> |
| <Link id="m-platformmanager" /><code>{"private static GameObject platformManager"}</code> |
| <Link id="m-playabilitycolorgradient" /><code>{"private Gradient playabilityColorGradient"}</code> |
| <Link id="m-pointerprefabinflationmultiplier" /><code>{"private float pointerPrefabInflationMultiplier"}</code> |
| <Link id="m-registrationscene" /><code>{"private string registrationScene"}</code> |
| <Link id="m-selectionorbinfacematerial" /><code>{"private Material selectionOrbInFaceMaterial"}</code> |
| <Link id="m-selectionorbinvalidmaterial" /><code>{"private Material selectionOrbInvalidMaterial"}</code> |
| <Link id="m-selectionorbletgothreshold" /><code>{"private float selectionOrbLetGoThreshold"}</code> |
| <Link id="m-selectionorbvalidmaterial" /><code>{"private Material selectionOrbValidMaterial"}</code> |
| <Link id="m-startlocaltestonserverjoinfail" /><code>{"private bool startLocalTestOnServerJoinFail"}</code> |
| <Link id="m-startmenusceneonserverjoinfail" /><code>{"private bool startMenuSceneOnServerJoinFail"}</code> |
| <Link id="m-toggleoffcolor" /><code>{"private Color toggleOffColor"}</code> |
| <Link id="m-toggleoncolor" /><code>{"private Color toggleOnColor"}</code> |
| <Link id="m-vrmenuscene" /><code>{"private string vrMenuScene"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-afterstartaction-2" /><code><Link to="/game-api/types/global-m-o/menusettings-afterstartactiontype">{"MenuSettings.AfterStartActionType"}</Link>{" AfterStartAction { get; set; }"}</code> | What the game does after startup in a dev build (none, local test, local server, join local server). Read only in debug inspector. |
| <Link id="m-distancetohapticstrength-2" /><code>{"AnimationCurve DistanceToHapticstrength { get; }"}</code> | Curve from distance to haptic strength, used by the menu selection orbs. |
| <Link id="m-distancetoscreenfade-2" /><code>{"AnimationCurve DistanceToScreenFade { get; }"}</code> | Curve from distance to screen fade amount, used by the menu selection orbs. |
| <Link id="m-elementnormalmaterial-2" /><code>{"Material ElementNormalMaterial { get; }"}</code> | Material for a server list element that is not selected. |
| <Link id="m-elementselectedmaterial-2" /><code>{"Material ElementSelectedMaterial { get; }"}</code> | Material for the selected server list element. |
| <Link id="m-emptypingbarcolor-2" /><code>{"Color EmptyPingBarColor { get; }"}</code> | Colour of the unfilled bars in a server's ping indicator. |
| <Link id="m-gamescenes-2" /><code>{"string[] GameScenes { get; }"}</code> | Names of the scenes that can be loaded as a game world. |
| <Link id="m-isdisablingastarcalculation-2" /><code>{"bool IsDisablingAstarCalculation { get; }"}</code> | Editor only: skips A* pathfinding work in play mode to start faster, which stops creature pathfinding. |
| <Link id="m-isdisablingoculusservicesineditor-2" /><code>{"bool IsDisablingOculusServicesInEditor { get; }"}</code> | Editor only: skips Oculus services startup in play mode to start faster. |
| <Link id="m-isforcedheadless-2" /><code>{"bool IsForcedHeadless { get; }"}</code> | Forces headless mode. |
| <Link id="m-isjoiningtutorialfirsttimeineditor-2" /><code>{"bool IsJoiningTutorialFirstTimeInEditor { get; }"}</code> | Editor only: whether a first-time player is sent to the tutorial. |
| <Link id="m-isrequestingowneditemsineditor-2" /><code>{"bool IsRequestingOwnedItemsInEditor { get; }"}</code> | Editor only: whether to fetch the player's owned items. |
| <Link id="m-localgamescene" /><code>{"int LocalGameScene { get; }"}</code> | Index in `GameScenes` of the active scene, or -1 (with an error log) if it is not a game scene. |
| <Link id="m-localgamescenename" /><code>{"string LocalGameSceneName { get; }"}</code> | Name of the active game scene, from `GameScenes` at `LocalGameScene`. |
| <Link id="m-menuscenename" /><code>{"string MenuSceneName { get; }"}</code> | Name of the VR main menu scene. |
| <Link id="m-minpingperlevel-2" /><code>{"int[] MinPingPerLevel { get; }"}</code> | Ping thresholds in ms for each ping bar level (default 35, 100, 250). |
| <Link id="m-minpointerprefabsizeforinflation-2" /><code>{"float MinPointerPrefabSizeForInflation { get; }"}</code> | Minimum pointer bounds size before `PointerPrefabInflationMultiplier` is applied. |
| <Link id="m-nointernetscene-2" /><code>{"string NoInternetScene { get; }"}</code> | Name of the scene shown when there is no internet connection. |
| <Link id="m-pingbarcolor-2" /><code>{"Gradient PingBarColor { get; }"}</code> | Gradient used to colour the ping bars. |
| <Link id="m-pingcolorhighlight-2" /><code>{"Color PingColorHighlight { get; }"}</code> | Highlight colour for the ping indicator. |
| <Link id="m-playabilitycolorgradient-2" /><code>{"Gradient PlayabilityColorGradient { get; }"}</code> | Gradient a server element evaluates with the server's playability value to pick its colour. |
| <Link id="m-pointerprefabinflationmultiplier-2" /><code>{"float PointerPrefabInflationMultiplier { get; }"}</code> | How much pointer target bounds are scaled up to make small objects easier to point at. |
| <Link id="m-registrationscene-2" /><code>{"string RegistrationScene { get; }"}</code> | Name of the account registration scene. |
| <Link id="m-selectionorbinfacematerial-2" /><code>{"Material SelectionOrbInFaceMaterial { get; }"}</code> | Material for a menu selection orb held close to the face. |
| <Link id="m-selectionorbinvalidmaterial-2" /><code>{"Material SelectionOrbInvalidMaterial { get; }"}</code> | Material for a menu selection orb in an invalid spot. |
| <Link id="m-selectionorbletgothreshold-2" /><code>{"float SelectionOrbLetGoThreshold { get; }"}</code> | Distance from the head within which a held action orb counts as used when let go. |
| <Link id="m-selectionorbvalidmaterial-2" /><code>{"Material SelectionOrbValidMaterial { get; }"}</code> | Material for a menu selection orb in a valid spot. |
| <Link id="m-startlocaltestonserverjoinfail-2" /><code>{"bool StartLocalTestOnServerJoinFail { get; }"}</code> | If set, startup falls back to a local test when joining a server fails. |
| <Link id="m-startmenusceneonserverjoinfail-2" /><code>{"bool StartMenuSceneOnServerJoinFail { get; }"}</code> | If set, startup falls back to the menu scene when joining a server fails. |
| <Link id="m-toggleoffcolor-2" /><code>{"Color ToggleOffColor { get; }"}</code> | Colour of a server selection toggle when off. |
| <Link id="m-toggleoncolor-2" /><code>{"Color ToggleOnColor { get; }"}</code> | Colour of a server selection toggle when on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlestartupactionasync" /><code>{"async Task<bool> HandleStartupActionAsync()"}</code> | Stub in this build: always returns false without doing anything. |
| <Link id="m-instantiateplatformmanagerasync" /><code>{"static async Task InstantiatePlatformManagerAsync()"}</code> | Loads the addressable `<platform>/Platform Manager` prefab once, keeps it across scene loads, and waits if a load is already running. |
| <Link id="m-localgameserveraccess" /><code><Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" LocalGameServerAccess(int sceneIndex = -1)"}</code> | Server access for a local loopback server, for a scene index or the active scene. Used by local test commands. |
| <Link id="m-localgameserverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" LocalGameServerInfo(int sceneIndex = -1)"}</code> | Builds the server info for a local dev server: loopback address, port 1757, the given or active scene index. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-initlocalserversave" /><code>{"private void InitLocalServerSave()"}</code> |

</details>
