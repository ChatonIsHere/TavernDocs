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
| <Link id="m-ctor" /><code>{"LandmarkSaveFormat()"}</code> | <span className="api-desc">Creates a `LandmarkSaveFormat` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"private const uint Version"}</code> | <span className="api-desc">File format version, 0.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-landmarkdiscovery" /><code>{"Dictionary<uint, bool> LandmarkDiscovery { get; }"}</code> | <span className="api-desc">Discovery state by landmark index.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns a copy with the same discovery entries.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads the version and the index and state pairs from a stream.</span> |
| <Link id="m-wipenonreserved" /><code>{"void WipeNonReserved(uint startingIndex)"}</code> | <span className="api-desc">Removes every entry with an index at or above the given one.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes the version and every index and state pair to a stream.</span> |

## Used in

Members of other types that take, return or hold a `LandmarkSaveFormat`:

<div className="api-used-in">

[`ServerClientLandmarkManager.save`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-save).

</div>
