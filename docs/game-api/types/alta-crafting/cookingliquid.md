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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookingLiquid()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" liquidContainer"}</code> | Backing field for `LiquidContainer`. |
| <Link id="m-potliquid" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquidvisual">{"CookingLiquidVisual"}</Link>{" potLiquid"}</code> | The liquid visual: surface and boiling effect. |
| <Link id="m-spawnedaudio" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" spawnedAudio"}</code> | Private: the playing boiling sound. |
| <Link id="m-temperaturertpcvalue" /><code>{"private RTPCValue temperatureRTPCValue"}</code> | Private: Wwise parameter fed the water temperature for the boiling sound. |
| <Link id="m-waterheatpoint" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" waterHeatPoint"}</code> | Backing field for `HeatPoint`. A `CookingPoint` holding the water temperature. |

</details>

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

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustwatertemperature" /><code>{"private void AdjustWaterTemperature()"}</code> | Private: pulls the water heat point fully to ambient temperature when water is added. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the liquid container in the parents and hooks its level changes and the heat point's changes. |
| <Link id="m-liquidcontainercontentlevelchanged" /><code>{"private void LiquidContainerContentLevelChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Private, server: raises `LiquidAdded`, `WaterRemoved` or `LiquidEmptied` as the level changes. Clients unhook on the first change. |
| <Link id="m-receivedwater" /><code>{"private void ReceivedWater()"}</code> | Private: resets the water temperature and raises `LiquidAdded`. |
| <Link id="m-releasepooledaudio" /><code>{"private void ReleasePooledAudio()"}</code> | Private: stops the boiling sound. Called when the entity is destroyed. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Private: sets the starting boil effect and prepares the temperature sound parameter. |
| <Link id="m-updateliquidsounds" /><code>{"private void UpdateLiquidSounds(float temperature)"}</code> | Private, client: plays or updates the boiling sound once the water is above the minimum stewing temperature. |
| <Link id="m-updatewaterboilingeffects" /><code>{"private void UpdateWaterBoilingEffects("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Private: updates the boil visuals and sound when the heat point changes. |

</details>

## Used in

Members of other types that take, return or hold a `CookingLiquid`:

[`CookingPot.cookingLiquid`](/game-api/types/alta-crafting/cookingpot#m-cookingliquid), [`CookingPot.CookingLiquid`](/game-api/types/alta-crafting/cookingpot#m-cookingliquid-2).
