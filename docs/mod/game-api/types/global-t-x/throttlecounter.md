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
| <Link id="m-ctor" /><code>{"ThrottleCounter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-builduplerpspeed" /><code>{"private float buildupLerpSpeed"}</code> | <span className="api-desc">How fast the scroll speed ramps up towards the curve value.</span> |
| <Link id="m-changedbyint" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" changedByInt"}</code> | <span className="api-desc">Backing event for `ChangedByInt`.</span> |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | <span className="api-desc">Running fractional count since the grab.</span> |
| <Link id="m-deadrange" /><code>{"private float deadRange"}</code> | <span className="api-desc">Fraction of the lever range near the middle that counts as no input.</span> |
| <Link id="m-direction" /><code>{"private int direction"}</code> | <span className="api-desc">Current count direction: 1 below the middle angle, -1 above, 0 at it.</span> |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> | <span className="api-desc">Lever's rest angle, from its first selection.</span> |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> | <span className="api-desc">Angle span from the middle down to the lever's minimum.</span> |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> | <span className="api-desc">Angle span from the middle up to the lever's maximum.</span> |
| <Link id="m-roundedvalue" /><code>{"private int roundedValue"}</code> | <span className="api-desc">Count rounded to an integer, used to work out each step change.</span> |
| <Link id="m-scrollspeed" /><code>{"private float scrollSpeed"}</code> | <span className="api-desc">Current count speed; resets when the direction flips.</span> |
| <Link id="m-selectionlever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" selectionLever"}</code> | <span className="api-desc">The lever being read.</span> |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> | <span className="api-desc">Curve from lever push amount to count speed.</span> |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> | <span className="api-desc">Scales the count speed.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered late update.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">If false, grabbing the lever does nothing. Default true.</span> |
| <Link id="m-limitedtoplayer" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" LimitedToPlayer { get; set; }"}</code> | <span className="api-desc">If set, only this player's grab starts counting.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedbyint-2" /><code>{"event Action<int> ChangedByInt"}</code> | <span className="api-desc">Event with the change in whole steps each time the running count crosses an integer.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Reads the lever's middle and range angles and hooks its handle's grab and release.</span> |
| <Link id="m-startupdating" /><code>{"private void StartUpdating("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, starts the late-update counting loop if active and the player is allowed.</span> |
| <Link id="m-stopupdating" /><code>{"private void StopUpdating("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, stops counting and resets the count to zero.</span> |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> | <span className="api-desc">Each frame, turns the lever angle into a speed, adds to the count and fires whole-step changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ThrottleCounter`:

<div className="api-used-in">

[`ButtonCounter.throttleCounter`](/mod/game-api/types/global-a-b/buttoncounter#m-throttlecounter).

</div>
