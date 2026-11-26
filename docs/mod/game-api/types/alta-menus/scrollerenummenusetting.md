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
| <Link id="m-ctor" /><code>{"ScrollerEnumMenuSetting()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | <span className="api-desc">Degrees between drum faces (360 divided by `numberOfSides`).</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">The drum's current rotation in degrees.</span> |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | <span className="api-desc">Index of the drum face that is selected.</span> |
| <Link id="m-debugleverangle" /><code>{"private float debugLeverAngle"}</code> | <span className="api-desc">Lever angle used instead of the real one when `isUsingDebugLeverAngle` is on.</span> |
| <Link id="m-isusingdebugleverangle" /><code>{"private bool isUsingDebugLeverAngle"}</code> | <span className="api-desc">Debug option to drive the drum from `debugLeverAngle`.</span> |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | <span className="api-desc">Inspector button that snaps the drum to the selected face.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | <span className="api-desc">The lever that drives the drum. Must have one selection option, in the middle.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | <span className="api-desc">The lever's resting angle.</span> |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | <span className="api-desc">Lever travel below the middle angle.</span> |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | <span className="api-desc">Number of faces on the drum. Default 6.</span> |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | <span className="api-desc">Lever travel above the middle angle.</span> |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | <span className="api-desc">The drum transform that rotates.</span> |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | <span className="api-desc">Maps how far the lever is pushed (0 to 1) to spin speed.</span> |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | <span className="api-desc">Multiplier on the spin speed.</span> |
| <Link id="m-textsides" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"> textSides"}</code> | <span className="api-desc">Text on each drum face.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered late update while the lever is held.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishedrefresh" /><code>{"protected override void FinishedRefresh()"}</code> | <span className="api-desc">After values load, snaps the drum to the selected side and fills in the side texts.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: names the object, logs an error if the lever has more than one option, and handles the jump button.</span> |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | <span className="api-desc">Works out the angle per side and the lever's ranges from its settings, then runs the base setup.</span> |
| <Link id="m-updatetext" /><code>{"protected override void UpdateText()"}</code> | <span className="api-desc">Empty; the drum uses `UpdateTextSides` instead of the single value text.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts and stops scrolling when the lever handle is grabbed and let go.</span> |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | <span className="api-desc">Rotates the drum to show the selected side squarely.</span> |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | <span className="api-desc">Sets the drum's local x rotation.</span> |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Starts calling `UpdateScroller` every late update while the lever is held.</span> |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stops the late update and snaps the drum to the selected side.</span> |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | <span className="api-desc">Spins the drum by the lever's angle through `speedCurve`; when it passes a side, steps the value and saves it.</span> |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | <span className="api-desc">Spins the drum by the lever's angle through `speedCurve`; when it passes a side, steps the value and saves it.</span> |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> | <span className="api-desc">Writes the previous, current and next values on the three drum faces around the selected one.</span> |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | <span className="api-desc">Wraps a number into the range 0 to length minus 1.</span> |

</details>
