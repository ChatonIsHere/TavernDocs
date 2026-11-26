---
title: "ShakeInputStructure"
description: "Skill input asset for profession skills triggered by shaking a held item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeInputStructure

A **class** in `Root.Township`, no namespace.

Skill input asset for profession skills triggered by shaking a held item. Makes a `ShakeInput` for each use.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`ShakeInputStructure.Create`](/game-api/types/global-s/shakeinputstructure-create)
- **Nested types** [`Create`](/game-api/types/global-s/shakeinputstructure-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShakeInputStructure()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> | Backing field for `FadePerSecond`. |
| <Link id="m-helddeactivation" /><code>{"private float heldDeactivation"}</code> | Backing field for `HeldDeactivation`. |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> | Backing field for `JumpPerChange`. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Backing field for `Threshold`. |
| <Link id="m-velocitythresholdsquared" /><code>{"private float velocityThresholdSquared"}</code> | Backing field for `VelocityThresholdSquared`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond-2" /><code>{"float FadePerSecond { get; }"}</code> | How fast built-up shake strength fades away. |
| <Link id="m-helddeactivation-2" /><code>{"float HeldDeactivation { get; }"}</code> | Seconds the input stays active after a shake before it switches off again. |
| <Link id="m-jumpperchange-2" /><code>{"float JumpPerChange { get; }"}</code> | Strength added for a full reversal of direction. |
| <Link id="m-threshold-2" /><code>{"float Threshold { get; }"}</code> | Strength needed to count as a shake. |
| <Link id="m-velocitythresholdsquared-2" /><code>{"float VelocityThresholdSquared { get; }"}</code> | Squared speed the held item must reach before a direction change counts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Returns a new `ShakeInput` that reads these settings. |

## Used in

Members of other types that take, return or hold a `ShakeInputStructure`:

[`ShakeInput.shakeStructure`](/game-api/types/global-s/shakeinput#m-shakestructure).
