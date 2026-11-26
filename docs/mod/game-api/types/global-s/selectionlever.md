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
| <Link id="m-ctor" /><code>{"SelectionLever()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleoffset" /><code>{"private float angleOffset"}</code> | <span className="api-desc">Degrees added to the hand angle in `GetLeverAngle`.</span> |
| <Link id="m-clamplever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" clampLever"}</code> | <span className="api-desc">Registered late update for `ClampLever` while the handle is held.</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Backing field for `CurrentAngle`.</span> |
| <Link id="m-debugindex" /><code>{"private int debugIndex"}</code> | <span className="api-desc">Position used by the editor debug button.</span> |
| <Link id="m-grippoint" /><code>{"private Transform gripPoint"}</code> | <span className="api-desc">Grip point of the hand holding the handle. Null when not held.</span> |
| <Link id="m-handle" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> | <span className="api-desc">Backing field for `Handle`.</span> |
| <Link id="m-handleparent" /><code>{"private Transform handleParent"}</code> | <span className="api-desc">Transform the handle goes back under when let go.</span> |
| <Link id="m-isresetvelocityonrelease" /><code>{"private bool isResetVelocityOnRelease"}</code> | <span className="api-desc">Stops the handle's motion and makes it kinematic on release. True by default.</span> |
| <Link id="m-issettingtodebugindex" /><code>{"private bool isSettingToDebugIndex"}</code> | <span className="api-desc">Editor button that runs `SetDebugIndex`.</span> |
| <Link id="m-isusingcustomangles" /><code>{"private bool isUsingCustomAngles"}</code> | <span className="api-desc">If set, `selectionAngles` is not recalculated in the editor.</span> |
| <Link id="m-lever" /><code>{"private Transform lever"}</code> | <span className="api-desc">Transform rotated to show the lever's angle.</span> |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> | <span className="api-desc">Backing field for `MaxAngle`. 160 by default.</span> |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | <span className="api-desc">Backing field for `MinAngle`. 15 by default.</span> |
| <Link id="m-notzeroevent" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" notZeroEvent"}</code> | <span className="api-desc">Unity event raised with whether the new selection is not 0.</span> |
| <Link id="m-numberofoptions" /><code>{"private int numberOfOptions"}</code> | <span className="api-desc">Backing field for `NumberOfOptions`. 2 by default.</span> |
| <Link id="m-perindex" /><code>{"private float perIndex"}</code> | <span className="api-desc">Degrees between positions.</span> |
| <Link id="m-preventinteractionwhenoverzero" /><code>{"private bool preventInteractionWhenOverZero"}</code> | <span className="api-desc">If set, the handle can't be grabbed while the selection is above 0 and is dropped when it moves there.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Distance from the lever to the handle, measured in `Start`. Not read after that.</span> |
| <Link id="m-runselectiononlyonnotzero" /><code>{"private bool runSelectionOnlyOnNotZero"}</code> | <span className="api-desc">If set, `selectionEvent` only fires for selections above 0.</span> |
| <Link id="m-selectionangles" /><code>{"private float[] selectionAngles"}</code> | <span className="api-desc">Backing field for `Selection`: the angle of each position.</span> |
| <Link id="m-selectionevent" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" selectionEvent"}</code> | <span className="api-desc">Unity event raised with the new selection index.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle-2" /><code>{"float CurrentAngle { get; }"}</code> | <span className="api-desc">The lever's angle while being held, clamped to the range.</span> |
| <Link id="m-currentselection" /><code>{"int CurrentSelection { get; private set; }"}</code> | <span className="api-desc">Index of the position the lever is set to.</span> |
| <Link id="m-handle-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Handle { get; }"}</code> | <span className="api-desc">The `Pickup` the player grabs to move the lever.</span> |
| <Link id="m-maxangle-2" /><code>{"float MaxAngle { get; }"}</code> | <span className="api-desc">Angle of the last position.</span> |
| <Link id="m-minangle-2" /><code>{"float MinAngle { get; }"}</code> | <span className="api-desc">Angle of the first position.</span> |
| <Link id="m-numberofoptions-2" /><code>{"int NumberOfOptions { get; }"}</code> | <span className="api-desc">How many positions the lever has.</span> |
| <Link id="m-selection" /><code>{"float[] Selection { get; }"}</code> | <span className="api-desc">The angle of each position.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectionchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{", int, int> SelectionChanged"}</code> | <span className="api-desc">Raised with the lever, old index and new index when the selection changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setlevertoindex" /><code>{"void SetLeverToIndex(int index)"}</code> | <span className="api-desc">Moves the lever to a position, clamped to the range, and fires the events if it changed.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateperindex" /><code>{"private void CalculatePerIndex()"}</code> | <span className="api-desc">Works out the angle between positions from the range and option count.</span> |
| <Link id="m-clamplever-2" /><code>{"private void ClampLever()"}</code> | <span className="api-desc">Late update while held: turns the lever to follow the hand, clamped to the range.</span> |
| <Link id="m-filterwhenactive" /><code>{"private void FilterWhenActive("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter that refuses grabs while the selection is above 0. Used with `preventInteractionWhenOverZero`.</span> |
| <Link id="m-getleverangle" /><code>{"private float GetLeverAngle()"}</code> | <span className="api-desc">Angle of the gripping hand around the lever's X axis, plus `angleOffset`.</span> |
| <Link id="m-limitlever" /><code>{"private void LimitLever("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On grab, stores the hand's grip point and starts `ClampLever` each late update.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills `selectionAngles` evenly across the range, unless custom angles are used.</span> |
| <Link id="m-resetvelocity" /><code>{"private void ResetVelocity()"}</code> | <span className="api-desc">Stops the handle's rigidbody and makes it kinematic.</span> |
| <Link id="m-selectonrelease" /><code>{"private void SelectOnRelease("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On release, snaps to the nearest position, resets the handle's velocity and puts it back on its parent.</span> |
| <Link id="m-setdebugindex" /><code>{"private void SetDebugIndex()"}</code> | <span className="api-desc">Editor button: moves the lever to `debugIndex`.</span> |
| <Link id="m-setleverangle" /><code>{"private void SetLeverAngle(float angle)"}</code> | <span className="api-desc">Sets the lever's local X rotation.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Measures the handle radius, works out the spacing and hooks the handle's grab, release and filter.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SelectionLever`:

<div className="api-used-in">

[`CustomScroller.lever`](/mod/game-api/types/alta-menus/customscroller#m-lever), [`MenuToggleSetting.lever`](/mod/game-api/types/alta-menus/menutogglesetting#m-lever), [`MenuToggleSetting.ToggleSelection`](/mod/game-api/types/alta-menus/menutogglesetting#m-toggleselection), [`ScrollerEnumMenuSetting.lever`](/mod/game-api/types/alta-menus/scrollerenummenusetting#m-lever), [`ScrollerSelector.lever`](/mod/game-api/types/alta-menus/scrollerselector#m-lever), [`StandardFloatAsEnum.lever`](/mod/game-api/types/alta-menus/standardfloatasenum#m-lever), [`LeverToEvents.TriggerEvents`](/mod/game-api/types/global-i-l/levertoevents#m-triggerevents), [`MultiLeverPanel.HandleSelection`](/mod/game-api/types/global-m-o/multileverpanel#m-handleselection), [`MultiLeverPanel.levers`](/mod/game-api/types/global-m-o/multileverpanel#m-levers), [`RuntimeConsole.lever`](/mod/game-api/types/global-q-r/runtimeconsole#m-lever), [`RuntimeConsole.OnLeverSelectionChanged`](/mod/game-api/types/global-q-r/runtimeconsole#m-onleverselectionchanged), [`ServerSelectionMenu.boardLevers`](/mod/game-api/types/global-s/serverselectionmenu#m-boardlevers), [`SettingsPanel.HandleLeverChanged`](/mod/game-api/types/global-s/settingspanel#m-handleleverchanged), [`SettingsPanel.SettingsPanelConfiguration.lever`](/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration#m-lever), [`SettingsPanel.SettingsPanelConfiguration.Lever`](/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration#m-lever-2), [`ThrottleCounter.selectionLever`](/mod/game-api/types/global-t-x/throttlecounter#m-selectionlever).

</div>
