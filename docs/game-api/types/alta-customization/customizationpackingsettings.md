---
title: "CustomizationPackingSettings"
description: "Global settings asset with the default blit materials for packing cosmetic textures."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationPackingSettings

A **class** in `Root.Township`, `Alta.Customization`.

Global settings asset with the default blit materials for packing cosmetic textures. Get it with `GlobalSettings<CustomizationPackingSettings>.Instance`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`GlobalSettings<CustomizationPackingSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CustomizationPackingSettings`](/game-api/types/alta-customization/customizationpackingsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationPackingSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit" /><code>{"private Material diffuseBlit"}</code> | Backing field for `DiffuseBlit`. |
| <Link id="m-normalblit" /><code>{"private Material normalBlit"}</code> | Backing field for `NormalBlit`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit-2" /><code>{"Material DiffuseBlit { get; }"}</code> | Material copied by each mesh part to blit its diffuse texture into the character atlas. |
| <Link id="m-normalblit-2" /><code>{"Material NormalBlit { get; }"}</code> | Material copied by each mesh part to blit its normal map into the normal atlas. |
