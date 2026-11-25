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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested in** [`CosmeticPacker`](/game-api/types/alta-customization/cosmeticpacker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Input()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-rectproperty" /><code>{"protected static readonly int RectProperty"}</code> | Shader ID of the `_Rect` property set on the blit materials. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{" Arguments { get; set; }"}</code> | The primary and secondary colours applied to the part. |
| <Link id="m-copyfrom" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" CopyFrom { get; set; }"}</code> | Another part whose texture area and colours this one shares. A zero hash means none. |
| <Link id="m-diffuseblit" /><code>{"Material DiffuseBlit { get; set; }"}</code> | Material used to draw the part's colour texture into the packed texture. |
| <Link id="m-isalphablending" /><code>{"bool IsAlphaBlending { get; set; }"}</code> | Whether the part goes in the transparent mesh. |
| <Link id="m-isonhead" /><code>{"bool IsOnHead { get; set; }"}</code> | Whether the part belongs to the head, kept separate in first person. |
| <Link id="m-normalblit" /><code>{"Material NormalBlit { get; set; }"}</code> | Material used to draw the part's normal map into the packed texture. |
| <Link id="m-partid" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"PartId"}</Link>{" { get; set; }"}</code> | Which cosmetic part this is. |
| <Link id="m-rect" /><code>{"Vector4 Rect { get; set; }"}</code> | Where the part sits in the packed texture. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"virtual void Copy("}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{" copyFrom)"}</code> | Takes the colours from another input. |
| <Link id="m-setupforblit" /><code>{"virtual void SetupForBlit(Vector4 rect)"}</code> | Applies the colours and the target area to the blit materials. |

## Used in

Members of other types that take, return or hold a `Input`:

[`CosmeticEyePart.CreateInput`](/game-api/types/alta-customization/cosmeticeyepart#m-createinput), [`CosmeticMeshPartBase<T>.CreateInput`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-createinput), [`CosmeticPacker.cacheInputs`](/game-api/types/alta-customization/cosmeticpacker#m-cacheinputs), [`CosmeticPacker.inputs`](/game-api/types/alta-customization/cosmeticpacker#m-inputs), [`CosmeticPacker.Inputs`](/game-api/types/alta-customization/cosmeticpacker#m-inputs-2), [`MeshPacker.Pack`](/game-api/types/alta-customization/meshpacker#m-pack), [`SkinMeshPart.CreateInput`](/game-api/types/alta-customization/skinmeshpart#m-createinput), [`TexturePacker.Pack`](/game-api/types/alta-customization/texturepacker#m-pack).
