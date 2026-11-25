---
title: "SpawnModifiers"
description: "class SpawnModifiers in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifiers

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`PaintModifiers`](/game-api/types/alta-world-generation/paintmodifiers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnModifiers()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-networkentitymodifiers" /><code>{"private "}<Link to="/game-api/types/global-m-o/networkentitymodifiers">{"NetworkEntityModifiers"}</Link>{"[] networkEntityModifiers"}</code> |  |
| <Link id="m-pointmodifiers" /><code>{"private "}<Link to="/game-api/types/global-s/spawnmodifierpoint">{"SpawnModifierPoint"}</Link>{"[] pointModifiers"}</code> |  |
| <Link id="m-pointnormalmodifiers" /><code>{"private "}<Link to="/game-api/types/global-s/spawnmodifierpointnormal">{"SpawnModifierPointNormal"}</Link>{"[] pointNormalModifiers"}</code> |  |
| <Link id="m-spawnparametermodifiers" /><code>{"private "}<Link to="/game-api/types/global-s/spawnmodifierspawnparameters">{"SpawnModifierSpawnParameters"}</Link>{"[] spawnParameterModifiers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-process" /><code>{"bool Process("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" point, float score, ref float currentScore)"}</code> |  |
| <Link id="m-process-2" /><code>{"bool Process("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" point, float score, ref float currentScore)"}</code> |  |
| <Link id="m-process-3" /><code>{"bool Process("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-world-generation/spawnparameters">{"SpawnParameters"}</Link>{" parameters, float score, ref float currentScore)"}</code> |  |
| <Link id="m-process-4" /><code>{"bool Process("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, float score, ref float currentScore)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SpawnModifiers`:

[`FillSet.SpawnModifiers`](/game-api/types/alta-world-generation/fillset#m-spawnmodifiers), [`ForestFillCore.Setup.SpawnModifiers`](/game-api/types/alta-world-generation/forestfillcore-setup#m-spawnmodifiers), [`ForestFillSet.spawnModifiers`](/game-api/types/alta-world-generation/forestfillset#m-spawnmodifiers), [`ForestFillSet.SpawnModifiers`](/game-api/types/alta-world-generation/forestfillset#m-spawnmodifiers-2), [`IFillSet.SpawnModifiers`](/game-api/types/alta-world-generation/ifillset#m-spawnmodifiers), [`SplatPaintSet.SpawnModifiers`](/game-api/types/alta-world-generation/splatpaintset#m-spawnmodifiers), [`PopulationSetup.spawnModifiers`](/game-api/types/alta-world-generation/populationsetup#m-spawnmodifiers), [`PopulationSetup.SpawnModifiers`](/game-api/types/alta-world-generation/populationsetup#m-spawnmodifiers-2).
