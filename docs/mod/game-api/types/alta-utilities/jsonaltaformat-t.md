---
title: "JsonAltaFormat<T>"
description: "IAltaFileFormat that stores one object as JSON, using AltaContractResolver.settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonAltaFormat&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

`IAltaFileFormat` that stores one object as JSON, using `AltaContractResolver.settings`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)
- **Derived types** [`StaticChunkContentManager.Skip`](/mod/game-api/types/alta-world/staticchunkcontentmanager-skip)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonAltaFormat()"}</code> | Creates a `JsonAltaFormat` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"T Data { get; set; }"}</code> | The object stored in the file. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Returns a copy with `Data` cloned through `ICloneable`. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Deserialises the stream into `Data`, or fills the existing `Data` in place if there is one. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes `Data` to the stream as JSON. |
