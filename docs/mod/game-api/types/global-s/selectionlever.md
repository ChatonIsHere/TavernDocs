---
title: "SelectionLever"
description: "A lever with a fixed number of positions between a min and max angle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectionLever

A **class** in `Root.Township`, the global namespace.

A lever with a fixed number of positions between a min and max angle. Snaps to the nearest position on release and fires events. Not networked by itself.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SelectionLever()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleoffset" /><code>{"private float angleOffset"}</code> | Degrees added to the hand angle in `GetLeverAngle`. |
| <Link id="m-clamplever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" clampLever"}</code> | Registered late update for `ClampLever` while the handle is held. |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Backing field for `CurrentAngle`. |
| <Link id="m-debugindex" /><code>{"private int debugIndex"}</code> | Position used by the editor debug button. |
| <Link id="m-grippoint" /><code>{"private Transform gripPoint"}</code> | Grip point of the hand holding the handle. Null when not held. |
| <Link id="m-handle" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> | Backing field for `Handle`. |
| <Link id="m-handleparent" /><code>{"private Transform handleParent"}</code> | Transform the handle goes back under when let go. |
| <Link id="m-isresetvelocityonrelease" /><code>{"private bool isResetVelocityOnRelease"}</code> | Stops the handle's motion and makes it kinematic on release. True by default. |
| <Link id="m-issettingtodebugindex" /><code>{"private bool isSettingToDebugIndex"}</code> | Editor button that runs `SetDebugIndex`. |
| <Link id="m-isusingcustomangles" /><code>{"private bool isUsingCustomAngles"}</code> | If set, `selectionAngles` is not recalculated in the editor. |
| <Link id="m-lever" /><code>{"private Transform lever"}</code> | Transform rotated to show the lever's angle. |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | Backing field for `MaxAngle`. 160 by default. |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | Backing field for `MinAngle`. 15 by default. |
| <Link id="m-notzeroevent" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" notZeroEvent"}</code> | Unity event raised with whether the new selection is not 0. |
| <Link id="m-numberofoptions" /><code>{"private int numberOfOptions"}</code> | Backing field for `NumberOfOptions`. 2 by default. |
| <Link id="m-perindex" /><code>{"private float perIndex"}</code> | Degrees between positions. |
| <Link id="m-preventinteractionwhenoverzero" /><code>{"private bool preventInteractionWhenOverZero"}</code> | If set, the handle can't be grabbed while the selection is above 0 and is dropped when it moves there. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Distance from the lever to the handle, measured in `Start`. Not read after that. |
| <Link id="m-runselectiononlyonnotzero" /><code>{"private bool runSelectionOnlyOnNotZero"}</code> | If set, `selectionEvent` only fires for selections above 0. |
| <Link id="m-selectionangles" /><code>{"private float[] selectionAngles"}</code> | Backing field for `Selection`: the angle of each position. |
| <Link id="m-selectionevent" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" selectionEvent"}</code> | Unity event raised with the new selection index. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle-2" /><code>{"float CurrentAngle { get; }"}</code> | The lever's angle while being held, clamped to the range. |
| <Link id="m-currentselection" /><code>{"int CurrentSelection { get; private set; }"}</code> | Index of the position the lever is set to. |
| <Link id="m-handle-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Handle { get; }"}</code> | The `Pickup` the player grabs to move the lever. |
| <Link id="m-maxangle-2" /><code>{"float MaxAngle { get; }"}</code> | Angle of the last position. |
| <Link id="m-minangle-2" /><code>{"float MinAngle { get; }"}</code> | Angle of the first position. |
| <Link id="m-numberofoptions-2" /><code>{"int NumberOfOptions { get; }"}</code> | How many positions the lever has. |
| <Link id="m-selection" /><code>{"float[] Selection { get; }"}</code> | The angle of each position. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectionchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{", int, int> SelectionChanged"}</code> | Raised with the lever, old index and new index when the selection changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setlevertoindex" /><code>{"void SetLeverToIndex(int index)"}</code> | Moves the lever to a position, clamped to the range, and fires the events if it changed. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateperindex" /><code>{"private void CalculatePerIndex()"}</code> | Works out the angle between positions from the range and option count. |
| <Link id="m-clamplever-2" /><code>{"private void ClampLever()"}</code> | Late update while held: turns the lever to follow the hand, clamped to the range. |
| <Link id="m-filterwhenactive" /><code>{"private void FilterWhenActive("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter that refuses grabs while the selection is above 0. Used with `preventInteractionWhenOverZero`. |
| <Link id="m-getleverangle" /><code>{"private float GetLeverAngle()"}</code> | Angle of the gripping hand around the lever's X axis, plus `angleOffset`. |
| <Link id="m-limitlever" /><code>{"private void LimitLever("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On grab, stores the hand's grip point and starts `ClampLever` each late update. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills `selectionAngles` evenly across the range, unless custom angles are used. |
| <Link id="m-resetvelocity" /><code>{"private void ResetVelocity()"}</code> | Stops the handle's rigidbody and makes it kinematic. |
| <Link id="m-selectonrelease" /><code>{"private void SelectOnRelease("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On release, snaps to the nearest position, resets the handle's velocity and puts it back on its parent. |
| <Link id="m-setdebugindex" /><code>{"private void SetDebugIndex()"}</code> | Editor button: moves the lever to `debugIndex`. |
| <Link id="m-setleverangle" /><code>{"private void SetLeverAngle(float angle)"}</code> | Sets the lever's local X rotation. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Measures the handle radius, works out the spacing and hooks the handle's grab, release and filter. |

</details>

## Used in

Members of other types that take, return or hold a `SelectionLever`:

[`CustomScroller.lever`](/mod/game-api/types/alta-menus/customscroller#m-lever), [`MenuToggleSetting.lever`](/mod/game-api/types/alta-menus/menutogglesetting#m-lever), [`MenuToggleSetting.ToggleSelection`](/mod/game-api/types/alta-menus/menutogglesetting#m-toggleselection), [`ScrollerEnumMenuSetting.lever`](/mod/game-api/types/alta-menus/scrollerenummenusetting#m-lever), [`ScrollerSelector.lever`](/mod/game-api/types/alta-menus/scrollerselector#m-lever), [`StandardFloatAsEnum.lever`](/mod/game-api/types/alta-menus/standardfloatasenum#m-lever), [`LeverToEvents.TriggerEvents`](/mod/game-api/types/global-i-l/levertoevents#m-triggerevents), [`MultiLeverPanel.HandleSelection`](/mod/game-api/types/global-m-o/multileverpanel#m-handleselection), [`MultiLeverPanel.levers`](/mod/game-api/types/global-m-o/multileverpanel#m-levers), [`RuntimeConsole.lever`](/mod/game-api/types/global-q-r/runtimeconsole#m-lever), [`RuntimeConsole.OnLeverSelectionChanged`](/mod/game-api/types/global-q-r/runtimeconsole#m-onleverselectionchanged), [`ServerSelectionMenu.boardLevers`](/mod/game-api/types/global-s/serverselectionmenu#m-boardlevers), [`SettingsPanel.HandleLeverChanged`](/mod/game-api/types/global-s/settingspanel#m-handleleverchanged), [`SettingsPanel.SettingsPanelConfiguration.lever`](/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration#m-lever), [`SettingsPanel.SettingsPanelConfiguration.Lever`](/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration#m-lever-2), [`ThrottleCounter.selectionLever`](/mod/game-api/types/global-t-x/throttlecounter#m-selectionlever).
