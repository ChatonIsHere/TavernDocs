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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Sense`](/game-api/types/alta-intelligence/sense)
- **Derived types** [`DistanceSquaredSense.Create`](/game-api/types/alta-intelligence/distancesquaredsense-create)
- **Nested types** [`Create`](/game-api/types/alta-intelligence/distancesquaredsense-create)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceSquaredSense()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

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
| <Link id="m-get" /><code>{"override float Get("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | The squared distance between the two ground positions. |
