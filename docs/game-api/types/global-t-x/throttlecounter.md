---
title: "ThrottleCounter"
description: "class ThrottleCounter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ThrottleCounter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ThrottleCounter()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-builduplerpspeed" /><code>{"private float buildupLerpSpeed"}</code> |
| <Link id="m-changedbyint" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" changedByInt"}</code> |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> |
| <Link id="m-deadrange" /><code>{"private float deadRange"}</code> |
| <Link id="m-direction" /><code>{"private int direction"}</code> |
| <Link id="m-middleangle" /><code>{"private float middleAngle"}</code> |
| <Link id="m-negativerange" /><code>{"private float negativeRange"}</code> |
| <Link id="m-positiverange" /><code>{"private float positiveRange"}</code> |
| <Link id="m-roundedvalue" /><code>{"private int roundedValue"}</code> |
| <Link id="m-scrollspeed" /><code>{"private float scrollSpeed"}</code> |
| <Link id="m-selectionlever" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" selectionLever"}</code> |
| <Link id="m-speedcurve" /><code>{"private AnimationCurve speedCurve"}</code> |
| <Link id="m-speedmultiplier" /><code>{"private float speedMultiplier"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> |
| <Link id="m-limitedtoplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" LimitedToPlayer { get; set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-changedbyint-2" /><code>{"event Action<int> ChangedByInt"}</code> |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-startupdating" /><code>{"private void StartUpdating("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stopupdating" /><code>{"private void StopUpdating("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-updatescroller" /><code>{"private void UpdateScroller()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ThrottleCounter`:

[`ButtonCounter.throttleCounter`](/game-api/types/global-a-b/buttoncounter#m-throttlecounter).
