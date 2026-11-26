---
title: "ServerSelectionDisplay"
description: "Main menu server list laid out along a spline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelectionDisplay

A **class** in `Root.Township`, the global namespace.

Main menu server list laid out along a spline. Scrolling moves the elements along it; the one nearest the selection point is selected. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSelectionDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementselected" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" elementSelected"}</code> | <span className="api-desc">Event raised whenever a new element becomes selected.</span> |
| <Link id="m-isselectingfirst" /><code>{"private bool isSelectingFirst"}</code> | <span className="api-desc">Inspector button that runs `Setup` and `SelectFirst` in the editor.</span> |
| <Link id="m-maximumenabledtime" /><code>{"private float maximumEnabledTime"}</code> | <span className="api-desc">Elements past this spline position are hidden. Default 0.7.</span> |
| <Link id="m-maxselectiondelta" /><code>{"private float maxSelectionDelta"}</code> | <span className="api-desc">How close (in spline position) an element must be to `selectedTime` to be selected. Default 0.15.</span> |
| <Link id="m-minimumenabledtime" /><code>{"private float minimumEnabledTime"}</code> | <span className="api-desc">Elements before this spline position are hidden. Default 0.2.</span> |
| <Link id="m-movetotimeanimationduration" /><code>{"private float moveToTimeAnimationDuration"}</code> | <span className="api-desc">Seconds a non-instant `SelectElement` slide takes. Default 2.</span> |
| <Link id="m-movetotimecoroutine" /><code>{"private Coroutine moveToTimeCoroutine"}</code> | <span className="api-desc">The running `MoveToTime` slide, if any.</span> |
| <Link id="m-selectedtime" /><code>{"private float selectedTime"}</code> | <span className="api-desc">Spline position (0 to 1) of the selection point. Default 0.55.</span> |
| <Link id="m-selector" /><code>{"private Transform selector"}</code> | <span className="api-desc">Transform placed at the selection point on the spline.</span> |
| <Link id="m-serverelements" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverElements"}</code> | <span className="api-desc">The elements on the display in order. Filled by `AddServerElement`.</span> |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Spline distance between neighbouring elements. Default 0.05.</span> |
| <Link id="m-spline" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | <span className="api-desc">The Bezier spline the elements are laid along.</span> |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> | <span className="api-desc">Lowest allowed scroll value, set by `CalculateStartValue`.</span> |
| <Link id="m-time" /><code>{"private float time"}</code> | <span className="api-desc">Current scroll position along the spline. Backing field for `Value`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentselection" /><code><Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" CurrentSelection { get; private set; }"}</code> | <span className="api-desc">The element at the selection point, or null.</span> |
| <Link id="m-serverelements-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> ServerElements { get; }"}</code> | <span className="api-desc">The elements in display order.</span> |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | <span className="api-desc">Scroll position along the spline, clamped to the list's range. Setting it stops any scroll animation.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> | <span className="api-desc">Raised with the old and new selection.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addserverelement" /><code>{"void AddServerElement("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | <span className="api-desc">Adds an element to the end of the list.</span> |
| <Link id="m-removeserverelement" /><code>{"void RemoveServerElement("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> | <span className="api-desc">Removes an element, clearing the selection first if it was selected.</span> |
| <Link id="m-selectelement" /><code>{"void SelectElement("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement, bool isInstant)"}</code> | <span className="api-desc">Scrolls so an element sits at the selection point, instantly or animated.</span> |
| <Link id="m-selectfirst" /><code>{"void SelectFirst()"}</code> | <span className="api-desc">Scrolls to the first element.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatestartvalue" /><code>{"private void CalculateStartValue()"}</code> | <span className="api-desc">Sets the lowest scroll value from the element count and `spacing`, so the last element can reach the selection point.</span> |
| <Link id="m-movetotime" /><code>{"private IEnumerator MoveToTime(float targetTime, float moveToTimeAnimationDuration) (iterator)"}</code> | <span className="api-desc">Coroutine that slides the scroll value to a target over a duration. Started by `SelectElement` when not instant.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws red spheres on the spline at the edges of the selection window.</span> |
| <Link id="m-onselectionchanged" /><code>{"private void OnSelectionChanged("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldSelected)"}</code> | <span className="api-desc">In play mode, raises `SelectedChanged` and, when something is selected, the `elementSelected` event.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: clamps the scroll value and handles the Select First inspector button.</span> |
| <Link id="m-positiontransformattime" /><code>{"private void PositionTransformAtTime(float targetTime, Transform target)"}</code> | <span className="api-desc">Places a transform on the spline at a position, facing along it, or hides it outside the enabled range.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Recalculates the start value and puts the selector at the selection point on the spline.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `Setup`.</span> |
| <Link id="m-stopcurrentmovetotimeanimation" /><code>{"private void StopCurrentMoveToTimeAnimation()"}</code> | <span className="api-desc">Stops a running `MoveToTime` slide.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Calls `UpdateTargets` every frame.</span> |
| <Link id="m-updatetargets" /><code>{"private void UpdateTargets()"}</code> | <span className="api-desc">Positions every element along the spline, sets which are interactable, and selects the one closest to the selection point.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerSelectionDisplay`:

<div className="api-used-in">

[`ServerBoard.display`](/mod/game-api/types/global-s/serverboard#m-display), [`ServerBoard.Display`](/mod/game-api/types/global-s/serverboard#m-display-2), [`ServerElement.display`](/mod/game-api/types/global-s/serverelement#m-display), [`ServerElement.SetDisplay`](/mod/game-api/types/global-s/serverelement#m-setdisplay).

</div>
