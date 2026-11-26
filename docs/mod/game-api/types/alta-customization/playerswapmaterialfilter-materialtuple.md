---
title: "PlayerSwapMaterialFilter.MaterialTuple"
description: "A renderer's original material and the swapped copy a hand camera filter shows instead (for example the spectral look)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSwapMaterialFilter.MaterialTuple

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

A renderer's original material and the swapped copy a hand camera filter shows instead (for example the spectral look).

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`PlayerSwapMaterialFilter`](/mod/game-api/types/alta-customization/playerswapmaterialfilter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialTuple()"}</code> | <span className="api-desc">Creates a `PlayerSwapMaterialFilter.MaterialTuple` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"Material copy"}</code> | <span className="api-desc">The replacement material, made by the filter's `SetupTuple`.</span> |
| <Link id="m-needsclearing" /><code>{"bool needsClearing"}</code> | <span className="api-desc">Whether `copy` is cleaned up when the filter clears.</span> |
| <Link id="m-original" /><code>{"Material original"}</code> | <span className="api-desc">The renderer's own material, put back when the filter is off.</span> |

## Used in

Members of other types that take, return or hold a `MaterialTuple`:

<div className="api-used-in">

[`PlayerSwapMaterialFilter.SetupTuple`](/mod/game-api/types/alta-customization/playerswapmaterialfilter#m-setuptuple), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.materialMap`](/mod/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-materialmap), [`SpectralFilter.SetupTuple`](/mod/game-api/types/alta-customization/spectralfilter#m-setuptuple).

</div>
