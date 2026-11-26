---
title: "MapSaveFormat"
description: "Save file holding which pieces of each map are still hidden."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapSaveFormat

A **class** in `Root.Township`, `Alta.Map`.

Save file holding which pieces of each map are still hidden. Server: loaded per player, or once as a shared file when the map is shared.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapSaveFormat()"}</code> | Creates a `MapSaveFormat` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"private const uint Version"}</code> | File format version written at the start of the file (0). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-mappiecestates" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{", bool[]> MapPieceStates { get; set; }"}</code> | One bool array per map, one entry per piece. `true` means the piece is still undiscovered; a new file starts all true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Returns a copy with the piece states of every map copied over. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Reads the version, then each map's hash followed by its piece states. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes the version, map count, then each map's hash and piece states. |

## Used in

Members of other types that take, return or hold a `MapSaveFormat`:

[`PlayerMapManager.PlayerMapManager`](/mod/game-api/types/alta-world/playermapmanager#m-ctor-3), [`PlayerMapManager.save`](/mod/game-api/types/alta-world/playermapmanager#m-save).
