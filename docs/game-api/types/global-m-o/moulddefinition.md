---
title: "MouldDefinition"
description: "Product (an Item), Cost (ingots used), QuantityProduced, AllowedMaterials (an ItemSet of ingots), IsFindable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldDefinition

A **class** in `Root.Township`, no namespace.

`Product` (an `Item`), `Cost` (ingots used), `QuantityProduced`, `AllowedMaterials` (an `ItemSet` of ingots), `IsFindable`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`HashedGeneralValue<MouldDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MouldDefinition`](/game-api/types/global-m-o/moulddefinition), [`MouldDefinition.Create`](/game-api/types/global-m-o/moulddefinition-create)
- **Nested types** [`Create`](/game-api/types/global-m-o/moulddefinition-create)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results), [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allowedmaterials" /><code>{"private "}<Link to="/game-api/types/alta-items/itemset">{"ItemSet"}</Link>{" allowedMaterials"}</code> |  |
| <Link id="m-cost" /><code>{"private int cost"}</code> |  |
| <Link id="m-countnumbergraphicposition" /><code>{"private Vector3 countNumberGraphicPosition"}</code> |  |
| <Link id="m-countxgraphicposition" /><code>{"private Vector3 countXGraphicPosition"}</code> |  |
| <Link id="m-definitions" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", "}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{"> definitions"}</code> |  |
| <Link id="m-findable" /><code>{"private static List<"}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{"> findable"}</code> |  |
| <Link id="m-gap" /><code>{"private float gap"}</code> |  |
| <Link id="m-graphic" /><code>{"private Mesh graphic"}</code> |  |
| <Link id="m-graphicposition" /><code>{"private Vector3 graphicPosition"}</code> |  |
| <Link id="m-graphicrotation" /><code>{"private Vector3 graphicRotation"}</code> |  |
| <Link id="m-graphicscale" /><code>{"private float graphicScale"}</code> |  |
| <Link id="m-graphicscalenew" /><code>{"private Vector3 graphicScaleNew"}</code> |  |
| <Link id="m-isfindable" /><code>{"private bool isFindable"}</code> |  |
| <Link id="m-product" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" product"}</code> |  |
| <Link id="m-quantityproduced" /><code>{"private int quantityProduced"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowedmaterials-2" /><code><Link to="/game-api/types/alta-items/itemset">{"ItemSet"}</Link>{" AllowedMaterials { get; }"}</code> |  |
| <Link id="m-cost-2" /><code>{"int Cost { get; }"}</code> |  |
| <Link id="m-countnumbergraphicposition-2" /><code>{"Vector3 CountNumberGraphicPosition { get; }"}</code> |  |
| <Link id="m-countxgraphicposition-2" /><code>{"Vector3 CountXGraphicPosition { get; }"}</code> |  |
| <Link id="m-gap-2" /><code>{"float Gap { get; }"}</code> |  |
| <Link id="m-graphic-2" /><code>{"Mesh Graphic { get; }"}</code> |  |
| <Link id="m-graphicposition-2" /><code>{"Vector3 GraphicPosition { get; }"}</code> |  |
| <Link id="m-graphicrotation-2" /><code>{"Vector3 GraphicRotation { get; }"}</code> |  |
| <Link id="m-graphicscale-2" /><code>{"Vector3 GraphicScale { get; }"}</code> |  |
| <Link id="m-isfindable-2" /><code>{"bool IsFindable { get; }"}</code> |  |
| <Link id="m-product-2" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" Product { get; }"}</code> |  |
| <Link id="m-quantityproduced-2" /><code>{"int QuantityProduced { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdefinition" /><code>{"static "}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" GetDefinition("}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" product)"}</code> |  |
| <Link id="m-getrandom" /><code>{"static "}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" GetRandom()"}</code> |  |
| <Link id="m-checkinitialize" /><code>{"private static void CheckInitialize()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MouldDefinition`:

[`Smelter.CheckMould`](/game-api/types/alta-crafting/smelter#m-checkmould), [`SpawnCommandModule.MouldDefinitionInfo.op_Implicit`](/game-api/types/alta-console/spawncommandmodule-moulddefinitioninfo#m-op-implicit), [`SpawnCommandModule.Moulds.DropPackage`](/game-api/types/alta-console/spawncommandmodule-moulds#m-droppackage), [`SpawnCommandModule.Moulds.SpawnFull`](/game-api/types/alta-console/spawncommandmodule-moulds#m-spawnfull), [`MouldRestrictor.mouldDefinitions`](/game-api/types/alta-items/mouldrestrictor#m-moulddefinitions), [`Mould.definition`](/game-api/types/global-m-o/mould#m-definition), [`Mould.Definition`](/game-api/types/global-m-o/mould#m-definition-2), [`Mould.SetDefinition`](/game-api/types/global-m-o/mould#m-setdefinition), [`MouldItemComponent.definition`](/game-api/types/global-m-o/moulditemcomponent#m-definition), [`MouldItemComponent.Definition`](/game-api/types/global-m-o/moulditemcomponent#m-definition-2), [`MouldSaveData.definition`](/game-api/types/global-m-o/mouldsavedata#m-definition), [`MouldSaveData1.definition`](/game-api/types/global-m-o/mouldsavedata1#m-definition).
