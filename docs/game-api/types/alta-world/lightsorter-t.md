---
title: "LightSorter<T>"
description: "Fixed-size list that keeps the nearest lights sorted by distance, capped at PlatformLight.MaxLightCount."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightSorter&lt;T&gt;

A **internal class** in `Root.Township`, `Alta.Lighting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Fixed-size list that keeps the nearest lights sorted by distance, capped at `PlatformLight.MaxLightCount`. Internal; used by the PC and Android light controllers.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightSorter()"}</code> | Creates a `LightSorter` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | Number of lights currently in the list. |
| <Link id="m-lights" /><code>{"private T[] lights"}</code> | Sorted light array, nearest first. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> | The light at a sorted index. |
| <Link id="m-size" /><code>{"int Size { get; }"}</code> | Capacity of the array (`PlatformLight.MaxLightCount`). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enqueue" /><code>{"int Enqueue(T light)"}</code> | Inserts a light in distance order, dropping the farthest when full. Returns the slot it went into. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Empties the list without clearing the array. |

## Used in

Members of other types that take, return or hold a `LightSorter&lt;T>`:

[`AndroidLightsController.sorter`](/game-api/types/alta-world/androidlightscontroller#m-sorter), [`PCLightsController.sorter`](/game-api/types/alta-world/pclightscontroller#m-sorter).
