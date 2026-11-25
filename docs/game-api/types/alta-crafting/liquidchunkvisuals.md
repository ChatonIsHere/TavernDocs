---
title: "LiquidChunkVisuals"
description: "class LiquidChunkVisuals in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidChunkVisuals

A **class** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`LiquidChunkData`](/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidChunkVisuals()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bobbingcontroller" /><code>{"private "}<Link to="/game-api/types/global-a-b/bobbingcontroller">{"BobbingController"}</Link>{" bobbingController"}</code> |  |
| <Link id="m-bobbingspeedmultiplier" /><code>{"private float bobbingSpeedMultiplier"}</code> |  |
| <Link id="m-bobbingstrengthmultiplier" /><code>{"private float bobbingStrengthMultiplier"}</code> |  |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> |  |
| <Link id="m-displayingchunks" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/liquidchunkvisuals-liquidchunkdata">{"LiquidChunkVisuals.LiquidChunkData"}</Link>{"> displayingChunks"}</code> |  |
| <Link id="m-existingliquidchunks" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{", int> existingLiquidChunks"}</code> |  |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint"}</code> |  |
| <Link id="m-maxpieces" /><code>{"private int maxPieces"}</code> |  |
| <Link id="m-spawnedsizemultiplier" /><code>{"private float spawnedSizeMultiplier"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearallvisuals" /><code>{"void ClearAllVisuals()"}</code> |  |
| <Link id="m-createvisualforingredient" /><code>{"void CreateVisualForIngredient("}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" chunkVisual)"}</code> |  |
| <Link id="m-addnewchunkvisuals" /><code>{"private void AddNewChunkVisuals("}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" chunkVisual, Dictionary<int, List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{">> newVisuals, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-addvisualsfornewchunks" /><code>{"private void AddVisualsForNewChunks("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-createvisualbaseoncontent" /><code>{"private void CreateVisualBaseOnContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> |  |
| <Link id="m-releasechunkvisuals" /><code>{"private void ReleaseChunkVisuals("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-removechunkvisuals" /><code>{"private void RemoveChunkVisuals("}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" oldChunkVisual)"}</code> |  |
| <Link id="m-removechunkvisuals-2" /><code>{"private void RemoveChunkVisuals(Dictionary<int, List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{">> newVisuals, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-updatebobbingvaluesbytemperature" /><code>{"private void UpdateBobbingValuesByTemperature(float temperature)"}</code> |  |
| <Link id="m-updateliquidchunks" /><code>{"private void UpdateLiquidChunks("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" heatPoint)"}</code> |  |
