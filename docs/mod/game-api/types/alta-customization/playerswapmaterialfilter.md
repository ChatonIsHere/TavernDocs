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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`OnDrawFilter`](/mod/game-api/types/alta-customization/ondrawfilter)
- **Derived types** [`SpectralFilter`](/mod/game-api/types/alta-customization/spectralfilter)
- **Nested types** [`MaterialTuple`](/mod/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple), [`PlayerOriginalMaterials`](/mod/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerSwapMaterialFilter()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Material passed to `SetupTuple` to build each copy.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for errors while swapping a player's materials.</span> |
| <Link id="m-playermap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials">{"PlayerSwapMaterialFilter.PlayerOriginalMaterials"}</Link>{"> playerMap"}</code> | <span className="api-desc">Cached original and swapped materials for each player character.</span> |
| <Link id="m-toremove" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{"> toRemove"}</code> | <span className="api-desc">Scratch list of destroyed players to drop from `playerMap` after a render.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" camera, PostProcessVolume volume)"}</code> | <span className="api-desc">Restores every cached player's materials, cleans copies that need clearing and empties the cache.</span> |
| <Link id="m-postrender" /><code>{"protected override void PostRender()"}</code> | <span className="api-desc">Restores original materials after the render and forgets players whose entities are being destroyed.</span> |
| <Link id="m-prerender" /><code>{"protected override void PreRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera)"}</code> | <span className="api-desc">Before the camera renders, swaps each living player character's LOD0 clothing materials to their copies, caching them per player.</span> |
| <Link id="m-setuptuple" /><code>{"protected abstract void SetupTuple("}<Link to="/mod/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple">{"PlayerSwapMaterialFilter.MaterialTuple"}</Link>{" tuple, Material baseMaterial)"}</code> | <span className="api-desc">Implemented by subclasses: fills in the tuple's `copy` material from the original and `baseMaterial`.</span> |

## Used in

Members of other types that take, return or hold a `PlayerSwapMaterialFilter`:

<div className="api-used-in">

[`PlayerSwapMaterialFilter.PlayerOriginalMaterials.PlayerOriginalMaterials`](/mod/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-ctor), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.ProcessRenderer`](/mod/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-processrenderer).

</div>
