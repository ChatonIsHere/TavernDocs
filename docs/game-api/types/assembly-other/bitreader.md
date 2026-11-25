---
title: "BitReader"
description: "class BitReader in Alta.Serialization.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BitReader

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BitReader()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bitindex" /><code>{"private int bitIndex"}</code> |
| <Link id="m-extrabytes" /><code>{"private int extraBytes"}</code> |
| <Link id="m-getmoredata" /><code>{"private Func<uint[], uint[]> getMoreData"}</code> |
| <Link id="m-lastword" /><code>{"private uint lastWord"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-scratch" /><code>{"private ulong scratch"}</code> |
| <Link id="m-wordindex" /><code>{"private uint wordIndex"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-bitsread" /><code>{"uint BitsRead { get; private set; }"}</code> |
| <Link id="m-data" /><code>{"uint[] Data { get; private set; }"}</code> |
| <Link id="m-totalbits" /><code>{"uint TotalBits { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-align" /><code>{"void Align()"}</code> |
| <Link id="m-backtrack" /><code>{"void BackTrack(uint bitCount)"}</code> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-initialize" /><code>{"void Initialize(Func<uint[], uint[]> getMoreData, int byteCount)"}</code> |
| <Link id="m-initialize-2" /><code>{"void Initialize(uint[] data, int byteCount)"}</code> |
| <Link id="m-networktohost" /><code>{"static uint NetworkToHost(uint value)"}</code> |
| <Link id="m-readbits" /><code>{"uint ReadBits(int readCount)"}</code> |
| <Link id="m-readbytes" /><code>{"void ReadBytes(byte[] bytes, int byteCount)"}</code> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-copy" /><code>{"internal "}<Link to="/game-api/types/assembly-other/bitreader">{"BitReader"}</Link>{" Copy()"}</code> |
| <Link id="m-loaddata" /><code>{"private void LoadData()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BitReader`:

[`StreamReader.reader`](/game-api/types/assembly-other/streamreader#m-reader).
