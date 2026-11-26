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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingLiquid()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-liquidcontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" liquidContainer"}</code> | <span className="api-desc">Backing field for `LiquidContainer`.</span> |
| <Link id="m-potliquid" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingliquidvisual">{"CookingLiquidVisual"}</Link>{" potLiquid"}</code> | <span className="api-desc">The liquid visual: surface and boiling effect.</span> |
| <Link id="m-spawnedaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" spawnedAudio"}</code> | <span className="api-desc">Private: the playing boiling sound.</span> |
| <Link id="m-temperaturertpcvalue" /><code>{"private RTPCValue temperatureRTPCValue"}</code> | <span className="api-desc">Private: Wwise parameter fed the water temperature for the boiling sound.</span> |
| <Link id="m-waterheatpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingpoint">{"CookingPoint"}</Link>{" waterHeatPoint"}</code> | <span className="api-desc">Backing field for `HeatPoint`. A `CookingPoint` holding the water temperature.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heatpoint" /><code><Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" { get; }"}</code> | <span className="api-desc">The heat point that holds the water's temperature.</span> |
| <Link id="m-isnotempty" /><code>{"bool IsNotEmpty { get; }"}</code> | <span className="api-desc">True when the parent liquid container has any content.</span> |
| <Link id="m-isrejectingmoreliquid" /><code>{"bool IsRejectingMoreLiquid { get; set; }"}</code> | <span className="api-desc">Set by `CookingPot` to stop more liquid being added, for example while it holds a stew.</span> |
| <Link id="m-liquidcontainer-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" LiquidContainer { get; }"}</code> | <span className="api-desc">The liquid container found in the parent objects.</span> |
| <Link id="m-surface" /><code>{"Transform Surface { get; }"}</code> | <span className="api-desc">The transform at the visible liquid surface. Boiling sounds play from here.</span> |
| <Link id="m-temperature" /><code>{"float Temperature { get; }"}</code> | <span className="api-desc">The current water temperature from the heat point.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-liquidadded" /><code>{"event Action LiquidAdded"}</code> | <span className="api-desc">Server: raised when the content level goes up, after the water's temperature is pulled to ambient.</span> |
| <Link id="m-liquidemptied" /><code>{"event Action LiquidEmptied"}</code> | <span className="api-desc">Server: raised when liquid is removed and the container is now empty.</span> |
| <Link id="m-waterremoved" /><code>{"event Action WaterRemoved"}</code> | <span className="api-desc">Server: raised whenever the content level goes down.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convertcontainerliquidtostewliquid" /><code>{"void ConvertContainerLiquidToStewLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> | <span className="api-desc">Replaces the container's content with the given stew liquid. Called by `StewManager` when a stew forms.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks scene destroy so the pooled boiling sound is released.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustwatertemperature" /><code>{"private void AdjustWaterTemperature()"}</code> | <span className="api-desc">Private: pulls the water heat point fully to ambient temperature when water is added.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the liquid container in the parents and hooks its level changes and the heat point's changes.</span> |
| <Link id="m-liquidcontainercontentlevelchanged" /><code>{"private void LiquidContainerContentLevelChanged("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | <span className="api-desc">Private, server: raises `LiquidAdded`, `WaterRemoved` or `LiquidEmptied` as the level changes. Clients unhook on the first change.</span> |
| <Link id="m-receivedwater" /><code>{"private void ReceivedWater()"}</code> | <span className="api-desc">Private: resets the water temperature and raises `LiquidAdded`.</span> |
| <Link id="m-releasepooledaudio" /><code>{"private void ReleasePooledAudio()"}</code> | <span className="api-desc">Private: stops the boiling sound. Called when the entity is destroyed.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Private: sets the starting boil effect and prepares the temperature sound parameter.</span> |
| <Link id="m-updateliquidsounds" /><code>{"private void UpdateLiquidSounds(float temperature)"}</code> | <span className="api-desc">Private, client: plays or updates the boiling sound once the water is above the minimum stewing temperature.</span> |
| <Link id="m-updatewaterboilingeffects" /><code>{"private void UpdateWaterBoilingEffects("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | <span className="api-desc">Private: updates the boil visuals and sound when the heat point changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CookingLiquid`:

<div className="api-used-in">

[`CookingPot.cookingLiquid`](/mod/game-api/types/alta-crafting/cookingpot#m-cookingliquid), [`CookingPot.CookingLiquid`](/mod/game-api/types/alta-crafting/cookingpot#m-cookingliquid-2).

</div>
