---
title: "Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem"
description: "class Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Distribution&lt;TThis, T, TItem, TFestivityGroup&gt;.BaseItem

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Distribution<TThis, T, TItem, TFestivityGroup>`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)
- **Inherits or implements** [`IDistributionItem<T>`](/game-api/types/alta-world-generation/idistributionitem-outt)
- **Derived types** [`Distribution.Item`](/game-api/types/alta-world-generation/distribution-item), [`GameObjectDistribution.Item`](/game-api/types/alta-world-generation/gameobjectdistribution-item)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BaseItem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> |  |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] multipliers"}</code> |  |
| <Link id="m-noattributevalue" /><code>{"private float noAttributeValue"}</code> |  |
| <Link id="m-topic" /><code>{"private T topic"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-topic-2" /><code>{"T Topic { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"float GetValue("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> |  |
| <Link id="m-migrate" /><code>{"void Migrate<TThisOther, TOther, TItemOther, TFestivityGroupOther>(TItemOther other, Func<TOther, T> convert)"}</code> |  |
