---
title: "MemoizeHashsetCountTracker<TIn, TOut>"
description: "class MemoizeHashsetCountTracker<TIn, TOut> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeHashsetCountTracker&lt;TIn, TOut&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `IEnumerable<TOut>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MemoizeHashsetCountTracker("}<Link to="/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate, IEqualityComparer<TIn> inputComparer = null, IEqualityComparer<TOut> outputComparer = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-counter" /><code>{"private "}<Link to="/game-api/types/global-c-d/counttracker-t">{"CountTracker"}</Link>{"<TOut> counter"}</code> |  |
| <Link id="m-hashset" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashset-tin-tout">{"MemoizeHashset"}</Link>{"<TIn, TOut> hashset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-firstadded" /><code>{"event Action<TOut> FirstAdded"}</code> |  |
| <Link id="m-lastremoved" /><code>{"event Action<TOut> LastRemoved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(TIn input, out TOut result)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove(TIn input, out TOut result)"}</code> |  |
| <Link id="m-removeandclear" /><code>{"void RemoveAndClear()"}</code> |  |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MemoizeHashsetCountTracker&lt;TIn, TOut>`:

[`VolumeTrigger.effectHandlers`](/game-api/types/global-t-x/volumetrigger#m-effecthandlers), [`VolumeTrigger.pickups`](/game-api/types/global-t-x/volumetrigger#m-pickups), [`VolumeTrigger.players`](/game-api/types/global-t-x/volumetrigger#m-players), [`VolumeTrigger.rigidbodies`](/game-api/types/global-t-x/volumetrigger#m-rigidbodies).
