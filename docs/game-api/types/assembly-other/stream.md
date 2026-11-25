---
title: "Stream"
description: "Every network message and every save file in the game is written with this: a bit stream with one abstract base and two concrete types, StreamWriter a"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Stream

An **abstract class** in `Alta.Serialization.Runtime`, `Alta.Serialization`.

Every network message and every save file in the game is written with this: a bit stream with one abstract base and two concrete types, `StreamWriter` and `StreamReader`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IDisposable`, `ICloneable`
- **Derived types** [`Compressor`](/game-api/types/assembly-other/compressor), [`StreamCounter`](/game-api/types/assembly-other/streamcounter), [`StreamReader`](/game-api/types/assembly-other/streamreader), [`StreamWriter`](/game-api/types/assembly-other/streamwriter)
- **Nested types** [`StringEncoding`](/game-api/types/assembly-other/stream-stringencoding)
- **Documented in** [Stream](/game-api/networking/stream)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Stream(bool isReading, bool isWriting)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isreading" /><code>{"bool IsReading"}</code> |  |
| <Link id="m-iswriting" /><code>{"readonly bool IsWriting"}</code> |  |
| <Link id="m-resizedatafunc" /><code>{"static readonly "}<Link to="/game-api/types/assembly-other/bitwriter-getmoredata">{"BitWriter.GetMoreData"}</Link>{" ResizeDataFunc"}</code> |  |
| <Link id="m-emptybytes" /><code>{"protected static readonly byte[] EmptyBytes"}</code> |  |
| <Link id="m-epsilon" /><code>{"private const float Epsilon"}</code> |  |
| <Link id="m-normalizedmaximum" /><code>{"private const float NormalizedMaximum"}</code> |  |
| <Link id="m-normalizedminimum" /><code>{"private const float NormalizedMinimum"}</code> |  |
| <Link id="m-normalizedrange" /><code>{"private const float NormalizedRange"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bitindex" /><code>{"abstract uint BitIndex { get; }"}</code> |  |
| <Link id="m-iscounter" /><code>{"virtual bool IsCounter { get; }"}</code> |  |
| <Link id="m-totalbytecount" /><code>{"abstract uint TotalByteCount { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-align" /><code>{"abstract void Align()"}</code> |  |
| <Link id="m-alignandserializebytes" /><code>{"void AlignAndSerializeBytes(byte[] value, int byteCount)"}</code> |  |
| <Link id="m-assert" /><code>{"void Assert(uint value, string label)"}</code> |  |
| <Link id="m-backtrack" /><code>{"abstract void BackTrack(uint bitCount)"}</code> |  |
| <Link id="m-calculaterequiredbits" /><code>{"static int CalculateRequiredBits(uint number)"}</code> |  |
| <Link id="m-clone" /><code>{"abstract object Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"abstract void Dispose()"}</code> |  |
| <Link id="m-serializebits" /><code>{"abstract void SerializeBits(ref uint value, int bitCount)"}</code> |  |
| <Link id="m-serializebits-2" /><code>{"void SerializeBits(uint[] bits, uint bitCount, bool isAligned)"}</code> |  |
| <Link id="m-serializebool" /><code>{"void SerializeBool(ref bool value)"}</code> |  |
| <Link id="m-serializebyte" /><code>{"void SerializeByte(ref byte value)"}</code> |  |
| <Link id="m-serializecheck" /><code>{"bool SerializeCheck(bool check)"}</code> |  |
| <Link id="m-serializecolor" /><code>{"void SerializeColor(ref Color color)"}</code> |  |
| <Link id="m-serializecolor-2" /><code>{"void SerializeColor(ref Color color, int bitsPerPart)"}</code> |  |
| <Link id="m-serializedirection" /><code>{"void SerializeDirection(ref Vector3 vector, int directionBitsPerPart = 10)"}</code> |  |
| <Link id="m-serializedirectionmagnitude" /><code>{"void SerializeDirectionMagnitude(ref Vector3 vector, float maximumMagnitude, float magnitudePrecision, int directionBitsPerPart = 10)"}</code> |  |
| <Link id="m-serializefloat" /><code>{"void SerializeFloat(ref float value)"}</code> |  |
| <Link id="m-serializefloat-2" /><code>{"void SerializeFloat(ref float value, float minimum, float maximum, float precision)"}</code> |  |
| <Link id="m-serializefloat-3" /><code>{"void SerializeFloat(ref float value, float minimum, float maximum, int bits)"}</code> |  |
| <Link id="m-serializefloat01" /><code>{"void SerializeFloat01(ref float value, float precision)"}</code> |  |
| <Link id="m-serializefloat01-2" /><code>{"void SerializeFloat01(ref float value, int bits)"}</code> |  |
| <Link id="m-serializefloat01-3" /><code>{"void SerializeFloat01(ref float value)"}</code> |  |
| <Link id="m-serializeindex" /><code>{"void SerializeIndex(ref uint lastIndex, ref uint identifier, int maximumEntities, int start = 1)"}</code> |  |
| <Link id="m-serializeinteger" /><code>{"void SerializeInteger(ref int value)"}</code> |  |
| <Link id="m-serializeinteger-2" /><code>{"void SerializeInteger(ref int value, int minimum, int maximum)"}</code> |  |
| <Link id="m-serializeintegerbits" /><code>{"void SerializeIntegerBits(ref int value, int bits)"}</code> |  |
| <Link id="m-serializelong" /><code>{"void Serializelong(ref long value)"}</code> |  |
| <Link id="m-serializeplayeridentifier" /><code>{"void SerializePlayerIdentifier(ref int playerId)"}</code> |  |
| <Link id="m-serializequaternion" /><code>{"void SerializeQuaternion(ref Quaternion value)"}</code> |  |
| <Link id="m-serializequaternioncompressed" /><code>{"void SerializeQuaternionCompressed(ref Quaternion value, int bitsPerPart = 10)"}</code> |  |
| <Link id="m-serializesmallunsignedint" /><code>{"void SerializeSmallUnsignedInt(ref uint value, int startBits, int maxValue)"}</code> |  |
| <Link id="m-serializestring" /><code>{"abstract void SerializeString(ref string value, "}<Link to="/game-api/types/assembly-other/stream-stringencoding">{"Stream.StringEncoding"}</Link>{" encoding = 0)"}</code> |  |
| <Link id="m-serializetimespan" /><code>{"void SerializeTimespan(ref TimeSpan value)"}</code> |  |
| <Link id="m-serializeunsignedint" /><code>{"void SerializeUnsignedInt(ref uint value)"}</code> |  |
| <Link id="m-serializeunsignedint-2" /><code>{"void SerializeUnsignedInt(ref uint value, uint minimum, uint maximum)"}</code> |  |
| <Link id="m-serializevector2" /><code>{"void SerializeVector2(ref Vector2 vector)"}</code> |  |
| <Link id="m-serializevector2-2" /><code>{"void SerializeVector2(ref Vector2 vector, Vector2 min, Vector2 max, float precision)"}</code> |  |
| <Link id="m-serializevector2-3" /><code>{"void SerializeVector2(ref Vector2 vector, Vector2 min, Vector2 max, int bits)"}</code> |  |
| <Link id="m-serializevector3" /><code>{"void SerializeVector3(ref Vector3 vector)"}</code> |  |
| <Link id="m-serializevector3-2" /><code>{"void SerializeVector3(ref Vector3 vector, Vector3 min, Vector3 max, float precision)"}</code> |  |
| <Link id="m-serializevector3-3" /><code>{"void SerializeVector3(ref Vector3 vector, Vector3 min, Vector3 max, int bits)"}</code> |  |
| <Link id="m-serializevector4" /><code>{"void SerializeVector4(ref Vector4 vector)"}</code> |  |
| <Link id="m-setializedatetime" /><code>{"void SetializeDatetime(ref DateTime value)"}</code> |  |
| <Link id="m-skipbits" /><code>{"void SkipBits(uint bitCount)"}</code> |  |
| <Link id="m-internalserializefloat" /><code>{"private void InternalSerializeFloat(ref float value, int bits, uint maximumInteger)"}</code> |  |
| <Link id="m-serializebytes" /><code>{"protected abstract void SerializeBytes(byte[] value, int byteCount)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Stream`:

[`ActionItem.SyncEffect`](/game-api/types/global-a-b/actionitem#m-synceffect-2), [`ActionItem.SyncOwner`](/game-api/types/global-a-b/actionitem#m-syncowner-2), [`AdditionalStaticContent.Sync`](/game-api/types/global-a-b/additionalstaticcontent#m-sync-2), [`EffectDefinitionApplication.Serialize`](/game-api/types/alta-stats-effects/effectdefinitionapplication#m-serialize), [`PlayerEffectController.NetworkTeleport`](/game-api/types/alta-stats-effects/playereffectcontroller#m-networkteleport), [`ForgedModel<TB, TA>.SyncComplete`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-synccomplete-2), [`ForgedPoint.Sync`](/game-api/types/alta-crafting/forgedpoint#m-sync), [`Recycler.SyncFull`](/game-api/types/alta-crafting/recycler#m-syncfull-2), [`Recycler.SyncOutputEffect`](/game-api/types/alta-crafting/recycler#m-syncoutputeffect-2), [`Recycler.SyncTemperatureValue`](/game-api/types/alta-crafting/recycler#m-synctemperaturevalue-2), [`RecyclerOutputSlot.Serialize`](/game-api/types/alta-crafting/recycleroutputslot#m-serialize), [`Smelter.SyncEffects`](/game-api/types/alta-crafting/smelter#m-synceffects-2), [`Smelter.SyncIcons`](/game-api/types/alta-crafting/smelter#m-syncicons-2), [`ChisellingDeck.NetworkUpdateBlock`](/game-api/types/alta-crafting/chisellingdeck#m-networkupdateblock), [`TimberBlock.Serialize`](/game-api/types/alta-crafting/timberblock#m-serialize), [`TimberBlock.SyncPickup`](/game-api/types/alta-crafting/timberblock#m-syncpickup-2), [`TimberBlock.SyncPieceEffects`](/game-api/types/alta-crafting/timberblock#m-syncpieceeffects-2), [`TimberBlock.SyncStatus`](/game-api/types/alta-crafting/timberblock#m-syncstatus-2), [`TimberBlock.Stage.Serialize`](/game-api/types/alta-crafting/timberblock-stage#m-serialize), [`TimberBlockSpawner.SyncPosition`](/game-api/types/alta-crafting/timberblockspawner#m-syncposition-2), [`TimberBlockSpawner.SyncRotation`](/game-api/types/alta-crafting/timberblockspawner#m-syncrotation-2), [`TimberPiece.Serialize`](/game-api/types/alta-crafting/timberpiece#m-serialize), [`TimberPieceBase.Serialize`](/game-api/types/alta-crafting/timberpiecebase#m-serialize), [`TimberPieceGroup.Serialize`](/game-api/types/alta-crafting/timberpiecegroup#m-serialize), [`BiomeSerializer.SerializeBiome`](/game-api/types/alta-world-generation/biomeserializer#m-serializebiome), [`CaveLayerManager.SyncSeed`](/game-api/types/alta-world-generation/cavelayermanager#m-syncseed), [`CaveTeleporter.SyncLayer`](/game-api/types/alta-world-generation/caveteleporter#m-synclayer-2), [`CaveTeleporterManager.SyncEffect`](/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect-2), [`CaveTeleporterManager.SyncFull`](/game-api/types/alta-world-generation/caveteleportermanager#m-syncfull-2), [`CaveTeleporterManager.SyncProxy`](/game-api/types/alta-world-generation/caveteleportermanager#m-syncproxy-2), [`GenerationBase.ClientSpawn`](/game-api/types/alta-world-generation/generationbase#m-clientspawn-2), [`LevelSelector.Serialize`](/game-api/types/alta-world-generation/levelselector#m-serialize), [`HandGrip.SerializeGrip`](/game-api/types/alta-player/handgrip#m-serializegrip), [`HandGrip.GripFinger.SerializeGrip`](/game-api/types/alta-player/handgrip-gripfinger#m-serializegrip), [`HandGrip.GripJoint.SerializeGrip`](/game-api/types/alta-player/handgrip-gripjoint#m-serializegrip), [`CaveLayerStreamer.SyncLayer`](/game-api/types/alta-world/cavelayerstreamer#m-synclayer-2), [`CaveLayerStreamer.SyncLayerSetup`](/game-api/types/alta-world/cavelayerstreamer#m-synclayersetup-2), [`Chunk.SerializeChunkAndPosition`](/game-api/types/alta-world/chunk#m-serializechunkandposition), [`Chunk.SerializeEntityPosition`](/game-api/types/alta-world/chunk#m-serializeentityposition), [`Chunk.SerializePosition`](/game-api/types/alta-world/chunk#m-serializeposition), [`Chunk.SyncIndex`](/game-api/types/alta-world/chunk#m-syncindex-2), [`IClusterSerialized.SerializeClusterPart`](/game-api/types/alta-world/iclusterserialized#m-serializeclusterpart), [`LocationChunk.SerializePosition`](/game-api/types/alta-world/locationchunk#m-serializeposition), [`PlayerEntitySync.ClientLoad`](/game-api/types/alta-world/playerentitysync#m-clientload), [`StaticCaveChunk.SyncSetup`](/game-api/types/alta-world/staticcavechunk#m-syncsetup-2), [`StreamerHelper.SerializeEmpty`](/game-api/types/alta-world/streamerhelper#m-serializeempty), [`StreamerHelper.SerializePrefab`](/game-api/types/alta-world/streamerhelper#m-serializeprefab), [`StreamerHelper.WritePositionlessPrefab`](/game-api/types/alta-world/streamerhelper#m-writepositionlessprefab), [`Cookable.SyncEffect`](/game-api/types/alta-crafting/cookable#m-synceffect-2), [`StewManager.FadeOutAddedIngredient`](/game-api/types/alta-crafting/stewmanager#m-fadeoutaddedingredient), [`StewManager.SerializeGarnishesList`](/game-api/types/alta-crafting/stewmanager#m-serializegarnisheslist), [`StewManager.SerializeIngredientsList`](/game-api/types/alta-crafting/stewmanager#m-serializeingredientslist), [`StewManager.SyncStewCreated`](/game-api/types/alta-crafting/stewmanager#m-syncstewcreated), [`ConfirmationCraftingPart.OnCompleteEffect`](/game-api/types/alta-crafting/confirmationcraftingpart#m-oncompleteeffect), [`ConfirmationCraftingPart.SyncAttemptCraft`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncattemptcraft-2), [`ConfirmationCraftingPart.SyncClientNailHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit-2), [`ConfirmationCraftingPart.SyncNail`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncnail-2), [`ConfirmationCraftingPart.SyncPopout`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncpopout-2), [`ConfirmationCraftingPart.SyncSetup`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncsetup-2), [`ConfirmationCraftingPart.ClientSideNailHitSync.Serialize`](/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync#m-serialize) and 656 more.
