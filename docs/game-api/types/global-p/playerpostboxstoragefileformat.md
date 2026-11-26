---
title: "PlayerPostboxStorageFileFormat"
description: "Server: file format for one player's postbox storage: a list of saved object versions, in the same layout as chunk saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPostboxStorageFileFormat

A **class** in `Root.Township`, no namespace.

Server: file format for one player's postbox storage: a list of saved object versions, in the same layout as chunk saves.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)
- **Derived types** [`PlayerPostboxStorage`](/game-api/types/global-p/playerpostboxstorage), [`PostboxManager`](/game-api/types/global-p/postboxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerPostboxStorageFileFormat()"}</code> | Creates a `PlayerPostboxStorageFileFormat` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-versions" /><code>{"List<"}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{"> Versions"}</code> | The saved object versions held for the player. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for the class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Makes a copy with new version lists holding the same saved objects. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Loads the versions from a file, skipping empty ones. A file of one byte or less loads as empty. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes the versions to a stream. Writes nothing if there are none. |

## Used in

Members of other types that take, return or hold a `PlayerPostboxStorageFileFormat`:

[`PlayerPostboxStorage.ReadAsync`](/game-api/types/global-p/playerpostboxstorage#m-readasync).
