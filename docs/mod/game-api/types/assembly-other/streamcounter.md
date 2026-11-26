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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/mod/game-api/types/assembly-other/stream)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamCounter(uint offset)"}</code> | <span className="api-desc">Creates a `StreamCounter` from `offset`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"private uint bitIndex"}</code> | <span className="api-desc">Absolute bit position, starting at the offset.</span> |
| <Link id="m-offset" /><code>{"private uint offset"}</code> | <span className="api-desc">Bit position the counter started at.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex-2" /><code>{"override uint BitIndex { get; }"}</code> | <span className="api-desc">Bits counted since the starting offset.</span> |
| <Link id="m-iscounter" /><code>{"override bool IsCounter { get; }"}</code> | <span className="api-desc">Always true, so serializers can tell they are only being measured.</span> |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> | <span className="api-desc">`BitIndex` in whole bytes, rounded down.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> | <span className="api-desc">Rounds the bit count up to the next whole byte.</span> |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> | <span className="api-desc">Subtracts bits from the count.</span> |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> | <span className="api-desc">Copies the counter with its current count.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> | <span className="api-desc">Adds the bit count.</span> |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/mod/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | <span className="api-desc">Adds a 16-bit length plus the aligned encoded bytes.</span> |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> | <span className="api-desc">Adds 8 bits per byte.</span> |
