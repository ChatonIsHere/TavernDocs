---
title: "ServerSelectionDisplay"
description: "Main menu server list laid out along a spline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelectionDisplay

A **class** in `Root.Township`, no namespace.

Main menu server list laid out along a spline. Scrolling moves the elements along it; the one nearest the selection point is selected. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSelectionDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementselected" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" elementSelected"}</code> | Event raised whenever a new element becomes selected. |
| <Link id="m-isselectingfirst" /><code>{"private bool isSelectingFirst"}</code> | Inspector button that runs `Setup` and `SelectFirst` in the editor. |
| <Link id="m-maximumenabledtime" /><code>{"private float maximumEnabledTime"}</code> | Elements past this spline position are hidden. Default 0.7. |
| <Link id="m-maxselectiondelta" /><code>{"private float maxSelectionDelta"}</code> | How close (in spline position) an element must be to `selectedTime` to be selected. Default 0.15. |
| <Link id="m-minimumenabledtime" /><code>{"private float minimumEnabledTime"}</code> | Elements before this spline position are hidden. Default 0.2. |
| <Link id="m-movetotimeanimationduration" /><code>{"private float moveToTimeAnimationDuration"}</code> | Seconds a non-instant `SelectElement` slide takes. Default 2. |
| <Link id="m-movetotimecoroutine" /><code>{"private Coroutine moveToTimeCoroutine"}</code> | The running `MoveToTime` slide, if any. |
| <Link id="m-selectedtime" /><code>{"private float selectedTime"}</code> | Spline position (0 to 1) of the selection point. Default 0.55. |
| <Link id="m-selector" /><code>{"private Transform selector"}</code> | Transform placed at the selection point on the spline. |
| <Link id="m-serverelements" /><code>{"private List<"}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverElements"}</code> | The elements on the display in order. Filled by `AddServerElement`. |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Spline distance between neighbouring elements. Default 0.05. |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | The Bezier spline the elements are laid along. |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> | Lowest allowed scroll value, set by `CalculateStartValue`. |
| <Link id="m-time" /><code>{"private float time"}</code> | Current scroll position along the spline. Backing field for `Value`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentselection" /><code><Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" CurrentSelection { get; private set; }"}</code> | The element at the selection point, or null. |
| <Link id="m-serverelements-2" /><code>{"List<"}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> ServerElements { get; }"}</code> | The elements in display order. |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | Scroll position along the spline, clamped to the list's range. Setting it stops any scroll animation. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> | Raised with the old and new selection. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addserverelement" /><code>{"void AddServerElement("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | Adds an element to the end of the list. |
| <Link id="m-removeserverelement" /><code>{"void RemoveServerElement("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | Removes an element, clearing the selection first if it was selected. |
| <Link id="m-selectelement" /><code>{"void SelectElement("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement, bool isInstant)"}</code> | Scrolls so an element sits at the selection point, instantly or animated. |
| <Link id="m-selectfirst" /><code>{"void SelectFirst()"}</code> | Scrolls to the first element. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatestartvalue" /><code>{"private void CalculateStartValue()"}</code> | Sets the lowest scroll value from the element count and `spacing`, so the last element can reach the selection point. |
| <Link id="m-movetotime" /><code>{"private IEnumerator MoveToTime(float targetTime, float moveToTimeAnimationDuration) (iterator)"}</code> | Coroutine that slides the scroll value to a target over a duration. Started by `SelectElement` when not instant. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws red spheres on the spline at the edges of the selection window. |
| <Link id="m-onselectionchanged" /><code>{"private void OnSelectionChanged("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldSelected)"}</code> | In play mode, raises `SelectedChanged` and, when something is selected, the `elementSelected` event. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: clamps the scroll value and handles the Select First inspector button. |
| <Link id="m-positiontransformattime" /><code>{"private void PositionTransformAtTime(float targetTime, Transform target)"}</code> | Places a transform on the spline at a position, facing along it, or hides it outside the enabled range. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Recalculates the start value and puts the selector at the selection point on the spline. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calls `Setup`. |
| <Link id="m-stopcurrentmovetotimeanimation" /><code>{"private void StopCurrentMoveToTimeAnimation()"}</code> | Stops a running `MoveToTime` slide. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Calls `UpdateTargets` every frame. |
| <Link id="m-updatetargets" /><code>{"private void UpdateTargets()"}</code> | Positions every element along the spline, sets which are interactable, and selects the one closest to the selection point. |

</details>

## Used in

Members of other types that take, return or hold a `ServerSelectionDisplay`:

[`ServerBoard.display`](/game-api/types/global-s/serverboard#m-display), [`ServerBoard.Display`](/game-api/types/global-s/serverboard#m-display-2), [`ServerElement.display`](/game-api/types/global-s/serverelement#m-display), [`ServerElement.SetDisplay`](/game-api/types/global-s/serverelement#m-setdisplay).
