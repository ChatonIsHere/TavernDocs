---
title: "StreamWriter"
description: "class StreamWriter in Alta.Serialization.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamWriter

A **class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

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
| <Link id="m-bitindex" /><code>{"override uint BitIndex { get; }"}</code> |  |
| <Link id="m-data" /><code>{"uint[] Data { get; }"}</code> |  |
| <Link id="m-messagetype" /><code>{"uint MessageType { get; set; }"}</code> |  |
| <Link id="m-totalbytecount" /><code>{"override uint TotalByteCount { get; }"}</code> |  |
| <Link id="m-writer" /><code><Link to="/game-api/types/assembly-other/bitwriter">{"BitWriter"}</Link>{" Writer { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"override void Align()"}</code> |  |
| <Link id="m-alignandflush" /><code>{"uint AlignAndFlush()"}</code> |  |
| <Link id="m-backtrack" /><code>{"override void BackTrack(uint bitCount)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-clearandsetdata" /><code>{"void ClearAndSetData(uint[] data)"}</code> |  |
| <Link id="m-clone" /><code>{"override object Clone()"}</code> |  |
| <Link id="m-copyto" /><code>{"void CopyTo(byte[] data, int offset, int bytes)"}</code> |  |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-serializebits" /><code>{"override void SerializeBits(ref uint value, int bitCount)"}</code> |  |
| <Link id="m-serializestring" /><code>{"override void SerializeString(ref string value, "}<Link to="/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> |  |
| <Link id="m-tobits" /><code>{"uint[] ToBits(uint bitCount)"}</code> |  |
| <Link id="m-tobits-2" /><code>{"uint[] ToBits(uint bitCount, uint[] existing)"}</code> |  |
| <Link id="m-tobytes" /><code>{"byte[] ToBytes(uint byteCount, int preSize)"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |  |
| <Link id="m-serializebytes" /><code>{"protected override void SerializeBytes(byte[] value, int byteCount)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StreamWriter`:

[`SavedDynamicObject.GetWriter`](/game-api/types/alta-world/saveddynamicobject#m-getwriter), [`CustomizationWrapperSerializer.WriteStream`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestream), [`CustomizationWrapperSerializer.WriteStreamRestricted`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestreamrestricted), [`Connection.Send`](/game-api/types/alta-networking/connection#m-send-2), [`EntitySerializer.sharedWriter`](/game-api/types/alta-networking/entityserializer#m-sharedwriter), [`EntitySerializer.WriteDataIntoStream`](/game-api/types/alta-networking/entityserializer#m-writedataintostream), [`EntitySerializer.WriteFullDataIntoStream`](/game-api/types/alta-networking/entityserializer#m-writefulldataintostream), [`EntitySerializer.WriteIntoStreamInternal`](/game-api/types/alta-networking/entityserializer#m-writeintostreaminternal), [`OutgoingPacketManager.lastSceneSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-lastsceneserialize), [`OutgoingPacketManager.queue`](/game-api/types/alta-networking/outgoingpacketmanager#m-queue), [`OutgoingPacketManager.Send`](/game-api/types/alta-networking/outgoingpacketmanager#m-send-2), [`OutgoingPacketManager.SendWithQueued`](/game-api/types/alta-networking/outgoingpacketmanager#m-sendwithqueued), [`OutgoingPacketManager.SerializeToWriter`](/game-api/types/alta-networking/outgoingpacketmanager#m-serializetowriter), [`OutgoingPacketManager.StartSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-startserialize), [`OutgoingPacketManager.StopSerialize`](/game-api/types/alta-networking/outgoingpacketmanager#m-stopserialize), [`OutgoingPacketManager.writerMap`](/game-api/types/alta-networking/outgoingpacketmanager#m-writermap), [`OutgoingPacketManager.WriteToCurrent`](/game-api/types/alta-networking/outgoingpacketmanager#m-writetocurrent), [`OutgoingPacketManager.WriteToReliable`](/game-api/types/alta-networking/outgoingpacketmanager#m-writetoreliable), [`OutgoingPacketManager.WriteToUnreliable`](/game-api/types/alta-networking/outgoingpacketmanager#m-writetounreliable), [`Packet.Write`](/game-api/types/alta-networking/packet#m-write), [`SceneSerializer.SerializeWrite`](/game-api/types/alta-networking/sceneserializer#m-serializewrite), [`PlayerStateManager.EnterNewState`](/game-api/types/alta-player/playerstatemanager#m-enternewstate), [`PlayerStateManager.GetSyncStreamForLeavingState`](/game-api/types/alta-player/playerstatemanager#m-getsyncstreamforleavingstate).
