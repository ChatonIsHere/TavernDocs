---
title: "ICosmeticMeshPartBase"
description: "A cosmetic part made of meshes and textures that gets packed into the character's combined cosmetic mesh, with two colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICosmeticMeshPartBase

An **interface** in `Root.Township`, `Alta.Customization`.

A cosmetic part made of meshes and textures that gets packed into the character's combined cosmetic mesh, with two colours.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`ICustomizationPart`](/game-api/types/alta-customization/icustomizationpart)
- **Derived types** [`CosmeticMeshPartBase<T>`](/game-api/types/alta-customization/cosmeticmeshpartbase-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-copycolorfrom" /><code><Link to="/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{" CopyColorFrom { get; }"}</code> | Another part whose colours this one follows, or null. |
| <Link id="m-impededlods" /><code>{"Mesh[] ImpededLods { get; }"}</code> | Mesh LODs used instead of `Lods` when the part's arguments say it's impeded (probably covered by another cosmetic). |
| <Link id="m-isalphablending" /><code>{"bool IsAlphaBlending { get; }"}</code> | Whether the part uses alpha blending. |
| <Link id="m-isdisabledonandroid" /><code>{"bool IsDisabledOnAndroid { get; }"}</code> | Whether to skip the part on Android. Always false in the base implementation. |
| <Link id="m-isgeneratingbackfaces" /><code>{"bool IsGeneratingBackFaces { get; }"}</code> | Whether to add back faces when packing. |
| <Link id="m-istexturesharingforced" /><code>{"bool IsTextureSharingForced { get; }"}</code> | Whether the texture must be shared. False in the base implementation. |
| <Link id="m-lods" /><code>{"Mesh[] Lods { get; }"}</code> | Normal mesh LODs. |
| <Link id="m-name" /><code>{"string name { get; }"}</code> | The part's object name. |
| <Link id="m-normal" /><code>{"Texture2D Normal { get; }"}</code> | Normal map texture. |
| <Link id="m-partid" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"PartId"}</Link>{" { get; }"}</code> | Packing id: the visual's hash and the part index. |
| <Link id="m-texture" /><code>{"Texture2D Texture { get; }"}</code> | Diffuse texture. |
| <Link id="m-workingindex" /><code>{"int WorkingIndex { get; set; }"}</code> | Scratch index used while packing and colouring. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applycolortoarguments" /><code>{"bool ApplyColorToArguments("}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color, bool isPrimary, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Sets the primary or secondary colour in the arguments, and on the linked part. False if nothing changed or colour is locked. |
| <Link id="m-getcustompickupcolors" /><code>{"void GetCustomPickupColors(out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" primary, out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" secondary)"}</code> | Colours to use when shown as a pickup. Null by default. |

## Used in

Members of other types that take, return or hold a `ICosmeticMeshPartBase`:

[`CosmeticMeshPartBase<T>.CopyColorFrom`](/game-api/types/alta-customization/cosmeticmeshpartbase-t#m-copycolorfrom-2), [`CosmeticPacker.partMap`](/game-api/types/alta-customization/cosmeticpacker#m-partmap), [`CosmeticPickup.CreateMaterial`](/game-api/types/alta-customization/cosmeticpickup#m-creatematerial), [`MeshPacker.Pack`](/game-api/types/alta-customization/meshpacker#m-pack), [`TexturePacker.Pack`](/game-api/types/alta-customization/texturepacker#m-pack).
