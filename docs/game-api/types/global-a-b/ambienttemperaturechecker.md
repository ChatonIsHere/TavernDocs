---
title: "AmbientTemperatureChecker"
description: "class AmbientTemperatureChecker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbientTemperatureChecker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AmbientTemperatureChecker()"}</code> |
| <Link id="m-ctor-2" /><code>{"AmbientTemperatureChecker("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-standardambienttemperature" /><code>{"static readonly float standardAmbientTemperature"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-ambienttemperature" /><code>{"float AmbientTemperature { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-onchanged" /><code>{"event Action OnChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-isambient" /><code>{"bool IsAmbient(float temperature)"}</code> |
| <Link id="m-updateentity" /><code>{"void UpdateEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-updatechunk" /><code>{"private void UpdateChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AmbientTemperatureChecker`:

[`Recycler.ambientTemperatureChecker`](/game-api/types/alta-crafting/recycler#m-ambienttemperaturechecker), [`HeatArea.ambientChecker`](/game-api/types/alta-stats-effects/heatarea#m-ambientchecker), [`HeatPoint.AmbientChecker`](/game-api/types/alta-stats-effects/heatpoint#m-ambientchecker), [`HeatSourceBase.ambientChecker`](/game-api/types/alta-stats-effects/heatsourcebase#m-ambientchecker).
