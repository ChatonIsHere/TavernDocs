---
title: "SelectionLever"
description: "A lever with a fixed number of positions between a min and max angle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectionLever

A **class** in `Root.Township`, no namespace.

A lever with a fixed number of positions between a min and max angle. Snaps to the nearest position on release and fires events. Not networked by itself.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SelectionLever()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angleoffset" /><code>{"private float angleOffset"}</code> |  |
| <Link id="m-clamplever" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" clampLever"}</code> |  |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> |  |
| <Link id="m-debugindex" /><code>{"private int debugIndex"}</code> |  |
| <Link id="m-grippoint" /><code>{"private Transform gripPoint"}</code> |  |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handle"}</code> |  |
| <Link id="m-handleparent" /><code>{"private Transform handleParent"}</code> |  |
| <Link id="m-isresetvelocityonrelease" /><code>{"private bool isResetVelocityOnRelease"}</code> |  |
| <Link id="m-issettingtodebugindex" /><code>{"private bool isSettingToDebugIndex"}</code> |  |
| <Link id="m-isusingcustomangles" /><code>{"private bool isUsingCustomAngles"}</code> |  |
| <Link id="m-lever" /><code>{"private Transform lever"}</code> |  |
| <Link id="m-maxangle" /><code>{"private float maxAngle"}</code> |  |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> |  |
| <Link id="m-notzeroevent" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" notZeroEvent"}</code> |  |
| <Link id="m-numberofoptions" /><code>{"private int numberOfOptions"}</code> |  |
| <Link id="m-perindex" /><code>{"private float perIndex"}</code> |  |
| <Link id="m-preventinteractionwhenoverzero" /><code>{"private bool preventInteractionWhenOverZero"}</code> |  |
| <Link id="m-radius" /><code>{"private float radius"}</code> |  |
| <Link id="m-runselectiononlyonnotzero" /><code>{"private bool runSelectionOnlyOnNotZero"}</code> |  |
| <Link id="m-selectionangles" /><code>{"private float[] selectionAngles"}</code> |  |
| <Link id="m-selectionevent" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" selectionEvent"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle-2" /><code>{"float CurrentAngle { get; }"}</code> | The lever's angle while being held, clamped to the range. |
| <Link id="m-currentselection" /><code>{"int CurrentSelection { get; private set; }"}</code> | Index of the position the lever is set to. |
| <Link id="m-handle-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" Handle { get; }"}</code> | The `Pickup` the player grabs to move the lever. |
| <Link id="m-maxangle-2" /><code>{"float MaxAngle { get; }"}</code> | Angle of the last position. |
| <Link id="m-minangle-2" /><code>{"float MinAngle { get; }"}</code> | Angle of the first position. |
| <Link id="m-numberofoptions-2" /><code>{"int NumberOfOptions { get; }"}</code> | How many positions the lever has. |
| <Link id="m-selection" /><code>{"float[] Selection { get; }"}</code> | The angle of each position. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectionchanged" /><code>{"event Action<"}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{", int, int> SelectionChanged"}</code> | Raised with the lever, old index and new index when the selection changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setlevertoindex" /><code>{"void SetLeverToIndex(int index)"}</code> | Moves the lever to a position, clamped to the range, and fires the events if it changed. |
| <Link id="m-calculateperindex" /><code>{"private void CalculatePerIndex()"}</code> |  |
| <Link id="m-clamplever-2" /><code>{"private void ClampLever()"}</code> |  |
| <Link id="m-filterwhenactive" /><code>{"private void FilterWhenActive("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-getleverangle" /><code>{"private float GetLeverAngle()"}</code> |  |
| <Link id="m-limitlever" /><code>{"private void LimitLever("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-resetvelocity" /><code>{"private void ResetVelocity()"}</code> |  |
| <Link id="m-selectonrelease" /><code>{"private void SelectOnRelease("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-setdebugindex" /><code>{"private void SetDebugIndex()"}</code> |  |
| <Link id="m-setleverangle" /><code>{"private void SetLeverAngle(float angle)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SelectionLever`:

[`CustomScroller.lever`](/game-api/types/alta-menus/customscroller#m-lever), [`MenuToggleSetting.lever`](/game-api/types/alta-menus/menutogglesetting#m-lever), [`MenuToggleSetting.ToggleSelection`](/game-api/types/alta-menus/menutogglesetting#m-toggleselection), [`ScrollerEnumMenuSetting.lever`](/game-api/types/alta-menus/scrollerenummenusetting#m-lever), [`ScrollerSelector.lever`](/game-api/types/alta-menus/scrollerselector#m-lever), [`StandardFloatAsEnum.lever`](/game-api/types/alta-menus/standardfloatasenum#m-lever), [`LeverToEvents.TriggerEvents`](/game-api/types/global-i-l/levertoevents#m-triggerevents), [`MultiLeverPanel.HandleSelection`](/game-api/types/global-m-o/multileverpanel#m-handleselection), [`MultiLeverPanel.levers`](/game-api/types/global-m-o/multileverpanel#m-levers), [`RuntimeConsole.lever`](/game-api/types/global-q-r/runtimeconsole#m-lever), [`RuntimeConsole.OnLeverSelectionChanged`](/game-api/types/global-q-r/runtimeconsole#m-onleverselectionchanged), [`ServerSelectionMenu.boardLevers`](/game-api/types/global-s/serverselectionmenu#m-boardlevers), [`SettingsPanel.HandleLeverChanged`](/game-api/types/global-s/settingspanel#m-handleleverchanged), [`SettingsPanel.SettingsPanelConfiguration.lever`](/game-api/types/global-s/settingspanel-settingspanelconfiguration#m-lever), [`SettingsPanel.SettingsPanelConfiguration.Lever`](/game-api/types/global-s/settingspanel-settingspanelconfiguration#m-lever-2), [`ThrottleCounter.selectionLever`](/game-api/types/global-t-x/throttlecounter#m-selectionlever).
