---
title: "ThrottleCounter"
description: "Turns a spring-back SelectionLever into a stream of integer steps: the further the lever is pushed from its middle, the faster it counts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrottleCounter

A **class** in `Root.Township`, the global namespace.

Turns a spring-back `SelectionLever` into a stream of integer steps: the further the lever is pushed from its middle, the faster it counts. Runs where the player holds the lever.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ThrottleCounter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-builduplerpspeed" /><code>{"private float buildupLerpSpeed"}</code> | How fast the scroll speed ramps up towards the curve value. |
| <Link id="m-changedbyint" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" changedByInt"}</code> | Backing event for `ChangedByInt`. |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | Running fractional count since the grab. |
| <Link id="m-deadrange" /><code>{"private float deadRange"}</code> | Fraction of the lever range near the middle that counts as no input. |
| <Link id="m-direction" /><code>{"private int direction"}</code> | Current count direction: 1 below the middle angle, -1 above, 0 at it. |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | Lever's rest angle, from its first selection. |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | Angle span from the middle down to the lever's minimum. |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | Angle span from the middle up to the lever's maximum. |
| <Link id="m-roundedvalue" /><code>{"private int roundedValue"}</code> | Count rounded to an integer, used to work out each step change. |
| <Link id="m-scrollspeed" /><code>{"private float scrollSpeed"}</code> | Current count speed; resets when the direction flips. |
| <Link id="m-selectionlever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" selectionLever"}</code> | The lever being read. |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | Curve from lever push amount to count speed. |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | Scales the count speed. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered late update. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | If false, grabbing the lever does nothing. Default true. |
| <Link id="m-limitedtoplayer" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" LimitedToPlayer { get; set; }"}</code> | If set, only this player's grab starts counting. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedbyint-2" /><code>{"event Action<int> ChangedByInt"}</code> | Event with the change in whole steps each time the running count crosses an integer. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Reads the lever's middle and range angles and hooks its handle's grab and release. |
| <Link id="m-startupdating" /><code>{"private void StartUpdating("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, starts the late-update counting loop if active and the player is allowed. |
| <Link id="m-stopupdating" /><code>{"private void StopUpdating("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, stops counting and resets the count to zero. |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | Each frame, turns the lever angle into a speed, adds to the count and fires whole-step changes. |

</details>

## Used in

Members of other types that take, return or hold a `ThrottleCounter`:

[`ButtonCounter.throttleCounter`](/mod/game-api/types/global-a-b/buttoncounter#m-throttlecounter).
