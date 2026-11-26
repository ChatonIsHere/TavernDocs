---
title: "ShakeDetector"
description: "Component that fires an event when its rigidbody is shaken back and forth hard enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeDetector

A **class** in `Root.Township`, the global namespace.

Component that fires an event when its rigidbody is shaken back and forth hard enough. Wraps a `ShakeDetectorHelper` checked every fixed update.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> | <span className="api-desc">How fast built-up shake strength fades away.</span> |
| <Link id="m-helper" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" helper"}</code> | <span className="api-desc">The `ShakeDetectorHelper` doing the work.</span> |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> | <span className="api-desc">Strength added for a full reversal of direction.</span> |
| <Link id="m-shaken" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" shaken"}</code> | <span className="api-desc">Backing field for `Shaken`.</span> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Strength needed to count as a shake.</span> |
| <Link id="m-velocitythreshold" /><code>{"private float velocityThreshold"}</code> | <span className="api-desc">Speed the rigidbody must reach before a direction change counts. Squared before it is passed to the helper.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shaken-2" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" Shaken { get; }"}</code> | <span className="api-desc">Inspector event fired each time the shake strength goes over `threshold`.</span> |
| <Link id="m-strength" /><code>{"float Strength { get; }"}</code> | <span className="api-desc">Current shake build-up from the helper. Resets to 0 when a shake fires.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes the helper from the inspector values and this object's rigidbody, and links its shake event to `shaken`.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Runs the helper's shake check.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ShakeDetector`:

<div className="api-used-in">

[`ShakeablePouringStrengthController.shakeDetector`](/mod/game-api/types/alta-stats-effects/shakeablepouringstrengthcontroller#m-shakedetector).

</div>
