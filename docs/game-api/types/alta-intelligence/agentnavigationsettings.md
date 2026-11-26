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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`AgentDistanceFromTargetSettings`](/game-api/types/alta-intelligence/agentdistancefromtargetsettings), [`AgentFollowSettings`](/game-api/types/alta-intelligence/agentfollowsettings), [`AgentInteractApproachSettings`](/game-api/types/alta-intelligence/agentinteractapproachsettings), [`AgentNestSettings`](/game-api/types/alta-intelligence/agentnestsettings), [`AgentWanderSettings`](/game-api/types/alta-intelligence/agentwandersettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected AgentNavigationSettings()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | Backing field for `Acceleration` (default 1), copied to the walker when the action starts. |
| <Link id="m-isovershooting" /><code>{"private bool isOvershooting"}</code> | Backing field for `IsOvershooting`. When on, the walker keeps going past the path end and the action finishes when it stops. |
| <Link id="m-istargetremovedonfail" /><code>{"private bool isTargetRemovedOnFail"}</code> | Backing field for `IsTargetRemovedOnFail`. When on, a failed path drops the target for `RemovalSeconds`. |
| <Link id="m-removalseconds" /><code>{"private float removalSeconds"}</code> | Backing field for `RemovalSeconds` (default 5): how long a target is ignored after a failed path. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Backing field for `Speed` (default 3), set as the walker's maximum speed when the action starts. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration-2" /><code>{"float Acceleration { get; }"}</code> | How fast the creature speeds up. |
| <Link id="m-isovershooting-2" /><code>{"bool IsOvershooting { get; }"}</code> | Whether the creature may move past the target, probably. |
| <Link id="m-istargetremovedonfail-2" /><code>{"bool IsTargetRemovedOnFail { get; }"}</code> | If true, a target that can't be reached is dropped for a while, probably. |
| <Link id="m-removalseconds-2" /><code>{"float RemovalSeconds { get; }"}</code> | How long a failed target is dropped for. 5 by default. |
| <Link id="m-speed-2" /><code>{"float Speed { get; }"}</code> | Move speed for this action. |
