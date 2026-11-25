---
title: "CookingLiquid"
description: "The liquid inside a cooking pot: links the pot's liquid container to its heat point, boiling visuals and sounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingLiquid

A **class** in `Root.Township`, `Alta.Cooking`.

The liquid inside a cooking pot: links the pot's liquid container to its heat point, boiling visuals and sounds. Found on the cooking pot prefab under an `ILiquidContainer`.

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
| <Link id="m-heatpoint" /><code><Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" { get; }"}</code> | The heat point that holds the water's temperature. |
| <Link id="m-isnotempty" /><code>{"bool IsNotEmpty { get; }"}</code> | True when the parent liquid container has any content. |
| <Link id="m-isrejectingmoreliquid" /><code>{"bool IsRejectingMoreLiquid { get; set; }"}</code> | Set by `CookingPot` to stop more liquid being added, for example while it holds a stew. |
| <Link id="m-liquidcontainer-2" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" LiquidContainer { get; }"}</code> | The liquid container found in the parent objects. |
| <Link id="m-surface" /><code>{"Transform Surface { get; }"}</code> | The transform at the visible liquid surface. Boiling sounds play from here. |
| <Link id="m-temperature" /><code>{"float Temperature { get; }"}</code> | The current water temperature from the heat point. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-liquidadded" /><code>{"event Action LiquidAdded"}</code> | Server: raised when the content level goes up, after the water's temperature is pulled to ambient. |
| <Link id="m-liquidemptied" /><code>{"event Action LiquidEmptied"}</code> | Server: raised when liquid is removed and the container is now empty. |
| <Link id="m-waterremoved" /><code>{"event Action WaterRemoved"}</code> | Server: raised whenever the content level goes down. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convertcontainerliquidtostewliquid" /><code>{"void ConvertContainerLiquidToStewLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> | Replaces the container's content with the given stew liquid. Called by `StewManager` when a stew forms. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks scene destroy so the pooled boiling sound is released. |
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
