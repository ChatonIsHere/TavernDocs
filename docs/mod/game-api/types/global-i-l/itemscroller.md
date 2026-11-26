---
title: "ItemScroller"
description: "Client UI: a row of ScrollElements that slides along to show a window of a longer list, reusing a few element copies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemScroller

A **class** in `Root.Township`, the global namespace.

Client UI: a row of `ScrollElement`s that slides along to show a window of a longer list, reusing a few element copies. Scrolling left moves to higher indices.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemScroller()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canscrollleftchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" canScrollLeftChanged"}</code> | <span className="api-desc">Event raised with `CanScrollLeft` whenever it may have changed.</span> |
| <Link id="m-canscrollrightchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" canScrollRightChanged"}</code> | <span className="api-desc">Event raised with `CanScrollRight` whenever it may have changed.</span> |
| <Link id="m-count" /><code>{"private int count"}</code> | <span className="api-desc">How many elements are visible at once.</span> |
| <Link id="m-finaltargetindex" /><code>{"private int finalTargetIndex"}</code> | <span className="api-desc">The index the scroller is heading to, possibly several steps away.</span> |
| <Link id="m-index" /><code>{"private int index"}</code> | <span className="api-desc">First visible index at the start of the current step.</span> |
| <Link id="m-instances" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/scrollelement">{"ScrollElement"}</Link>{"> instances"}</code> | <span className="api-desc">The element instances, reused as a ring.</span> |
| <Link id="m-interval" /><code>{"private float interval"}</code> | <span className="api-desc">Spacing between elements along the row.</span> |
| <Link id="m-isscrollingleft" /><code>{"private bool isScrollingLeft"}</code> | <span className="api-desc">Backing field for `IsScrollingLeft` (scroll held down).</span> |
| <Link id="m-isscrollingright" /><code>{"private bool isScrollingRight"}</code> | <span className="api-desc">Backing field for `IsScrollingRight` (scroll held down).</span> |
| <Link id="m-isshowingbydefault" /><code>{"private bool isShowingByDefault"}</code> | <span className="api-desc">Whether the elements show on `Awake` without waiting for `ResetAndRefresh`.</span> |
| <Link id="m-maxindex" /><code>{"private int maxIndex"}</code> | <span className="api-desc">Number of items, or -1 for no limit.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/scrollelement">{"ScrollElement"}</Link>{" prefab"}</code> | <span className="api-desc">The `ScrollElement` prefab instantiated for each slot.</span> |
| <Link id="m-reshow" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" reshow"}</code> | <span className="api-desc">Timer that shows the elements again 0.1 seconds after `ResetAndRefresh`.</span> |
| <Link id="m-rotationinterval" /><code>{"private float rotationInterval"}</code> | <span className="api-desc">Angle in degrees between neighbouring elements, around the up axis.</span> |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> | <span className="api-desc">Forward offset applied after the rotation, so elements can sit on an arc.</span> |
| <Link id="m-scrollexecuted" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" scrollExecuted"}</code> | <span className="api-desc">Event raised when `ScrollDirection` accepts a step.</span> |
| <Link id="m-scrollprogress" /><code>{"private float scrollProgress"}</code> | <span className="api-desc">Progress through the current step, 0 to 1.</span> |
| <Link id="m-stepinterval" /><code>{"private float stepInterval"}</code> | <span className="api-desc">Seconds per scroll step.</span> |
| <Link id="m-stepsize" /><code>{"private int stepSize"}</code> | <span className="api-desc">How many items one `ScrollDirection` call moves.</span> |
| <Link id="m-targetindex" /><code>{"private int targetIndex"}</code> | <span className="api-desc">First visible index at the end of the current step.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canscrollleft" /><code>{"bool CanScrollLeft { get; }"}</code> | <span className="api-desc">Whether there are more items past the end of the visible window. Always true until a max index is set.</span> |
| <Link id="m-canscrollright" /><code>{"bool CanScrollRight { get; }"}</code> | <span className="api-desc">Whether the window can move back towards index 0. Always true until a max index is set.</span> |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | <span className="api-desc">How many elements are visible at once.</span> |
| <Link id="m-isscrollingleft-2" /><code>{"bool IsScrollingLeft { get; set; }"}</code> | <span className="api-desc">Set while a left scroll is held, so it keeps stepping.</span> |
| <Link id="m-isscrollingright-2" /><code>{"bool IsScrollingRight { get; set; }"}</code> | <span className="api-desc">Set while a right scroll is held, so it keeps stepping.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetandrefresh" /><code>{"void ResetAndRefresh(int maxIndex)"}</code> | <span className="api-desc">Hides everything, goes back to index 0 with a new item count and reshows the elements after 0.1 seconds.</span> |
| <Link id="m-scrolldirection" /><code>{"void ScrollDirection(int direction)"}</code> | <span className="api-desc">Moves the target one step in a direction if it stays in range, and fires the scroll event.</span> |
| <Link id="m-scrollto" /><code>{"void ScrollTo(int target)"}</code> | <span className="api-desc">Sets the index to scroll to. The row then steps there over time.</span> |
| <Link id="m-show" /><code>{"void Show()"}</code> | <span className="api-desc">Shows the first `Count` elements.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Creates `count` + 2 element instances, positions them, shows them if `isShowingByDefault`, and fires the can-scroll events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts the next scroll step when the component is enabled with a scroll pending.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">In play mode, adds or destroys instances to match a changed `count`.</span> |
| <Link id="m-positioninstances" /><code>{"private void PositionInstances()"}</code> | <span className="api-desc">Places the visible instances along the row, with spacing, rotation and offset, based on scroll progress.</span> |
| <Link id="m-safemod" /><code>{"private int SafeMod(int value, int mod)"}</code> | <span className="api-desc">Modulo that never returns a negative number, used to map item indices onto the instance ring.</span> |
| <Link id="m-startscrollleft" /><code>{"private void StartScrollLeft()"}</code> | <span className="api-desc">Begins one step towards higher indices: hides the element leaving and shows the one coming in.</span> |
| <Link id="m-startscrollright" /><code>{"private void StartScrollRight()"}</code> | <span className="api-desc">Begins one step towards lower indices: hides the element leaving and shows the one coming in.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Advances the step; at its end, starts the next step or disables the component once the target is reached.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ItemScroller`:

<div className="api-used-in">

[`CategoryScrubberController.scroller`](/mod/game-api/types/alta-customization/categoryscrubbercontroller#m-scroller), [`CosmeticCustomizationManager.categoryScroller`](/mod/game-api/types/alta-customization/cosmeticcustomizationmanager#m-categoryscroller), [`CosmeticScrollElement.scroller`](/mod/game-api/types/alta-customization/cosmeticscrollelement#m-scroller), [`ScrollManager.itemScroller`](/mod/game-api/types/alta-customization/scrollmanager#m-itemscroller), [`SwipePromptController.scroller`](/mod/game-api/types/global-s/swipepromptcontroller#m-scroller).

</div>
