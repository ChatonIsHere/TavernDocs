---
title: "DuplicateKeyComparer<TKey>"
description: "Internal comparer that never reports two keys as equal, so a sorted list can hold duplicate keys."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DuplicateKeyComparer&lt;TKey&gt;

A **internal class** in `Root.Township`, `Alta.Profiling.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal comparer that never reports two keys as equal, so a sorted list can hold duplicate keys. `EntityStatistics` uses it to sort by float values.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `IComparer<TKey>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DuplicateKeyComparer()"}</code> | <span className="api-desc">Creates a `DuplicateKeyComparer` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compare" /><code>{"int Compare(TKey x, TKey y)"}</code> | <span className="api-desc">Compares normally, but returns 1 instead of 0 for equal keys.</span> |

## Used in

Members of other types that take, return or hold a `DuplicateKeyComparer&lt;TKey>`:

<div className="api-used-in">

[`EntityStatistics.comparer`](/mod/game-api/types/alta-networking/entitystatistics#m-comparer).

</div>
