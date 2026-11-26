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
| <Link id="m-ctor" /><code>{"CosmeticEyePart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Backing field for `Material`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | <span className="api-desc">Material used to show these eyes on the eye pickup (`EyePickup`).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createinput" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{" CreateInput("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Builds the packer input as the base does, then swaps the blit materials for copies of the dummy's eye blit materials.</span> |
