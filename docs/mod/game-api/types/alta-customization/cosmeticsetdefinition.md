---
title: "CosmeticSetDefinition"
description: "A purchasable set of cosmetic items sold together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticSetDefinition

A **class** in `Root.Township`, `Alta.Customization`.

A purchasable set of cosmetic items sold together. Asset created from `Township/Cosmetic Set Definition`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`Purchasable`](/mod/game-api/types/alta-customization/purchasable)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticSetDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{"> items"}</code> | Backing field for `Items`. |
| <Link id="m-settype" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" setType"}</code> | Backing field for `SetType`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{"> Items { get; }"}</code> | The purchasables in the set. |
| <Link id="m-settype-2" /><code><Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" SetType { get; set; }"}</code> | What kind of item set this is. |

## Used in

Members of other types that take, return or hold a `CosmeticSetDefinition`:

[`ModellingCharacter.OverrideSet.set`](/mod/game-api/types/global-m-o/modellingcharacter-overrideset#m-set).
