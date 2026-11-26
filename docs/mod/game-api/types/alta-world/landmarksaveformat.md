---
title: "LandmarkSaveFormat"
description: "Per-player save file of which landmarks the player knows: true for discovered, false for only aware."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkSaveFormat

A **class** in `Root.Township`, `Alta.Map`.

Per-player save file of which landmarks the player knows: true for discovered, false for only aware.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkSaveFormat()"}</code> | Creates a `LandmarkSaveFormat` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"private const uint Version"}</code> | File format version, 0. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-landmarkdiscovery" /><code>{"Dictionary<uint, bool> LandmarkDiscovery { get; }"}</code> | Discovery state by landmark index. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Returns a copy with the same discovery entries. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Reads the version and the index and state pairs from a stream. |
| <Link id="m-wipenonreserved" /><code>{"void WipeNonReserved(uint startingIndex)"}</code> | Removes every entry with an index at or above the given one. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes the version and every index and state pair to a stream. |

## Used in

Members of other types that take, return or hold a `LandmarkSaveFormat`:

[`ServerClientLandmarkManager.save`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-save).
