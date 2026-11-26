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
| <Link id="m-ctor" /><code>{"StreamReader(Func<uint[], uint[]> getMoreData, int byteCount)"}</code> | Creates a `StreamReader` with default values. |
| <Link id="m-ctor-2" /><code>{"StreamReader(uint[] data, int byteCount)"}</code> | Creates a `StreamReader` with default values. |

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-3" /><code>{"private StreamReader()"}</code> | Creates a `StreamReader` with default values. |

</details>

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reader" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/bitreader">{"BitReader"}</Link>{" reader"}</code> | The underlying bit reader. |
| <Link id="m-stringbuffer" /><code>{"private static byte[] stringBuffer"}</code> | Static shared buffer for string reads, doubled when a string is bigger. Not thread safe. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"override uint BitIndex { get; }"}</code> | Number of bits read so far. |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; }"}</code> | True once fewer than 8 bits are left to read. |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> | Size of the data in bytes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> | Skips to the next byte boundary. |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> | Moves the read position back by the given number of bits. |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> | Returns a new reader over a copy of this reader's state. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Clears the bit reader and drops it. The reader can't be used afterwards. |
| <Link id="m-initialize" /><code>{"void Initialize(uint[] data, int newSize)"}</code> | Points the reader at a new buffer and byte count. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Moves the read position back to the start. |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> | Reads the given number of bits into the value. |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/mod/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | Reads a 16-bit length then that many aligned bytes, decoded as ASCII or UTF-8. |
| <Link id="m-tobytes" /><code>{"byte[] ToBytes()"}</code> | Copies the whole buffer out as a byte array. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Destructor: calls `Dispose` if it hasn't run. |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> | Reads raw bytes into the array. |

## Used in

Members of other types that take, return or hold a `StreamReader`:

[`CustomizationWrapperSerializer.ReadStreamAsync`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-readstreamasync), [`EntitySerializer.ReadDataFromStream`](/mod/game-api/types/alta-networking/entityserializer#m-readdatafromstream), [`EntitySerializer.ReadFromStreamInternal`](/mod/game-api/types/alta-networking/entityserializer#m-readfromstreaminternal), [`EntitySerializer.ReadFullDataFromStream`](/mod/game-api/types/alta-networking/entityserializer#m-readfulldatafromstream), [`MessageProcessor.messageReader`](/mod/game-api/types/alta-networking/messageprocessor#m-messagereader), [`SceneSerializer.SerializeRead`](/mod/game-api/types/alta-networking/sceneserializer#m-serializeread), [`Instruction.execute`](/mod/game-api/types/alta-world/instruction#m-execute), [`Instruction.Execute`](/mod/game-api/types/alta-world/instruction#m-execute-2), [`InstructionSet.reader`](/mod/game-api/types/alta-world/instructionset#m-reader).
