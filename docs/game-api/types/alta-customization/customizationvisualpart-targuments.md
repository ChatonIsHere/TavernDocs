---
title: "CustomizationVisualPart<TArguments>"
description: "A CustomizationVisualPart whose default arguments of type TArguments are set on the prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationVisualPart&lt;TArguments&gt;

An **abstract class** in `Root.Township`, `Alta.Customization`.

A `CustomizationVisualPart` whose default arguments of type `TArguments` are set on the prefab.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationVisualPart`](/game-api/types/alta-customization/customizationvisualpart)
- **Derived types** [`CosmeticBodyType`](/game-api/types/alta-customization/cosmeticbodytype), [`CosmeticMeshPartBase<T>`](/game-api/types/alta-customization/cosmeticmeshpartbase-t), [`CosmeticSkinColor`](/game-api/types/alta-customization/cosmeticskincolor), [`EquipmentPart`](/game-api/types/alta-customization/equipmentpart)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected CustomizationVisualPart()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-defaultarguments" /><code>{"private TArguments defaultArguments"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"TArguments Arguments { get; }"}</code> | The default arguments set on the prefab. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code>{"override "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" CreateDefaultArguments()"}</code> | A clone of the default arguments. |
