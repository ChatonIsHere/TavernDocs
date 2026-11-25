---
title: "PopulationPath"
description: "class PopulationPath in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationPath

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BasicDynamicPath`](/game-api/types/global-a-b/basicdynamicpath), [`IPopulationFolder`](/game-api/types/alta-world-generation/ipopulationfolder), [`IPointNormalEvaluator`](/game-api/types/alta-world-generation/ipointnormalevaluator), [`ISavable<PopulationPathSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PopulationPathSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PopulationPathSaveData`](/game-api/types/global-p/populationpathsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationPath()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-densitymultiplier" /><code>{"private float densityMultiplier"}</code> |  |
| <Link id="m-loadpopulation" /><code>{"private int? loadPopulation"}</code> |  |
| <Link id="m-loadtime" /><code>{"private TimeSpan? loadTime"}</code> |  |
| <Link id="m-population" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" population"}</code> |  |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; private set; }"}</code> |  |
| <Link id="m-densitymultiplier-2" /><code>{"float DensityMultiplier { get; }"}</code> |  |
| <Link id="m-endradius" /><code>{"float EndRadius { get; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; private set; }"}</code> |  |
| <Link id="m-pointevaluator" /><code><Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; }"}</code> |  |
| <Link id="m-population-2" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; private set; }"}</code> |  |
| <Link id="m-squaremeters" /><code>{"float SquareMeters { get; }"}</code> |  |
| <Link id="m-startradius" /><code>{"float StartRadius { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-addedtochunk" /><code>{"private void AddedToChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-removedfromchunk" /><code>{"private void RemovedFromChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
