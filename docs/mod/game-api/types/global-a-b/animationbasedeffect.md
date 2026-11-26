---
title: "AnimationBasedEffect"
description: "AnimationBasedTrigger that spawns a pooled effect at its transform when Run is called, usually from an animation event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationBasedEffect

A **class** in `Root.Township`, the global namespace.

`AnimationBasedTrigger` that spawns a pooled effect at its transform when `Run` is called, usually from an animation event.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`AnimationBasedTrigger`](/mod/game-api/types/global-a-b/animationbasedtrigger)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimationBasedEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectontrigger" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnTrigger"}</code> | <span className="api-desc">Pooled effect spawned on each run.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run()"}</code> | <span className="api-desc">Gets the pooled effect at this transform.</span> |
