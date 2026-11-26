---
title: "MouldDefinition"
description: "A hashed asset describing a smithing mould: the item it casts, the ingots it takes, the cost and how its picture looks on the mould."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldDefinition

A **class** in `Root.Township`, the global namespace.

A hashed asset describing a smithing mould: the item it casts, the ingots it takes, the cost and how its picture looks on the mould. Look one up by product with `GetDefinition`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`HashedGeneralValue<MouldDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MouldDefinition`](/mod/game-api/types/global-m-o/moulddefinition), [`MouldDefinition.Create`](/mod/game-api/types/global-m-o/moulddefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/global-m-o/moulddefinition-create)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results), [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowedmaterials" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/itemset">{"ItemSet"}</Link>{" allowedMaterials"}</code> | Backing field for `AllowedMaterials`. Must be ingots. |
| <Link id="m-cost" /><code>{"private int cost"}</code> | Backing field for `Cost`, shown as the input count on the mould. |
| <Link id="m-countnumbergraphicposition" /><code>{"private Vector3 countNumberGraphicPosition"}</code> | Backing field for `CountNumberGraphicPosition`. |
| <Link id="m-countxgraphicposition" /><code>{"private Vector3 countXGraphicPosition"}</code> | Backing field for `CountXGraphicPosition`. |
| <Link id="m-definitions" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{"> definitions"}</code> | Static lookup from product item to its mould definition. |
| <Link id="m-findable" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{"> findable"}</code> | Static list of findable moulds that `GetRandom` picks from. |
| <Link id="m-gap" /><code>{"private float gap"}</code> | Backing field for `Gap`. |
| <Link id="m-graphic" /><code>{"private Mesh graphic"}</code> | Backing field for `Graphic`. |
| <Link id="m-graphicposition" /><code>{"private Vector3 graphicPosition"}</code> | Backing field for `GraphicPosition`. |
| <Link id="m-graphicrotation" /><code>{"private Vector3 graphicRotation"}</code> | Backing field for `GraphicRotation`, as Euler angles. |
| <Link id="m-graphicscale" /><code>{"private float graphicScale"}</code> | Old uniform scale. Unused; `GraphicScale` returns `graphicScaleNew`. |
| <Link id="m-graphicscalenew" /><code>{"private Vector3 graphicScaleNew"}</code> | Backing field for `GraphicScale`. |
| <Link id="m-isfindable" /><code>{"private bool isFindable"}</code> | Backing field for `IsFindable`. Defaults to true. |
| <Link id="m-product" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" product"}</code> | Backing field for `Product`. `OnValidate` names the asset after it. |
| <Link id="m-quantityproduced" /><code>{"private int quantityProduced"}</code> | Backing field for `QuantityProduced`. Defaults to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedmaterials-2" /><code><Link to="/mod/game-api/types/alta-items/itemset">{"ItemSet"}</Link>{" AllowedMaterials { get; }"}</code> | The ingot items that can be poured into this mould. |
| <Link id="m-cost-2" /><code>{"int Cost { get; }"}</code> | How many ingots one cast takes. The smelter also scales the fuel needed by it. |
| <Link id="m-countnumbergraphicposition-2" /><code>{"Vector3 CountNumberGraphicPosition { get; }"}</code> | Where the quantity number is drawn on the mould. |
| <Link id="m-countxgraphicposition-2" /><code>{"Vector3 CountXGraphicPosition { get; }"}</code> | Where the multiplication sign before the quantity is drawn on the mould. |
| <Link id="m-gap-2" /><code>{"float Gap { get; }"}</code> | A float set per mould. Nothing in the server build reads it. |
| <Link id="m-graphic-2" /><code>{"Mesh Graphic { get; }"}</code> | Mesh of the picture shown on the mould. |
| <Link id="m-graphicposition-2" /><code>{"Vector3 GraphicPosition { get; }"}</code> | Local position of the mould's picture. |
| <Link id="m-graphicrotation-2" /><code>{"Vector3 GraphicRotation { get; }"}</code> | Local rotation (Euler angles) of the mould's picture. |
| <Link id="m-graphicscale-2" /><code>{"Vector3 GraphicScale { get; }"}</code> | Local scale of the mould's picture. |
| <Link id="m-isfindable-2" /><code>{"bool IsFindable { get; }"}</code> | Whether `GetRandom` can return this mould. |
| <Link id="m-product-2" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" Product { get; }"}</code> | The item this mould casts. |
| <Link id="m-quantityproduced-2" /><code>{"int QuantityProduced { get; }"}</code> | How many items one cast makes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdefinition" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" GetDefinition("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" product)"}</code> | Returns the mould whose product is the given item, or null. Builds the lookup on first use. |
| <Link id="m-getrandom" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" GetRandom()"}</code> | Returns a random mould marked findable. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: renames the asset to the product's name plus " Mould". |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkinitialize" /><code>{"private static void CheckInitialize()"}</code> | Builds the product lookup and the findable list from all mould definitions on first use. |

</details>

## Used in

Members of other types that take, return or hold a `MouldDefinition`:

[`Smelter.CheckMould`](/mod/game-api/types/alta-crafting/smelter#m-checkmould), [`SpawnCommandModule.MouldDefinitionInfo.op_Implicit`](/mod/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo#m-op-implicit), [`SpawnCommandModule.Moulds.DropPackage`](/mod/game-api/types/alta-console/spawncommandmodule-moulds#m-droppackage), [`SpawnCommandModule.Moulds.SpawnFull`](/mod/game-api/types/alta-console/spawncommandmodule-moulds#m-spawnfull), [`MouldRestrictor.mouldDefinitions`](/mod/game-api/types/alta-items/mouldrestrictor#m-moulddefinitions), [`Mould.definition`](/mod/game-api/types/global-m-o/mould#m-definition), [`Mould.Definition`](/mod/game-api/types/global-m-o/mould#m-definition-2), [`Mould.SetDefinition`](/mod/game-api/types/global-m-o/mould#m-setdefinition), [`MouldItemComponent.definition`](/mod/game-api/types/global-m-o/moulditemcomponent#m-definition), [`MouldItemComponent.Definition`](/mod/game-api/types/global-m-o/moulditemcomponent#m-definition-2), [`MouldSaveData.definition`](/mod/game-api/types/global-m-o/mouldsavedata#m-definition), [`MouldSaveData1.definition`](/mod/game-api/types/global-m-o/mouldsavedata1#m-definition).
