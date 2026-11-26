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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`GlobalSettings<CustomizationPackingSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CustomizationPackingSettings`](/mod/game-api/types/alta-customization/customizationpackingsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationPackingSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit" /><code>{"private Material diffuseBlit"}</code> | <span className="api-desc">Backing field for `DiffuseBlit`.</span> |
| <Link id="m-normalblit" /><code>{"private Material normalBlit"}</code> | <span className="api-desc">Backing field for `NormalBlit`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diffuseblit-2" /><code>{"Material DiffuseBlit { get; }"}</code> | <span className="api-desc">Material copied by each mesh part to blit its diffuse texture into the character atlas.</span> |
| <Link id="m-normalblit-2" /><code>{"Material NormalBlit { get; }"}</code> | <span className="api-desc">Material copied by each mesh part to blit its normal map into the normal atlas.</span> |
