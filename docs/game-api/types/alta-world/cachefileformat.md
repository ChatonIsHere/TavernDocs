---
title: "CacheFileFormat"
description: "File format for cached data such as instruction sets: a byte count followed by the stream's words."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CacheFileFormat

A **class** in `Root.Township`, `Alta.Static`.

File format for cached data such as instruction sets: a byte count followed by the stream's words.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CacheFileFormat()"}</code> |
| <Link id="m-ctor-2" /><code>{"CacheFileFormat(uint[] data, uint byteCount)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytecount" /><code>{"private uint[] byteCount"}</code> | Backing array for `ByteCount` (one element, so it can be block copied). |
| <Link id="m-compresseddata" /><code>{"private byte[] compressedData"}</code> | Backing field for `CompressedData`. |
| <Link id="m-data" /><code>{"private uint[] data"}</code> | Backing field for `Data`. |
| <Link id="m-usecount" /><code>{"private int useCount"}</code> | How many users hold this file format. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytecount-2" /><code>{"uint ByteCount { get; }"}</code> | Number of bytes of real data. |
| <Link id="m-compresseddata-2" /><code>{"byte[] CompressedData { get; }"}</code> | The data gzipped, made on first use and kept. Nothing else in this build reads it. |
| <Link id="m-data-2" /><code>{"uint[] Data { get; }"}</code> | The raw stream data as uints. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Returns the same object and bumps the use count. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Lowers the use count; frees nothing. |
| <Link id="m-readasasync" /><code>{"async Task<T> ReadAsAsync<T>(T into)"}</code> | Reads the version, then deserializes the data into the given `ICacheable`. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Loads the byte count and data from a file stream. |
| <Link id="m-write" /><code>{"void Write("}<Link to="/game-api/types/alta-world/icacheable">{"ICacheable"}</Link>{" input)"}</code> | Serializes an `ICacheable` with its version in front and keeps the result. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes the byte count and data to a file stream. |
