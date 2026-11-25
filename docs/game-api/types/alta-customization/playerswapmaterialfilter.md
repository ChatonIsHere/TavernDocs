---
title: "PlayerSwapMaterialFilter"
description: "abstract class PlayerSwapMaterialFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSwapMaterialFilter

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`OnDrawFilter`](/game-api/types/alta-customization/ondrawfilter)
- **Derived types** [`SpectralFilter`](/game-api/types/alta-customization/spectralfilter)
- **Nested types** [`MaterialTuple`](/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple), [`PlayerOriginalMaterials`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerSwapMaterialFilter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-playermap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{", "}<Link to="/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials">{"PlayerSwapMaterialFilter.PlayerOriginalMaterials"}</Link>{"> playerMap"}</code> |  |
| <Link id="m-toremove" /><code>{"private List<"}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{"> toRemove"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> |  |
| <Link id="m-postrender" /><code>{"protected override void PostRender()"}</code> |  |
| <Link id="m-prerender" /><code>{"protected override void PreRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera)"}</code> |  |
| <Link id="m-setuptuple" /><code>{"protected abstract void SetupTuple("}<Link to="/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple">{"PlayerSwapMaterialFilter.MaterialTuple"}</Link>{" tuple, Material baseMaterial)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerSwapMaterialFilter`:

[`PlayerSwapMaterialFilter.PlayerOriginalMaterials.PlayerOriginalMaterials`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-ctor), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.ProcessRenderer`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-processrenderer).
