---
title: "CacheFileFormat"
description: "class CacheFileFormat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CacheFileFormat

A **class** in `Root.Township`, `Alta.Static`.

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

| Member |
| --- |
| <Link id="m-bytecount" /><code>{"private uint[] byteCount"}</code> |
| <Link id="m-compresseddata" /><code>{"private byte[] compressedData"}</code> |
| <Link id="m-data" /><code>{"private uint[] data"}</code> |
| <Link id="m-usecount" /><code>{"private int useCount"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-bytecount-2" /><code>{"uint ByteCount { get; }"}</code> |
| <Link id="m-compresseddata-2" /><code>{"byte[] CompressedData { get; }"}</code> |
| <Link id="m-data-2" /><code>{"uint[] Data { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |
| <Link id="m-readasasync" /><code>{"async Task<T> ReadAsAsync<T>(T into)"}</code> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> |
| <Link id="m-write" /><code>{"void Write("}<Link to="/game-api/types/alta-world/icacheable">{"ICacheable"}</Link>{" input)"}</code> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> |
