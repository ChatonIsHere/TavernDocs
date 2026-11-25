---
title: "SortedList<T>"
description: "class SortedList<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SortedList&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SortedList(IComparer<T> comparer)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-comparer" /><code>{"private IComparer<T> comparer"}</code> |
| <Link id="m-sortedlist" /><code>{"private List<T> sortedList"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"void Add(T newObject)"}</code> |
| <Link id="m-addrange" /><code>{"void AddRange(IEnumerable<T> items)"}</code> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-getenumerator-2" /><code><Link to="/game-api/types/alta-utilities/sortedenumerator-t">{"SortedEnumerator"}</Link>{"<T> GetEnumerator()"}</code> |
| <Link id="m-remove" /><code>{"bool Remove(T objectToRemove)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SortedList&lt;T>`:

[`Fire.FuelConsumptionState.fuelList`](/game-api/types/alta-stats-effects/fire-fuelconsumptionstate#m-fuellist).
