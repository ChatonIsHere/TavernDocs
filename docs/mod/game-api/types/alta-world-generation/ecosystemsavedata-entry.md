---
title: "EcosystemSaveData.Entry"
description: "Saved spawn points for one population in an ecosystem chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EcosystemSaveData.Entry

A **class** in `Root.Township`, `Alta.Populations`.

Saved spawn points for one population in an ecosystem chunk.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`EcosystemSaveData`](/mod/game-api/types/alta-world-generation/ecosystemsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> | Creates an `EcosystemSaveData.Entry` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-key" /><code>{"uint key"}</code> | Key of the population in the ecosystem's spawn map. Saved, but `Ecosystem` doesn't read it on load. |
| <Link id="m-positions" /><code>{"Vector3[] positions"}</code> | Saved spawn positions. |
| <Link id="m-rotations" /><code>{"Quaternion[] rotations"}</code> | Saved spawn rotations, matching `positions` by index. |

## Used in

Members of other types that take, return or hold a `Entry`:

[`EcosystemSaveData.entries`](/mod/game-api/types/alta-world-generation/ecosystemsavedata#m-entries), [`PointsPopulationValue.Save`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-save), [`PopulationSpawnInformation.Save`](/mod/game-api/types/alta-world-generation/populationspawninformation#m-save).
