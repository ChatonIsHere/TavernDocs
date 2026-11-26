---
title: "AlphanumComparator"
description: "Non-generic comparer for natural string sorting, so \"item2\" sorts before \"item10\"."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AlphanumComparator

A **class** in `Root.Township`, the global namespace.

Non-generic comparer for natural string sorting, so "item2" sorts before "item10". Non-strings compare as equal.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `IComparer`
- **Nested types** [`ChunkType`](/mod/game-api/types/global-a-b/alphanumcomparator-chunktype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AlphanumComparator()"}</code> | Creates an `AlphanumComparator` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compare" /><code>{"int Compare(object x, object y)"}</code> | Splits both strings into digit and non-digit runs and compares them in turn, numbers by value. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inchunk" /><code>{"private bool InChunk(char ch, char otherCh)"}</code> | True if a character is the same kind (digit or not) as the run's first character. |

</details>
