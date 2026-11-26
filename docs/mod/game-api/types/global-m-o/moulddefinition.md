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
| <Link id="m-ctor" /><code>{"MouldDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowedmaterials" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/itemset">{"ItemSet"}</Link>{" allowedMaterials"}</code> | <span className="api-desc">Backing field for `AllowedMaterials`. Must be ingots.</span> |
| <Link id="m-cost" /><code>{"private int cost"}</code> | <span className="api-desc">Backing field for `Cost`, shown as the input count on the mould.</span> |
| <Link id="m-countnumbergraphicposition" /><code>{"private Vector3 countNumberGraphicPosition"}</code> | <span className="api-desc">Backing field for `CountNumberGraphicPosition`.</span> |
| <Link id="m-countxgraphicposition" /><code>{"private Vector3 countXGraphicPosition"}</code> | <span className="api-desc">Backing field for `CountXGraphicPosition`.</span> |
| <Link id="m-definitions" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{"> definitions"}</code> | <span className="api-desc">Static lookup from product item to its mould definition.</span> |
| <Link id="m-findable" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{"> findable"}</code> | <span className="api-desc">Static list of findable moulds that `GetRandom` picks from.</span> |
| <Link id="m-gap" /><code>{"private float gap"}</code> | <span className="api-desc">Backing field for `Gap`.</span> |
| <Link id="m-graphic" /><code>{"private Mesh graphic"}</code> | <span className="api-desc">Backing field for `Graphic`.</span> |
| <Link id="m-graphicposition" /><code>{"private Vector3 graphicPosition"}</code> | <span className="api-desc">Backing field for `GraphicPosition`.</span> |
| <Link id="m-graphicrotation" /><code>{"private Vector3 graphicRotation"}</code> | <span className="api-desc">Backing field for `GraphicRotation`, as Euler angles.</span> |
| <Link id="m-graphicscale" /><code>{"private float graphicScale"}</code> | <span className="api-desc">Old uniform scale. Unused; `GraphicScale` returns `graphicScaleNew`.</span> |
| <Link id="m-graphicscalenew" /><code>{"private Vector3 graphicScaleNew"}</code> | <span className="api-desc">Backing field for `GraphicScale`.</span> |
| <Link id="m-isfindable" /><code>{"private bool isFindable"}</code> | <span className="api-desc">Backing field for `IsFindable`. Defaults to true.</span> |
| <Link id="m-product" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" product"}</code> | <span className="api-desc">Backing field for `Product`. `OnValidate` names the asset after it.</span> |
| <Link id="m-quantityproduced" /><code>{"private int quantityProduced"}</code> | <span className="api-desc">Backing field for `QuantityProduced`. Defaults to 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedmaterials-2" /><code><Link to="/mod/game-api/types/alta-items/itemset">{"ItemSet"}</Link>{" AllowedMaterials { get; }"}</code> | <span className="api-desc">The ingot items that can be poured into this mould.</span> |
| <Link id="m-cost-2" /><code>{"int Cost { get; }"}</code> | <span className="api-desc">How many ingots one cast takes. The smelter also scales the fuel needed by it.</span> |
| <Link id="m-countnumbergraphicposition-2" /><code>{"Vector3 CountNumberGraphicPosition { get; }"}</code> | <span className="api-desc">Where the quantity number is drawn on the mould.</span> |
| <Link id="m-countxgraphicposition-2" /><code>{"Vector3 CountXGraphicPosition { get; }"}</code> | <span className="api-desc">Where the multiplication sign before the quantity is drawn on the mould.</span> |
| <Link id="m-gap-2" /><code>{"float Gap { get; }"}</code> | <span className="api-desc">A float set per mould. Nothing in the server build reads it.</span> |
| <Link id="m-graphic-2" /><code>{"Mesh Graphic { get; }"}</code> | <span className="api-desc">Mesh of the picture shown on the mould.</span> |
| <Link id="m-graphicposition-2" /><code>{"Vector3 GraphicPosition { get; }"}</code> | <span className="api-desc">Local position of the mould's picture.</span> |
| <Link id="m-graphicrotation-2" /><code>{"Vector3 GraphicRotation { get; }"}</code> | <span className="api-desc">Local rotation (Euler angles) of the mould's picture.</span> |
| <Link id="m-graphicscale-2" /><code>{"Vector3 GraphicScale { get; }"}</code> | <span className="api-desc">Local scale of the mould's picture.</span> |
| <Link id="m-isfindable-2" /><code>{"bool IsFindable { get; }"}</code> | <span className="api-desc">Whether `GetRandom` can return this mould.</span> |
| <Link id="m-product-2" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" Product { get; }"}</code> | <span className="api-desc">The item this mould casts.</span> |
| <Link id="m-quantityproduced-2" /><code>{"int QuantityProduced { get; }"}</code> | <span className="api-desc">How many items one cast makes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdefinition" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" GetDefinition("}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" product)"}</code> | <span className="api-desc">Returns the mould whose product is the given item, or null. Builds the lookup on first use.</span> |
| <Link id="m-getrandom" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Returns a random mould marked findable.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: renames the asset to the product's name plus " Mould".</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkinitialize" /><code>{"private static void CheckInitialize()"}</code> | <span className="api-desc">Builds the product lookup and the findable list from all mould definitions on first use.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MouldDefinition`:

<div className="api-used-in">

[`Smelter.CheckMould`](/mod/game-api/types/alta-crafting/smelter#m-checkmould), [`SpawnCommandModule.MouldDefinitionInfo.op_Implicit`](/mod/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo#m-op-implicit), [`SpawnCommandModule.Moulds.DropPackage`](/mod/game-api/types/alta-console/spawncommandmodule-moulds#m-droppackage), [`SpawnCommandModule.Moulds.SpawnFull`](/mod/game-api/types/alta-console/spawncommandmodule-moulds#m-spawnfull), [`MouldRestrictor.mouldDefinitions`](/mod/game-api/types/alta-items/mouldrestrictor#m-moulddefinitions), [`Mould.definition`](/mod/game-api/types/global-m-o/mould#m-definition), [`Mould.Definition`](/mod/game-api/types/global-m-o/mould#m-definition-2), [`Mould.SetDefinition`](/mod/game-api/types/global-m-o/mould#m-setdefinition), [`MouldItemComponent.definition`](/mod/game-api/types/global-m-o/moulditemcomponent#m-definition), [`MouldItemComponent.Definition`](/mod/game-api/types/global-m-o/moulditemcomponent#m-definition-2), [`MouldSaveData.definition`](/mod/game-api/types/global-m-o/mouldsavedata#m-definition), [`MouldSaveData1.definition`](/mod/game-api/types/global-m-o/mouldsavedata1#m-definition).

</div>
