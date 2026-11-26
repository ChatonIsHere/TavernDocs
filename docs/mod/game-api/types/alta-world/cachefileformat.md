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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CacheFileFormat()"}</code> | <span className="api-desc">Creates a `CacheFileFormat` from `data` and `byteCount`.</span> |
| <Link id="m-ctor-2" /><code>{"CacheFileFormat(uint[] data, uint byteCount)"}</code> | <span className="api-desc">Creates a `CacheFileFormat` from `data` and `byteCount`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytecount" /><code>{"private uint[] byteCount"}</code> | <span className="api-desc">Backing array for `ByteCount` (one element, so it can be block copied).</span> |
| <Link id="m-compresseddata" /><code>{"private byte[] compressedData"}</code> | <span className="api-desc">Backing field for `CompressedData`.</span> |
| <Link id="m-data" /><code>{"private uint[] data"}</code> | <span className="api-desc">Backing field for `Data`.</span> |
| <Link id="m-usecount" /><code>{"private int useCount"}</code> | <span className="api-desc">How many users hold this file format.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytecount-2" /><code>{"uint ByteCount { get; }"}</code> | <span className="api-desc">Number of bytes of real data.</span> |
| <Link id="m-compresseddata-2" /><code>{"byte[] CompressedData { get; }"}</code> | <span className="api-desc">The data gzipped, made on first use and kept. Nothing else in this build reads it.</span> |
| <Link id="m-data-2" /><code>{"uint[] Data { get; }"}</code> | <span className="api-desc">The raw stream data as uints.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns the same object and bumps the use count.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Lowers the use count; frees nothing.</span> |
| <Link id="m-readasasync" /><code>{"async Task<T> ReadAsAsync<T>(T into)"}</code> | <span className="api-desc">Reads the version, then deserializes the data into the given `ICacheable`.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Loads the byte count and data from a file stream.</span> |
| <Link id="m-write" /><code>{"void Write("}<Link to="/mod/game-api/types/alta-world/icacheable">{"ICacheable"}</Link>{" input)"}</code> | <span className="api-desc">Serializes an `ICacheable` with its version in front and keeps the result.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes the byte count and data to a file stream.</span> |
