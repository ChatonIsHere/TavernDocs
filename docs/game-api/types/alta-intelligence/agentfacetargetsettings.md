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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveFaceTarget`](/game-api/types/alta-intelligence/activefacetarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentFaceTargetSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetratio" /><code>{"private float targetRatio"}</code> | Backing field for `TargetRatio` (0 to 1, default 0.5). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targetratio-2" /><code>{"float TargetRatio { get; }"}</code> | The action finishes once the target is in the view cone at this ratio or less (0 is dead centre, 1 the edge). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveFaceTarget` action, which uses a target. |
