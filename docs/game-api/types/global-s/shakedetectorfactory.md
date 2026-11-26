---
title: "ShakeDetectorFactory"
description: "Serializable set of shake settings that builds a ShakeDetectorHelper for a given rigidbody."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeDetectorFactory

A **class** in `Root.Township`, no namespace.

Serializable set of shake settings that builds a `ShakeDetectorHelper` for a given rigidbody. Used by `FireBug`.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShakeDetectorFactory()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> | How fast built-up shake strength fades away. |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> | Strength added for a full reversal of direction. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Strength needed to count as a shake. At 0 or below the helper never fires. |
| <Link id="m-velocitythresholdsquared" /><code>{"private float velocityThresholdSquared"}</code> | Squared speed the rigidbody must reach before a direction change counts. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethelper" /><code><Link to="/game-api/types/global-s/shakedetectorhelper">{"ShakeDetectorHelper"}</Link>{" GetHelper(Rigidbody targetRigidbody)"}</code> | Makes a new `ShakeDetectorHelper` with these settings for the rigidbody. |

## Used in

Members of other types that take, return or hold a `ShakeDetectorFactory`:

[`FireBug.shakeDetectorSettings`](/game-api/types/alta-intelligence/firebug#m-shakedetectorsettings).
