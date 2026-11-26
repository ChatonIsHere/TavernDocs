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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomScroller()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | <span className="api-desc">Degrees of drum rotation per side (360 divided by `numberOfSides`).</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Current drum rotation in degrees.</span> |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | <span className="api-desc">Which physical drum side is facing the player.</span> |
| <Link id="m-debugleverangle" /><code>{"private float debugLeverAngle"}</code> | <span className="api-desc">Lever angle used instead of the real one when `isUsingDebugLeverAngle` is on.</span> |
| <Link id="m-isrefreshing" /><code>{"private bool isRefreshing"}</code> | <span className="api-desc">When set, stops `UpdateScroller` and `Refresh` from doing anything.</span> |
| <Link id="m-isusingdebugleverangle" /><code>{"private bool isUsingDebugLeverAngle"}</code> | <span className="api-desc">Editor testing: use `debugLeverAngle` instead of the lever.</span> |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | <span className="api-desc">Inspector button that runs `JumpToSelected`.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | <span className="api-desc">The selection lever that drives the scroller.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | <span className="api-desc">The lever's resting angle (its first selection angle).</span> |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | <span className="api-desc">How far the lever can move below `middleAngle`.</span> |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | <span className="api-desc">Number of sides on the drum (default 6).</span> |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | <span className="api-desc">How far the lever can move above `middleAngle`.</span> |
| <Link id="m-possiblevalues" /><code>{"private string[] possibleValues"}</code> | <span className="api-desc">Backing field for `PossibleValues`.</span> |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | <span className="api-desc">The drum transform that gets rotated.</span> |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | <span className="api-desc">Maps how far the lever is pushed (0 to 1) to spin speed.</span> |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | <span className="api-desc">Scales the spin speed from `speedCurve`.</span> |
| <Link id="m-textsides" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> textSides"}</code> | <span className="api-desc">Text renderers on each side of the drum.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered late update method while the lever is held.</span> |
| <Link id="m-valuetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" valueText"}</code> | <span className="api-desc">Optional text that shows the selected value.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentenumindex" /><code>{"int CurrentEnumIndex { get; protected set; }"}</code> | <span className="api-desc">Index of the selected entry in `PossibleValues`.</span> |
| <Link id="m-currentvalue" /><code>{"string CurrentValue { get; }"}</code> | <span className="api-desc">The selected string from `PossibleValues`.</span> |
| <Link id="m-possiblevalues-2" /><code>{"string[] PossibleValues { get; set; }"}</code> | <span className="api-desc">The list of strings the scroller cycles through.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-indexchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/customscroller">{"CustomScroller"}</Link>{", int> IndexChanged"}</code> | <span className="api-desc">Raised with the scroller and new index whenever the selection changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetextsides" /><code>{"void UpdateTextSides()"}</code> | <span className="api-desc">Puts the previous, current and next values on the three visible drum sides.</span> |
| <Link id="m-refresh" /><code>{"protected void Refresh()"}</code> | <span className="api-desc">Wraps the current index, raises `IndexChanged` and updates the value text. Does nothing while `isRefreshing` is set.</span> |
| <Link id="m-updatetext" /><code>{"protected virtual void UpdateText()"}</code> | <span className="api-desc">Writes the selected value to `valueText`. Virtual so subclasses can show it differently.</span> |
| <Link id="m-wrapenumindex" /><code>{"protected int WrapEnumIndex(int index)"}</code> | <span className="api-desc">Wraps an index into the range of `PossibleValues`.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the lever handle's interaction start and end to start and stop the scroller update.</span> |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | <span className="api-desc">Snaps the drum rotation to the selected panel.</span> |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | <span className="api-desc">Sets the drum's local rotation around X to the given angle.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Works out the angle per side and the lever's ranges around its middle position, then snaps to the selection.</span> |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Registers `UpdateScroller` in late update when the lever is grabbed.</span> |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stops the late update and snaps to the selected panel when the lever is let go.</span> |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | <span className="api-desc">Spins the drum based on how far the lever is from centre (through `speedCurve`), and steps the selection when the drum passes a side.</span> |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | <span className="api-desc">Spins the drum based on how far the lever is from centre (through `speedCurve`), and steps the selection when the drum passes a side.</span> |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | <span className="api-desc">Wraps a number into 0 to length, handling negatives.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CustomScroller`:

<div className="api-used-in">

[`ServerCreator.scroller`](/mod/game-api/types/global-s/servercreator#m-scroller), [`ServerCreator.visibilityTypeScroller`](/mod/game-api/types/global-s/servercreator#m-visibilitytypescroller).

</div>
