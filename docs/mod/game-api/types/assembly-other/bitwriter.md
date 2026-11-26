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
| <Link id="m-ctor" /><code>{"BitWriter()"}</code> | Creates a `BitWriter` with default values. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bitcount" /><code>{"private uint bitCount"}</code> | Capacity of the buffer in bits. |
| <Link id="m-bitindex" /><code>{"private int bitIndex"}</code> | Bit position inside the word being built. |
| <Link id="m-bitswritten" /><code>{"private uint bitsWritten"}</code> | Backing field for `BitsWritten`. |
| <Link id="m-data" /><code>{"private uint[] data"}</code> | Backing field for `Data`. |
| <Link id="m-getmoredata" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData"}</code> | Callback that grows or swaps the buffer when it fills. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | Class logger, used when the buffer overflows. |
| <Link id="m-scratch" /><code>{"private ulong scratch"}</code> | 64 bit working value that collects bits before they are stored as a word. |
| <Link id="m-wordindex" /><code>{"private uint wordIndex"}</code> | Index of the next word to store. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitswritten-2" /><code>{"uint BitsWritten { get; }"}</code> | Bits written since the last `Initialize` or `Clear`. |
| <Link id="m-bytecount" /><code>{"uint ByteCount { get; }"}</code> | Whole bytes written so far. |
| <Link id="m-data-2" /><code>{"uint[] Data { get; }"}</code> | The word buffer being written. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"void Align(int bitAlign = 8)"}</code> | Pads with zero bits up to the next multiple of `bitAlign` bits (8 by default). |
| <Link id="m-alignandflush" /><code>{"uint AlignAndFlush()"}</code> | Aligns to a byte, writes out the partial last word and returns the byte count. |
| <Link id="m-backtrack" /><code>{"void BackTrack(uint bitCount)"}</code> | Moves the write position back by a number of bits. |
| <Link id="m-clear" /><code>{"void Clear(uint[] data)"}</code> | Resets the write position. A full clear, or passing a new buffer, also drops the old buffer and callback. |
| <Link id="m-clear-2" /><code>{"void Clear(bool isFull = false)"}</code> | Resets the write position. A full clear, or passing a new buffer, also drops the old buffer and callback. |
| <Link id="m-copystatefrom" /><code>{"void CopyStateFrom("}<Link to="/mod/game-api/types/assembly-other/bitwriter">{"BitWriter"}</Link>{" copyFrom)"}</code> | Copies another writer's position and scratch state, but not its buffer. |
| <Link id="m-hosttonetwork" /><code>{"static uint HostToNetwork(uint value)"}</code> | Byte swap for word order. Leaves the value as is on little endian machines. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData = null)"}</code> | Starts writing into a buffer. The callback overload calls it at once for the first buffer and again when it fills, so it must not be null. |
| <Link id="m-initialize-2" /><code>{"void Initialize(uint[] data)"}</code> | Starts writing into a buffer. The callback overload calls it at once for the first buffer and again when it fills, so it must not be null. |
| <Link id="m-writebits" /><code>{"void WriteBits(uint value, int writeCount)"}</code> | Writes the low bits of a value. If the buffer fills with no callback it logs a fatal error and wraps to the start. |
| <Link id="m-writebytes" /><code>{"void WriteBytes(byte[] bytes, int byteCount)"}</code> | Writes a byte array, copying whole words directly when aligned. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flush" /><code>{"private void Flush()"}</code> | Writes the bits still in scratch to the buffer as a final word. |

</details>

## Used in

Members of other types that take, return or hold a `BitWriter`:

[`StreamWriter.Writer`](/mod/game-api/types/assembly-other/streamwriter#m-writer).
