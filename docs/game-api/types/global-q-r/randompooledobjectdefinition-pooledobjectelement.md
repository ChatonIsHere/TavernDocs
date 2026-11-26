---
title: "RandomPooledObjectDefinition.PooledObjectElement"
description: "One weighted choice in a RandomPooledObjectDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomPooledObjectDefinition.PooledObjectElement

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One weighted choice in a `RandomPooledObjectDefinition`. Note the parent's pick casts `Random.value` to int before scaling, so in practice it nearly always returns the first entry.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RandomPooledObjectDefinition`](/game-api/types/global-q-r/randompooledobjectdefinition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledObjectElement()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | Backing field for `Definition`. |
| <Link id="m-weight" /><code>{"private int weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" Definition { get; }"}</code> | The pooled object definition this entry spawns. |
| <Link id="m-weight-2" /><code>{"int Weight { get; }"}</code> | Relative chance of this entry being picked. |

## Used in

Members of other types that take, return or hold a `PooledObjectElement`:

[`RandomPooledObjectDefinition.definitions`](/game-api/types/global-q-r/randompooledobjectdefinition#m-definitions).
