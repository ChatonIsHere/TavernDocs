---
title: "ICosmeticMeshPartBase"
description: "interface ICosmeticMeshPartBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICosmeticMeshPartBase

An **interface** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`ICustomizationPart`](/game-api/types/alta-customization/icustomizationpart)
- **Derived types** [`CosmeticMeshPartBase<T>`](/game-api/types/alta-customization/cosmeticmeshpartbase-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-copycolorfrom" /><code><Link to="/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{" CopyColorFrom { get; }"}</code> |  |
| <Link id="m-impededlods" /><code>{"Mesh[] ImpededLods { get; }"}</code> |  |
| <Link id="m-isalphablending" /><code>{"bool IsAlphaBlending { get; }"}</code> |  |
| <Link id="m-isdisabledonandroid" /><code>{"bool IsDisabledOnAndroid { get; }"}</code> |  |
| <Link id="m-isgeneratingbackfaces" /><code>{"bool IsGeneratingBackFaces { get; }"}</code> |  |
| <Link id="m-istexturesharingforced" /><code>{"bool IsTextureSharingForced { get; }"}</code> |  |
| <Link id="m-lods" /><code>{"Mesh[] Lods { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string name { get; }"}</code> |  |
| <Link id="m-normal" /><code>{"Texture2D Normal { get; }"}</code> |  |
| <Link id="m-partid" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"PartId"}</Link>{" { get; }"}</code> |  |
| <Link id="m-texture" /><code>{"Texture2D Texture { get; }"}</code> |  |
| <Link id="m-workingindex" /><code>{"int WorkingIndex { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycolortoarguments" /><code>{"bool ApplyColorToArguments("}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color, bool isPrimary, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-getcustompickupcolors" /><code>{"void GetCustomPickupColors(out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" primary, out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" secondary)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ICosmeticMeshPartBase`:

[`CosmeticMeshPartBase<T>.CopyColorFrom`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-copycolorfrom-2), [`CosmeticPacker.partMap`](/game-api/types/alta-customization/cosmeticpacker#m-partmap), [`CosmeticPickup.CreateMaterial`](/game-api/types/alta-customization/cosmeticpickup#m-creatematerial), [`MeshPacker.Pack`](/game-api/types/alta-customization/meshpacker#m-pack), [`TexturePacker.Pack`](/game-api/types/alta-customization/texturepacker#m-pack).
