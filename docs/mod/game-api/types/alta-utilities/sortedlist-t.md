---
title: "SortedList<T>"
description: "List kept in ascending order by a comparer, with linear time inserts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SortedList&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

List kept in ascending order by a comparer, with linear time inserts. Not `System.Collections.Generic.SortedList`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SortedList(IComparer<T> comparer)"}</code> | <span className="api-desc">Creates a `SortedList` from `comparer`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private IComparer<T> comparer"}</code> | <span className="api-desc">Comparer that sets the order.</span> |
| <Link id="m-sortedlist" /><code>{"private List<T> sortedList"}</code> | <span className="api-desc">The inner list.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of items.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T newObject)"}</code> | <span className="api-desc">Inserts an item at its sorted place by walking the list.</span> |
| <Link id="m-addrange" /><code>{"void AddRange(IEnumerable<T> items)"}</code> | <span className="api-desc">Adds each item one by one.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Removes every item.</span> |
| <Link id="m-getenumerator-2" /><code><Link to="/mod/game-api/types/alta-utilities/sortedenumerator-t">{"SortedEnumerator"}</Link>{"<T> GetEnumerator()"}</code> | <span className="api-desc">Enumerates a copy of the list, so the list can change while you loop.</span> |
| <Link id="m-remove" /><code>{"bool Remove(T objectToRemove)"}</code> | <span className="api-desc">Removes an item.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates a copy of the list, so the list can change while you loop.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SortedList&lt;T>`:

<div className="api-used-in">

[`Fire.FuelConsumptionState.fuelList`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuellist).

</div>
