---
title: "FinishSpawnProjectTaskArgument"
description: "Game task action argument sent when a player finishes a spawn project, such as a repair box or a pickup container handing out an item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FinishSpawnProjectTaskArgument

A **class** in `Root.Township`, the global namespace.

Game task action argument sent when a player finishes a spawn project, such as a repair box or a pickup container handing out an item. Server.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GameTaskActionArgument`](/mod/game-api/types/global-e-h/gametaskactionargument)
- **Derived types** [`FinishSpawnProjectTask`](/mod/game-api/types/global-e-h/finishspawnprojecttask)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FinishSpawnProjectTaskArgument("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning)"}</code> | <span className="api-desc">Creates a `FinishSpawnProjectTaskArgument` from `spawning`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.FinishRepair`.</span> |
| <Link id="m-spawning" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Spawning { get; }"}</code> | <span className="api-desc">Prefab that was spawned.</span> |

## Used in

Members of other types that take, return or hold a `FinishSpawnProjectTaskArgument`:

<div className="api-used-in">

[`FinishSpawnProjectTask.IsValid`](/mod/game-api/types/global-e-h/finishspawnprojecttask#m-isvalid).

</div>
