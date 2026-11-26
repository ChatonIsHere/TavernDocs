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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/game-api/types/alta-intelligence/sense)
- **Derived types** [`DistanceSense.Create`](/game-api/types/alta-intelligence/distancesense-create)
- **Nested types** [`Create`](/game-api/types/alta-intelligence/distancesense-create)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DistanceSense()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-yflexibility" /><code>{"private float yFlexibility"}</code> | Height difference in metres that doesn't count towards the distance. Default 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"override float Get("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | The distance between the two ground positions, ignoring up to `yFlexibility` of height difference. |
| <Link id="m-getinverselerp" /><code>{"override float GetInverseLerp("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float from, float to)"}</code> | Maps the distance onto 0 to 1 between `from` and `to`, comparing squared distances first to skip the square root at the ends. |
