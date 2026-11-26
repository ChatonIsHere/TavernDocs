---
title: "ScrollerEnumMenuSetting"
description: "Client menu control for a choice setting shown on a rotating drum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollerEnumMenuSetting

A **class** in `Root.Township`, `Alta.Menu`.

Client menu control for a choice setting shown on a rotating drum. Holding a lever off centre spins the drum and steps through the values.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`EnumMenuSettingBase`](/mod/game-api/types/alta-menus/enummenusettingbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScrollerEnumMenuSetting()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | Degrees between drum faces (360 divided by `numberOfSides`). |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | The drum's current rotation in degrees. |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | Index of the drum face that is selected. |
| <Link id="m-debugleverangle" /><code>{"private float debugLeverAngle"}</code> | Lever angle used instead of the real one when `isUsingDebugLeverAngle` is on. |
| <Link id="m-isusingdebugleverangle" /><code>{"private bool isUsingDebugLeverAngle"}</code> | Debug option to drive the drum from `debugLeverAngle`. |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | Inspector button that snaps the drum to the selected face. |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | The lever that drives the drum. Must have one selection option, in the middle. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | The lever's resting angle. |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | Lever travel below the middle angle. |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | Number of faces on the drum. Default 6. |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | Lever travel above the middle angle. |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | The drum transform that rotates. |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | Maps how far the lever is pushed (0 to 1) to spin speed. |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | Multiplier on the spin speed. |
| <Link id="m-textsides" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> textSides"}</code> | Text on each drum face. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered late update while the lever is held. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedrefresh" /><code>{"protected override void FinishedRefresh()"}</code> | After values load, snaps the drum to the selected side and fills in the side texts. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: names the object, logs an error if the lever has more than one option, and handles the jump button. |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | Works out the angle per side and the lever's ranges from its settings, then runs the base setup. |
| <Link id="m-updatetext" /><code>{"protected override void UpdateText()"}</code> | Empty; the drum uses `UpdateTextSides` instead of the single value text. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts and stops scrolling when the lever handle is grabbed and let go. |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | Rotates the drum to show the selected side squarely. |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | Sets the drum's local x rotation. |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Starts calling `UpdateScroller` every late update while the lever is held. |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stops the late update and snaps the drum to the selected side. |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | Spins the drum by the lever's angle through `speedCurve`; when it passes a side, steps the value and saves it. |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | Spins the drum by the lever's angle through `speedCurve`; when it passes a side, steps the value and saves it. |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> | Writes the previous, current and next values on the three drum faces around the selected one. |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | Wraps a number into the range 0 to length minus 1. |

</details>
