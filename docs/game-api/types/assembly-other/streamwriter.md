---
title: "StreamWriter"
description: "The writing side of the game's bit stream, backed by a BitWriter over a uint buffer. Network messages and saves are written with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamWriter

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

The writing side of the game's bit stream, backed by a `BitWriter` over a `uint` buffer. Network messages and saves are written with it.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/game-api/types/assembly-other/stream)
- **Documented in** [Stream](/game-api/networking/stream#streamwriter-and-streamreader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamWriter("}<Link to="/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData = null)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"StreamWriter(uint[] data)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"override uint BitIndex { get; }"}</code> | How many bits have been written so far. |
| <Link id="m-data" /><code>{"uint[] Data { get; }"}</code> | The underlying `uint` buffer the bits are written into. |
| <Link id="m-messagetype" /><code>{"uint MessageType { get; set; }"}</code> | A message type number carried alongside the data. Copied by `Clone`. |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> | The size of the whole buffer in bytes, not how much has been written. |
| <Link id="m-writer" /><code><Link to="/game-api/types/assembly-other/bitwriter">{"BitWriter"}</Link>{" Writer { get; private set; }"}</code> | The `BitWriter` that does the work. Null after `Dispose`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> | Pads the write position up to the next byte boundary. |
| <Link id="m-alignandflush" /><code>{"uint AlignAndFlush()"}</code> | Aligns, flushes the writer's pending bits into the buffer and returns the writer's result (probably the byte count). |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> | Moves the write position back by the given number of bits. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Resets the writer so the stream can be reused. |
| <Link id="m-clearandsetdata" /><code>{"void ClearAndSetData(uint[] data)"}</code> | Resets the writer and points it at a new `uint` buffer. |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> | Copies the buffer, message type and writer state into a new `StreamWriter`. |
| <Link id="m-copyto" /><code>{"void CopyTo(byte[] data, int offset, int bytes)"}</code> | Copies the first bytes of the buffer into a byte array at an offset. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Clears the writer and drops it. The stream can't be used afterwards. |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> | Writes the low bits of a value. |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | Writes a string as a 16-bit length then aligned ASCII or UTF-8 bytes. Null is written as empty. |
| <Link id="m-tobits" /><code>{"uint[] ToBits(uint bitCount)"}</code> | Copies the first bits of the buffer into a `uint` array, reusing the passed array when it's big enough. |
| <Link id="m-tobits-2" /><code>{"uint[] ToBits(uint bitCount, uint[] existing)"}</code> | Copies the first bits of the buffer into a `uint` array, reusing the passed array when it's big enough. |
| <Link id="m-tobytes" /><code>{"byte[] ToBytes(uint byteCount, int preSize)"}</code> | Copies the first bytes of the buffer into a new byte array, leaving room for a header of the given size at the front. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Disposes the stream if it wasn't disposed already. |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> | Writes raw bytes. |

## Used in

Members of other types that take, return or hold a `StreamWriter`:

[`SavedDynamicObject.GetWriter`](/game-api/types/alta-world/saveddynamicobject#m-getwriter), [`CustomizationWrapperSerializer.WriteStream`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestream), [`CustomizationWrapperSerializer.WriteStreamRestricted`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestreamrestricted), [`Connection.Send`](/game-api/types/alta-networking/connection#m-send-2), [`EntitySerializer.sharedWriter`](/game-api/types/alta-networking/entityserializer#m-sharedwriter), [`EntitySerializer.WriteDataIntoStream`](/game-api/types/alta-networking/entityserializer#m-writedataintostream), [`EntitySerializer.WriteFullDataIntoStream`](/game-api/types/alta-networking/entityserializer#m-writefulldataintostream), [`EntitySerializer.WriteIntoStreamInternal`](/game-api/types/alta-networking/entityserializer#m-writeintostreaminternal), [`OutgoingPacketManager.lastSceneSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-lastsceneserialize), [`OutgoingPacketManager.queue`](/game-api/types/alta-networking/outgoingpacketmanager#m-queue), [`OutgoingPacketManager.Send`](/game-api/types/alta-networking/outgoingpacketmanager#m-send-2), [`OutgoingPacketManager.SendWithQueued`](/game-api/types/alta-networking/outgoingpacketmanager#m-sendwithqueued), [`OutgoingPacketManager.SerializeToWriter`](/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`OutgoingPacketManager.StartSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-startserialize), [`OutgoingPacketManager.StopSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-stopserialize), [`OutgoingPacketManager.writerMap`](/game-api/types/alta-networking/outgoingpacketmanager#m-writermap), [`OutgoingPacketManager.WriteToCurrent`](/game-api/types/alta-networking/outgoingpacketmanager#m-writetocurrent), [`OutgoingPacketManager.WriteToReliable`](/game-api/types/alta-networking/outgoingpacketmanager#m-writetoreliable), [`OutgoingPacketManager.WriteToUnreliable`](/game-api/types/alta-networking/outgoingpacketmanager#m-writetounreliable), [`Packet.Write`](/game-api/types/alta-networking/packet#m-write), [`SceneSerializer.SerializeWrite`](/game-api/types/alta-networking/sceneserializer#m-serializewrite), [`PlayerStateManager.EnterNewState`](/game-api/types/alta-player/playerstatemanager#m-enternewstate), [`PlayerStateManager.GetSyncStreamForLeavingState`](/game-api/types/alta-player/playerstatemanager#m-getsyncstreamforleavingstate).
