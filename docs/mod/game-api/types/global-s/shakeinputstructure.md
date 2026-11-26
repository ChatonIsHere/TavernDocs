---
title: "ShakeInputStructure"
description: "Skill input asset for profession skills triggered by shaking a held item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShakeInputStructure

A **class** in `Root.Township`, the global namespace.

Skill input asset for profession skills triggered by shaking a held item. Makes a `ShakeInput` for each use.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SkillInputStructure`](/mod/game-api/types/global-s/skillinputstructure)
- **Derived types** [`ShakeInputStructure.Create`](/mod/game-api/types/global-s/shakeinputstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/shakeinputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShakeInputStructure()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond" /><code>{"private float fadePerSecond"}</code> | <span className="api-desc">Backing field for `FadePerSecond`.</span> |
| <Link id="m-helddeactivation" /><code>{"private float heldDeactivation"}</code> | <span className="api-desc">Backing field for `HeldDeactivation`.</span> |
| <Link id="m-jumpperchange" /><code>{"private float jumpPerChange"}</code> | <span className="api-desc">Backing field for `JumpPerChange`.</span> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Backing field for `Threshold`.</span> |
| <Link id="m-velocitythresholdsquared" /><code>{"private float velocityThresholdSquared"}</code> | <span className="api-desc">Backing field for `VelocityThresholdSquared`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fadepersecond-2" /><code>{"float FadePerSecond { get; }"}</code> | <span className="api-desc">How fast built-up shake strength fades away.</span> |
| <Link id="m-helddeactivation-2" /><code>{"float HeldDeactivation { get; }"}</code> | <span className="api-desc">Seconds the input stays active after a shake before it switches off again.</span> |
| <Link id="m-jumpperchange-2" /><code>{"float JumpPerChange { get; }"}</code> | <span className="api-desc">Strength added for a full reversal of direction.</span> |
| <Link id="m-threshold-2" /><code>{"float Threshold { get; }"}</code> | <span className="api-desc">Strength needed to count as a shake.</span> |
| <Link id="m-velocitythresholdsquared-2" /><code>{"float VelocityThresholdSquared { get; }"}</code> | <span className="api-desc">Squared speed the held item must reach before a direction change counts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | <span className="api-desc">Returns a new `ShakeInput` that reads these settings.</span> |

## Used in

Members of other types that take, return or hold a `ShakeInputStructure`:

<div className="api-used-in">

[`ShakeInput.shakeStructure`](/mod/game-api/types/global-s/shakeinput#m-shakestructure).

</div>
