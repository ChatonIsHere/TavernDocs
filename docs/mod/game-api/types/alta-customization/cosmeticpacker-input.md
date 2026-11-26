---
title: "CosmeticPacker.Input"
description: "One cosmetic part to pack into a character's combined mesh and texture, with its colours and blit materials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPacker.Input

A **class** in `Root.Township`, `Alta.Customization`.

One cosmetic part to pack into a character's combined mesh and texture, with its colours and blit materials.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`CosmeticPacker`](/mod/game-api/types/alta-customization/cosmeticpacker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Input()"}</code> | <span className="api-desc">Creates a `CosmeticPacker.Input` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-rectproperty" /><code>{"protected static readonly int RectProperty"}</code> | <span className="api-desc">Shader ID of the `_Rect` property set on the blit materials.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{" Arguments { get; set; }"}</code> | <span className="api-desc">The primary and secondary colours applied to the part.</span> |
| <Link id="m-copyfrom" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" CopyFrom { get; set; }"}</code> | <span className="api-desc">Another part whose texture area and colours this one shares. A zero hash means none.</span> |
| <Link id="m-diffuseblit" /><code>{"Material DiffuseBlit { get; set; }"}</code> | <span className="api-desc">Material used to draw the part's colour texture into the packed texture.</span> |
| <Link id="m-isalphablending" /><code>{"bool IsAlphaBlending { get; set; }"}</code> | <span className="api-desc">Whether the part goes in the transparent mesh.</span> |
| <Link id="m-isonhead" /><code>{"bool IsOnHead { get; set; }"}</code> | <span className="api-desc">Whether the part belongs to the head, kept separate in first person.</span> |
| <Link id="m-normalblit" /><code>{"Material NormalBlit { get; set; }"}</code> | <span className="api-desc">Material used to draw the part's normal map into the packed texture.</span> |
| <Link id="m-partid" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"PartId"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which cosmetic part this is.</span> |
| <Link id="m-rect" /><code>{"Vector4 Rect { get; set; }"}</code> | <span className="api-desc">Where the part sits in the packed texture.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"virtual void Copy("}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{" copyFrom)"}</code> | <span className="api-desc">Takes the colours from another input.</span> |
| <Link id="m-setupforblit" /><code>{"virtual void SetupForBlit(Vector4 rect)"}</code> | <span className="api-desc">Applies the colours and the target area to the blit materials.</span> |

## Used in

Members of other types that take, return or hold a `Input`:

<div className="api-used-in">

[`CosmeticEyePart.CreateInput`](/mod/game-api/types/alta-customization/cosmeticeyepart#m-createinput), [`CosmeticMeshPartBase<T>.CreateInput`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-createinput), [`CosmeticPacker.cacheInputs`](/mod/game-api/types/alta-customization/cosmeticpacker#m-cacheinputs), [`CosmeticPacker.inputs`](/mod/game-api/types/alta-customization/cosmeticpacker#m-inputs), [`CosmeticPacker.Inputs`](/mod/game-api/types/alta-customization/cosmeticpacker#m-inputs-2), [`MeshPacker.Pack`](/mod/game-api/types/alta-customization/meshpacker#m-pack), [`SkinMeshPart.CreateInput`](/mod/game-api/types/alta-customization/skinmeshpart#m-createinput), [`TexturePacker.Pack`](/mod/game-api/types/alta-customization/texturepacker#m-pack).

</div>
