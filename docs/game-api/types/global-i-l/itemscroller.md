---
title: "ItemScroller"
description: "Client UI: a row of ScrollElements that slides along to show a window of a longer list, reusing a few element copies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemScroller

A **class** in `Root.Township`, no namespace.

Client UI: a row of `ScrollElement`s that slides along to show a window of a longer list, reusing a few element copies. Scrolling left moves to higher indices.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemScroller()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canscrollleftchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" canScrollLeftChanged"}</code> | Event raised with `CanScrollLeft` whenever it may have changed. |
| <Link id="m-canscrollrightchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" canScrollRightChanged"}</code> | Event raised with `CanScrollRight` whenever it may have changed. |
| <Link id="m-count" /><code>{"private int count"}</code> | How many elements are visible at once. |
| <Link id="m-finaltargetindex" /><code>{"private int finalTargetIndex"}</code> | The index the scroller is heading to, possibly several steps away. |
| <Link id="m-index" /><code>{"private int index"}</code> | First visible index at the start of the current step. |
| <Link id="m-instances" /><code>{"private List<"}<Link to="/game-api/types/global-s/scrollelement">{"ScrollElement"}</Link>{"> instances"}</code> | The element instances, reused as a ring. |
| <Link id="m-interval" /><code>{"private float interval"}</code> | Spacing between elements along the row. |
| <Link id="m-isscrollingleft" /><code>{"private bool isScrollingLeft"}</code> | Backing field for `IsScrollingLeft` (scroll held down). |
| <Link id="m-isscrollingright" /><code>{"private bool isScrollingRight"}</code> | Backing field for `IsScrollingRight` (scroll held down). |
| <Link id="m-isshowingbydefault" /><code>{"private bool isShowingByDefault"}</code> | Whether the elements show on `Awake` without waiting for `ResetAndRefresh`. |
| <Link id="m-maxindex" /><code>{"private int maxIndex"}</code> | Number of items, or -1 for no limit. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-s/scrollelement">{"ScrollElement"}</Link>{" prefab"}</code> | The `ScrollElement` prefab instantiated for each slot. |
| <Link id="m-reshow" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" reshow"}</code> | Timer that shows the elements again 0.1 seconds after `ResetAndRefresh`. |
| <Link id="m-rotationinterval" /><code>{"private float rotationInterval"}</code> | Angle in degrees between neighbouring elements, around the up axis. |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> | Forward offset applied after the rotation, so elements can sit on an arc. |
| <Link id="m-scrollexecuted" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" scrollExecuted"}</code> | Event raised when `ScrollDirection` accepts a step. |
| <Link id="m-scrollprogress" /><code>{"private float scrollProgress"}</code> | Progress through the current step, 0 to 1. |
| <Link id="m-stepinterval" /><code>{"private float stepInterval"}</code> | Seconds per scroll step. |
| <Link id="m-stepsize" /><code>{"private int stepSize"}</code> | How many items one `ScrollDirection` call moves. |
| <Link id="m-targetindex" /><code>{"private int targetIndex"}</code> | First visible index at the end of the current step. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canscrollleft" /><code>{"bool CanScrollLeft { get; }"}</code> | Whether there are more items past the end of the visible window. Always true until a max index is set. |
| <Link id="m-canscrollright" /><code>{"bool CanScrollRight { get; }"}</code> | Whether the window can move back towards index 0. Always true until a max index is set. |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | How many elements are visible at once. |
| <Link id="m-isscrollingleft-2" /><code>{"bool IsScrollingLeft { get; set; }"}</code> | Set while a left scroll is held, so it keeps stepping. |
| <Link id="m-isscrollingright-2" /><code>{"bool IsScrollingRight { get; set; }"}</code> | Set while a right scroll is held, so it keeps stepping. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetandrefresh" /><code>{"void ResetAndRefresh(int maxIndex)"}</code> | Hides everything, goes back to index 0 with a new item count and reshows the elements after 0.1 seconds. |
| <Link id="m-scrolldirection" /><code>{"void ScrollDirection(int direction)"}</code> | Moves the target one step in a direction if it stays in range, and fires the scroll event. |
| <Link id="m-scrollto" /><code>{"void ScrollTo(int target)"}</code> | Sets the index to scroll to. The row then steps there over time. |
| <Link id="m-show" /><code>{"void Show()"}</code> | Shows the first `Count` elements. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Creates `count` + 2 element instances, positions them, shows them if `isShowingByDefault`, and fires the can-scroll events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts the next scroll step when the component is enabled with a scroll pending. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | In play mode, adds or destroys instances to match a changed `count`. |
| <Link id="m-positioninstances" /><code>{"private void PositionInstances()"}</code> | Places the visible instances along the row, with spacing, rotation and offset, based on scroll progress. |
| <Link id="m-safemod" /><code>{"private int SafeMod(int value, int mod)"}</code> | Modulo that never returns a negative number, used to map item indices onto the instance ring. |
| <Link id="m-startscrollleft" /><code>{"private void StartScrollLeft()"}</code> | Begins one step towards higher indices: hides the element leaving and shows the one coming in. |
| <Link id="m-startscrollright" /><code>{"private void StartScrollRight()"}</code> | Begins one step towards lower indices: hides the element leaving and shows the one coming in. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Advances the step; at its end, starts the next step or disables the component once the target is reached. |

</details>

## Used in

Members of other types that take, return or hold a `ItemScroller`:

[`CategoryScrubberController.scroller`](/game-api/types/alta-customization/categoryscrubbercontroller#m-scroller), [`CosmeticCustomizationManager.categoryScroller`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-categoryscroller), [`CosmeticScrollElement.scroller`](/game-api/types/alta-customization/cosmeticscrollelement#m-scroller), [`ScrollManager.itemScroller`](/game-api/types/alta-customization/scrollmanager#m-itemscroller), [`SwipePromptController.scroller`](/game-api/types/global-s/swipepromptcontroller#m-scroller).
