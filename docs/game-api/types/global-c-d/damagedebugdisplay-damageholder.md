---
title: "DamageDebugDisplay.DamageHolder"
description: "Debug text for one player's last three attacks: damage, type and the follow, direction and weight factors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDebugDisplay.DamageHolder

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug text for one player's last three attacks: damage, type and the follow, direction and weight factors.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DamageDebugDisplay`](/game-api/types/global-c-d/damagedebugdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageHolder()"}</code> | Creates a `DamageDebugDisplay.DamageHolder` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-format" /><code>{"private const string format"}</code> | Format string for an attack line. |
| <Link id="m-lastattacks" /><code>{"private Queue<string> lastAttacks"}</code> | The last three attack lines. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> | True after an attack was added, until `Text` is read. |
| <Link id="m-text" /><code>{"string Text { get; }"}</code> | The stored attack lines joined. Reading it clears `HasChanged`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattack" /><code>{"void AddAttack(float damage, float followValue, float followMultiplier, float directionValue, float directionMultiplier, float weight, float weightPenalty, string dmgType)"}</code> | Adds a formatted line for an attack, keeping only the last three. |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Clears the stored attacks. |

## Used in

Members of other types that take, return or hold a `DamageHolder`:

[`DamageDebugDisplay.Clean`](/game-api/types/global-c-d/damagedebugdisplay#m-clean-2), [`DamageDebugDisplay.holderPairs`](/game-api/types/global-c-d/damagedebugdisplay#m-holderpairs).
