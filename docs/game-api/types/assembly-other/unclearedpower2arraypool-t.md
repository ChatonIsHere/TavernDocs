---
title: "UnclearedPower2ArrayPool<T>"
description: "Thread-safe pool of arrays in power-of-two sizes (16 and up)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnclearedPower2ArrayPool&lt;T&gt;

A **class** in `Alta.ArrayPools.Runtime`, `Alta.ArrayPools`.

Thread-safe pool of arrays in power-of-two sizes (16 and up). Arrays are not cleared, so a requested array can be larger than asked for and hold old data. Use `Shared` for the common pool.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IUnclearedPower2ArrayPool`](/game-api/types/assembly-other/iunclearedpower2arraypool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UnclearedPower2ArrayPool()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buckets" /><code>{"private readonly ConcurrentBag<T[]>[] buckets"}</code> | One bag of free arrays per power-of-two size from 16 upwards. |
| <Link id="m-empty" /><code>{"private static T[] empty"}</code> | Empty array returned for size 0 requests. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | Class logger, used for null or wrong-sized releases. |
| <Link id="m-shared" /><code>{"private static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<T> shared"}</code> | Backing field for `Shared`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlyrequestedarrays" /><code>{"int CurrentlyRequestedArrays { get; private set; }"}</code> | Requests minus releases so far, for spotting arrays that were never returned. |
| <Link id="m-shared-2" /><code>{"static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<T> Shared { get; }"}</code> | The shared pool for this element type, created on first use. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-arraypools-iunclearedpower2arraypool-buckets" /><code>{"private IEnumerable<Array>[] Alta.ArrayPools.IUnclearedPower2ArrayPool.Buckets { get; }"}</code> | The pooled arrays per size bucket, exposed to `ArrayPoolManager`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"T[] Copy(T[] sourceArray)"}</code> | Requests a pooled array and copies the source into it. Null gives null. |
| <Link id="m-release" /><code>{"void Release(T[] array)"}</code> | Returns an array to its size bucket. Logs a fatal error for a non power-of-two length but still pools it. |
| <Link id="m-request" /><code>{"T[] Request(int size)"}</code> | Gets an array of at least the given size, rounded up to a power of two (minimum 16). Size 0 or less gives an empty array. |
| <Link id="m-toarray" /><code>{"T[] ToArray(List<T> list)"}</code> | Copies a list into a pooled array. The array may be longer than the list. |

## Used in

Members of other types that take, return or hold a `UnclearedPower2ArrayPool&lt;T>`:

[`DynamicChunkContentManager.pool`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-pool), [`SavedDynamicObject.pool`](/game-api/types/alta-world/saveddynamicobject#m-pool).
