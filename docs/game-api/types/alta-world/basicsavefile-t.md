---
title: "BasicSaveFile<T>"
description: "class BasicSaveFile<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSaveFile&lt;T&gt;

A **class** in `Root.Township`, `Alta.Saving`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicSaveFile()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-wrapper" /><code>{"private "}<Link to="/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<T> wrapper"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"T Data { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-markmodified" /><code>{"void MarkModified()"}</code> |  |
| <Link id="m-readandunload" /><code>{"static async Task<T> ReadAndUnload("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> |  |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> |  |
| <Link id="m-writeandunload" /><code>{"static void WriteAndUnload("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file, T data)"}</code> |  |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> |  |
