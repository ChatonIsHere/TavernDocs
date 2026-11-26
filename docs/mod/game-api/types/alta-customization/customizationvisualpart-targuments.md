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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationVisualPart`](/mod/game-api/types/alta-customization/customizationvisualpart)
- **Derived types** [`CosmeticBodyType`](/mod/game-api/types/alta-customization/cosmeticbodytype), [`CosmeticMeshPartBase<T>`](/mod/game-api/types/alta-customization/cosmeticmeshpartbase-t), [`CosmeticSkinColor`](/mod/game-api/types/alta-customization/cosmeticskincolor), [`EquipmentPart`](/mod/game-api/types/alta-customization/equipmentpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CustomizationVisualPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultarguments" /><code>{"private TArguments defaultArguments"}</code> | <span className="api-desc">Default arguments for this part, cloned by `CreateDefaultArguments` and exposed by `Arguments`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"TArguments Arguments { get; }"}</code> | <span className="api-desc">The default arguments set on the prefab.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code>{"override "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" CreateDefaultArguments()"}</code> | <span className="api-desc">A clone of the default arguments.</span> |
