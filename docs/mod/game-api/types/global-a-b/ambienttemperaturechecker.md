---
title: "AmbientTemperatureChecker"
description: "Tracks the ambient temperature for an entity from the location chunk it's in (23 unless the chunk's environment overrides it)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbientTemperatureChecker

A **class** in `Root.Township`, the global namespace.

Tracks the ambient temperature for an entity from the location chunk it's in (23 unless the chunk's environment overrides it). Used by heat sources, heat points and recyclers.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmbientTemperatureChecker()"}</code> | <span className="api-desc">Creates an `AmbientTemperatureChecker` from `entity`.</span> |
| <Link id="m-ctor-2" /><code>{"AmbientTemperatureChecker("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Creates an `AmbientTemperatureChecker` from `entity`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-standardambienttemperature" /><code>{"static readonly float standardAmbientTemperature"}</code> | <span className="api-desc">Default ambient temperature (23).</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity being watched.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature" /><code>{"float AmbientTemperature { get; private set; }"}</code> | <span className="api-desc">Current ambient temperature for the entity.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"event Action OnChanged"}</code> | <span className="api-desc">Raised when the ambient temperature changes after the entity moves chunk.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isambient" /><code>{"bool IsAmbient(float temperature)"}</code> | <span className="api-desc">True if the given temperature is within 0.1 of ambient.</span> |
| <Link id="m-updateentity" /><code>{"void UpdateEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> | <span className="api-desc">Switches which entity is watched for chunk changes.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatechunk" /><code>{"private void UpdateChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Reads the new chunk's ambient temperature and raises `OnChanged` if it changed. Hooked to the entity's `AddedToChunk`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AmbientTemperatureChecker`:

<div className="api-used-in">

[`Recycler.ambientTemperatureChecker`](/mod/game-api/types/alta-crafting/recycler#m-ambienttemperaturechecker), [`HeatArea.ambientChecker`](/mod/game-api/types/alta-stats-effects/heatarea#m-ambientchecker), [`HeatPoint.AmbientChecker`](/mod/game-api/types/alta-stats-effects/heatpoint#m-ambientchecker), [`HeatSourceBase.ambientChecker`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-ambientchecker).

</div>
