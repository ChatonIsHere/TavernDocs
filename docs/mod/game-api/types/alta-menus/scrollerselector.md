---
title: "ScrollerSelector"
description: "Menu wheel that scrolls through a list of text values with a lever."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollerSelector

A **class** in `Root.Township`, `Alta.Menu`.

Menu wheel that scrolls through a list of text values with a lever. Gets its values from an `IProvideEnumerable<string>` on the same object.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScrollerSelector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androiddefaulttextsides" /><code>{"private Renderer androidDefaultTextSides"}</code> | <span className="api-desc">Default text sides renderer for Android.</span> |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | <span className="api-desc">Degrees per wheel side.</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">The wheel's current rotation.</span> |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> | <span className="api-desc">Backing field for `CurrentIndex`.</span> |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | <span className="api-desc">Which wheel side shows the selected value.</span> |
| <Link id="m-defaulttextsides" /><code>{"private Renderer defaultTextSides"}</code> | <span className="api-desc">Renderer with placeholder text, hidden once values load.</span> |
| <Link id="m-islocalplayeronly" /><code>{"private bool isLocalPlayerOnly"}</code> | <span className="api-desc">If true, only the local player's grabs turn the wheel.</span> |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | <span className="api-desc">Editor button that jumps to the selected side.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | <span className="api-desc">The lever that drives the wheel.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for setup errors.</span> |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | <span className="api-desc">The lever's rest angle.</span> |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | <span className="api-desc">Lever travel below the rest angle.</span> |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | <span className="api-desc">How many sides the wheel has (default 6).</span> |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | <span className="api-desc">Lever travel above the rest angle.</span> |
| <Link id="m-possiblevalues" /><code>{"private List<string> possibleValues"}</code> | <span className="api-desc">The values to scroll through.</span> |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | <span className="api-desc">The transform that rotates.</span> |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | <span className="api-desc">Maps lever push (0 to 1) to turn speed.</span> |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | <span className="api-desc">Multiplier on turn speed.</span> |
| <Link id="m-textsides" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] textSides"}</code> | <span className="api-desc">Text on each side of the wheel.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered LateUpdate method.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex-2" /><code>{"int CurrentIndex { get; private set; }"}</code> | <span className="api-desc">Index of the selected value. Raises `UpdatedValue` when it changes.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedvalue" /><code>{"event Action<int> UpdatedValue"}</code> | <span className="api-desc">Raised with the new index when the selection changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> | <span className="api-desc">Selects the next value, wrapping round.</span> |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> | <span className="api-desc">Selects the previous value, wrapping round.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the lever handle, loads the values and works out the lever's angle ranges.</span> |
| <Link id="m-finishedrefresh" /><code>{"private void FinishedRefresh()"}</code> | <span className="api-desc">Snaps the wheel to the selected side and refreshes the side texts.</span> |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | <span className="api-desc">Rotates the wheel to show the selected side.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: warns if the lever has more than one option, and jumps to the selected side when that button is ticked.</span> |
| <Link id="m-refresh" /><code>{"private void Refresh()"}</code> | <span className="api-desc">Wraps `CurrentIndex` back into range.</span> |
| <Link id="m-refreshvalues" /><code>{"private void RefreshValues(IEnumerable<string> values)"}</code> | <span className="api-desc">Replaces the value list, keeping the same value selected if it's still there.</span> |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | <span className="api-desc">Sets the wheel's rotation on X.</span> |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts turning the wheel each LateUpdate while the lever is held (local player only by default).</span> |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops turning and snaps to the selected side.</span> |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | <span className="api-desc">Turns the wheel at a speed from how far the lever is pushed, and steps the selection as it passes each side.</span> |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | <span className="api-desc">Turns the wheel at a speed from how far the lever is pushed, and steps the selection as it passes each side.</span> |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> | <span className="api-desc">Writes the previous, current and next values on the three sides facing the player.</span> |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues("}<Link to="/mod/game-api/types/alta-menus/iprovideenumerable-t">{"IProvideEnumerable"}</Link>{"<string> valueProvider)"}</code> | <span className="api-desc">Reloads the values when the provider says they changed.</span> |
| <Link id="m-wrapenumindex" /><code>{"private int WrapEnumIndex(int index)"}</code> | <span className="api-desc">Wraps an index into the value list's range.</span> |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | <span className="api-desc">Wraps a number into 0 to length minus one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ScrollerSelector`:

<div className="api-used-in">

[`FriendSelector.scroller`](/mod/game-api/types/global-e-h/friendselector#m-scroller).

</div>
