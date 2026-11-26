---
title: "AtlasDefinition.MaterialReferences"
description: "Private helper in AtlasDefinition: works out how much atlas space a material needs from its main texture for its shader, scaled by its Scale setting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasDefinition.MaterialReferences

A **private class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper in `AtlasDefinition`: works out how much atlas space a material needs from its main texture for its shader, scaled by its `Scale` setting.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`AtlasDefinition`](/mod/game-api/types/alta-utilities/atlasdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaterialReferences("}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{" materialRect)"}</code> | Creates an `AtlasDefinition.MaterialReferences` from `materialRect`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-height" /><code>{"int Height { get; private set; }"}</code> | Texture height in pixels, after scaling. |
| <Link id="m-materialrect" /><code><Link to="/mod/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{" MaterialRect { get; }"}</code> | The atlased material entry being measured. |
| <Link id="m-size" /><code>{"int Size { get; }"}</code> | Area in pixels (height times width). |
| <Link id="m-width" /><code>{"int Width { get; private set; }"}</code> | Texture width in pixels, after scaling. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcesquare" /><code>{"void ForceSquare(int size)"}</code> | Overrides the size with a square of the given side. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyscale" /><code>{"private void ApplyScale()"}</code> | Scales the size by the material's `scale` setting (four, two, half or quarter). |
| <Link id="m-gettexture" /><code>{"private void GetTexture(string textureProperty)"}</code> | Takes width and height from the named texture property, if the material has that texture. |

</details>
