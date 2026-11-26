---
title: "AgentNavigationSettings"
description: "Base for a creature action component with movement settings for getting to its target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentNavigationSettings

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a creature action component with movement settings for getting to its target.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`AgentDistanceFromTargetSettings`](/mod/game-api/types/alta-intelligence/agentdistancefromtargetsettings), [`AgentFollowSettings`](/mod/game-api/types/alta-intelligence/agentfollowsettings), [`AgentInteractApproachSettings`](/mod/game-api/types/alta-intelligence/agentinteractapproachsettings), [`AgentNestSettings`](/mod/game-api/types/alta-intelligence/agentnestsettings), [`AgentWanderSettings`](/mod/game-api/types/alta-intelligence/agentwandersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AgentNavigationSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Backing field for `Acceleration` (default 1), copied to the walker when the action starts.</span> |
| <Link id="m-isovershooting" /><code>{"private bool isOvershooting"}</code> | <span className="api-desc">Backing field for `IsOvershooting`. When on, the walker keeps going past the path end and the action finishes when it stops.</span> |
| <Link id="m-istargetremovedonfail" /><code>{"private bool isTargetRemovedOnFail"}</code> | <span className="api-desc">Backing field for `IsTargetRemovedOnFail`. When on, a failed path drops the target for `RemovalSeconds`.</span> |
| <Link id="m-removalseconds" /><code>{"private float removalSeconds"}</code> | <span className="api-desc">Backing field for `RemovalSeconds` (default 5): how long a target is ignored after a failed path.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Backing field for `Speed` (default 3), set as the walker's maximum speed when the action starts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration-2" /><code>{"float Acceleration { get; }"}</code> | <span className="api-desc">How fast the creature speeds up.</span> |
| <Link id="m-isovershooting-2" /><code>{"bool IsOvershooting { get; }"}</code> | <span className="api-desc">Whether the creature may move past the target, probably.</span> |
| <Link id="m-istargetremovedonfail-2" /><code>{"bool IsTargetRemovedOnFail { get; }"}</code> | <span className="api-desc">If true, a target that can't be reached is dropped for a while, probably.</span> |
| <Link id="m-removalseconds-2" /><code>{"float RemovalSeconds { get; }"}</code> | <span className="api-desc">How long a failed target is dropped for. 5 by default.</span> |
| <Link id="m-speed-2" /><code>{"float Speed { get; }"}</code> | <span className="api-desc">Move speed for this action.</span> |
