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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ContainerLiquidReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">Backing field for `Container`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-container-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" Container { get; }"}</code> | <span className="api-desc">The container that receives the liquid.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the container in the parents.</span> |
| <Link id="m-onparticlecollision" /><code>{"private void OnParticleCollision(GameObject other)"}</code> | <span className="api-desc">When pouring particles hit, tells their pourable container to pour into this one.</span> |

</details>
