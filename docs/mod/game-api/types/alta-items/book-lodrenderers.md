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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`Book`](/mod/game-api/types/alta-items/book)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LODRenderers()"}</code> | <span className="api-desc">Creates a `Book.LODRenderers` from `renderers`.</span> |
| <Link id="m-ctor-2" /><code>{"LODRenderers(IEnumerable<Renderer> renderers)"}</code> | <span className="api-desc">Creates a `Book.LODRenderers` from `renderers`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-renderers" /><code>{"List<Renderer> renderers"}</code> | <span className="api-desc">The renderers in this LOD level.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toarray" /><code>{"Renderer[] ToArray()"}</code> | <span className="api-desc">Returns the renderers as an array.</span> |

## Used in

Members of other types that take, return or hold a `LODRenderers`:

<div className="api-used-in">

[`Book.renderers`](/mod/game-api/types/alta-items/book#m-renderers).

</div>
