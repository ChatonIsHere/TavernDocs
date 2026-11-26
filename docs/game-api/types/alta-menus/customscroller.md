---
title: "CustomScroller"
description: "A rotating drum menu driven by a SelectionLever: holding the lever off-centre spins the drum and steps through a list of string values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomScroller

A **class** in `Root.Township`, `Alta.Menu`.

A rotating drum menu driven by a `SelectionLever`: holding the lever off-centre spins the drum and steps through a list of string values. Used by the server creator.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomScroller()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | Degrees of drum rotation per side (360 divided by `numberOfSides`). |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Current drum rotation in degrees. |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | Which physical drum side is facing the player. |
| <Link id="m-debugleverangle" /><code>{"private float debugLeverAngle"}</code> | Lever angle used instead of the real one when `isUsingDebugLeverAngle` is on. |
| <Link id="m-isrefreshing" /><code>{"private bool isRefreshing"}</code> | When set, stops `UpdateScroller` and `Refresh` from doing anything. |
| <Link id="m-isusingdebugleverangle" /><code>{"private bool isUsingDebugLeverAngle"}</code> | Editor testing: use `debugLeverAngle` instead of the lever. |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | Inspector button that runs `JumpToSelected`. |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | The selection lever that drives the scroller. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | The lever's resting angle (its first selection angle). |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | How far the lever can move below `middleAngle`. |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | Number of sides on the drum (default 6). |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | How far the lever can move above `middleAngle`. |
| <Link id="m-possiblevalues" /><code>{"private string[] possibleValues"}</code> | Backing field for `PossibleValues`. |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | The drum transform that gets rotated. |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | Maps how far the lever is pushed (0 to 1) to spin speed. |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | Scales the spin speed from `speedCurve`. |
| <Link id="m-textsides" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> textSides"}</code> | Text renderers on each side of the drum. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered late update method while the lever is held. |
| <Link id="m-valuetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" valueText"}</code> | Optional text that shows the selected value. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentenumindex" /><code>{"int CurrentEnumIndex { get; protected set; }"}</code> | Index of the selected entry in `PossibleValues`. |
| <Link id="m-currentvalue" /><code>{"string CurrentValue { get; }"}</code> | The selected string from `PossibleValues`. |
| <Link id="m-possiblevalues-2" /><code>{"string[] PossibleValues { get; set; }"}</code> | The list of strings the scroller cycles through. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-indexchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/customscroller">{"CustomScroller"}</Link>{", int> IndexChanged"}</code> | Raised with the scroller and new index whenever the selection changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetextsides" /><code>{"void UpdateTextSides()"}</code> | Puts the previous, current and next values on the three visible drum sides. |
| <Link id="m-refresh" /><code>{"protected void Refresh()"}</code> | Wraps the current index, raises `IndexChanged` and updates the value text. Does nothing while `isRefreshing` is set. |
| <Link id="m-updatetext" /><code>{"protected virtual void UpdateText()"}</code> | Writes the selected value to `valueText`. Virtual so subclasses can show it differently. |
| <Link id="m-wrapenumindex" /><code>{"protected int WrapEnumIndex(int index)"}</code> | Wraps an index into the range of `PossibleValues`. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the lever handle's interaction start and end to start and stop the scroller update. |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | Snaps the drum rotation to the selected panel. |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | Sets the drum's local rotation around X to the given angle. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Works out the angle per side and the lever's ranges around its middle position, then snaps to the selection. |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Registers `UpdateScroller` in late update when the lever is grabbed. |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stops the late update and snaps to the selected panel when the lever is let go. |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | Spins the drum based on how far the lever is from centre (through `speedCurve`), and steps the selection when the drum passes a side. |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | Spins the drum based on how far the lever is from centre (through `speedCurve`), and steps the selection when the drum passes a side. |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | Wraps a number into 0 to length, handling negatives. |

</details>

## Used in

Members of other types that take, return or hold a `CustomScroller`:

[`ServerCreator.scroller`](/game-api/types/global-s/servercreator#m-scroller), [`ServerCreator.visibilityTypeScroller`](/game-api/types/global-s/servercreator#m-visibilitytypescroller).
