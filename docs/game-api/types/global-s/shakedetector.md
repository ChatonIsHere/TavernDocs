---
title: "ShakeDetector"
description: "Component that fires an event when its rigidbody is shaken back and forth hard enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeDetector

A **class** in `Root.Township`, no namespace.

Component that fires an event when its rigidbody is shaken back and forth hard enough. Wraps a `ShakeDetectorHelper` checked every fixed update.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeDetector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> | How fast built-up shake strength fades away. |
| <Link id="m-helper" /><code>{"private "}<Link to="/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" helper"}</code> | The `ShakeDetectorHelper` doing the work. |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> | Strength added for a full reversal of direction. |
| <Link id="m-shaken" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" shaken"}</code> | Backing field for `Shaken`. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Strength needed to count as a shake. |
| <Link id="m-velocitythreshold" /><code>{"private float velocityThreshold"}</code> | Speed the rigidbody must reach before a direction change counts. Squared before it is passed to the helper. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shaken-2" /><code><Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" Shaken { get; }"}</code> | Inspector event fired each time the shake strength goes over `threshold`. |
| <Link id="m-strength" /><code>{"float Strength { get; }"}</code> | Current shake build-up from the helper. Resets to 0 when a shake fires. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes the helper from the inspector values and this object's rigidbody, and links its shake event to `shaken`. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Runs the helper's shake check. |

</details>

## Used in

Members of other types that take, return or hold a `ShakeDetector`:

[`ShakeablePouringStrengthController.shakeDetector`](/game-api/types/alta-stats-effects/shakeablepouringstrengthcontroller#m-shakedetector).
