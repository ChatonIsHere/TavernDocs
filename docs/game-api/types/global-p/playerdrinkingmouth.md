---
title: "PlayerDrinkingMouth"
description: "The player's mouth as a liquid container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDrinkingMouth

A **class** in `Root.Township`, no namespace.

The player's mouth as a liquid container. On the server, liquid poured in is drunk at once: it's emptied, its effects are applied and an event is synced to clients.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerDrinkingMouth()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callliquidconsumed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" callLiquidConsumed"}</code> | Method sync used to send the drink message to clients. |
| <Link id="m-consumer" /><code>{"private "}<Link to="/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumer"}</code> | The consumption manager that checks liquids and applies their effects. |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | The liquid container on this object. |
| <Link id="m-effecthandlingstrength" /><code>{"private float effectHandlingStrength"}</code> | Serialized value that nothing in the class reads. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs each drink at info level. |
| <Link id="m-onliquidconsumed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onLiquidConsumed"}</code> | Client: event run when the player drinks, such as a sound or effect. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the drink event sync and, on the server, listens for the content level going up. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the liquid container and adds a filter that only lets in liquids the player can consume. |
| <Link id="m-handleliquidadd" /><code>{"private void HandleLiquidAdd("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> | Liquid filter that refuses liquids `consumer` can't consume. |
| <Link id="m-liquidamountchanged" /><code>{"private void LiquidAmountChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Server: when liquid goes in, empties the container, applies its effects, adds ingredient pages and tells clients. |
| <Link id="m-syncliquidconsumedevent" /><code>{"private void SyncLiquidConsumedEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: runs `onLiquidConsumed` when the server sends the drink message. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerDrinkingMouth`:

[`ConsumptionManager.mouth`](/game-api/types/global-c-d/consumptionmanager#m-mouth).
