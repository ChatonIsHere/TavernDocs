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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`Distribution<TThis, T, TItem, TFestivityGroup>`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)
- **Inherits or implements** [`IDistributionItem<T>`](/mod/game-api/types/alta-world-generation/idistributionitem-outt)
- **Derived types** [`Distribution.Item`](/mod/game-api/types/alta-world-generation/distribution-item), [`GameObjectDistribution.Item`](/mod/game-api/types/alta-world-generation/gameobjectdistribution-item)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseItem()"}</code> | <span className="api-desc">Creates a `Distribution` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | <span className="api-desc">Starting weight when attributes are given.</span> |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] multipliers"}</code> | <span className="api-desc">Attribute curves that scale the weight by attribute value.</span> |
| <Link id="m-noattributevalue" /><code>{"private float noAttributeValue"}</code> | <span className="api-desc">Weight used when no attribute set is passed.</span> |
| <Link id="m-topic" /><code>{"private T topic"}</code> | <span className="api-desc">Backing field for `Topic`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-topic-2" /><code>{"T Topic { get; }"}</code> | <span className="api-desc">The object this entry returns when picked.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"float GetValue("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | <span className="api-desc">Weight of this entry: `noAttributeValue` with no attributes, otherwise `baseValue` times the topic's own evaluation (if it is an `IDistributionValue`) and each attribute multiplier, never below 0.</span> |
| <Link id="m-migrate" /><code>{"void Migrate<TThisOther, TOther, TItemOther, TFestivityGroupOther>(TItemOther other, Func<TOther, T> convert)"}</code> | <span className="api-desc">Copies weights and multipliers from another item type, converting the topic.</span> |
