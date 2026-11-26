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
| <Link id="m-ctor" /><code>{"ScrollerSelector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androiddefaulttextsides" /><code>{"private Renderer androidDefaultTextSides"}</code> | Default text sides renderer for Android. |
| <Link id="m-angleperside" /><code>{"private float anglePerSide"}</code> | Degrees per wheel side. |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | The wheel's current rotation. |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> | Backing field for `CurrentIndex`. |
| <Link id="m-currentlyselectedpanel" /><code>{"private int currentlySelectedPanel"}</code> | Which wheel side shows the selected value. |
| <Link id="m-defaulttextsides" /><code>{"private Renderer defaultTextSides"}</code> | Renderer with placeholder text, hidden once values load. |
| <Link id="m-islocalplayeronly" /><code>{"private bool isLocalPlayerOnly"}</code> | If true, only the local player's grabs turn the wheel. |
| <Link id="m-jumptoselected" /><code>{"private bool jumpToSelected"}</code> | Editor button that jumps to the selected side. |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | The lever that drives the wheel. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for setup errors. |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | The lever's rest angle. |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | Lever travel below the rest angle. |
| <Link id="m-numberofsides" /><code>{"private int numberOfSides"}</code> | How many sides the wheel has (default 6). |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | Lever travel above the rest angle. |
| <Link id="m-possiblevalues" /><code>{"private List<string> possibleValues"}</code> | The values to scroll through. |
| <Link id="m-scroller" /><code>{"private Transform scroller"}</code> | The transform that rotates. |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | Maps lever push (0 to 1) to turn speed. |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | Multiplier on turn speed. |
| <Link id="m-textsides" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{"[] textSides"}</code> | Text on each side of the wheel. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered LateUpdate method. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex-2" /><code>{"int CurrentIndex { get; private set; }"}</code> | Index of the selected value. Raises `UpdatedValue` when it changes. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedvalue" /><code>{"event Action<int> UpdatedValue"}</code> | Raised with the new index when the selection changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> | Selects the next value, wrapping round. |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> | Selects the previous value, wrapping round. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the lever handle, loads the values and works out the lever's angle ranges. |
| <Link id="m-finishedrefresh" /><code>{"private void FinishedRefresh()"}</code> | Snaps the wheel to the selected side and refreshes the side texts. |
| <Link id="m-jumptoselected-2" /><code>{"private void JumpToSelected()"}</code> | Rotates the wheel to show the selected side. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: warns if the lever has more than one option, and jumps to the selected side when that button is ticked. |
| <Link id="m-refresh" /><code>{"private void Refresh()"}</code> | Wraps `CurrentIndex` back into range. |
| <Link id="m-refreshvalues" /><code>{"private void RefreshValues(IEnumerable<string> values)"}</code> | Replaces the value list, keeping the same value selected if it's still there. |
| <Link id="m-setscrollerrotation" /><code>{"private void SetScrollerRotation(float angle)"}</code> | Sets the wheel's rotation on X. |
| <Link id="m-startupdatingscroller" /><code>{"private void StartUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts turning the wheel each LateUpdate while the lever is held (local player only by default). |
| <Link id="m-stopupdatingscroller" /><code>{"private void StopUpdatingScroller("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops turning and snaps to the selected side. |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | Turns the wheel at a speed from how far the lever is pushed, and steps the selection as it passes each side. |
| <Link id="m-updatescroller-2" /><code>{"private void UpdateScroller(int direction)"}</code> | Turns the wheel at a speed from how far the lever is pushed, and steps the selection as it passes each side. |
| <Link id="m-updatetextsides" /><code>{"private void UpdateTextSides()"}</code> | Writes the previous, current and next values on the three sides facing the player. |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues("}<Link to="/mod/game-api/types/alta-menus/iprovideenumerable-t">{"IProvideEnumerable"}</Link>{"<string> valueProvider)"}</code> | Reloads the values when the provider says they changed. |
| <Link id="m-wrapenumindex" /><code>{"private int WrapEnumIndex(int index)"}</code> | Wraps an index into the value list's range. |
| <Link id="m-wrapindex" /><code>{"private int WrapIndex(int number, int length)"}</code> | Wraps a number into 0 to length minus one. |

</details>

## Used in

Members of other types that take, return or hold a `ScrollerSelector`:

[`FriendSelector.scroller`](/mod/game-api/types/global-e-h/friendselector#m-scroller).
