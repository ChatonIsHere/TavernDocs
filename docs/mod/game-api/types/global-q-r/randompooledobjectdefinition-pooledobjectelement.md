---
title: "RandomPooledObjectDefinition.PooledObjectElement"
description: "One weighted choice in a RandomPooledObjectDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomPooledObjectDefinition.PooledObjectElement

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One weighted choice in a `RandomPooledObjectDefinition`. Note the parent's pick casts `Random.value` to int before scaling, so in practice it nearly always returns the first entry.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RandomPooledObjectDefinition`](/mod/game-api/types/global-q-r/randompooledobjectdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObjectElement()"}</code> | <span className="api-desc">Creates a `RandomPooledObjectDefinition.PooledObjectElement` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Backing field for `Definition`.</span> |
| <Link id="m-weight" /><code>{"private int weight"}</code> | <span className="api-desc">Backing field for `Weight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The pooled object definition this entry spawns.</span> |
| <Link id="m-weight-2" /><code>{"int Weight { get; }"}</code> | <span className="api-desc">Relative chance of this entry being picked.</span> |

## Used in

Members of other types that take, return or hold a `PooledObjectElement`:

<div className="api-used-in">

[`RandomPooledObjectDefinition.definitions`](/mod/game-api/types/global-q-r/randompooledobjectdefinition#m-definitions).

</div>
