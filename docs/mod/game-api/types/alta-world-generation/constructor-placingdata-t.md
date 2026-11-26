---
title: "Constructor.PlacingData<T>"
description: "Precomputed tag bitmasks for one rule or part in each of its configurations, which the Constructor uses to test placements quickly."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Constructor.PlacingData&lt;T&gt;

A **private class** in `Root.Township`, `Alta.PAGaC`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Precomputed tag bitmasks for one rule or part in each of its configurations, which the `Constructor` uses to test placements quickly. Cells with one allowed tag go in the all-of masks, cells with several in the any-of masks.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`Constructor`](/mod/game-api/types/alta-world-generation/constructor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlacingData()"}</code> | <span className="api-desc">Creates a `Constructor.PlacingData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allofxcompressedflags" /><code>{"List<ulong[,]> allOfXCompressedFlags"}</code> | <span className="api-desc">Per configuration: required-tag bits indexed by z and y, combined over x.</span> |
| <Link id="m-allofxzcompressedflags" /><code>{"List<ulong[]> allOfXzCompressedFlags"}</code> | <span className="api-desc">Per configuration: required-tag bits per y layer, combined over x and z.</span> |
| <Link id="m-allofzcompressedflags" /><code>{"List<ulong[,]> allOfZCompressedFlags"}</code> | <span className="api-desc">Per configuration: required-tag bits indexed by x and y, combined over z.</span> |
| <Link id="m-anyofxcompressedflags" /><code>{"List<ulong[,]> anyOfXCompressedFlags"}</code> | <span className="api-desc">Per configuration: any-of tag bits indexed by z and y, combined over x.</span> |
| <Link id="m-anyofxzcompressedflags" /><code>{"List<ulong[]> anyOfXzCompressedFlags"}</code> | <span className="api-desc">Per configuration: any-of tag bits per y layer, combined over x and z.</span> |
| <Link id="m-anyofzcompressedflags" /><code>{"List<ulong[,]> anyOfZCompressedFlags"}</code> | <span className="api-desc">Per configuration: any-of tag bits indexed by x and y, combined over z.</span> |
| <Link id="m-configurationindex" /><code>{"List<int> configurationIndex"}</code> | <span className="api-desc">Which of the rule's configurations each mask entry came from. Only configurations whose tags all exist are kept.</span> |
| <Link id="m-part" /><code>{"T part"}</code> | <span className="api-desc">The rule or part this data is for.</span> |

## Used in

Members of other types that take, return or hold a `PlacingData&lt;T>`:

<div className="api-used-in">

[`Constructor.CreateData`](/mod/game-api/types/alta-world-generation/constructor#m-createdata), [`Constructor.HandlePart`](/mod/game-api/types/alta-world-generation/constructor#m-handlepart).

</div>
