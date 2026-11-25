---
title: "PlayerDrinkingMouth"
description: "class PlayerDrinkingMouth in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDrinkingMouth

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDrinkingMouth()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-callliquidconsumed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" callLiquidConsumed"}</code> |  |
| <Link id="m-consumer" /><code>{"private "}<Link to="/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumer"}</code> |  |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> |  |
| <Link id="m-effecthandlingstrength" /><code>{"private float effectHandlingStrength"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-onliquidconsumed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onLiquidConsumed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-handleliquidadd" /><code>{"private void HandleLiquidAdd("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> |  |
| <Link id="m-liquidamountchanged" /><code>{"private void LiquidAmountChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-syncliquidconsumedevent" /><code>{"private void SyncLiquidConsumedEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerDrinkingMouth`:

[`ConsumptionManager.mouth`](/game-api/types/global-c-d/consumptionmanager#m-mouth).
