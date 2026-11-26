---
title: "PlayerSwapMaterialFilter.PlayerOriginalMaterials"
description: "For one player character, maps each LOD0 clothing renderer to its original material and the filter's copy, so the filter can swap between them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSwapMaterialFilter.PlayerOriginalMaterials

A **private struct** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

For one player character, maps each LOD0 clothing renderer to its original material and the filter's copy, so the filter can swap between them.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`PlayerSwapMaterialFilter`](/mod/game-api/types/alta-customization/playerswapmaterialfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerOriginalMaterials("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, "}<Link to="/mod/game-api/types/alta-customization/playerswapmaterialfilter">{"PlayerSwapMaterialFilter"}</Link>{" filter)"}</code> | <span className="api-desc">Creates a `PlayerSwapMaterialFilter.PlayerOriginalMaterials` from `character` and `filter`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-materialmap" /><code>{"private Dictionary<Renderer, "}<Link to="/mod/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple">{"PlayerSwapMaterialFilter.MaterialTuple"}</Link>{"> materialMap"}</code> | <span className="api-desc">Renderer to original and copy material pairs.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Cleans up copied materials that were marked as needing it.</span> |
| <Link id="m-toggle" /><code>{"void Toggle(bool isSpectral)"}</code> | <span className="api-desc">Puts the filter copies on every renderer when true, or the originals back when false.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processrenderer" /><code>{"private void ProcessRenderer(Renderer renderer, "}<Link to="/mod/game-api/types/alta-customization/playerswapmaterialfilter">{"PlayerSwapMaterialFilter"}</Link>{" filter, Material baseMaterial, bool needsClearing)"}</code> | <span className="api-desc">Adds a renderer with its original material and a copy set up by the filter. Skips renderers with no material or already added.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerOriginalMaterials`:

<div className="api-used-in">

[`PlayerSwapMaterialFilter.playerMap`](/mod/game-api/types/alta-customization/playerswapmaterialfilter#m-playermap).

</div>
