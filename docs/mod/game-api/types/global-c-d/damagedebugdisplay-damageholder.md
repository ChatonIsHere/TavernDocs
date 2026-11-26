---
title: "DamageDebugDisplay.DamageHolder"
description: "Debug text for one player's last three attacks: damage, type and the follow, direction and weight factors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDebugDisplay.DamageHolder

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug text for one player's last three attacks: damage, type and the follow, direction and weight factors.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DamageDebugDisplay`](/mod/game-api/types/global-c-d/damagedebugdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageHolder()"}</code> | <span className="api-desc">Creates a `DamageDebugDisplay.DamageHolder` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-format" /><code>{"private const string format"}</code> | <span className="api-desc">Format string for an attack line.</span> |
| <Link id="m-lastattacks" /><code>{"private Queue<string> lastAttacks"}</code> | <span className="api-desc">The last three attack lines.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> | <span className="api-desc">True after an attack was added, until `Text` is read.</span> |
| <Link id="m-text" /><code>{"string Text { get; }"}</code> | <span className="api-desc">The stored attack lines joined. Reading it clears `HasChanged`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattack" /><code>{"void AddAttack(float damage, float followValue, float followMultiplier, float directionValue, float directionMultiplier, float weight, float weightPenalty, string dmgType)"}</code> | <span className="api-desc">Adds a formatted line for an attack, keeping only the last three.</span> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Clears the stored attacks.</span> |

## Used in

Members of other types that take, return or hold a `DamageHolder`:

<div className="api-used-in">

[`DamageDebugDisplay.Clean`](/mod/game-api/types/global-c-d/damagedebugdisplay#m-clean-2), [`DamageDebugDisplay.holderPairs`](/mod/game-api/types/global-c-d/damagedebugdisplay#m-holderpairs).

</div>
