---
title: "DistanceSquaredSense"
description: "Sense asset giving the squared ground distance between the creature and a target, ignoring height differences up to yFlexibility."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceSquaredSense

A **class** in `Root.Township`, `Alta.Intelligence`.

Sense asset giving the squared ground distance between the creature and a target, ignoring height differences up to `yFlexibility`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/mod/game-api/types/alta-intelligence/sense)
- **Derived types** [`DistanceSquaredSense.Create`](/mod/game-api/types/alta-intelligence/distancesquaredsense-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/distancesquaredsense-create)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceSquaredSense()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

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
| <Link id="m-get" /><code>{"override float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">The squared distance between the two ground positions.</span> |
