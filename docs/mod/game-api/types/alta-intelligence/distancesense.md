---
title: "DistanceSense"
description: "Sense asset giving the ground distance between the creature and a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceSense

A **class** in `Root.Township`, `Alta.Intelligence`.

Sense asset giving the ground distance between the creature and a target. Height differences up to `yFlexibility` are ignored.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/mod/game-api/types/alta-intelligence/sense)
- **Derived types** [`DistanceSense.Create`](/mod/game-api/types/alta-intelligence/distancesense-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/distancesense-create)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceSense()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-yflexibility" /><code>{"private float yFlexibility"}</code> | <span className="api-desc">Height difference in metres that doesn't count towards the distance. Default 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">The distance between the two ground positions, ignoring up to `yFlexibility` of height difference.</span> |
| <Link id="m-getinverselerp" /><code>{"override float GetInverseLerp("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float from, float to)"}</code> | <span className="api-desc">Maps the distance onto 0 to 1 between `from` and `to`, comparing squared distances first to skip the square root at the ends.</span> |
