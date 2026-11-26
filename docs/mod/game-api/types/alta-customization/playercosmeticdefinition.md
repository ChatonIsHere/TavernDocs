---
title: "PlayerCosmeticDefinition"
description: "A purchasable cosmetic asset: its category, pickup and visual prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticDefinition

A **class** in `Root.Township`, `Alta.Customization`.

A purchasable cosmetic asset: its category, pickup and visual prefab.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`Purchasable`](/mod/game-api/types/alta-customization/purchasable), [`ICustomizationDefinition`](/mod/game-api/types/alta-customization/icustomizationdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Customization](/mod/game-api/game-systems/customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> | <span className="api-desc">Backing field for `Category`. Its setter only works in the editor, and as written it throws even after setting a valid category.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" pickup"}</code> | <span className="api-desc">Pickup prefab used by `SpawnPickup`.</span> |
| <Link id="m-pickuptype" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" pickupType"}</code> | <span className="api-desc">Backing field for `PickupType`.</span> |
| <Link id="m-uiselectionboardscale" /><code>{"private float uiSelectionBoardScale"}</code> | <span className="api-desc">Backing field for `UISelectionBoardScale`. Defaults to 1.</span> |
| <Link id="m-visualprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationvisual">{"CustomizationVisual"}</Link>{" visualPrefab"}</code> | <span className="api-desc">Visual prefab returned by `GetVisual` and used for default arguments.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{" Category { get; set; }"}</code> | <span className="api-desc">The cosmetic's category. The setter only works in the editor, and as written it throws even after a valid set.</span> |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">The display name.</span> |
| <Link id="m-pickuptype-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpickuptype">{"CosmeticPickupType"}</Link>{" PickupType { get; }"}</code> | <span className="api-desc">What kind of pickup this cosmetic uses.</span> |
| <Link id="m-uiselectionboardscale-2" /><code>{"float UISelectionBoardScale { get; }"}</code> | <span className="api-desc">Scale of the item on the customization selection board.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> | <span className="api-desc">Default customization arguments for each part of the visual.</span> |
| <Link id="m-getvisual" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationvisual">{"ICustomizationVisual"}</Link>{" GetVisual()"}</code> | <span className="api-desc">Points the visual prefab at this definition, initializes it and returns it.</span> |
| <Link id="m-spawnpickup" /><code><Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" SpawnPickup("}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | <span className="api-desc">Spawns the cosmetic's pickup with the given arguments under a parent.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Type, category and name, for logs.</span> |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticDefinition`:

<div className="api-used-in">

[`CategoryScrollManager.purchased`](/mod/game-api/types/alta-customization/categoryscrollmanager#m-purchased), [`CosmeticPresetTrophy.standardBody`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-standardbody), [`CosmeticPresetTrophy.trophyBody`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-trophybody), [`DefaultCosmeticInfo.DefaultCosmeticInfo`](/mod/game-api/types/alta-customization/defaultcosmeticinfo#m-ctor-2), [`DefaultCosmeticInfo.definition`](/mod/game-api/types/alta-customization/defaultcosmeticinfo#m-definition), [`PlayerCosmeticWrapper.GetItem`](/mod/game-api/types/alta-customization/playercosmeticwrapper#m-getitem-2), [`ModellingCharacter.Definition.asset`](/mod/game-api/types/global-m-o/modellingcharacter-definition#m-asset), [`ModellingCharacter.FreeDefinition.asset`](/mod/game-api/types/global-m-o/modellingcharacter-freedefinition#m-asset).

</div>
