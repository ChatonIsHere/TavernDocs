---
title: "RopePoweredElementBoard"
description: "Scrolling list board driven by pulling ropes: places its element transforms along a spline and moves them as the ropes are pulled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePoweredElementBoard

A **class** in `Root.Township`, no namespace.

Scrolling list board driven by pulling ropes: places its element transforms along a spline and moves them as the ropes are pulled. Used by the friends board and `RopeUIList`. Client side.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RopePoweredElementBoard()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alongsideaxis" /><code>{"private Vector3 alongsideAxis"}</code> | Local axis used with the spline direction to work out each element's up direction. |
| <Link id="m-boarddisplaycount" /><code>{"private int boardDisplayCount"}</code> | How many elements fit on the board at once. |
| <Link id="m-elements" /><code>{"private List<Transform> elements"}</code> | Backing field for `Elements`. |
| <Link id="m-firstvalue" /><code>{"private float firstValue"}</code> | Spline position of the first element when scrolled to the start. |
| <Link id="m-issettingparent" /><code>{"private bool isSettingParent"}</code> | Whether added elements are parented to the spline transform. |
| <Link id="m-lastvalue" /><code>{"private float lastValue"}</code> | Spline position of the last element when scrolled to the end; worked out by `CalculateStartValue`. |
| <Link id="m-maximumenabledtime" /><code>{"private float maximumEnabledTime"}</code> | Elements past this spline position are hidden. |
| <Link id="m-minimumenabledtime" /><code>{"private float minimumEnabledTime"}</code> | Elements before this spline position are hidden. |
| <Link id="m-movetotimeanimationduration" /><code>{"private float moveToTimeAnimationDuration"}</code> | Default duration for a move animation. Not read in this class. |
| <Link id="m-movetotimecoroutine" /><code>{"private Coroutine moveToTimeCoroutine"}</code> | Running move animation, or null. |
| <Link id="m-ropegrabs" /><code>{"private "}<Link to="/game-api/types/global-q-r/ropegrab">{"RopeGrab"}</Link>{"[] ropeGrabs"}</code> | Ropes whose pulling scrolls the board. |
| <Link id="m-ropespeedmultiplier" /><code>{"private float ropeSpeedMultiplier"}</code> | How much the scroll position changes per unit of rope progress. |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | Gap between elements along the spline, in spline position units. |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | Bezier spline the elements sit on. |
| <Link id="m-time" /><code>{"private float time"}</code> | Backing field for `Value`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elements-2" /><code>{"List<Transform> Elements { get; }"}</code> | The transforms shown on the board, in order. |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | Scroll position from 0 to 1. Setting it clamps the value and stops any move animation. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"void AddElement(Transform element, bool isUpdatingCurve)"}</code> | Adds an element, parents it to the spline if `isSettingParent` is on, and optionally recalculates the end value. |
| <Link id="m-calculatestartvalue" /><code>{"void CalculateStartValue()"}</code> | Sets `lastValue` from `firstValue`, `boardDisplayCount` and `spacing`, which fixes how far the list can scroll. |
| <Link id="m-clearall" /><code>{"void ClearAll()"}</code> | Removes every element from the list (the transforms are not destroyed). |
| <Link id="m-removeelement" /><code>{"void RemoveElement(Transform element)"}</code> | Removes one element and recalculates the end value. |
| <Link id="m-resetandset" /><code>{"void ResetAndSet(IEnumerable<Transform> elements, bool isUpdatingCurve)"}</code> | Replaces all elements with the given ones and scrolls back to the start. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-movetotime" /><code>{"private IEnumerator MoveToTime(float targetTime, float moveToTimeAnimationDuration) (iterator)"}</code> | Coroutine that eases the scroll position to a target over a duration. Nothing in this class starts it. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops listening to the rope grabs. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the rope grabs and recalculates the end value. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: clamps `time` through `Value`. |
| <Link id="m-positiontransformattime" /><code>{"private void PositionTransformAtTime(float targetTime, Transform target)"}</code> | Places an element at a point on the spline, facing along it, or hides it if outside the enabled range. |
| <Link id="m-scrolllist" /><code>{"private void ScrollList(float oldRopeValue, float ropeValue)"}</code> | Rope progress handler: moves `Value` by the rope's change times `ropeSpeedMultiplier`. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Subscribes to every rope grab's progress change (once) and recalculates the end value. |
| <Link id="m-stopcurrentmovetotimeanimation" /><code>{"private void StopCurrentMoveToTimeAnimation()"}</code> | Stops a running `MoveToTime` coroutine, if any. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Repositions every element each frame. |
| <Link id="m-updatetargets" /><code>{"private void UpdateTargets()"}</code> | Works out each element's spline position from the scroll value and places it. |

</details>

## Used in

Members of other types that take, return or hold a `RopePoweredElementBoard`:

[`FriendsManager.displayBoard`](/game-api/types/alta-menus/friendsmanager#m-displayboard), [`RopeUIList.board`](/game-api/types/alta-menus/ropeuilist#m-board).
