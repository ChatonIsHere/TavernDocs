---
title: "PlayerSwapMaterialFilter"
description: "Base for hand camera filters that swap every living player's clothing materials for a copy while the camera renders, then put the originals back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSwapMaterialFilter

An **abstract class** in `Root.Township`, `Alta.ScreenshotCamera`.

Base for hand camera filters that swap every living player's clothing materials for a copy while the camera renders, then put the originals back. Subclasses build the copy in `SetupTuple`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`OnDrawFilter`](/game-api/types/alta-customization/ondrawfilter)
- **Derived types** [`SpectralFilter`](/game-api/types/alta-customization/spectralfilter)
- **Nested types** [`MaterialTuple`](/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple), [`PlayerOriginalMaterials`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerSwapMaterialFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Material passed to `SetupTuple` to build each copy. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for errors while swapping a player's materials. |
| <Link id="m-playermap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{", "}<Link to="/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials">{"PlayerSwapMaterialFilter.PlayerOriginalMaterials"}</Link>{"> playerMap"}</code> | Cached original and swapped materials for each player character. |
| <Link id="m-toremove" /><code>{"private List<"}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{"> toRemove"}</code> | Scratch list of destroyed players to drop from `playerMap` after a render. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | Restores every cached player's materials, cleans copies that need clearing and empties the cache. |
| <Link id="m-postrender" /><code>{"protected override void PostRender()"}</code> | Restores original materials after the render and forgets players whose entities are being destroyed. |
| <Link id="m-prerender" /><code>{"protected override void PreRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera)"}</code> | Before the camera renders, swaps each living player character's LOD0 clothing materials to their copies, caching them per player. |
| <Link id="m-setuptuple" /><code>{"protected abstract void SetupTuple("}<Link to="/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple">{"PlayerSwapMaterialFilter.MaterialTuple"}</Link>{" tuple, Material baseMaterial)"}</code> | Implemented by subclasses: fills in the tuple's `copy` material from the original and `baseMaterial`. |

## Used in

Members of other types that take, return or hold a `PlayerSwapMaterialFilter`:

[`PlayerSwapMaterialFilter.PlayerOriginalMaterials.PlayerOriginalMaterials`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-ctor), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.ProcessRenderer`](/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-processrenderer).
