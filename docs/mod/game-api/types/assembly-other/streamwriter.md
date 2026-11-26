---
title: "StreamWriter"
description: "The writing side of the game's bit stream, backed by a BitWriter over a uint buffer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamWriter

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

The writing side of the game's bit stream, backed by a `BitWriter` over a `uint` buffer. Network messages and saves are written with it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Stream`](/mod/game-api/types/assembly-other/stream)
- **Documented in** [Stream](/mod/game-api/networking/stream#streamwriter-and-streamreader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StreamWriter("}<Link to="/mod/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" getMoreData = null)"}</code> | <span className="api-desc">Creates a `StreamWriter` from `data`.</span> |
| <Link id="m-ctor-2" /><code>{"StreamWriter(uint[] data)"}</code> | <span className="api-desc">Creates a `StreamWriter` from `data`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"override uint BitIndex { get; }"}</code> | <span className="api-desc">How many bits have been written so far.</span> |
| <Link id="m-data" /><code>{"uint[] Data { get; }"}</code> | <span className="api-desc">The underlying `uint` buffer the bits are written into.</span> |
| <Link id="m-messagetype" /><code>{"uint MessageType { get; set; }"}</code> | <span className="api-desc">A message type number carried alongside the data. Copied by `Clone`.</span> |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> | <span className="api-desc">The size of the whole buffer in bytes, not how much has been written.</span> |
| <Link id="m-writer" /><code><Link to="/mod/game-api/types/assembly-other/bitwriter">{"BitWriter"}</Link>{" Writer { get; private set; }"}</code> | <span className="api-desc">The `BitWriter` that does the work. Null after `Dispose`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> | <span className="api-desc">Pads the write position up to the next byte boundary.</span> |
| <Link id="m-alignandflush" /><code>{"uint AlignAndFlush()"}</code> | <span className="api-desc">Aligns, flushes the writer's pending bits into the buffer and returns the writer's result (probably the byte count).</span> |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> | <span className="api-desc">Moves the write position back by the given number of bits.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Resets the writer so the stream can be reused.</span> |
| <Link id="m-clearandsetdata" /><code>{"void ClearAndSetData(uint[] data)"}</code> | <span className="api-desc">Resets the writer and points it at a new `uint` buffer.</span> |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> | <span className="api-desc">Copies the buffer, message type and writer state into a new `StreamWriter`.</span> |
| <Link id="m-copyto" /><code>{"void CopyTo(byte[] data, int offset, int bytes)"}</code> | <span className="api-desc">Copies the first bytes of the buffer into a byte array at an offset.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Clears the writer and drops it. The stream can't be used afterwards.</span> |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> | <span className="api-desc">Writes the low bits of a value.</span> |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/mod/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | <span className="api-desc">Writes a string as a 16-bit length then aligned ASCII or UTF-8 bytes. Null is written as empty.</span> |
| <Link id="m-tobits" /><code>{"uint[] ToBits(uint bitCount)"}</code> | <span className="api-desc">Copies the first bits of the buffer into a `uint` array, reusing the passed array when it's big enough.</span> |
| <Link id="m-tobits-2" /><code>{"uint[] ToBits(uint bitCount, uint[] existing)"}</code> | <span className="api-desc">Copies the first bits of the buffer into a `uint` array, reusing the passed array when it's big enough.</span> |
| <Link id="m-tobytes" /><code>{"byte[] ToBytes(uint byteCount, int preSize)"}</code> | <span className="api-desc">Copies the first bytes of the buffer into a new byte array, leaving room for a header of the given size at the front.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Disposes the stream if it wasn't disposed already.</span> |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> | <span className="api-desc">Writes raw bytes.</span> |

## Used in

Members of other types that take, return or hold a `StreamWriter`:

<div className="api-used-in">

[`SavedDynamicObject.GetWriter`](/mod/game-api/types/alta-world/saveddynamicobject#m-getwriter), [`CustomizationWrapperSerializer.WriteStream`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-writestream), [`CustomizationWrapperSerializer.WriteStreamRestricted`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-writestreamrestricted), [`Connection.Send`](/mod/game-api/types/alta-networking/connection#m-send-2), [`EntitySerializer.sharedWriter`](/mod/game-api/types/alta-networking/entityserializer#m-sharedwriter), [`EntitySerializer.WriteDataIntoStream`](/mod/game-api/types/alta-networking/entityserializer#m-writedataintostream), [`EntitySerializer.WriteFullDataIntoStream`](/mod/game-api/types/alta-networking/entityserializer#m-writefulldataintostream), [`EntitySerializer.WriteIntoStreamInternal`](/mod/game-api/types/alta-networking/entityserializer#m-writeintostreaminternal), [`OutgoingPacketManager.lastSceneSerialize`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-lastsceneserialize), [`OutgoingPacketManager.queue`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-queue), [`OutgoingPacketManager.Send`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-send-2), [`OutgoingPacketManager.SendWithQueued`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-sendwithqueued), [`OutgoingPacketManager.SerializeToWriter`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`OutgoingPacketManager.StartSerialize`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-startserialize), [`OutgoingPacketManager.StopSerialize`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-stopserialize), [`OutgoingPacketManager.writerMap`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-writermap), [`OutgoingPacketManager.WriteToCurrent`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-writetocurrent), [`OutgoingPacketManager.WriteToReliable`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-writetoreliable), [`OutgoingPacketManager.WriteToUnreliable`](/mod/game-api/types/alta-networking/outgoingpacketmanager#m-writetounreliable), [`Packet.Write`](/mod/game-api/types/alta-networking/packet#m-write), [`SceneSerializer.SerializeWrite`](/mod/game-api/types/alta-networking/sceneserializer#m-serializewrite), [`PlayerStateManager.EnterNewState`](/mod/game-api/types/alta-player/playerstatemanager#m-enternewstate), [`PlayerStateManager.GetSyncStreamForLeavingState`](/mod/game-api/types/alta-player/playerstatemanager#m-getsyncstreamforleavingstate).

</div>
