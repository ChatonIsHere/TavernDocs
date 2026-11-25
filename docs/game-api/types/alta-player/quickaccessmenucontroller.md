---
title: "QuickAccessMenuController"
description: "Alta.QuickAccessActions.QuickAccessMenuController, a ControllerExtension on each hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuController

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

`Alta.QuickAccessActions.QuickAccessMenuController`, a `ControllerExtension` on each hand.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)
- **Documented in** [Quick access menu](/game-api/items/quick-access-menu#quickaccessmenucontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickAccessMenuController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedclosestmenu" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" cachedClosestMenu"}</code> |  |
| <Link id="m-currentcentertitlebackground" /><code>{"private GameObject currentCenterTitleBackground"}</code> |  |
| <Link id="m-currentnestinglevel" /><code>{"private int currentNestingLevel"}</code> |  |
| <Link id="m-devquickaccessmenus" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] devQuickAccessMenus"}</code> |  |
| <Link id="m-hasdevtools" /><code>{"private bool hasDevTools"}</code> |  |
| <Link id="m-iscurrentlylerpingposition" /><code>{"private bool isCurrentlyLerpingPosition"}</code> |  |
| <Link id="m-iscurrentlylerpingrotation" /><code>{"private bool isCurrentlyLerpingRotation"}</code> |  |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-othercontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenucontroller">{"QuickAccessMenuController"}</Link>{" otherController"}</code> |  |
| <Link id="m-quickaccessmenuparentprefab" /><code>{"private GameObject quickAccessMenuParentPrefab"}</code> |  |
| <Link id="m-quickaccessmenus" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] quickAccessMenus"}</code> |  |
| <Link id="m-radialspaceindegrees" /><code>{"private const float RadialSpaceInDegrees"}</code> |  |
| <Link id="m-roottransform" /><code>{"private Transform rootTransform"}</code> |  |
| <Link id="m-runninginput" /><code>{"private Coroutine runningInput"}</code> |  |
| <Link id="m-spawnedmenus" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> spawnedMenus"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-centeredtitledisplay" /><code><Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" CenteredTitleDisplay { get; private set; }"}</code> |  |
| <Link id="m-menusparent" /><code>{"Transform MenusParent { get; private set; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/quickaccessmenusettings">{"QuickAccessMenuSettings"}</Link>{" Settings { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-newbubblemarked" /><code>{"event Action<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> newBubbleMarked"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnested" /><code>{"void AddNested(IEnumerable<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> newBubbles)"}</code> |  |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> |  |
| <Link id="m-removenested" /><code>{"void RemoveNested(IEnumerable<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> newBubbles)"}</code> |  |
| <Link id="m-setcenteredtitle" /><code>{"void SetCenteredTitle(string title)"}</code> |  |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> |  |
| <Link id="m-buttonpress" /><code>{"private void ButtonPress("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |
| <Link id="m-buttonrelease" /><code>{"private void ButtonRelease("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> |  |
| <Link id="m-calculateanglestepbetweenbubbles" /><code>{"private static Quaternion CalculateAngleStepBetweenBubbles(Quaternion cameraRotation, int bubbleCount)"}</code> |  |
| <Link id="m-closeandclear" /><code>{"private void CloseAndClear()"}</code> |  |
| <Link id="m-closeandtryactivateselectedmenu" /><code>{"private void CloseAndTryActivateSelectedMenu()"}</code> |  |
| <Link id="m-closestmenuhaschanged" /><code>{"private bool ClosestMenuHasChanged(Vector3 controllerPosition, out "}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" foundMenu)"}</code> |  |
| <Link id="m-deactivatecentermenu" /><code>{"private void DeactivateCenterMenu()"}</code> |  |
| <Link id="m-getformattedtitle" /><code>{"private string GetFormattedTitle(string title)"}</code> |  |
| <Link id="m-getnewrotation" /><code>{"private Quaternion GetNewRotation(Quaternion rotation, Quaternion targetRotation)"}</code> |  |
| <Link id="m-getnonignoredbubblecount" /><code>{"private int GetNonIgnoredBubbleCount()"}</code> |  |
| <Link id="m-gettargetrotation" /><code>{"private static Quaternion GetTargetRotation(Vector3 position)"}</code> |  |
| <Link id="m-getupdatedtargetrotation" /><code>{"private Quaternion GetUpdatedTargetRotation(Quaternion currentRotation)"}</code> |  |
| <Link id="m-initializecentertitlebackground" /><code>{"private void InitializeCenterTitleBackground()"}</code> |  |
| <Link id="m-isperformingaccessibledocksinput" /><code>{"private bool IsPerformingAccessibleDocksInput()"}</code> |  |
| <Link id="m-markselected" /><code>{"private void MarkSelected(Vector3 controllerPosition)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-positionmenuparent" /><code>{"private void PositionMenuParent(Transform controllerTransform)"}</code> |  |
| <Link id="m-spawnbubbles" /><code>{"private void SpawnBubbles("}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] menus, Quaternion step, ref Vector3 fromOrigin)"}</code> |  |
| <Link id="m-togglebuttonpress" /><code>{"private void ToggleButtonPress("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |
| <Link id="m-updatemarkclosestmenu" /><code>{"private void UpdateMarkClosestMenu("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" newClosestMenu)"}</code> |  |
| <Link id="m-updatenestinglevel" /><code>{"private void UpdateNestingLevel()"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition(Vector3 controllerPosition)"}</code> |  |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> |  |
| <Link id="m-waitforinput" /><code>{"private IEnumerator WaitForInput(Transform controllerTransform) (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuController`:

[`QuickAccessMenuBubble.Controller`](/game-api/types/alta-player/quickaccessmenububble#m-controller), [`QuickAccessMenuBubble.UpdateContent`](/game-api/types/alta-player/quickaccessmenububble#m-updatecontent).
