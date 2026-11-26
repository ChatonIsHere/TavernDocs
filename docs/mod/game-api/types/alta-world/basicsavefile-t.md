---
title: "BasicSaveFile<T>"
description: "File format that stores one BasicSaveData object in an Alta file, through a BasicSaveDataWrapper."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSaveFile&lt;T&gt;

A **class** in `Root.Township`, `Alta.Saving`.

File format that stores one `BasicSaveData` object in an Alta file, through a `BasicSaveDataWrapper`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicSaveFile()"}</code> | <span className="api-desc">Creates a `BasicSaveFile` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-wrapper" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<T> wrapper"}</code> | <span className="api-desc">Wrapper that holds and serializes the data.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"T Data { get; set; }"}</code> | <span className="api-desc">The stored save data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Copies the file with a cloned wrapper.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Disposes the wrapper too.</span> |
| <Link id="m-markmodified" /><code>{"void MarkModified()"}</code> | <span className="api-desc">Marks the data as changed so it gets written.</span> |
| <Link id="m-readandunload" /><code>{"static async Task<T> ReadAndUnload("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | <span className="api-desc">Reads the file, queues it to unload and returns its data, or null.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads the wrapper from the file stream.</span> |
| <Link id="m-writeandunload" /><code>{"static void WriteAndUnload("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, T data)"}</code> | <span className="api-desc">Puts the data in the file, starts an async write and queues the file to unload.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes the wrapper to the file stream.</span> |
