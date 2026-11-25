---
title: "UnclearedPower2ArrayPool<T>"
description: "class UnclearedPower2ArrayPool<T> in Alta.ArrayPools.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnclearedPower2ArrayPool&lt;T&gt;

A **class** in `Alta.ArrayPools.Runtime`, `Alta.ArrayPools`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IUnclearedPower2ArrayPool`](/game-api/types/assembly-other/iunclearedpower2arraypool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UnclearedPower2ArrayPool()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-buckets" /><code>{"private readonly ConcurrentBag<T[]>[] buckets"}</code> |
| <Link id="m-empty" /><code>{"private static T[] empty"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-shared" /><code>{"private static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<T> shared"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentlyrequestedarrays" /><code>{"int CurrentlyRequestedArrays { get; private set; }"}</code> |
| <Link id="m-shared-2" /><code>{"static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<T> Shared { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-alta-arraypools-iunclearedpower2arraypool-buckets" /><code>{"private IEnumerable<Array>[] Alta.ArrayPools.IUnclearedPower2ArrayPool.Buckets { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-copy" /><code>{"T[] Copy(T[] sourceArray)"}</code> |
| <Link id="m-release" /><code>{"void Release(T[] array)"}</code> |
| <Link id="m-request" /><code>{"T[] Request(int size)"}</code> |
| <Link id="m-toarray" /><code>{"T[] ToArray(List<T> list)"}</code> |

## Used in

Members of other types that take, return or hold a `UnclearedPower2ArrayPool&lt;T>`:

[`DynamicChunkContentManager.pool`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-pool), [`SavedDynamicObject.pool`](/game-api/types/alta-world/saveddynamicobject#m-pool).
