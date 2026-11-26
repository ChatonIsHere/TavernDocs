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
| <Link id="m-ctor" /><code>{"SortedList(IComparer<T> comparer)"}</code> | Creates a `SortedList` from `comparer`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private IComparer<T> comparer"}</code> | Comparer that sets the order. |
| <Link id="m-sortedlist" /><code>{"private List<T> sortedList"}</code> | The inner list. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of items. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T newObject)"}</code> | Inserts an item at its sorted place by walking the list. |
| <Link id="m-addrange" /><code>{"void AddRange(IEnumerable<T> items)"}</code> | Adds each item one by one. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes every item. |
| <Link id="m-getenumerator-2" /><code><Link to="/mod/game-api/types/alta-utilities/sortedenumerator-t">{"SortedEnumerator"}</Link>{"<T> GetEnumerator()"}</code> | Enumerates a copy of the list, so the list can change while you loop. |
| <Link id="m-remove" /><code>{"bool Remove(T objectToRemove)"}</code> | Removes an item. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates a copy of the list, so the list can change while you loop. |

</details>

## Used in

Members of other types that take, return or hold a `SortedList&lt;T>`:

[`Fire.FuelConsumptionState.fuelList`](/mod/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuellist).
