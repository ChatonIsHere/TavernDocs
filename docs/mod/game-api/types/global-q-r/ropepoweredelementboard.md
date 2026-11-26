---
title: "RopePoweredElementBoard"
description: "Scrolling list board driven by pulling ropes: places its element transforms along a spline and moves them as the ropes are pulled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePoweredElementBoard

A **class** in `Root.Township`, the global namespace.

Scrolling list board driven by pulling ropes: places its element transforms along a spline and moves them as the ropes are pulled. Used by the friends board and `RopeUIList`. Client side.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopePoweredElementBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alongsideaxis" /><code>{"private Vector3 alongsideAxis"}</code> | <span className="api-desc">Local axis used with the spline direction to work out each element's up direction.</span> |
| <Link id="m-boarddisplaycount" /><code>{"private int boardDisplayCount"}</code> | <span className="api-desc">How many elements fit on the board at once.</span> |
| <Link id="m-elements" /><code>{"private List<Transform> elements"}</code> | <span className="api-desc">Backing field for `Elements`.</span> |
| <Link id="m-firstvalue" /><code>{"private float firstValue"}</code> | <span className="api-desc">Spline position of the first element when scrolled to the start.</span> |
| <Link id="m-issettingparent" /><code>{"private bool isSettingParent"}</code> | <span className="api-desc">Whether added elements are parented to the spline transform.</span> |
| <Link id="m-lastvalue" /><code>{"private float lastValue"}</code> | <span className="api-desc">Spline position of the last element when scrolled to the end; worked out by `CalculateStartValue`.</span> |
| <Link id="m-maximumenabledtime" /><code>{"private float maximumEnabledTime"}</code> | <span className="api-desc">Elements past this spline position are hidden.</span> |
| <Link id="m-minimumenabledtime" /><code>{"private float minimumEnabledTime"}</code> | <span className="api-desc">Elements before this spline position are hidden.</span> |
| <Link id="m-movetotimeanimationduration" /><code>{"private float moveToTimeAnimationDuration"}</code> | <span className="api-desc">Default duration for a move animation. Not read in this class.</span> |
| <Link id="m-movetotimecoroutine" /><code>{"private Coroutine moveToTimeCoroutine"}</code> | <span className="api-desc">Running move animation, or null.</span> |
| <Link id="m-ropegrabs" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/ropegrab">{"RopeGrab"}</Link>{"[] ropeGrabs"}</code> | <span className="api-desc">Ropes whose pulling scrolls the board.</span> |
| <Link id="m-ropespeedmultiplier" /><code>{"private float ropeSpeedMultiplier"}</code> | <span className="api-desc">How much the scroll position changes per unit of rope progress.</span> |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Gap between elements along the spline, in spline position units.</span> |
| <Link id="m-spline" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | <span className="api-desc">Bezier spline the elements sit on.</span> |
| <Link id="m-time" /><code>{"private float time"}</code> | <span className="api-desc">Backing field for `Value`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elements-2" /><code>{"List<Transform> Elements { get; }"}</code> | <span className="api-desc">The transforms shown on the board, in order.</span> |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | <span className="api-desc">Scroll position from 0 to 1. Setting it clamps the value and stops any move animation.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"void AddElement(Transform element, bool isUpdatingCurve)"}</code> | <span className="api-desc">Adds an element, parents it to the spline if `isSettingParent` is on, and optionally recalculates the end value.</span> |
| <Link id="m-calculatestartvalue" /><code>{"void CalculateStartValue()"}</code> | <span className="api-desc">Sets `lastValue` from `firstValue`, `boardDisplayCount` and `spacing`, which fixes how far the list can scroll.</span> |
| <Link id="m-clearall" /><code>{"void ClearAll()"}</code> | <span className="api-desc">Removes every element from the list (the transforms are not destroyed).</span> |
| <Link id="m-removeelement" /><code>{"void RemoveElement(Transform element)"}</code> | <span className="api-desc">Removes one element and recalculates the end value.</span> |
| <Link id="m-resetandset" /><code>{"void ResetAndSet(IEnumerable<Transform> elements, bool isUpdatingCurve)"}</code> | <span className="api-desc">Replaces all elements with the given ones and scrolls back to the start.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-movetotime" /><code>{"private IEnumerator MoveToTime(float targetTime, float moveToTimeAnimationDuration) (iterator)"}</code> | <span className="api-desc">Coroutine that eases the scroll position to a target over a duration. Nothing in this class starts it.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops listening to the rope grabs.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the rope grabs and recalculates the end value.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: clamps `time` through `Value`.</span> |
| <Link id="m-positiontransformattime" /><code>{"private void PositionTransformAtTime(float targetTime, Transform target)"}</code> | <span className="api-desc">Places an element at a point on the spline, facing along it, or hides it if outside the enabled range.</span> |
| <Link id="m-scrolllist" /><code>{"private void ScrollList(float oldRopeValue, float ropeValue)"}</code> | <span className="api-desc">Rope progress handler: moves `Value` by the rope's change times `ropeSpeedMultiplier`.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Subscribes to every rope grab's progress change (once) and recalculates the end value.</span> |
| <Link id="m-stopcurrentmovetotimeanimation" /><code>{"private void StopCurrentMoveToTimeAnimation()"}</code> | <span className="api-desc">Stops a running `MoveToTime` coroutine, if any.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Repositions every element each frame.</span> |
| <Link id="m-updatetargets" /><code>{"private void UpdateTargets()"}</code> | <span className="api-desc">Works out each element's spline position from the scroll value and places it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RopePoweredElementBoard`:

<div className="api-used-in">

[`FriendsManager.displayBoard`](/mod/game-api/types/alta-menus/friendsmanager#m-displayboard), [`RopeUIList.board`](/mod/game-api/types/alta-menus/ropeuilist#m-board).

</div>
