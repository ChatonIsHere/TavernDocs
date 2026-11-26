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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointsPopulationValue(List<"}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> points, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Creates a `PointsPopulationValue` from `points` and `spawnData`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> Points { get; private set; }"}</code> | The spawn points. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos()"}</code> | Draws each point as a sphere (solid if taken, wire if free) with an up line. |
| <Link id="m-getarealimit" /><code>{"override int GetAreaLimit()"}</code> | The number of points, which caps the population. |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> | Returns the point at an index. Out of range, logs an error and returns the first point. |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | Tries up to three random free points and returns the first the definition accepts, or null. |
| <Link id="m-save" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ecosystemsavedata-entry">{"EcosystemSaveData.Entry"}</Link>{" Save(uint key)"}</code> | Saves every point's position and rotation into an ecosystem entry. |
