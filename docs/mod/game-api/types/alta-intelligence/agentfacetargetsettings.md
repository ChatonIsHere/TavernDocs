---
title: "AgentFaceTargetSettings"
description: "Settings for ActiveFaceTarget: turn the creature until the target is well inside its view cone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentFaceTargetSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveFaceTarget`: turn the creature until the target is well inside its view cone. Server only; the creature must implement `IHasViewCone`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveFaceTarget`](/mod/game-api/types/alta-intelligence/activefacetarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentFaceTargetSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetratio" /><code>{"private float targetRatio"}</code> | <span className="api-desc">Backing field for `TargetRatio` (0 to 1, default 0.5).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetratio-2" /><code>{"float TargetRatio { get; }"}</code> | <span className="api-desc">The action finishes once the target is in the view cone at this ratio or less (0 is dead centre, 1 the edge).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `ActiveFaceTarget` action, which uses a target.</span> |
