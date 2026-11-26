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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Constructor`](/game-api/types/alta-world-generation/constructor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlacingData()"}</code> | Creates a `Constructor.PlacingData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allofxcompressedflags" /><code>{"List<ulong[,]> allOfXCompressedFlags"}</code> | Per configuration: required-tag bits indexed by z and y, combined over x. |
| <Link id="m-allofxzcompressedflags" /><code>{"List<ulong[]> allOfXzCompressedFlags"}</code> | Per configuration: required-tag bits per y layer, combined over x and z. |
| <Link id="m-allofzcompressedflags" /><code>{"List<ulong[,]> allOfZCompressedFlags"}</code> | Per configuration: required-tag bits indexed by x and y, combined over z. |
| <Link id="m-anyofxcompressedflags" /><code>{"List<ulong[,]> anyOfXCompressedFlags"}</code> | Per configuration: any-of tag bits indexed by z and y, combined over x. |
| <Link id="m-anyofxzcompressedflags" /><code>{"List<ulong[]> anyOfXzCompressedFlags"}</code> | Per configuration: any-of tag bits per y layer, combined over x and z. |
| <Link id="m-anyofzcompressedflags" /><code>{"List<ulong[,]> anyOfZCompressedFlags"}</code> | Per configuration: any-of tag bits indexed by x and y, combined over z. |
| <Link id="m-configurationindex" /><code>{"List<int> configurationIndex"}</code> | Which of the rule's configurations each mask entry came from. Only configurations whose tags all exist are kept. |
| <Link id="m-part" /><code>{"T part"}</code> | The rule or part this data is for. |

## Used in

Members of other types that take, return or hold a `PlacingData&lt;T>`:

[`Constructor.CreateData`](/game-api/types/alta-world-generation/constructor#m-createdata), [`Constructor.HandlePart`](/game-api/types/alta-world-generation/constructor#m-handlepart).
