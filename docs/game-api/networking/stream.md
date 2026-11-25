---
title: Stream
description: Alta.Serialization.Stream, the bit reader and writer under every network message and save file.
sidebar_position: 8
---

# Stream

`Alta.Serialization.Stream` in `Alta.Serialization.Runtime`. Both sides.

Every network message and every save file in the game is written with this: a bit stream with one abstract base and two concrete types, `StreamWriter` and `StreamReader`. You get one passed to every message handler, and you can make your own for save data or tests. Add `Alta.Serialization.Runtime.dll` to your references.

## One method, both directions

Each `SerializeX(ref value)` method writes `value` on a writer and reads into it on a reader. So you write one method that serializes your data, and call it on both sides, in the same order:

```csharp
using System;
using Alta.Serialization;
using UnityEngine;

public struct Marker
{
    public int Kind;       // 0 to 15
    public float Height;   // 0 to 100 m, to 1 cm
    public Vector3 Where;
    public string Label;

    public void Serialize(Stream stream)
    {
        stream.SerializeInteger(ref Kind, 0, 15);             // 4 bits
        stream.SerializeFloat(ref Height, 0f, 100f, 0.01f);  // 14 bits
        stream.SerializeVector3(ref Where);                   // three full floats
        stream.SerializeString(ref Label, Stream.StringEncoding.UTF8);
    }

    public static byte[] ToBytes(Marker marker)
    {
        using (var writer = new StreamWriter(Stream.ResizeDataFunc))
        {
            marker.Serialize(writer);
            int bytes = (int)writer.AlignAndFlush();
            var result = new byte[bytes];
            Buffer.BlockCopy(writer.Data, 0, result, 0, bytes);
            return result;
        }
    }

    public static Marker FromBytes(byte[] bytes)
    {
        var words = new uint[(bytes.Length + 3) / 4];
        Buffer.BlockCopy(bytes, 0, words, 0, bytes.Length);
        var marker = new Marker();
        using (var reader = new StreamReader(words, bytes.Length))
        {
            marker.Serialize(reader);
        }
        return marker;
    }
}
```

When you need to do something only on one side, check `stream.IsReading` or `stream.IsWriting` after the serialize calls.

Nothing in the stream says what comes next. If the reader reads fewer or more bits than the writer wrote, everything after that is garbage. Version your format if it may change, for example with a byte at the start.

## Members

| Member | Bits | Notes |
| --- | --- | --- |
| `bool IsReading` | | A public **field**. `NetworkSceneManager.ServerSendOnly` clears it on a server. |
| `readonly bool IsWriting` | | |
| `uint BitIndex { get; }` | | Bits so far. |
| `uint TotalByteCount { get; }` | | |
| `void SerializeBool(ref bool value)` | 1 | |
| `bool SerializeCheck(bool check)` | 1 | Returns the value, for `if (stream.SerializeCheck(hasThing))`. |
| `void SerializeByte(ref byte value)` | 8 | |
| `void SerializeBits(ref uint value, int bitCount)` | `bitCount` | The primitive. Extra high bits are dropped. |
| `void SerializeUnsignedInt(ref uint value)` | 32 | |
| `void SerializeUnsignedInt(ref uint value, uint minimum, uint maximum)` | just enough | |
| `void SerializeInteger(ref int value)` | 32 | |
| `void SerializeInteger(ref int value, int minimum, int maximum)` | just enough | Out-of-range values are **masked**, not clamped: they come back as something else. |
| `void SerializeIntegerBits(ref int value, int bits)` | `bits` | |
| `void Serializelong(ref long value)` | 64 | Alta's spelling. |
| `void SerializeFloat(ref float value)` | 32 | |
| `void SerializeFloat(ref float value, float minimum, float maximum, float precision)` | just enough | Clamped to the range. |
| `void SerializeFloat(ref float value, float minimum, float maximum, int bits)` | `bits` | |
| `void SerializeFloat01(ref float value, float precision)` and overloads | | 0 to 1. |
| `void SerializeVector2/3/4(ref ...)` | 32 per part | Overloads take a min, max and precision or bits. |
| `void SerializeQuaternion(ref Quaternion value)` | 128 | |
| `void SerializeQuaternionCompressed(ref Quaternion value, int bitsPerPart = 10)` | about 32 | What the game uses for rotations. |
| `void SerializeDirection(ref Vector3 vector, int directionBitsPerPart = 10)`, `SerializeDirectionMagnitude(...)` | | Unit vectors, and vectors as direction plus length. |
| `void SerializeColor(ref Color color)` and overload | | |
| `void SerializeString(ref string value, StringEncoding encoding = StringEncoding.ASCII)` | 16 + bytes | Defaults to **ASCII**: other characters become `?`. Pass `StringEncoding.UTF8` for player text and names. Up to 65,535 bytes, though a network message can't hold that. |
| `void SerializeTimespan(ref TimeSpan value)`, `void SetializeDatetime(ref DateTime value)` | | Alta's spelling. |
| `void SerializeSmallUnsignedInt(ref uint value, int startBits, int maxValue)` | varies | Small numbers in fewer bits. |
| `void SerializePlayerIdentifier(ref int playerId)` | 32 | |
| `void Align()` | to a byte | |
| `void SkipBits(uint bitCount)`, `abstract void BackTrack(uint bitCount)` | | |
| `abstract object Clone()` | | A copy at the same position. Use it to keep a message for later. |
| `static BitWriter.GetMoreData ResizeDataFunc` | | Pass to `new StreamWriter(...)` for a writer that grows. Buffers come from a shared pool. |

The extension methods for entities and chunks (`SerializeNetworkEntity`, `SerializeEntityIdentifier`, `SerializeChunk`) are in `Alta.Networking.StreamEntityExtensions`; see [Entity sync](entity-sync.md#stream-helpers-for-side-checks).

## StreamWriter and StreamReader

| Member | What it does |
| --- | --- |
| `StreamWriter(BitWriter.GetMoreData getMoreData = null)` | A writer. With `Stream.ResizeDataFunc` it grows as needed. |
| `StreamWriter(uint[] data)` | A writer into a fixed buffer. Running off the end logs "Provided buffer length not long enough. Writing over data. Will be corrupt." and wraps to the start. |
| `uint[] Data` | What's been written, as words. |
| `uint AlignAndFlush()` | Finish the last word and return the byte count. |
| `void Clear()` | Start again. |
| `StreamReader(uint[] data, int byteCount)` | A reader over words. |
| `StreamReader(Func<uint[], uint[]> getMoreData, int byteCount)` | |

Both are `IDisposable`. Disposing a writer drops its buffer, so copy `Data` out first, as the example does.

Words are written in network byte order (`HostToNetwork`). Rover's protocol notes found one quirk if you're reading the bytes yourself: once aligned, runs of bytes (strings) are copied a word at a time in memory order. Rover Lite's `Bits.cs` is a working port.

## See also

- [Connection messages](messages.md)
- [Entity sync](entity-sync.md)
- [Saving](saving.md)
