---
title: "TargetCollector"
description: "Component that gathers targets for an agent within a radius."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetCollector

A **class** in `Root.Township`, `Alta.Intelligence`.

Component that gathers targets for an agent within a radius. Registers itself with its agent on `Awake`; `TargetCollectorManager` adds and removes targets by distance.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TargetCollector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | Backing field for `Agent`. |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> | Backing field for `RadiusSquared`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-agent-2" /><code><Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" { get; }"}</code> | The agent that receives the collected targets. |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> | The agent's position as of the last `GetPosition` call. |
| <Link id="m-radiussquared-2" /><code>{"float RadiusSquared { get; }"}</code> | Squared range within which targets are collected. Default 400, so a radius of 20. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Always 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition()"}</code> | Updates `Position` to the agent's current position and returns it. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Registers this collector with its agent. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build step. Does nothing. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Build step: on Android builds, removes the collector's game object if nothing else is on it. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the collection radius as a green sphere. |

</details>

## Used in

Members of other types that take, return or hold a `TargetCollector`:

[`Agent.AddCollector`](/mod/game-api/types/alta-intelligence/agent#m-addcollector), [`Agent.collectors`](/mod/game-api/types/alta-intelligence/agent#m-collectors), [`TargetCollectorManager.ForceUpdateCollector`](/mod/game-api/types/alta-intelligence/targetcollectormanager#m-forceupdatecollector).
