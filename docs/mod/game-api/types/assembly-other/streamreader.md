---
title: "StreamReader"
description: "A Stream that reads bits from a uint buffer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamReader

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

A `Stream` that reads bits from a `uint` buffer. Used on both sides to read network messages and saves; the same serialize calls that write with `StreamWriter` read with this.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/mod/game-api/types/assembly-other/stream)
- **Documented in** [Stream](/mod/game-api/networking/stream#streamwriter-and-streamreader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamReader(Func<uint[], uint[]> getMoreData, int byteCount)"}</code> | <span className="api-desc">Creates a `StreamReader` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"StreamReader(uint[] data, int byteCount)"}</code> | <span className="api-desc">Creates a `StreamReader` with default values.</span> |

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-3" /><code>{"private StreamReader()"}</code> | <span className="api-desc">Creates a `StreamReader` with default values.</span> |

</details>

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reader" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/bitreader">{"BitReader"}</Link>{" reader"}</code> | <span className="api-desc">The underlying bit reader.</span> |
| <Link id="m-stringbuffer" /><code>{"private static byte[] stringBuffer"}</code> | <span className="api-desc">Static shared buffer for string reads, doubled when a string is bigger. Not thread safe.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"override uint BitIndex { get; }"}</code> | <span className="api-desc">Number of bits read so far.</span> |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; }"}</code> | <span className="api-desc">True once fewer than 8 bits are left to read.</span> |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> | <span className="api-desc">Size of the data in bytes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> | <span className="api-desc">Skips to the next byte boundary.</span> |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> | <span className="api-desc">Moves the read position back by the given number of bits.</span> |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> | <span className="api-desc">Returns a new reader over a copy of this reader's state.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Clears the bit reader and drops it. The reader can't be used afterwards.</span> |
| <Link id="m-initialize" /><code>{"void Initialize(uint[] data, int newSize)"}</code> | <span className="api-desc">Points the reader at a new buffer and byte count.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Moves the read position back to the start.</span> |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> | <span className="api-desc">Reads the given number of bits into the value.</span> |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/mod/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | <span className="api-desc">Reads a 16-bit length then that many aligned bytes, decoded as ASCII or UTF-8.</span> |
| <Link id="m-tobytes" /><code>{"byte[] ToBytes()"}</code> | <span className="api-desc">Copies the whole buffer out as a byte array.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Destructor: calls `Dispose` if it hasn't run.</span> |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> | <span className="api-desc">Reads raw bytes into the array.</span> |

## Used in

Members of other types that take, return or hold a `StreamReader`:

<div className="api-used-in">

[`CustomizationWrapperSerializer.ReadStreamAsync`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-readstreamasync), [`EntitySerializer.ReadDataFromStream`](/mod/game-api/types/alta-networking/entityserializer#m-readdatafromstream), [`EntitySerializer.ReadFromStreamInternal`](/mod/game-api/types/alta-networking/entityserializer#m-readfromstreaminternal), [`EntitySerializer.ReadFullDataFromStream`](/mod/game-api/types/alta-networking/entityserializer#m-readfulldatafromstream), [`MessageProcessor.messageReader`](/mod/game-api/types/alta-networking/messageprocessor#m-messagereader), [`SceneSerializer.SerializeRead`](/mod/game-api/types/alta-networking/sceneserializer#m-serializeread), [`Instruction.execute`](/mod/game-api/types/alta-world/instruction#m-execute), [`Instruction.Execute`](/mod/game-api/types/alta-world/instruction#m-execute-2), [`InstructionSet.reader`](/mod/game-api/types/alta-world/instructionset#m-reader).

</div>
