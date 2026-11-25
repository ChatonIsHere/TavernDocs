---
title: "DamageDebugDisplay.DamageHolder"
description: "class DamageDebugDisplay.DamageHolder in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageDebugDisplay.DamageHolder

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DamageDebugDisplay`](/game-api/types/global-c-d/damagedebugdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageHolder()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-format" /><code>{"private const string format"}</code> |  |
| <Link id="m-lastattacks" /><code>{"private Queue<string> lastAttacks"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> |  |
| <Link id="m-text" /><code>{"string Text { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addattack" /><code>{"void AddAttack(float damage, float followValue, float followMultiplier, float directionValue, float directionMultiplier, float weight, float weightPenalty, string dmgType)"}</code> |  |
| <Link id="m-clean" /><code>{"void Clean()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DamageHolder`:

[`DamageDebugDisplay.Clean`](/game-api/types/global-c-d/damagedebugdisplay#m-clean-2), [`DamageDebugDisplay.holderPairs`](/game-api/types/global-c-d/damagedebugdisplay#m-holderpairs).
