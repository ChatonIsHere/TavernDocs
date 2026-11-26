---
title: "StaticChunkContentManager.Skip"
description: "Private list of pointer names to skip, read from PointersSkip.json in the storage folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticChunkContentManager.Skip

A **private class** in `Root.Township`, `Alta.Chunks`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private list of pointer names to skip, read from `PointersSkip.json` in the storage folder. A default file is written if it is missing.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`StaticChunkContentManager`](/game-api/types/alta-world/staticchunkcontentmanager)
- **Inherits or implements** [`JsonAltaFormat<StaticChunkContentManager.Skip>`](/game-api/types/alta-utilities/jsonaltaformat-t), `ICloneable`
- **Derived types** [`StaticChunkContentManager.Skip`](/game-api/types/alta-world/staticchunkcontentmanager-skip)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Skip()"}</code> | Creates a `StaticChunkContentManager.Skip` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/alta-world/staticchunkcontentmanager-skip">{"StaticChunkContentManager.Skip"}</Link>{" current"}</code> | The loaded skip list. |
| <Link id="m-data" /><code>{"private string[] data"}</code> | The pointer names to skip. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getskipping" /><code>{"static async Task<bool> GetSkipping(string pointer)"}</code> | True if the pointer name is in the skip list. Loads (or creates) the file on first call. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | Shallow copy. |

</details>
