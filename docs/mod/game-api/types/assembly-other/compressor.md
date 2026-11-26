---
title: "Compressor"
description: "A dummy Stream that reads and writes at once but stores nothing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Compressor

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

A dummy `Stream` that reads and writes at once but stores nothing. Code passes `Compressor.Instance` to the quantizing serialize helpers to round a value to what the network would send.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/mod/game-api/types/assembly-other/stream)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Compressor()"}</code> | Creates a `Compressor` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"override uint BitIndex { get; }"}</code> | Not implemented; throws. |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/compressor">{"Compressor"}</Link>{" Instance { get; private set; }"}</code> | Shared instance used throughout the game. |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> | Not implemented; throws. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> | Not implemented; throws. |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> | Does nothing. |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> | Returns a new `Compressor`. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Not implemented; throws. |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> | Does nothing, so the quantized value passes straight back. |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/mod/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | Does nothing. |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> | Does nothing. |
