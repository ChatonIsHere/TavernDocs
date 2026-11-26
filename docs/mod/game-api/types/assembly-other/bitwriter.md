---
title: "BitWriter"
description: "Writes values bit by bit into a buffer of 32 bit words, the writing half of the game's network and save serialization."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BitWriter

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

Writes values bit by bit into a buffer of 32 bit words, the writing half of the game's network and save serialization. Used by `Stream` on both sides.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested types** [`GetMoreData`](/mod/game-api/types/assembly-other/bitwriter-getmoredata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BitWriter()"}</code> | <span className="api-desc">Creates a `BitWriter` with default values.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bitcount" /><code>{"private uint bitCount"}</code> | <span className="api-desc">Capacity of the buffer in bits.</span> |
| <Link id="m-bitindex" /><code>{"private int bitIndex"}</code> | <span className="api-desc">Bit position inside the word being built.</span> |
| <Link id="m-bitswritten" /><code>{"private uint bitsWritten"}</code> | <span className="api-desc">Backing field for `BitsWritten`.</span> |
| <Link id="m-data" /><code>{"private uint[] data"}</code> | <span className="api-desc">Backing field for `Data`.</span> |
| <Link id="m-getmoredata" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData"}</code> | <span className="api-desc">Callback that grows or swaps the buffer when it fills.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">Class logger, used when the buffer overflows.</span> |
| <Link id="m-scratch" /><code>{"private ulong scratch"}</code> | <span className="api-desc">64 bit working value that collects bits before they are stored as a word.</span> |
| <Link id="m-wordindex" /><code>{"private uint wordIndex"}</code> | <span className="api-desc">Index of the next word to store.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitswritten-2" /><code>{"uint BitsWritten { get; }"}</code> | <span className="api-desc">Bits written since the last `Initialize` or `Clear`.</span> |
| <Link id="m-bytecount" /><code>{"uint ByteCount { get; }"}</code> | <span className="api-desc">Whole bytes written so far.</span> |
| <Link id="m-data-2" /><code>{"uint[] Data { get; }"}</code> | <span className="api-desc">The word buffer being written.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"void Align(int bitAlign = 8)"}</code> | <span className="api-desc">Pads with zero bits up to the next multiple of `bitAlign` bits (8 by default).</span> |
| <Link id="m-alignandflush" /><code>{"uint AlignAndFlush()"}</code> | <span className="api-desc">Aligns to a byte, writes out the partial last word and returns the byte count.</span> |
| <Link id="m-backtrack" /><code>{"void BackTrack(uint bitCount)"}</code> | <span className="api-desc">Moves the write position back by a number of bits.</span> |
| <Link id="m-clear" /><code>{"void Clear(uint[] data)"}</code> | <span className="api-desc">Resets the write position. A full clear, or passing a new buffer, also drops the old buffer and callback.</span> |
| <Link id="m-clear-2" /><code>{"void Clear(bool isFull = false)"}</code> | <span className="api-desc">Resets the write position. A full clear, or passing a new buffer, also drops the old buffer and callback.</span> |
| <Link id="m-copystatefrom" /><code>{"void CopyStateFrom("}<Link to="/mod/game-api/types/assembly-other/bitwriter">{"BitWriter"}</Link>{" copyFrom)"}</code> | <span className="api-desc">Copies another writer's position and scratch state, but not its buffer.</span> |
| <Link id="m-hosttonetwork" /><code>{"static uint HostToNetwork(uint value)"}</code> | <span className="api-desc">Byte swap for word order. Leaves the value as is on little endian machines.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData = null)"}</code> | <span className="api-desc">Starts writing into a buffer. The callback overload calls it at once for the first buffer and again when it fills, so it must not be null.</span> |
| <Link id="m-initialize-2" /><code>{"void Initialize(uint[] data)"}</code> | <span className="api-desc">Starts writing into a buffer. The callback overload calls it at once for the first buffer and again when it fills, so it must not be null.</span> |
| <Link id="m-writebits" /><code>{"void WriteBits(uint value, int writeCount)"}</code> | <span className="api-desc">Writes the low bits of a value. If the buffer fills with no callback it logs a fatal error and wraps to the start.</span> |
| <Link id="m-writebytes" /><code>{"void WriteBytes(byte[] bytes, int byteCount)"}</code> | <span className="api-desc">Writes a byte array, copying whole words directly when aligned.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flush" /><code>{"private void Flush()"}</code> | <span className="api-desc">Writes the bits still in scratch to the buffer as a final word.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BitWriter`:

<div className="api-used-in">

[`StreamWriter.Writer`](/mod/game-api/types/assembly-other/streamwriter#m-writer).

</div>
