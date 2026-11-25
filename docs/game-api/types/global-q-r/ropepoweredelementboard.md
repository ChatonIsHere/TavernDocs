---
title: "RopePoweredElementBoard"
description: "class RopePoweredElementBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePoweredElementBoard

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopePoweredElementBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alongsideaxis" /><code>{"private Vector3 alongsideAxis"}</code> |  |
| <Link id="m-boarddisplaycount" /><code>{"private int boardDisplayCount"}</code> |  |
| <Link id="m-elements" /><code>{"private List<Transform> elements"}</code> |  |
| <Link id="m-firstvalue" /><code>{"private float firstValue"}</code> |  |
| <Link id="m-issettingparent" /><code>{"private bool isSettingParent"}</code> |  |
| <Link id="m-lastvalue" /><code>{"private float lastValue"}</code> |  |
| <Link id="m-maximumenabledtime" /><code>{"private float maximumEnabledTime"}</code> |  |
| <Link id="m-minimumenabledtime" /><code>{"private float minimumEnabledTime"}</code> |  |
| <Link id="m-movetotimeanimationduration" /><code>{"private float moveToTimeAnimationDuration"}</code> |  |
| <Link id="m-movetotimecoroutine" /><code>{"private Coroutine moveToTimeCoroutine"}</code> |  |
| <Link id="m-ropegrabs" /><code>{"private "}<Link to="/game-api/types/global-q-r/ropegrab">{"RopeGrab"}</Link>{"[] ropeGrabs"}</code> |  |
| <Link id="m-ropespeedmultiplier" /><code>{"private float ropeSpeedMultiplier"}</code> |  |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> |  |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> |  |
| <Link id="m-time" /><code>{"private float time"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elements-2" /><code>{"List<Transform> Elements { get; }"}</code> |  |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"void AddElement(Transform element, bool isUpdatingCurve)"}</code> |  |
| <Link id="m-calculatestartvalue" /><code>{"void CalculateStartValue()"}</code> |  |
| <Link id="m-clearall" /><code>{"void ClearAll()"}</code> |  |
| <Link id="m-removeelement" /><code>{"void RemoveElement(Transform element)"}</code> |  |
| <Link id="m-resetandset" /><code>{"void ResetAndSet(IEnumerable<Transform> elements, bool isUpdatingCurve)"}</code> |  |
| <Link id="m-movetotime" /><code>{"private IEnumerator MoveToTime(float targetTime, float moveToTimeAnimationDuration) (iterator)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-positiontransformattime" /><code>{"private void PositionTransformAtTime(float targetTime, Transform target)"}</code> |  |
| <Link id="m-scrolllist" /><code>{"private void ScrollList(float oldRopeValue, float ropeValue)"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |  |
| <Link id="m-stopcurrentmovetotimeanimation" /><code>{"private void StopCurrentMoveToTimeAnimation()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updatetargets" /><code>{"private void UpdateTargets()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RopePoweredElementBoard`:

[`FriendsManager.displayBoard`](/game-api/types/alta-menus/friendsmanager#m-displayboard), [`RopeUIList.board`](/game-api/types/alta-menus/ropeuilist#m-board).
