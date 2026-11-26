---
title: "PlayerDrinkingMouth"
description: "The player's mouth as a liquid container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDrinkingMouth

A **class** in `Root.Township`, the global namespace.

The player's mouth as a liquid container. On the server, liquid poured in is drunk at once: it's emptied, its effects are applied and an event is synced to clients.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDrinkingMouth()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callliquidconsumed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" callLiquidConsumed"}</code> | <span className="api-desc">Method sync used to send the drink message to clients.</span> |
| <Link id="m-consumer" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumer"}</code> | <span className="api-desc">The consumption manager that checks liquids and applies their effects.</span> |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">The liquid container on this object.</span> |
| <Link id="m-effecthandlingstrength" /><code>{"private float effectHandlingStrength"}</code> | <span className="api-desc">Serialized value that nothing in the class reads.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs each drink at info level.</span> |
| <Link id="m-onliquidconsumed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onLiquidConsumed"}</code> | <span className="api-desc">Client: event run when the player drinks, such as a sound or effect.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the drink event sync and, on the server, listens for the content level going up.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the liquid container and adds a filter that only lets in liquids the player can consume.</span> |
| <Link id="m-handleliquidadd" /><code>{"private void HandleLiquidAdd("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> | <span className="api-desc">Liquid filter that refuses liquids `consumer` can't consume.</span> |
| <Link id="m-liquidamountchanged" /><code>{"private void LiquidAmountChanged("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | <span className="api-desc">Server: when liquid goes in, empties the container, applies its effects, adds ingredient pages and tells clients.</span> |
| <Link id="m-syncliquidconsumedevent" /><code>{"private void SyncLiquidConsumedEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: runs `onLiquidConsumed` when the server sends the drink message.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerDrinkingMouth`:

<div className="api-used-in">

[`ConsumptionManager.mouth`](/mod/game-api/types/global-c-d/consumptionmanager#m-mouth).

</div>
