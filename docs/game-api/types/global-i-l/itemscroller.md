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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ItemScroller()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-canscrollleftchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" canScrollLeftChanged"}</code> |
| <Link id="m-canscrollrightchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" canScrollRightChanged"}</code> |
| <Link id="m-count" /><code>{"private int count"}</code> |
| <Link id="m-finaltargetindex" /><code>{"private int finalTargetIndex"}</code> |
| <Link id="m-index" /><code>{"private int index"}</code> |
| <Link id="m-instances" /><code>{"private List<"}<Link to="/game-api/types/global-s/scrollelement">{"ScrollElement"}</Link>{"> instances"}</code> |
| <Link id="m-interval" /><code>{"private float interval"}</code> |
| <Link id="m-isscrollingleft" /><code>{"private bool isScrollingLeft"}</code> |
| <Link id="m-isscrollingright" /><code>{"private bool isScrollingRight"}</code> |
| <Link id="m-isshowingbydefault" /><code>{"private bool isShowingByDefault"}</code> |
| <Link id="m-maxindex" /><code>{"private int maxIndex"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/global-s/scrollelement">{"ScrollElement"}</Link>{" prefab"}</code> |
| <Link id="m-reshow" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" reshow"}</code> |
| <Link id="m-rotationinterval" /><code>{"private float rotationInterval"}</code> |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> |
| <Link id="m-scrollexecuted" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" scrollExecuted"}</code> |
| <Link id="m-scrollprogress" /><code>{"private float scrollProgress"}</code> |
| <Link id="m-stepinterval" /><code>{"private float stepInterval"}</code> |
| <Link id="m-stepsize" /><code>{"private int stepSize"}</code> |
| <Link id="m-targetindex" /><code>{"private int targetIndex"}</code> |

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

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-positioninstances" /><code>{"private void PositionInstances()"}</code> |
| <Link id="m-safemod" /><code>{"private int SafeMod(int value, int mod)"}</code> |
| <Link id="m-startscrollleft" /><code>{"private void StartScrollLeft()"}</code> |
| <Link id="m-startscrollright" /><code>{"private void StartScrollRight()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ItemScroller`:

[`CategoryScrubberController.scroller`](/game-api/types/alta-customization/categoryscrubbercontroller#m-scroller), [`CosmeticCustomizationManager.categoryScroller`](/game-api/types/alta-customization/cosmeticcustomizationmanager#m-categoryscroller), [`CosmeticScrollElement.scroller`](/game-api/types/alta-customization/cosmeticscrollelement#m-scroller), [`ScrollManager.itemScroller`](/game-api/types/alta-customization/scrollmanager#m-itemscroller), [`SwipePromptController.scroller`](/game-api/types/global-s/swipepromptcontroller#m-scroller).
