---
title: "Stream"
description: "The bit reader and writer under every network message and save file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Stream

An **abstract class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

The bit reader and writer under every network message and save file. Each `SerializeX(ref value)` writes on a `StreamWriter` and reads on a `StreamReader`, so one method covers both directions.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`, `ICloneable`
- **Derived types** [`Compressor`](/mod/game-api/types/assembly-other/compressor), [`StreamCounter`](/mod/game-api/types/assembly-other/streamcounter), [`StreamReader`](/mod/game-api/types/assembly-other/streamreader), [`StreamWriter`](/mod/game-api/types/assembly-other/streamwriter)
- **Nested types** [`StringEncoding`](/mod/game-api/types/assembly-other/stream-stringencoding)
- **Documented in** [Stream](/mod/game-api/networking/stream)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Stream(bool isReading, bool isWriting)"}</code> | <span className="api-desc">Creates a `Stream` from `isReading` and `isWriting`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isreading" /><code>{"bool IsReading"}</code> | <span className="api-desc">True on a reader. A public field, so code can clear it to skip the reading side.</span> |
| <Link id="m-iswriting" /><code>{"readonly bool IsWriting"}</code> | <span className="api-desc">True on a writer.</span> |
| <Link id="m-resizedatafunc" /><code>{"static readonly "}<Link to="/mod/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" ResizeDataFunc"}</code> | <span className="api-desc">Pass to `new StreamWriter(...)` for a writer that doubles its buffer as needed. Buffers come from a shared pool.</span> |
| <Link id="m-emptybytes" /><code>{"protected static readonly byte[] EmptyBytes"}</code> | <span className="api-desc">A shared empty byte array for subclasses.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-epsilon" /><code>{"private const float Epsilon"}</code> | <span className="api-desc">Tolerance (1E-31) used by `SerializeDirection` to decide whether a vector needs normalizing before it is written.</span> |
| <Link id="m-normalizedmaximum" /><code>{"private const float NormalizedMaximum"}</code> | <span className="api-desc">Largest value (about 0.7071) a non-largest component of a unit quaternion or direction can have; the top of the compressed range.</span> |
| <Link id="m-normalizedminimum" /><code>{"private const float NormalizedMinimum"}</code> | <span className="api-desc">Smallest value (about -0.7071) a compressed quaternion or direction component can have; the bottom of the compressed range.</span> |
| <Link id="m-normalizedrange" /><code>{"private const float NormalizedRange"}</code> | <span className="api-desc">Width of the compressed component range (about 1.4142), used to scale components in quaternion and direction compression.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"abstract uint BitIndex { get; }"}</code> | <span className="api-desc">How many bits have been read or written so far.</span> |
| <Link id="m-iscounter" /><code>{"virtual bool IsCounter { get; }"}</code> | <span className="api-desc">True for a `StreamCounter`, which only counts bits and stores nothing (used to measure a save before writing it).</span> |
| <Link id="m-totalbytecount" /><code>{"abstract uint TotalByteCount { get; }"}</code> | <span className="api-desc">The size of the data in bytes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"abstract void Align()"}</code> | <span className="api-desc">Moves to the next byte boundary.</span> |
| <Link id="m-alignandserializebytes" /><code>{"void AlignAndSerializeBytes(byte[] value, int byteCount)"}</code> | <span className="api-desc">Aligns to a byte, then reads or writes a run of raw bytes.</span> |
| <Link id="m-assert" /><code>{"void Assert(uint value, string label)"}</code> | <span className="api-desc">Editor builds only: writes or reads a check value and logs an error if it doesn't match. Compiled out of the game.</span> |
| <Link id="m-backtrack" /><code>{"abstract void BackTrack(uint bitCount)"}</code> | <span className="api-desc">Moves the position back by a number of bits.</span> |
| <Link id="m-calculaterequiredbits" /><code>{"static int CalculateRequiredBits(uint number)"}</code> | <span className="api-desc">How many bits it takes to hold a number. Always at least 1.</span> |
| <Link id="m-clone" /><code>{"abstract object Clone()"}</code> | <span className="api-desc">A copy of the stream at the same position. Use it to keep a message for later.</span> |
| <Link id="m-dispose" /><code>{"abstract void Dispose()"}</code> | <span className="api-desc">Releases the stream's buffer. Copy a writer's data out first.</span> |
| <Link id="m-serializebits" /><code>{"abstract void SerializeBits(ref uint value, int bitCount)"}</code> | <span className="api-desc">The primitive: reads or writes the low `bitCount` bits of a value. The array overload does a run of words.</span> |
| <Link id="m-serializebits-2" /><code>{"void SerializeBits(uint[] bits, uint bitCount, bool isAligned)"}</code> | <span className="api-desc">The primitive: reads or writes the low `bitCount` bits of a value. The array overload does a run of words.</span> |
| <Link id="m-serializebool" /><code>{"void SerializeBool(ref bool value)"}</code> | <span className="api-desc">One bit.</span> |
| <Link id="m-serializebyte" /><code>{"void SerializeByte(ref byte value)"}</code> | <span className="api-desc">Eight bits.</span> |
| <Link id="m-serializecheck" /><code>{"bool SerializeCheck(bool check)"}</code> | <span className="api-desc">One bit that returns the value, for `if (stream.SerializeCheck(hasThing))` patterns.</span> |
| <Link id="m-serializecolor" /><code>{"void SerializeColor(ref Color color)"}</code> | <span className="api-desc">A colour as four full floats, or four 0 to 1 values in a given number of bits each.</span> |
| <Link id="m-serializecolor-2" /><code>{"void SerializeColor(ref Color color, int bitsPerPart)"}</code> | <span className="api-desc">A colour as four full floats, or four 0 to 1 values in a given number of bits each.</span> |
| <Link id="m-serializedirection" /><code>{"void SerializeDirection(ref Vector3 vector, int directionBitsPerPart = 10)"}</code> | <span className="api-desc">A unit vector in about 23 bits by default. The vector is normalized before writing.</span> |
| <Link id="m-serializedirectionmagnitude" /><code>{"void SerializeDirectionMagnitude(ref Vector3 vector, float maximumMagnitude, float magnitudePrecision, int directionBitsPerPart = 10)"}</code> | <span className="api-desc">A vector as compressed direction plus a length clamped to a maximum. Lengths under the precision come back as zero.</span> |
| <Link id="m-serializefloat" /><code>{"void SerializeFloat(ref float value)"}</code> | <span className="api-desc">A full 32-bit float, or a value packed into a min to max range by precision or bit count. Out-of-range values are clamped.</span> |
| <Link id="m-serializefloat-2" /><code>{"void SerializeFloat(ref float value, float minimum, float maximum, float precision)"}</code> | <span className="api-desc">A full 32-bit float, or a value packed into a min to max range by precision or bit count. Out-of-range values are clamped.</span> |
| <Link id="m-serializefloat-3" /><code>{"void SerializeFloat(ref float value, float minimum, float maximum, int bits)"}</code> | <span className="api-desc">A full 32-bit float, or a value packed into a min to max range by precision or bit count. Out-of-range values are clamped.</span> |
| <Link id="m-serializefloat01" /><code>{"void SerializeFloat01(ref float value, float precision)"}</code> | <span className="api-desc">A 0 to 1 value. With no arguments it uses 7 bits in steps of 1/101; overloads take a precision or bit count.</span> |
| <Link id="m-serializefloat01-2" /><code>{"void SerializeFloat01(ref float value, int bits)"}</code> | <span className="api-desc">A 0 to 1 value. With no arguments it uses 7 bits in steps of 1/101; overloads take a precision or bit count.</span> |
| <Link id="m-serializefloat01-3" /><code>{"void SerializeFloat01(ref float value)"}</code> | <span className="api-desc">A 0 to 1 value. With no arguments it uses 7 bits in steps of 1/101; overloads take a precision or bit count.</span> |
| <Link id="m-serializeindex" /><code>{"void SerializeIndex(ref uint lastIndex, ref uint identifier, int maximumEntities, int start = 1)"}</code> | <span className="api-desc">Writes an increasing id as a delta from the last one, in few bits when ids are close. Used for entity lists.</span> |
| <Link id="m-serializeinteger" /><code>{"void SerializeInteger(ref int value)"}</code> | <span className="api-desc">A 32-bit int, or one in a min to max range using just enough bits. Out-of-range values wrap rather than clamp.</span> |
| <Link id="m-serializeinteger-2" /><code>{"void SerializeInteger(ref int value, int minimum, int maximum)"}</code> | <span className="api-desc">A 32-bit int, or one in a min to max range using just enough bits. Out-of-range values wrap rather than clamp.</span> |
| <Link id="m-serializeintegerbits" /><code>{"void SerializeIntegerBits(ref int value, int bits)"}</code> | <span className="api-desc">An int in a given number of bits, with no sign handling.</span> |
| <Link id="m-serializelong" /><code>{"void Serializelong(ref long value)"}</code> | <span className="api-desc">A 64-bit long. Alta's spelling.</span> |
| <Link id="m-serializeplayeridentifier" /><code>{"void SerializePlayerIdentifier(ref int playerId)"}</code> | <span className="api-desc">A user id as 32 bits.</span> |
| <Link id="m-serializequaternion" /><code>{"void SerializeQuaternion(ref Quaternion value)"}</code> | <span className="api-desc">A rotation as four full floats (128 bits).</span> |
| <Link id="m-serializequaternioncompressed" /><code>{"void SerializeQuaternionCompressed(ref Quaternion value, int bitsPerPart = 10)"}</code> | <span className="api-desc">A rotation in 2 bits plus three parts of 10 bits by default. What the game uses for synced rotations.</span> |
| <Link id="m-serializesmallunsignedint" /><code>{"void SerializeSmallUnsignedInt(ref uint value, int startBits, int maxValue)"}</code> | <span className="api-desc">A small number in few bits, growing as needed up to `maxValue`.</span> |
| <Link id="m-serializestring" /><code>{"abstract void SerializeString(ref string value, "}<Link to="/mod/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> | <span className="api-desc">A string with a length prefix. ASCII by default, so pass `StringEncoding.UTF8` for player text.</span> |
| <Link id="m-serializetimespan" /><code>{"void SerializeTimespan(ref TimeSpan value)"}</code> | <span className="api-desc">A `TimeSpan` as 64-bit ticks.</span> |
| <Link id="m-serializeunsignedint" /><code>{"void SerializeUnsignedInt(ref uint value)"}</code> | <span className="api-desc">A 32-bit uint, or one in a min to max range using just enough bits.</span> |
| <Link id="m-serializeunsignedint-2" /><code>{"void SerializeUnsignedInt(ref uint value, uint minimum, uint maximum)"}</code> | <span className="api-desc">A 32-bit uint, or one in a min to max range using just enough bits.</span> |
| <Link id="m-serializevector2" /><code>{"void SerializeVector2(ref Vector2 vector)"}</code> | <span className="api-desc">Two floats, full or packed into a range by precision or bits.</span> |
| <Link id="m-serializevector2-2" /><code>{"void SerializeVector2(ref Vector2 vector, Vector2 min, Vector2 max, float precision)"}</code> | <span className="api-desc">Two floats, full or packed into a range by precision or bits.</span> |
| <Link id="m-serializevector2-3" /><code>{"void SerializeVector2(ref Vector2 vector, Vector2 min, Vector2 max, int bits)"}</code> | <span className="api-desc">Two floats, full or packed into a range by precision or bits.</span> |
| <Link id="m-serializevector3" /><code>{"void SerializeVector3(ref Vector3 vector)"}</code> | <span className="api-desc">Three floats, full or packed into a range by precision or bits.</span> |
| <Link id="m-serializevector3-2" /><code>{"void SerializeVector3(ref Vector3 vector, Vector3 min, Vector3 max, float precision)"}</code> | <span className="api-desc">Three floats, full or packed into a range by precision or bits.</span> |
| <Link id="m-serializevector3-3" /><code>{"void SerializeVector3(ref Vector3 vector, Vector3 min, Vector3 max, int bits)"}</code> | <span className="api-desc">Three floats, full or packed into a range by precision or bits.</span> |
| <Link id="m-serializevector4" /><code>{"void SerializeVector4(ref Vector4 vector)"}</code> | <span className="api-desc">Four full floats.</span> |
| <Link id="m-setializedatetime" /><code>{"void SetializeDatetime(ref DateTime value)"}</code> | <span className="api-desc">A `DateTime` as 64-bit ticks. Alta's spelling.</span> |
| <Link id="m-skipbits" /><code>{"void SkipBits(uint bitCount)"}</code> | <span className="api-desc">Reads past a number of bits, discarding them.</span> |
| <Link id="m-serializebytes" /><code>{"protected abstract void SerializeBytes(byte[] value, int byteCount)"}</code> | <span className="api-desc">Protected subclass hook that reads or writes raw bytes. Callers use `AlignAndSerializeBytes`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-internalserializefloat" /><code>{"private void InternalSerializeFloat(ref float value, int bits, uint maximumInteger)"}</code> | <span className="api-desc">Shared body of the `SerializeFloat01` overloads: maps a 0 to 1 value onto an integer of the given bit count and back.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Stream`:

<div className="api-used-in">

[`ActionItem.SyncEffect`](/mod/game-api/types/global-a-b/actionitem#m-synceffect-2), [`ActionItem.SyncOwner`](/mod/game-api/types/global-a-b/actionitem#m-syncowner-2), [`AdditionalStaticContent.Sync`](/mod/game-api/types/global-a-b/additionalstaticcontent#m-sync-2), [`EffectDefinitionApplication.Serialize`](/mod/game-api/types/alta-stats-effects/effectdefinitionapplication#m-serialize), [`PlayerEffectController.NetworkTeleport`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-networkteleport), [`ForgedModel<TB, TA>.SyncComplete`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-synccomplete-2), [`ForgedPoint.Sync`](/mod/game-api/types/alta-crafting/forgedpoint#m-sync), [`Recycler.SyncFull`](/mod/game-api/types/alta-crafting/recycler#m-syncfull-2), [`Recycler.SyncOutputEffect`](/mod/game-api/types/alta-crafting/recycler#m-syncoutputeffect-2), [`Recycler.SyncTemperatureValue`](/mod/game-api/types/alta-crafting/recycler#m-synctemperaturevalue-2), [`RecyclerOutputSlot.Serialize`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-serialize), [`Smelter.SyncEffects`](/mod/game-api/types/alta-crafting/smelter#m-synceffects-2), [`Smelter.SyncIcons`](/mod/game-api/types/alta-crafting/smelter#m-syncicons-2), [`ChisellingDeck.NetworkUpdateBlock`](/mod/game-api/types/alta-crafting/chisellingdeck#m-networkupdateblock), [`TimberBlock.Serialize`](/mod/game-api/types/alta-crafting/timberblock#m-serialize), [`TimberBlock.SyncPickup`](/mod/game-api/types/alta-crafting/timberblock#m-syncpickup-2), [`TimberBlock.SyncPieceEffects`](/mod/game-api/types/alta-crafting/timberblock#m-syncpieceeffects-2), [`TimberBlock.SyncStatus`](/mod/game-api/types/alta-crafting/timberblock#m-syncstatus-2), [`TimberBlock.Stage.Serialize`](/mod/game-api/types/alta-crafting/timberblock-stage#m-serialize), [`TimberBlockSpawner.SyncPosition`](/mod/game-api/types/alta-crafting/timberblockspawner#m-syncposition-2), [`TimberBlockSpawner.SyncRotation`](/mod/game-api/types/alta-crafting/timberblockspawner#m-syncrotation-2), [`TimberPiece.Serialize`](/mod/game-api/types/alta-crafting/timberpiece#m-serialize), [`TimberPieceBase.Serialize`](/mod/game-api/types/alta-crafting/timberpiecebase#m-serialize), [`TimberPieceGroup.Serialize`](/mod/game-api/types/alta-crafting/timberpiecegroup#m-serialize), [`BiomeSerializer.SerializeBiome`](/mod/game-api/types/alta-world-generation/biomeserializer#m-serializebiome), [`CaveLayerManager.SyncSeed`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-syncseed), [`CaveTeleporter.SyncLayer`](/mod/game-api/types/alta-world-generation/caveteleporter#m-synclayer-2), [`CaveTeleporterManager.SyncEffect`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect-2), [`CaveTeleporterManager.SyncFull`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-syncfull-2), [`CaveTeleporterManager.SyncProxy`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-syncproxy-2), [`GenerationBase.ClientSpawn`](/mod/game-api/types/alta-world-generation/generationbase#m-clientspawn-2), [`LevelSelector.Serialize`](/mod/game-api/types/alta-world-generation/levelselector#m-serialize), [`HandGrip.SerializeGrip`](/mod/game-api/types/alta-player/handgrip#m-serializegrip), [`HandGrip.GripFinger.SerializeGrip`](/mod/game-api/types/alta-player/handgrip-gripfinger#m-serializegrip), [`HandGrip.GripJoint.SerializeGrip`](/mod/game-api/types/alta-player/handgrip-gripjoint#m-serializegrip), [`CaveLayerStreamer.SyncLayer`](/mod/game-api/types/alta-world/cavelayerstreamer#m-synclayer-2), [`CaveLayerStreamer.SyncLayerSetup`](/mod/game-api/types/alta-world/cavelayerstreamer#m-synclayersetup-2), [`Chunk.SerializeChunkAndPosition`](/mod/game-api/types/alta-world/chunk#m-serializechunkandposition), [`Chunk.SerializeEntityPosition`](/mod/game-api/types/alta-world/chunk#m-serializeentityposition), [`Chunk.SerializePosition`](/mod/game-api/types/alta-world/chunk#m-serializeposition), [`Chunk.SyncIndex`](/mod/game-api/types/alta-world/chunk#m-syncindex-2), [`IClusterSerialized.SerializeClusterPart`](/mod/game-api/types/alta-world/iclusterserialized#m-serializeclusterpart), [`LocationChunk.SerializePosition`](/mod/game-api/types/alta-world/locationchunk#m-serializeposition), [`PlayerEntitySync.ClientLoad`](/mod/game-api/types/alta-world/playerentitysync#m-clientload), [`StaticCaveChunk.SyncSetup`](/mod/game-api/types/alta-world/staticcavechunk#m-syncsetup-2), [`StreamerHelper.SerializeEmpty`](/mod/game-api/types/alta-world/streamerhelper#m-serializeempty), [`StreamerHelper.SerializePrefab`](/mod/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/mod/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`Cookable.SyncEffect`](/mod/game-api/types/alta-crafting/cookable#m-synceffect-2), [`StewManager.FadeOutAddedIngredient`](/mod/game-api/types/alta-crafting/stewmanager#m-fadeoutaddedingredient), [`StewManager.SerializeGarnishesList`](/mod/game-api/types/alta-crafting/stewmanager#m-serializegarnisheslist), [`StewManager.SerializeIngredientsList`](/mod/game-api/types/alta-crafting/stewmanager#m-serializeingredientslist), [`StewManager.SyncStewCreated`](/mod/game-api/types/alta-crafting/stewmanager#m-syncstewcreated), [`ConfirmationCraftingPart.OnCompleteEffect`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-oncompleteeffect), [`ConfirmationCraftingPart.SyncAttemptCraft`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncattemptcraft-2), [`ConfirmationCraftingPart.SyncClientNailHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit-2), [`ConfirmationCraftingPart.SyncNail`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncnail-2), [`ConfirmationCraftingPart.SyncPopout`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncpopout-2), [`ConfirmationCraftingPart.SyncSetup`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncsetup-2), [`ConfirmationCraftingPart.ClientSideNailHitSync.Serialize`](/mod/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync#m-serialize) and 656 more.

</div>
