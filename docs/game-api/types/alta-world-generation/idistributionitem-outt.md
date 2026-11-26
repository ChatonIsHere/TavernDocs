---
title: "IDistributionItem<T>"
description: "One weighted entry in a cave Distribution."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDistributionItem&lt;T&gt;

An **interface** in `Root.Township`, `Alta.Caves`.

One weighted entry in a cave `Distribution`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-baseitem)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-topic" /><code>{"T Topic { get; }"}</code> | The thing this entry picks, such as a prefab. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"float GetValue("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | Weight of the entry for the given attributes, or its no-attribute weight when none are given. |

## Used in

Members of other types that take, return or hold a `IDistributionItem&lt;T>`:

[`Distribution<TThis, T, TItem, TFestivityGroup>.GetPossibleResults`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-getpossibleresults), [`IDistribution<T>.GetPossibleResults`](/game-api/types/alta-world-generation/idistribution-outt#m-getpossibleresults).
