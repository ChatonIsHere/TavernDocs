---
title: "StreamReader"
description: "class StreamReader in Alta.Serialization.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamReader

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/game-api/types/assembly-other/stream)
- **Documented in** [Stream](/game-api/networking/stream#streamwriter-and-streamreader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamReader(Func<uint[], uint[]> getMoreData, int byteCount)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"StreamReader(uint[] data, int byteCount)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"private StreamReader()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-reader" /><code>{"private "}<Link to="/game-api/types/assembly-other/bitreader">{"BitReader"}</Link>{" reader"}</code> |  |
| <Link id="m-stringbuffer" /><code>{"private static byte[] stringBuffer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"override uint BitIndex { get; }"}</code> |  |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; }"}</code> |  |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> |  |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> |  |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize(uint[] data, int newSize)"}</code> |  |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> |  |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> |  |
| <Link id="m-tobytes" /><code>{"byte[] ToBytes()"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |  |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StreamReader`:

[`CustomizationWrapperSerializer.ReadStreamAsync`](/game-api/types/alta-customization/customizationwrapperserializer#m-readstreamasync), [`EntitySerializer.ReadDataFromStream`](/game-api/types/alta-networking/entityserializer#m-readdatafromstream), [`EntitySerializer.ReadFromStreamInternal`](/game-api/types/alta-networking/entityserializer#m-readfromstreaminternal), [`EntitySerializer.ReadFullDataFromStream`](/game-api/types/alta-networking/entityserializer#m-readfulldatafromstream), [`MessageProcessor.messageReader`](/game-api/types/alta-networking/messageprocessor#m-messagereader), [`SceneSerializer.SerializeRead`](/game-api/types/alta-networking/sceneserializer#m-serializeread), [`Instruction.execute`](/game-api/types/alta-world/instruction#m-execute), [`Instruction.Execute`](/game-api/types/alta-world/instruction#m-execute-2), [`InstructionSet.reader`](/game-api/types/alta-world/instructionset#m-reader).
