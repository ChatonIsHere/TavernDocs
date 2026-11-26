---
title: "PointsPopulationValue"
description: "Spawn information backed by a fixed list of spawn points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointsPopulationValue

A **class** in `Root.Township`, `Alta.Populations`.

Spawn information backed by a fixed list of spawn points. Saved with the ecosystem.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/mod/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointsPopulationValue(List<"}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> points, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Creates a `PointsPopulationValue` from `points` and `spawnData`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> Points { get; private set; }"}</code> | <span className="api-desc">The spawn points.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos()"}</code> | <span className="api-desc">Draws each point as a sphere (solid if taken, wire if free) with an up line.</span> |
| <Link id="m-getarealimit" /><code>{"override int GetAreaLimit()"}</code> | <span className="api-desc">The number of points, which caps the population.</span> |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> | <span className="api-desc">Returns the point at an index. Out of range, logs an error and returns the first point.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Tries up to three random free points and returns the first the definition accepts, or null.</span> |
| <Link id="m-save" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ecosystemsavedata-entry">{"EcosystemSaveData.Entry"}</Link>{" Save(uint key)"}</code> | <span className="api-desc">Saves every point's position and rotation into an ecosystem entry.</span> |
