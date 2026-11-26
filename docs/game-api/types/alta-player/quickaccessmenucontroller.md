---
title: "QuickAccessMenuController"
description: "Client: the radial quick-access menu on one hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuController

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Client: the radial quick-access menu on one hand. Holding the menu button spawns bubbles around the hand; releasing runs the closest bubble's action. A controller extension, set up only for the local player.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)
- **Documented in** [Quick access menu](/game-api/items/quick-access-menu#quickaccessmenucontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickAccessMenuController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedclosestmenu" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" cachedClosestMenu"}</code> | Bubble currently marked as selected, or null. |
| <Link id="m-currentcentertitlebackground" /><code>{"private GameObject currentCenterTitleBackground"}</code> | Background object behind the centre title. |
| <Link id="m-currentnestinglevel" /><code>{"private int currentNestingLevel"}</code> | Deepest nesting level among open bubbles; widens the follow distance. |
| <Link id="m-devquickaccessmenus" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] devQuickAccessMenus"}</code> | Extra actions shown only to developers. |
| <Link id="m-hasdevtools" /><code>{"private bool hasDevTools"}</code> | True in the editor or when the signed-in user has the developer role. |
| <Link id="m-iscurrentlylerpingposition" /><code>{"private bool isCurrentlyLerpingPosition"}</code> | True while the menu is moving to catch up with the hand. |
| <Link id="m-iscurrentlylerpingrotation" /><code>{"private bool isCurrentlyLerpingRotation"}</code> | True while the menu is turning to face the camera. |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | True while the menu is shown. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-othercontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenucontroller">{"QuickAccessMenuController"}</Link>{" otherController"}</code> | The other hand's menu controller, so only one menu is open at a time. |
| <Link id="m-quickaccessmenuparentprefab" /><code>{"private GameObject quickAccessMenuParentPrefab"}</code> | Prefab created as `MenusParent`. |
| <Link id="m-quickaccessmenus" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] quickAccessMenus"}</code> | The actions shown as bubbles. |
| <Link id="m-radialspaceindegrees" /><code>{"private const float RadialSpaceInDegrees"}</code> | Full circle the bubbles are spread over (360). |
| <Link id="m-roottransform" /><code>{"private Transform rootTransform"}</code> | The player's transform; the menu parent is parented to it. |
| <Link id="m-runninginput" /><code>{"private Coroutine runningInput"}</code> | The running `WaitForInput` coroutine. |
| <Link id="m-spawnedmenus" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> spawnedMenus"}</code> | Bubbles currently open, including nested ones. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-centeredtitledisplay" /><code><Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" CenteredTitleDisplay { get; private set; }"}</code> | Text in the middle of the menu that shows the selected bubble's title. |
| <Link id="m-menusparent" /><code>{"Transform MenusParent { get; private set; }"}</code> | Transform the bubbles spawn under; follows the hand while open. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/quickaccessmenusettings">{"QuickAccessMenuSettings"}</Link>{" Settings { get; private set; }"}</code> | The global `QuickAccessMenuSettings`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-newbubblemarked" /><code>{"event Action<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> newBubbleMarked"}</code> | Raised when a new bubble is selected. Cleared when the menu closes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnested" /><code>{"void AddNested(IEnumerable<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> newBubbles)"}</code> | Adds a nested submenu's bubbles to the selectable list. |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | Local player only: creates the menu parent, binds the menu buttons, works out dev access and initializes every action. |
| <Link id="m-removenested" /><code>{"void RemoveNested(IEnumerable<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> newBubbles)"}</code> | Removes a nested submenu's bubbles from the selectable list. |
| <Link id="m-setcenteredtitle" /><code>{"void SetCenteredTitle(string title)"}</code> | Shows a title in the menu's centre, or hides the text when it's empty. |

<details>
<summary>25 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | Closes any open menu on either hand and spawns the bubbles around the grip point, unless both menu buttons are held with accessibility on. |
| <Link id="m-buttonpress" /><code>{"private void ButtonPress("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Opens the menu when the quick-access button is pressed. |
| <Link id="m-buttonrelease" /><code>{"private void ButtonRelease("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> | Runs the selected bubble on release, or just closes if the input was disabled. |
| <Link id="m-calculateanglestepbetweenbubbles" /><code>{"private static Quaternion CalculateAngleStepBetweenBubbles(Quaternion cameraRotation, int bubbleCount)"}</code> | Rotation between neighbouring bubbles: 360 degrees split by the bubble count, around the camera's view axis. |
| <Link id="m-closeandclear" /><code>{"private void CloseAndClear()"}</code> | Closes the menu: stops input, releases every bubble, clears `newBubbleMarked` subscribers and hides the title. |
| <Link id="m-closeandtryactivateselectedmenu" /><code>{"private void CloseAndTryActivateSelectedMenu()"}</code> | Runs the selected bubble's action (playing select effects on success), then closes both hands' menus. |
| <Link id="m-closestmenuhaschanged" /><code>{"private bool ClosestMenuHasChanged(Vector3 controllerPosition, out "}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" foundMenu)"}</code> | Finds the bubble nearest the hand within the max distance; true if it differs from the cached one. |
| <Link id="m-deactivatecentermenu" /><code>{"private void DeactivateCenterMenu()"}</code> | Hides the title background and clears the title. |
| <Link id="m-getformattedtitle" /><code>{"private string GetFormattedTitle(string title)"}</code> | Truncates a title to the max character count with an ellipsis, logging a warning. |
| <Link id="m-getnewrotation" /><code>{"private Quaternion GetNewRotation(Quaternion rotation, Quaternion targetRotation)"}</code> | Rotates towards the target, starting to lerp when the angle passes the max and snapping when close. |
| <Link id="m-getnonignoredbubblecount" /><code>{"private int GetNonIgnoredBubbleCount()"}</code> | Counts actions that aren't ignored, including dev actions when dev tools are on. |
| <Link id="m-gettargetrotation" /><code>{"private static Quaternion GetTargetRotation(Vector3 position)"}</code> | Rotation that makes the menu face the camera. |
| <Link id="m-getupdatedtargetrotation" /><code>{"private Quaternion GetUpdatedTargetRotation(Quaternion currentRotation)"}</code> | Target rotation lerped from the current one by the settings' rotation speed. |
| <Link id="m-initializecentertitlebackground" /><code>{"private void InitializeCenterTitleBackground()"}</code> | Creates the title background under the menu parent once. |
| <Link id="m-isperformingaccessibledocksinput" /><code>{"private bool IsPerformingAccessibleDocksInput()"}</code> | True when accessibility is on and both hands hold the menu button (the accessible docks gesture), which blocks the menu. |
| <Link id="m-markselected" /><code>{"private void MarkSelected(Vector3 controllerPosition)"}</code> | Marks the bubble nearest the hand as selected, or unmarks when none is in range. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Closes the menu. |
| <Link id="m-positionmenuparent" /><code>{"private void PositionMenuParent(Transform controllerTransform)"}</code> | Moves the menu parent to the hand and turns it towards the camera. |
| <Link id="m-spawnbubbles" /><code>{"private void SpawnBubbles("}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] menus, Quaternion step, ref Vector3 fromOrigin)"}</code> | Spawns a bubble for each non-ignored action, stepping around the circle. |
| <Link id="m-togglebuttonpress" /><code>{"private void ToggleButtonPress("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Toggle input: opens the menu, or if open runs the selected bubble and closes. |
| <Link id="m-updatemarkclosestmenu" /><code>{"private void UpdateMarkClosestMenu("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" newClosestMenu)"}</code> | Moves the selection mark to a new bubble and raises `newBubbleMarked`. |
| <Link id="m-updatenestinglevel" /><code>{"private void UpdateNestingLevel()"}</code> | Sets the nesting level to the deepest bubble's level. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition(Vector3 controllerPosition)"}</code> | Lerps the menu towards the hand once it drifts past the allowed distance for the nesting level. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | Turns the menu to keep facing the camera. |
| <Link id="m-waitforinput" /><code>{"private IEnumerator WaitForInput(Transform controllerTransform) (iterator)"}</code> | Coroutine while open: each frame updates selection, rotation and position from the hand. |

</details>

## Used in

Members of other types that take, return or hold a `QuickAccessMenuController`:

[`QuickAccessMenuBubble.Controller`](/game-api/types/alta-player/quickaccessmenububble#m-controller), [`QuickAccessMenuBubble.UpdateContent`](/game-api/types/alta-player/quickaccessmenububble#m-updatecontent).
