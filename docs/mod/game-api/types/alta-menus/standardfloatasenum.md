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
| <Link id="m-ctor" /><code>{"StandardFloatAsEnum()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrefreshing" /><code>{"protected bool isRefreshing"}</code> | <span className="api-desc">True while the current choice is being loaded; blocks changes.</span> |

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | <span className="api-desc">Degrees between drum faces (360 divided by `numberOfSides`).</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">The drum's current rotation in degrees.</span> |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | <span className="api-desc">Index of the drum face that is selected.</span> |
| <Link id="m-debugleverangle" /><code>{"private float debugLeverAngle"}</code> | <span className="api-desc">Lever angle used instead of the real one when `isUsingDebugLeverAngle` is on.</span> |
| <Link id="m-enumsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/enumfloatgamesettingsaccess">{"EnumFloatGameSettingsAccess"}</Link>{" enumSettings"}</code> | <span className="api-desc">The setting as an `EnumFloatGameSettingsAccess`, when it is one; supplies the values and names.</span> |
| <Link id="m-isusingdebugleverangle" /><code>{"private bool isUsingDebugLeverAngle"}</code> | <span className="api-desc">Debug option to drive the drum from `debugLeverAngle`.</span> |
| <Link id="m-isusingenumsettings" /><code>{"private bool isUsingEnumSettings"}</code> | <span className="api-desc">True when the choices come from `enumSettings` instead of this component's lists.</span> |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | <span className="api-desc">Inspector button that snaps the drum to the selected face.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | <span className="api-desc">The lever that drives the drum. Must have one selection option, in the middle.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | <span className="api-desc">The lever's resting angle.</span> |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | <span className="api-desc">Lever travel below the middle angle.</span> |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | <span className="api-desc">Number of faces on the drum. Default 6.</span> |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | <span className="api-desc">Lever travel above the middle angle.</span> |
| <Link id="m-possiblevalues" /><code>{"private float[] possibleValues"}</code> | <span className="api-desc">Float values for each choice when no enum settings source is used. Default 0.5, 1, 2, 4.</span> |
| <Link id="m-possiblevaluesnames" /><code>{"private string[] possibleValuesNames"}</code> | <span className="api-desc">Names shown for each choice when no enum settings source is used.</span> |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | <span className="api-desc">The drum transform that rotates.</span> |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | <span className="api-desc">Maps how far the lever is pushed (0 to 1) to spin speed.</span> |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | <span className="api-desc">Multiplier on the spin speed.</span> |
| <Link id="m-textsides" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> textSides"}</code> | <span className="api-desc">Text on each drum face.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered late update while the lever is held.</span> |
| <Link id="m-valuetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" valueText"}</code> | <span className="api-desc">Serialized text field that this class never writes to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex" /><code>{"int CurrentIndex { get; protected set; }"}</code> | <span className="api-desc">Index of the selected choice, or -1 if the setting's value matches none of them.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> | <span className="api-desc">Steps to the next choice and saves it to the setting.</span> |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> | <span className="api-desc">Steps to the previous choice and saves it to the setting.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: names the object, logs an error if the lever has more than one option, and handles the jump button.</span> |
| <Link id="m-refresh" /><code>{"protected void Refresh()"}</code> | <span className="api-desc">Wraps `CurrentIndex` and writes that choice's value to the setting. Does nothing while the index is -1.</span> |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | <span className="api-desc">Picks the enum settings source if the setting has one, works out the drum and lever angles, then loads the current choice.</span> |
| <Link id="m-wrapenumindex" /><code>{"protected int WrapEnumIndex(int index)"}</code> | <span className="api-desc">Wraps a choice index past the end back to 0; any negative index becomes the last choice.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts and stops scrolling when the lever handle is grabbed and let go.</span> |
| <Link id="m-finishedrefresh" /><code>{"private void FinishedRefresh()"}</code> | <span className="api-desc">Snaps the drum to the selected face and fills in the face texts.</span> |
| <Link id="m-getindex" /><code>{"private int GetIndex()"}</code> | <span className="api-desc">Finds the choice whose value is about equal to the setting's current value; -1 if none.</span> |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | <span className="api-desc">Rotates the drum to show the selected face squarely.</span> |
| <Link id="m-refreshvalues" /><code>{"private void RefreshValues()"}</code> | <span className="api-desc">Sets `CurrentIndex` from the setting's value, then calls `FinishedRefresh`.</span> |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | <span className="api-desc">Sets the drum's local x rotation.</span> |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Starts calling `UpdateScroller` every late update while the lever is held.</span> |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stops the late update and snaps the drum to the selected face.</span> |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | <span className="api-desc">Spins the drum by the lever's angle through `speedCurve`; when it passes a face, steps the choice and saves it.</span> |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | <span className="api-desc">Spins the drum by the lever's angle through `speedCurve`; when it passes a face, steps the choice and saves it.</span> |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> | <span className="api-desc">Writes the previous, current and next choice names on the three drum faces around the selected one.</span> |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | <span className="api-desc">Wraps a number into the range 0 to length minus 1.</span> |

</details>
