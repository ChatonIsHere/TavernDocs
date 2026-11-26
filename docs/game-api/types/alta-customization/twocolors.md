---
title: "TwoColors"
description: "Customization arguments holding a primary and secondary cosmetic colour for a cosmetic item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwoColors

A **class** in `Root.Township`, `Alta.Customization`.

Customization arguments holding a primary and secondary cosmetic colour for a cosmetic item.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationArguments`](/game-api/types/alta-customization/customizationarguments)
- **Derived types** [`CosmeticEyePart`](/game-api/types/alta-customization/cosmeticeyepart), [`CosmeticMeshPart`](/game-api/types/alta-customization/cosmeticmeshpart)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TwoColors()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger. Logs null colours when writing or reading. |
| <Link id="m-primary" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" primary"}</code> | Backing field for `Primary`. Falls back to colour hash 2780 if read as null. |
| <Link id="m-secondary" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" secondary"}</code> | Backing field for `Secondary`. Falls back to colour hash 2724 if read as null. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticcolors" /><code>{"static "}<Link to="/game-api/types/alta-customization/cosmeticpalette">{"CosmeticPalette"}</Link>{" CosmeticColors { get; set; }"}</code> | The palette random colours are picked from. Loaded from `CosmeticColor/Main Palette` in Resources on first use. |
| <Link id="m-primary-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" Primary { get; set; }"}</code> | The first cosmetic colour. |
| <Link id="m-secondary-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" Secondary { get; set; }"}</code> | The second cosmetic colour. |
| <Link id="m-size" /><code>{"override int Size { get; }"}</code> | Serialized size in bits (always 32). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" Clone()"}</code> | Copies both colours into a new instance, filling any null colour with a random one. |
| <Link id="m-randomize" /><code>{"override void Randomize()"}</code> | Picks random primary and secondary colours from the palette. |
| <Link id="m-resolvenull" /><code>{"void ResolveNull()"}</code> | Replaces a null primary or secondary colour with a random palette colour. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads both colours as hashes. A null colour read from the stream becomes a fixed error colour and is logged. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows both colours, for logs. |

## Used in

Members of other types that take, return or hold a `TwoColors`:

[`SkinSettings.Arguments`](/game-api/types/alta-player/skinsettings#m-arguments), [`CosmeticPacker.Input.Arguments`](/game-api/types/alta-customization/cosmeticpacker-input#m-arguments), [`DefaultCosmeticInfo.colors`](/game-api/types/alta-customization/defaultcosmeticinfo#m-colors), [`DefaultCosmeticInfo.Colors`](/game-api/types/alta-customization/defaultcosmeticinfo#m-colors-2), [`DefaultCosmeticInfo.DefaultCosmeticInfo`](/game-api/types/alta-customization/defaultcosmeticinfo#m-ctor-2), [`SkinMeshPart.impeded`](/game-api/types/alta-customization/skinmeshpart#m-impeded), [`ModellingCharacter.Definition.arguments`](/game-api/types/global-m-o/modellingcharacter-definition#m-arguments), [`ModellingCharacter.Definition.Arguments`](/game-api/types/global-m-o/modellingcharacter-definition#m-arguments-2), [`ModellingCharacter.FreeDefinition.arguments`](/game-api/types/global-m-o/modellingcharacter-freedefinition#m-arguments), [`ModellingCharacter.FreeDefinition.Arguments`](/game-api/types/global-m-o/modellingcharacter-freedefinition#m-arguments-2), [`ModellingCharacter.IDefinition.Arguments`](/game-api/types/global-m-o/modellingcharacter-idefinition#m-arguments), [`ModellingCharacter.ItemArguments.arguments`](/game-api/types/global-m-o/modellingcharacter-itemarguments#m-arguments).
