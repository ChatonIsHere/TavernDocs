---
title: "LandmarkSaveFormat"
description: "class LandmarkSaveFormat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkSaveFormat

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LandmarkSaveFormat()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-version" /><code>{"private const uint Version"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-landmarkdiscovery" /><code>{"Dictionary<uint, bool> LandmarkDiscovery { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> |
| <Link id="m-wipenonreserved" /><code>{"void WipeNonReserved(uint startingIndex)"}</code> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> |

## Used in

Members of other types that take, return or hold a `LandmarkSaveFormat`:

[`ServerClientLandmarkManager.save`](/game-api/types/alta-world/serverclientlandmarkmanager#m-save).
