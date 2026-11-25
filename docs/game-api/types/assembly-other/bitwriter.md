---
title: "BitWriter"
description: "class BitWriter in Alta.Serialization.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BitWriter

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested types** [`GetMoreData`](/game-api/types/assembly-other/bitwriter-getmoredata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BitWriter()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bitcount" /><code>{"private uint bitCount"}</code> |
| <Link id="m-bitindex" /><code>{"private int bitIndex"}</code> |
| <Link id="m-bitswritten" /><code>{"private uint bitsWritten"}</code> |
| <Link id="m-data" /><code>{"private uint[] data"}</code> |
| <Link id="m-getmoredata" /><code>{"private "}<Link to="/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-scratch" /><code>{"private ulong scratch"}</code> |
| <Link id="m-wordindex" /><code>{"private uint wordIndex"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-bitswritten-2" /><code>{"uint BitsWritten { get; }"}</code> |
| <Link id="m-bytecount" /><code>{"uint ByteCount { get; }"}</code> |
| <Link id="m-data-2" /><code>{"uint[] Data { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-align" /><code>{"void Align(int bitAlign = 8)"}</code> |
| <Link id="m-alignandflush" /><code>{"uint AlignAndFlush()"}</code> |
| <Link id="m-backtrack" /><code>{"void BackTrack(uint bitCount)"}</code> |
| <Link id="m-clear" /><code>{"void Clear(uint[] data)"}</code> |
| <Link id="m-clear-2" /><code>{"void Clear(bool isFull = false)"}</code> |
| <Link id="m-copystatefrom" /><code>{"void CopyStateFrom("}<Link to="/game-api/types/assembly-other/bitwriter">{"BitWriter"}</Link>{" copyFrom)"}</code> |
| <Link id="m-hosttonetwork" /><code>{"static uint HostToNetwork(uint value)"}</code> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData = null)"}</code> |
| <Link id="m-initialize-2" /><code>{"void Initialize(uint[] data)"}</code> |
| <Link id="m-writebits" /><code>{"void WriteBits(uint value, int writeCount)"}</code> |
| <Link id="m-writebytes" /><code>{"void WriteBytes(byte[] bytes, int byteCount)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-flush" /><code>{"private void Flush()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BitWriter`:

[`StreamWriter.Writer`](/game-api/types/assembly-other/streamwriter#m-writer).
