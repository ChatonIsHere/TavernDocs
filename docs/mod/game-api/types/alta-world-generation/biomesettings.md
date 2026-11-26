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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`CaveSettings<BiomeSettings>`](/mod/game-api/types/alta-world-generation/cavesettings-t)
- **Derived types** [`BiomeSettings`](/mod/game-api/types/alta-world-generation/biomesettings), [`BiomeSettings.Create`](/mod/game-api/types/alta-world-generation/biomesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/biomesettings-create)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cumulativetransitionchance" /><code>{"private float cumulativeTransitionChance"}</code> | <span className="api-desc">Backing field for `CumulativeTransitionChance`.</span> |
| <Link id="m-prosperityattribute" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" prosperityAttribute"}</code> | <span className="api-desc">Backing field for `ProsperityAttribute`.</span> |
| <Link id="m-transitionprogressmax" /><code>{"private float transitionProgressMax"}</code> | <span className="api-desc">Backing field for `TransitionProgressMax`.</span> |
| <Link id="m-transitionprogressmin" /><code>{"private float transitionProgressMin"}</code> | <span className="api-desc">Backing field for `TransitionProgressMin`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cumulativetransitionchance-2" /><code>{"float CumulativeTransitionChance { get; }"}</code> | <span className="api-desc">Chance added each layer for the cave to start moving to a new biome; it builds up until a transition starts.</span> |
| <Link id="m-prosperityattribute-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" ProsperityAttribute { get; }"}</code> | <span className="api-desc">The biome attribute used as prosperity.</span> |
| <Link id="m-transitionprogressmax-2" /><code>{"float TransitionProgressMax { get; }"}</code> | <span className="api-desc">Upper bound of the random progress added per layer while moving between two biomes.</span> |
| <Link id="m-transitionprogressmin-2" /><code>{"float TransitionProgressMin { get; }"}</code> | <span className="api-desc">Lower bound of the random progress added per layer while moving between two biomes.</span> |
