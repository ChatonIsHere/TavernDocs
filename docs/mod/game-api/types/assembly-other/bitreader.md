---
title: "BitReader"
description: "Reads values bit by bit from a buffer of 32 bit words, the reading half of the game's network and save serialization."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BitReader

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

Reads values bit by bit from a buffer of 32 bit words, the reading half of the game's network and save serialization. Used by `Stream` on both sides.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BitReader()"}</code> | <span className="api-desc">Creates a `BitReader` with default values.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"private int bitIndex"}</code> | <span className="api-desc">Bit position inside the current word.</span> |
| <Link id="m-extrabytes" /><code>{"private int extraBytes"}</code> | <span className="api-desc">Bytes used in the last, partial word.</span> |
| <Link id="m-getmoredata" /><code>{"private Func<uint[], uint[]> getMoreData"}</code> | <span className="api-desc">Callback that returns the next buffer when reading runs past the current one.</span> |
| <Link id="m-lastword" /><code>{"private uint lastWord"}</code> | <span className="api-desc">Index of the last word holding data.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">Class logger, used for buffer overrun and init errors.</span> |
| <Link id="m-scratch" /><code>{"private ulong scratch"}</code> | <span className="api-desc">64 bit working value that holds the bits being read.</span> |
| <Link id="m-wordindex" /><code>{"private uint wordIndex"}</code> | <span className="api-desc">Index of the word currently being read.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitsread" /><code>{"uint BitsRead { get; private set; }"}</code> | <span className="api-desc">Bits read since the last `Initialize` or `Reset`.</span> |
| <Link id="m-data" /><code>{"uint[] Data { get; private set; }"}</code> | <span className="api-desc">The word buffer being read. Can be swapped for a new one by the `getMoreData` callback.</span> |
| <Link id="m-totalbits" /><code>{"uint TotalBits { get; private set; }"}</code> | <span className="api-desc">Bits of real data in the buffer, from the byte count given to `Initialize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"void Align()"}</code> | <span className="api-desc">Skips bits up to the next byte boundary.</span> |
| <Link id="m-backtrack" /><code>{"void BackTrack(uint bitCount)"}</code> | <span className="api-desc">Moves the read position back by a number of bits.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Drops the reference to the data buffer.</span> |
| <Link id="m-initialize" /><code>{"void Initialize(Func<uint[], uint[]> getMoreData, int byteCount)"}</code> | <span className="api-desc">Starts reading a buffer holding a given number of bytes. The callback overload fetches more words when the buffer runs out.</span> |
| <Link id="m-initialize-2" /><code>{"void Initialize(uint[] data, int byteCount)"}</code> | <span className="api-desc">Starts reading a buffer holding a given number of bytes. The callback overload fetches more words when the buffer runs out.</span> |
| <Link id="m-networktohost" /><code>{"static uint NetworkToHost(uint value)"}</code> | <span className="api-desc">Byte swap for word order. Leaves the value as is on little endian machines, so the wire order is little endian words.</span> |
| <Link id="m-readbits" /><code>{"uint ReadBits(int readCount)"}</code> | <span className="api-desc">Reads up to 32 bits and returns them as a uint. Logs an error and wraps to the start if it reads past the buffer with no callback.</span> |
| <Link id="m-readbytes" /><code>{"void ReadBytes(byte[] bytes, int byteCount)"}</code> | <span className="api-desc">Reads a number of bytes into an array, copying whole words directly when aligned.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Goes back to the start of the current buffer and drops the more data callback.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-copy" /><code>{"internal "}<Link to="/mod/game-api/types/assembly-other/bitreader">{"BitReader"}</Link>{" Copy()"}</code> | <span className="api-desc">Internal: makes an independent reader with a copy of the data and the same read position.</span> |
| <Link id="m-loaddata" /><code>{"private void LoadData()"}</code> | <span className="api-desc">Loads the current word into the scratch value, shifting a partial last word into place.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BitReader`:

<div className="api-used-in">

[`StreamReader.reader`](/mod/game-api/types/assembly-other/streamreader#m-reader).

</div>
