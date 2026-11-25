---
title: "CookingLiquid"
description: "The pot's liquid: its heat point, boiling effects and conversion to stew liquid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingLiquid

A **class** in `Root.Township`, `Alta.Cooking`.

The pot's liquid: its heat point, boiling effects and conversion to stew liquid.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingLiquid()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" liquidContainer"}</code> |  |
| <Link id="m-potliquid" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquidvisual">{"CookingLiquidVisual"}</Link>{" potLiquid"}</code> |  |
| <Link id="m-spawnedaudio" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" spawnedAudio"}</code> |  |
| <Link id="m-temperaturertpcvalue" /><code>{"private RTPCValue temperatureRTPCValue"}</code> |  |
| <Link id="m-waterheatpoint" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" waterHeatPoint"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heatpoint" /><code><Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isnotempty" /><code>{"bool IsNotEmpty { get; }"}</code> |  |
| <Link id="m-isrejectingmoreliquid" /><code>{"bool IsRejectingMoreLiquid { get; set; }"}</code> |  |
| <Link id="m-liquidcontainer-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" LiquidContainer { get; }"}</code> |  |
| <Link id="m-surface" /><code>{"Transform Surface { get; }"}</code> |  |
| <Link id="m-temperature" /><code>{"float Temperature { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-liquidadded" /><code>{"event Action LiquidAdded"}</code> |  |
| <Link id="m-liquidemptied" /><code>{"event Action LiquidEmptied"}</code> |  |
| <Link id="m-waterremoved" /><code>{"event Action WaterRemoved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convertcontainerliquidtostewliquid" /><code>{"void ConvertContainerLiquidToStewLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-adjustwatertemperature" /><code>{"private void AdjustWaterTemperature()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-liquidcontainercontentlevelchanged" /><code>{"private void LiquidContainerContentLevelChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-receivedwater" /><code>{"private void ReceivedWater()"}</code> |  |
| <Link id="m-releasepooledaudio" /><code>{"private void ReleasePooledAudio()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-updateliquidsounds" /><code>{"private void UpdateLiquidSounds(float temperature)"}</code> |  |
| <Link id="m-updatewaterboilingeffects" /><code>{"private void UpdateWaterBoilingEffects("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CookingLiquid`:

[`CookingPot.cookingLiquid`](/game-api/types/alta-crafting/cookingpot#m-cookingliquid), [`CookingPot.CookingLiquid`](/game-api/types/alta-crafting/cookingpot#m-cookingliquid-2).
