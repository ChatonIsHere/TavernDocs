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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicSaveFile()"}</code> | Creates a `BasicSaveFile` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-wrapper" /><code>{"private "}<Link to="/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<T> wrapper"}</code> | Wrapper that holds and serializes the data. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"T Data { get; set; }"}</code> | The stored save data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Copies the file with a cloned wrapper. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Disposes the wrapper too. |
| <Link id="m-markmodified" /><code>{"void MarkModified()"}</code> | Marks the data as changed so it gets written. |
| <Link id="m-readandunload" /><code>{"static async Task<T> ReadAndUnload("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Reads the file, queues it to unload and returns its data, or null. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Reads the wrapper from the file stream. |
| <Link id="m-writeandunload" /><code>{"static void WriteAndUnload("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, T data)"}</code> | Puts the data in the file, starts an async write and queues the file to unload. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes the wrapper to the file stream. |
