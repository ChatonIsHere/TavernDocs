---
title: "TargetCollector"
description: "class TargetCollector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetCollector

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TargetCollector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> |  |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-agent-2" /><code><Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" { get; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> |  |
| <Link id="m-radiussquared-2" /><code>{"float RadiusSquared { get; }"}</code> |  |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TargetCollector`:

[`Agent.AddCollector`](/game-api/types/alta-intelligence/agent#m-addcollector), [`Agent.collectors`](/game-api/types/alta-intelligence/agent#m-collectors), [`TargetCollectorManager.ForceUpdateCollector`](/game-api/types/alta-intelligence/targetcollectormanager#m-forceupdatecollector).
