---
title: "PlayerSwapMaterialFilter.PlayerOriginalMaterials"
description: "struct PlayerSwapMaterialFilter.PlayerOriginalMaterials in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSwapMaterialFilter.PlayerOriginalMaterials

A **private struct** in `Root.Township`, `Alta.ScreenshotCamera`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`PlayerSwapMaterialFilter`](/game-api/types/alta-customization/playerswapmaterialfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerOriginalMaterials("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, "}<Link to="/game-api/types/alta-customization/playerswapmaterialfilter">{"PlayerSwapMaterialFilter"}</Link>{" filter)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-materialmap" /><code>{"private Dictionary<Renderer, "}<Link to="/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple">{"PlayerSwapMaterialFilter.MaterialTuple"}</Link>{"> materialMap"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-toggle" /><code>{"void Toggle(bool isSpectral)"}</code> |  |
| <Link id="m-processrenderer" /><code>{"private void ProcessRenderer(Renderer renderer, "}<Link to="/game-api/types/alta-customization/playerswapmaterialfilter">{"PlayerSwapMaterialFilter"}</Link>{" filter, Material baseMaterial, bool needsClearing)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerOriginalMaterials`:

[`PlayerSwapMaterialFilter.playerMap`](/game-api/types/alta-customization/playerswapmaterialfilter#m-playermap).
