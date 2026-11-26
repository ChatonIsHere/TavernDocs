---
title: "LiquidChunkVisuals"
description: "Client visuals for the floating chunks in a liquid container (such as stew pieces in a pot), bobbing faster as the liquid heats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidChunkVisuals

A **class** in `Root.Township`, `Alta.Cooking`.

Client visuals for the floating chunks in a liquid container (such as stew pieces in a pot), bobbing faster as the liquid heats. Removes itself on headless servers.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`LiquidChunkData`](/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidChunkVisuals()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bobbingcontroller" /><code>{"private "}<Link to="/game-api/types/global-a-b/bobbingcontroller">{"BobbingController"}</Link>{" bobbingController"}</code> | Moves the chunk visuals up and down. |
| <Link id="m-bobbingspeedmultiplier" /><code>{"private float bobbingSpeedMultiplier"}</code> | Scales the liquid's wave speed for the bobbing. |
| <Link id="m-bobbingstrengthmultiplier" /><code>{"private float bobbingStrengthMultiplier"}</code> | Scales the liquid's wave strength for the bobbing. |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | The liquid container in the parents. |
| <Link id="m-displayingchunks" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata">{"LiquidChunkVisuals.LiquidChunkData"}</Link>{"> displayingChunks"}</code> | Chunk types shown and their visuals per content level. |
| <Link id="m-existingliquidchunks" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{", int> existingLiquidChunks"}</code> | Scratch counts used while swapping liquids. Shared by all instances. |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint"}</code> | Heat point whose temperature drives the bobbing. Ambient temperature is used if none. |
| <Link id="m-maxpieces" /><code>{"private int maxPieces"}</code> | Most content levels that get chunk visuals. |
| <Link id="m-spawnedsizemultiplier" /><code>{"private float spawnedSizeMultiplier"}</code> | Scale of spawned chunk visuals. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearallvisuals" /><code>{"void ClearAllVisuals()"}</code> | Releases every chunk visual and clears the bobbing controller. |
| <Link id="m-createvisualforingredient" /><code>{"void CreateVisualForIngredient("}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" chunkVisual)"}</code> | Adds visuals for one chunk type, one set per current content level. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addnewchunkvisuals" /><code>{"private void AddNewChunkVisuals("}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" chunkVisual, Dictionary<int, List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{">> newVisuals, int oldLevel, int newLevel)"}</code> | Spawns chunk visuals for each content level gained, up to `maxPieces`, and adds them to the bobbing controller. |
| <Link id="m-addvisualsfornewchunks" /><code>{"private void AddVisualsForNewChunks("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | When the liquid changes, adds visuals for chunk types that are new and removes those no longer present. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the container's level, liquid and destroy events, and the heat point. Destroys itself on headless servers. |
| <Link id="m-createvisualbaseoncontent" /><code>{"private void CreateVisualBaseOnContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | Handler for the contained liquid changing: clears, creates or swaps chunk visuals and sets the bobbing. |
| <Link id="m-releasechunkvisuals" /><code>{"private void ReleaseChunkVisuals("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Clears all visuals when the container entity is destroyed. |
| <Link id="m-removechunkvisuals" /><code>{"private void RemoveChunkVisuals("}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" oldChunkVisual)"}</code> | Removes either one chunk type's visuals, or the visuals for content levels lost. |
| <Link id="m-removechunkvisuals-2" /><code>{"private void RemoveChunkVisuals(Dictionary<int, List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{">> newVisuals, int oldLevel, int newLevel)"}</code> | Removes either one chunk type's visuals, or the visuals for content levels lost. |
| <Link id="m-updatebobbingvaluesbytemperature" /><code>{"private void UpdateBobbingValuesByTemperature(float temperature)"}</code> | Sets bobbing strength and speed from the liquid's temperature curves. |
| <Link id="m-updateliquidchunks" /><code>{"private void UpdateLiquidChunks("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Handler for the content level changing: adds or removes visuals, clearing all at level 0. |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> | Handler for the heat point changing: updates the bobbing. |

</details>
