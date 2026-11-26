---
title: "BiomeSettings"
description: "Cave settings asset for how biomes change from layer to layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSettings

A **class** in `Root.Township`, `Alta.Caves`.

Cave settings asset for how biomes change from layer to layer. Loaded from `Resources/Caves/Settings` through `CaveSettings<BiomeSettings>.Instance` and read by `CaveBiomeGenerator`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`CaveSettings<BiomeSettings>`](/game-api/types/alta-world-generation/cavesettings-t)
- **Derived types** [`BiomeSettings`](/game-api/types/alta-world-generation/biomesettings), [`BiomeSettings.Create`](/game-api/types/alta-world-generation/biomesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/biomesettings-create)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BiomeSettings()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cumulativetransitionchance" /><code>{"private float cumulativeTransitionChance"}</code> | Backing field for `CumulativeTransitionChance`. |
| <Link id="m-prosperityattribute" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" prosperityAttribute"}</code> | Backing field for `ProsperityAttribute`. |
| <Link id="m-transitionprogressmax" /><code>{"private float transitionProgressMax"}</code> | Backing field for `TransitionProgressMax`. |
| <Link id="m-transitionprogressmin" /><code>{"private float transitionProgressMin"}</code> | Backing field for `TransitionProgressMin`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cumulativetransitionchance-2" /><code>{"float CumulativeTransitionChance { get; }"}</code> | Chance added each layer for the cave to start moving to a new biome; it builds up until a transition starts. |
| <Link id="m-prosperityattribute-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" ProsperityAttribute { get; }"}</code> | The biome attribute used as prosperity. |
| <Link id="m-transitionprogressmax-2" /><code>{"float TransitionProgressMax { get; }"}</code> | Upper bound of the random progress added per layer while moving between two biomes. |
| <Link id="m-transitionprogressmin-2" /><code>{"float TransitionProgressMin { get; }"}</code> | Lower bound of the random progress added per layer while moving between two biomes. |
