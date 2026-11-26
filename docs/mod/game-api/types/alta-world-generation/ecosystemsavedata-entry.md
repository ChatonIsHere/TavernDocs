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
| <Link id="m-ctor" /><code>{"Entry()"}</code> | <span className="api-desc">Creates an `EcosystemSaveData.Entry` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-key" /><code>{"uint key"}</code> | <span className="api-desc">Key of the population in the ecosystem's spawn map. Saved, but `Ecosystem` doesn't read it on load.</span> |
| <Link id="m-positions" /><code>{"Vector3[] positions"}</code> | <span className="api-desc">Saved spawn positions.</span> |
| <Link id="m-rotations" /><code>{"Quaternion[] rotations"}</code> | <span className="api-desc">Saved spawn rotations, matching `positions` by index.</span> |

## Used in

Members of other types that take, return or hold a `Entry`:

<div className="api-used-in">

[`EcosystemSaveData.entries`](/mod/game-api/types/alta-world-generation/ecosystemsavedata#m-entries), [`PointsPopulationValue.Save`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-save), [`PopulationSpawnInformation.Save`](/mod/game-api/types/alta-world-generation/populationspawninformation#m-save).

</div>
