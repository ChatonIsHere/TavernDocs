---
title: "Book.LODRenderers"
description: "Private: the renderers for one LOD level of a Book, kept so flair renderers can be added to the LOD group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Book.LODRenderers

A **private class** in `Root.Township`, `Alta.Pages`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: the renderers for one LOD level of a `Book`, kept so flair renderers can be added to the LOD group.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`Book`](/game-api/types/alta-items/book)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LODRenderers()"}</code> |
| <Link id="m-ctor-2" /><code>{"LODRenderers(IEnumerable<Renderer> renderers)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-renderers" /><code>{"List<Renderer> renderers"}</code> | The renderers in this LOD level. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toarray" /><code>{"Renderer[] ToArray()"}</code> | Returns the renderers as an array. |

## Used in

Members of other types that take, return or hold a `LODRenderers`:

[`Book.renderers`](/game-api/types/alta-items/book#m-renderers).
