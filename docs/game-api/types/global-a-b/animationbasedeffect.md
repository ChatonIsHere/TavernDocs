---
title: "AnimationBasedEffect"
description: "AnimationBasedTrigger that spawns a pooled effect at its transform when Run is called, usually from an animation event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationBasedEffect

A **class** in `Root.Township`, no namespace.

`AnimationBasedTrigger` that spawns a pooled effect at its transform when `Run` is called, usually from an animation event.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`AnimationBasedTrigger`](/game-api/types/global-a-b/animationbasedtrigger)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimationBasedEffect()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectontrigger" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnTrigger"}</code> | Pooled effect spawned on each run. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run()"}</code> | Gets the pooled effect at this transform. |
