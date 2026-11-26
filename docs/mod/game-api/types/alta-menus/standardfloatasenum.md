---
title: "StandardFloatAsEnum"
description: "Client menu control that shows a float setting as a drum of named choices, spun with a lever like ScrollerEnumMenuSetting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StandardFloatAsEnum

A **class** in `Root.Township`, `Alta.Menu`.

Client menu control that shows a float setting as a drum of named choices, spun with a lever like `ScrollerEnumMenuSetting`. The choices come from an `EnumFloatGameSettingsAccess` or its own lists.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting<FloatGameSettingsAccess>`](/mod/game-api/types/alta-menus/menugamesetting-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StandardFloatAsEnum()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrefreshing" /><code>{"protected bool isRefreshing"}</code> | True while the current choice is being loaded; blocks changes. |

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | Degrees between drum faces (360 divided by `numberOfSides`). |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | The drum's current rotation in degrees. |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | Index of the drum face that is selected. |
| <Link id="m-debugleverangle" /><code>{"private float debugLeverAngle"}</code> | Lever angle used instead of the real one when `isUsingDebugLeverAngle` is on. |
| <Link id="m-enumsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/enumfloatgamesettingsaccess">{"EnumFloatGameSettingsAccess"}</Link>{" enumSettings"}</code> | The setting as an `EnumFloatGameSettingsAccess`, when it is one; supplies the values and names. |
| <Link id="m-isusingdebugleverangle" /><code>{"private bool isUsingDebugLeverAngle"}</code> | Debug option to drive the drum from `debugLeverAngle`. |
| <Link id="m-isusingenumsettings" /><code>{"private bool isUsingEnumSettings"}</code> | True when the choices come from `enumSettings` instead of this component's lists. |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | Inspector button that snaps the drum to the selected face. |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | The lever that drives the drum. Must have one selection option, in the middle. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | The lever's resting angle. |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | Lever travel below the middle angle. |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | Number of faces on the drum. Default 6. |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | Lever travel above the middle angle. |
| <Link id="m-possiblevalues" /><code>{"private float[] possibleValues"}</code> | Float values for each choice when no enum settings source is used. Default 0.5, 1, 2, 4. |
| <Link id="m-possiblevaluesnames" /><code>{"private string[] possibleValuesNames"}</code> | Names shown for each choice when no enum settings source is used. |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | The drum transform that rotates. |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | Maps how far the lever is pushed (0 to 1) to spin speed. |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | Multiplier on the spin speed. |
| <Link id="m-textsides" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> textSides"}</code> | Text on each drum face. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered late update while the lever is held. |
| <Link id="m-valuetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" valueText"}</code> | Serialized text field that this class never writes to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex" /><code>{"int CurrentIndex { get; protected set; }"}</code> | Index of the selected choice, or -1 if the setting's value matches none of them. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> | Steps to the next choice and saves it to the setting. |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> | Steps to the previous choice and saves it to the setting. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: names the object, logs an error if the lever has more than one option, and handles the jump button. |
| <Link id="m-refresh" /><code>{"protected void Refresh()"}</code> | Wraps `CurrentIndex` and writes that choice's value to the setting. Does nothing while the index is -1. |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | Picks the enum settings source if the setting has one, works out the drum and lever angles, then loads the current choice. |
| <Link id="m-wrapenumindex" /><code>{"protected int WrapEnumIndex(int index)"}</code> | Wraps a choice index past the end back to 0; any negative index becomes the last choice. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts and stops scrolling when the lever handle is grabbed and let go. |
| <Link id="m-finishedrefresh" /><code>{"private void FinishedRefresh()"}</code> | Snaps the drum to the selected face and fills in the face texts. |
| <Link id="m-getindex" /><code>{"private int GetIndex()"}</code> | Finds the choice whose value is about equal to the setting's current value; -1 if none. |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | Rotates the drum to show the selected face squarely. |
| <Link id="m-refreshvalues" /><code>{"private void RefreshValues()"}</code> | Sets `CurrentIndex` from the setting's value, then calls `FinishedRefresh`. |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | Sets the drum's local x rotation. |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Starts calling `UpdateScroller` every late update while the lever is held. |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stops the late update and snaps the drum to the selected face. |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | Spins the drum by the lever's angle through `speedCurve`; when it passes a face, steps the choice and saves it. |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | Spins the drum by the lever's angle through `speedCurve`; when it passes a face, steps the choice and saves it. |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> | Writes the previous, current and next choice names on the three drum faces around the selected one. |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | Wraps a number into the range 0 to length minus 1. |

</details>
