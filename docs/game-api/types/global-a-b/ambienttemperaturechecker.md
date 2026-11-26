---
title: "AmbientTemperatureChecker"
description: "Tracks the ambient temperature for an entity from the location chunk it's in (23 unless the chunk's environment overrides it)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbientTemperatureChecker

A **class** in `Root.Township`, no namespace.

Tracks the ambient temperature for an entity from the location chunk it's in (23 unless the chunk's environment overrides it). Used by heat sources, heat points and recyclers.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmbientTemperatureChecker()"}</code> | Creates an `AmbientTemperatureChecker` from `entity`. |
| <Link id="m-ctor-2" /><code>{"AmbientTemperatureChecker("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Creates an `AmbientTemperatureChecker` from `entity`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-standardambienttemperature" /><code>{"static readonly float standardAmbientTemperature"}</code> | Default ambient temperature (23). |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity being watched. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature" /><code>{"float AmbientTemperature { get; private set; }"}</code> | Current ambient temperature for the entity. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"event Action OnChanged"}</code> | Raised when the ambient temperature changes after the entity moves chunk. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isambient" /><code>{"bool IsAmbient(float temperature)"}</code> | True if the given temperature is within 0.1 of ambient. |
| <Link id="m-updateentity" /><code>{"void UpdateEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> | Switches which entity is watched for chunk changes. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatechunk" /><code>{"private void UpdateChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Reads the new chunk's ambient temperature and raises `OnChanged` if it changed. Hooked to the entity's `AddedToChunk`. |

</details>

## Used in

Members of other types that take, return or hold a `AmbientTemperatureChecker`:

[`Recycler.ambientTemperatureChecker`](/game-api/types/alta-crafting/recycler#m-ambienttemperaturechecker), [`HeatArea.ambientChecker`](/game-api/types/alta-stats-effects/heatarea#m-ambientchecker), [`HeatPoint.AmbientChecker`](/game-api/types/alta-stats-effects/heatpoint#m-ambientchecker), [`HeatSourceBase.ambientChecker`](/game-api/types/alta-stats-effects/heatsourcebase#m-ambientchecker).
