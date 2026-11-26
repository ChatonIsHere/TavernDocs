---
title: "StreamCounter"
description: "A write-only Stream that only counts bits, used to measure how big a serialized block will be (for example by SavingSystem and NetworkPrefab)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamCounter

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

A write-only `Stream` that only counts bits, used to measure how big a serialized block will be (for example by `SavingSystem` and `NetworkPrefab`).

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/game-api/types/assembly-other/stream)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamCounter(uint offset)"}</code> | Creates a `StreamCounter` from `offset`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"private uint bitIndex"}</code> | Absolute bit position, starting at the offset. |
| <Link id="m-offset" /><code>{"private uint offset"}</code> | Bit position the counter started at. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex-2" /><code>{"override uint BitIndex { get; }"}</code> | Bits counted since the starting offset. |
| <Link id="m-iscounter" /><code>{"override bool IsCounter { get; }"}</code> | Always true, so serializers can tell they are only being measured. |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> | `BitIndex` in whole bytes, rounded down. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> | Rounds the bit count up to the next whole byte. |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> | Subtracts bits from the count. |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> | Copies the counter with its current count. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Does nothing. |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> | Adds the bit count. |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | Adds a 16-bit length plus the aligned encoded bytes. |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> | Adds 8 bits per byte. |
