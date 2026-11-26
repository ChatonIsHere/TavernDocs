---
title: "ContainerLiquidReceiver"
description: "Put on a collider of a liquid container so that pouring particles hitting it pour into that container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ContainerLiquidReceiver

A **class** in `Root.Township`, `Alta.Liquid`.

Put on a collider of a liquid container so that pouring particles hitting it pour into that container.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ContainerLiquidReceiver()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | Backing field for `Container`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> | The container that receives the liquid. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the container in the parents. |
| <Link id="m-onparticlecollision" /><code>{"private void OnParticleCollision(GameObject other)"}</code> | When pouring particles hit, tells their pourable container to pour into this one. |

</details>
