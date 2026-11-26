---
title: "CosmeticEyePart"
description: "Mesh part for eyes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticEyePart

A **class** in `Root.Township`, `Alta.Customization`.

Mesh part for eyes. Packs like other cosmetic meshes but blits with the character's eye shaders instead of the default ones.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CosmeticMeshPartBase<TwoColors>`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticEyePart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | Backing field for `Material`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | Material used to show these eyes on the eye pickup (`EyePickup`). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createinput" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{" CreateInput("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Builds the packer input as the base does, then swaps the blit materials for copies of the dummy's eye blit materials. |
