---
title: "StreamCounter"
description: "class StreamCounter in Alta.Serialization.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamCounter

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/game-api/types/assembly-other/stream)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamCounter(uint offset)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"private uint bitIndex"}</code> |  |
| <Link id="m-offset" /><code>{"private uint offset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex-2" /><code>{"override uint BitIndex { get; }"}</code> |  |
| <Link id="m-iscounter" /><code>{"override bool IsCounter { get; }"}</code> |  |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> |  |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> |  |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> |  |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> |  |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> |  |
