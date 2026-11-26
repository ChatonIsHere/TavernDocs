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
| <Link id="m-ctor" /><code>{"MaterialTuple()"}</code> | Creates a `PlayerSwapMaterialFilter.MaterialTuple` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"Material copy"}</code> | The replacement material, made by the filter's `SetupTuple`. |
| <Link id="m-needsclearing" /><code>{"bool needsClearing"}</code> | Whether `copy` is cleaned up when the filter clears. |
| <Link id="m-original" /><code>{"Material original"}</code> | The renderer's own material, put back when the filter is off. |

## Used in

Members of other types that take, return or hold a `MaterialTuple`:

[`PlayerSwapMaterialFilter.SetupTuple`](/mod/game-api/types/alta-customization/playerswapmaterialfilter#m-setuptuple), [`PlayerSwapMaterialFilter.PlayerOriginalMaterials.materialMap`](/mod/game-api/types/alta-customization/playerswapmaterialfilter-playeroriginalmaterials#m-materialmap), [`SpectralFilter.SetupTuple`](/mod/game-api/types/alta-customization/spectralfilter#m-setuptuple).
