---
title: "RandomTimedActionComponent"
description: "Base for AI action components that run for a random length of time, set in the inspector (5 to 7 seconds by default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomTimedActionComponent

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for AI action components that run for a random length of time, set in the inspector (5 to 7 seconds by default).

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`AgentAttackDirectionReactSettings`](/mod/game-api/types/alta-intelligence/agentattackdirectionreactsettings), [`AgentCircleTargetSettings`](/mod/game-api/types/alta-intelligence/agentcircletargetsettings), [`AgentCrawlSettings`](/mod/game-api/types/alta-intelligence/agentcrawlsettings), [`AgentIdleSettings`](/mod/game-api/types/alta-intelligence/agentidlesettings), [`AgentJumpAtSettings`](/mod/game-api/types/alta-intelligence/agentjumpatsettings), [`AgentRegainControlSettings`](/mod/game-api/types/alta-intelligence/agentregaincontrolsettings), [`AgentThreatenSettings`](/mod/game-api/types/alta-intelligence/agentthreatensettings), [`SchmeecheePlantSettings`](/mod/game-api/types/alta-intelligence/schmeecheeplantsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RandomTimedActionComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumduration" /><code>{"private float maximumDuration"}</code> | Backing field for `MaximumDuration` (default 7 seconds). |
| <Link id="m-minimumduration" /><code>{"private float minimumDuration"}</code> | Backing field for `MinimumDuration` (default 5 seconds). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maximumduration-2" /><code>{"float MaximumDuration { get; }"}</code> | Upper bound of the random duration, in seconds. |
| <Link id="m-minimumduration-2" /><code>{"float MinimumDuration { get; }"}</code> | Lower bound of the random duration, in seconds. |
| <Link id="m-randomduration" /><code>{"float RandomDuration { get; }"}</code> | A fresh random value between the minimum and maximum each time it is read. |
