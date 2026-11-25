---
title: "LightSorter<T>"
description: "class LightSorter<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightSorter&lt;T&gt;

A **internal class** in `Root.Township`, `Alta.Lighting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Attributes** `DefaultMember`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LightSorter()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-count" /><code>{"private int count"}</code> |
| <Link id="m-lights" /><code>{"private T[] lights"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> |
| <Link id="m-size" /><code>{"int Size { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-enqueue" /><code>{"int Enqueue(T light)"}</code> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |

## Used in

Members of other types that take, return or hold a `LightSorter&lt;T>`:

[`AndroidLightsController.sorter`](/game-api/types/alta-world/androidlightscontroller#m-sorter), [`PCLightsController.sorter`](/game-api/types/alta-world/pclightscontroller#m-sorter).
