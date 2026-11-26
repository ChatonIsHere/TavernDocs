---
title: "Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem"
description: "One weighted entry in a distribution: the result object and how its weight changes with biome attributes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Distribution&lt;TThis, T, TItem, TFestivityGroup&gt;.BaseItem

A **class** in `Root.Township`, `Alta.Caves`.

One weighted entry in a distribution: the result object and how its weight changes with biome attributes.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Distribution<TThis, T, TItem, TFestivityGroup>`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)
- **Inherits or implements** [`IDistributionItem<T>`](/game-api/types/alta-world-generation/idistributionitem-outt)
- **Derived types** [`Distribution.Item`](/game-api/types/alta-world-generation/distribution-item), [`GameObjectDistribution.Item`](/game-api/types/alta-world-generation/gameobjectdistribution-item)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseItem()"}</code> | Creates a `Distribution` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | Starting weight when attributes are given. |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] multipliers"}</code> | Attribute curves that scale the weight by attribute value. |
| <Link id="m-noattributevalue" /><code>{"private float noAttributeValue"}</code> | Weight used when no attribute set is passed. |
| <Link id="m-topic" /><code>{"private T topic"}</code> | Backing field for `Topic`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-topic-2" /><code>{"T Topic { get; }"}</code> | The object this entry returns when picked. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"float GetValue("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | Weight of this entry: `noAttributeValue` with no attributes, otherwise `baseValue` times the topic's own evaluation (if it is an `IDistributionValue`) and each attribute multiplier, never below 0. |
| <Link id="m-migrate" /><code>{"void Migrate<TThisOther, TOther, TItemOther, TFestivityGroupOther>(TItemOther other, Func<TOther, T> convert)"}</code> | Copies weights and multipliers from another item type, converting the topic. |
