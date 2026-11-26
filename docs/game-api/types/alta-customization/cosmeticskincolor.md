---
title: "CosmeticSkinColor"
description: "Customization part that sets the character's skin colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticSkinColor

A **class** in `Root.Township`, `Alta.Customization`.

Customization part that sets the character's skin colour.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationVisualPart<CustomizationArguments>`](/game-api/types/alta-customization/customizationvisualpart-targuments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticSkinColor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nosecolor" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" noseColor"}</code> | Serialized nose colour. Not used in this file. |
| <Link id="m-skincolor" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" skinColor"}</code> | Backing field for `SkinColor`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-skincolor-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" SkinColor { get; }"}</code> | The skin colour this part applies. `SkinColorPickup` shows it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"protected override void Attach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Sets the dummy's skin colour and repacks the character. |
| <Link id="m-changearguments" /><code>{"protected override void ChangeArguments("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Does nothing; the colour comes from the part, not arguments. |
| <Link id="m-detach" /><code>{"protected override void Detach("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | Does nothing; the next skin colour overwrites it. |
