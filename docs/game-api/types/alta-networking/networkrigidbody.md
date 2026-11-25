---
title: "NetworkRigidbody"
description: "class NetworkRigidbody in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkRigidbody

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`ISavableFull<NetworkRigidbodySaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<NetworkRigidbodySaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<NetworkRigidbodySaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t), [`IGetRigidbody`](/game-api/types/alta-crafting/igetrigidbody), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler)
- **Derived types** [`NetworkRigidbodySaveData`](/game-api/types/alta-networking/networkrigidbodysavedata), [`VisibleNetworkRigidbody`](/game-api/types/global-t-x/visiblenetworkrigidbody)
- **Attributes** `ProfileNetworkSerialized`, `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkRigidbody()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hassecondaryphysics" /><code>{"static bool HasSecondaryPhysics"}</code> |  |
| <Link id="m-issuspended" /><code>{"bool isSuspended"}</code> |  |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-angularvelocity" /><code>{"private Vector3 angularVelocity"}</code> |  |
| <Link id="m-baselerp" /><code>{"private const float BaseLerp"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-clientupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" clientUpdate"}</code> |  |
| <Link id="m-isasleep" /><code>{"private bool isAsleep"}</code> |  |
| <Link id="m-isdestroyed" /><code>{"private bool isDestroyed"}</code> |  |
| <Link id="m-isentitieschunkfullyloaded" /><code>{"private bool isEntitiesChunkFullyLoaded"}</code> |  |
| <Link id="m-isscalechanged" /><code>{"private bool isScaleChanged"}</code> |  |
| <Link id="m-isserversleeping" /><code>{"private bool isServerSleeping"}</code> |  |
| <Link id="m-lastsynctime" /><code>{"private float lastSyncTime"}</code> |  |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-positionserializer" /><code>{"private "}<Link to="/game-api/types/global-p/positionserializer-t">{"PositionSerializer"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{"> positionSerializer"}</code> |  |
| <Link id="m-spawnedinchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" spawnedInChunk"}</code> |  |
| <Link id="m-synckinematic" /><code>{"private bool syncKinematic"}</code> |  |
| <Link id="m-syncsecondarycollision" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{"> syncSecondaryCollision"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> |  |
| <Link id="m-waskinematic" /><code>{"private bool wasKinematic"}</code> |  |
| <Link id="m-wassleeping" /><code>{"private bool wasSleeping"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awakenetworkrigidbodies" /><code>{"static int AwakeNetworkRigidbodies { get; private set; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> |  |
| <Link id="m-movementcontext" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; set; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> |  |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> |  |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> |  |
| <Link id="m-topic" /><code>{"Rigidbody Topic { get; private set; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clientupdate-2" /><code>{"void ClientUpdate()"}</code> |  |
| <Link id="m-destroyrigidbody" /><code>{"void DestroyRigidbody()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-lerpauthorityfromclient" /><code>{"void LerpAuthorityFromClient(float initialLerp, float duration)"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-sendsecondarycollision" /><code>{"void SendSecondaryCollision("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hit)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-setactive" /><code>{"void SetActive(bool isEnabled)"}</code> |  |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> |  |
| <Link id="m-applyserializedvalues" /><code>{"private void ApplySerializedValues(bool isWriteFull)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkclientupdate" /><code>{"private void CheckClientUpdate(bool isActive)"}</code> |  |
| <Link id="m-chunkfinishedloading" /><code>{"private void ChunkFinishedLoading("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> |  |
| <Link id="m-disabledestroy" /><code>{"private void DisableDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-fadedampenjump" /><code>{"private IEnumerator FadeDampenJump(float initialLerp, float duration) (iterator)"}</code> |  |
| <Link id="m-isparentnull" /><code>{"private static bool IsParentNull("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" target)"}</code> |  |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |  |
| <Link id="m-makeparentnull" /><code>{"private static void MakeParentNull("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" target)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |
| <Link id="m-predictposition" /><code>{"private Vector3 PredictPosition(Vector3 initialVelocity, float time)"}</code> |  |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> |  |
| <Link id="m-secondaryphysics" /><code>{"private void SecondaryPhysics("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitNetworkRigidbody)"}</code> |  |
| <Link id="m-sendsecondarycoroutine" /><code>{"private IEnumerator SendSecondaryCoroutine("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitRigidbody) (iterator)"}</code> |  |
| <Link id="m-serializechunkandposition" /><code>{"private void SerializeChunkAndPosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, ref Vector3 position)"}</code> |  |
| <Link id="m-waitforchunktobeloadedtohandleremote" /><code>{"private void WaitForChunkToBeLoadedToHandleRemote()"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkRigidbody`:

[`CraftingPart.networkRigidbody`](/game-api/types/alta-crafting/craftingpart#m-networkrigidbody), [`Lock.rigidBody`](/game-api/types/alta-items/lock#m-rigidbody), [`Lock.Rigidbody`](/game-api/types/alta-items/lock#m-rigidbody-2), [`StabilizePickupJoint.jointNetworkRigidbody`](/game-api/types/alta-items/stabilizepickupjoint#m-jointnetworkrigidbody), [`StaticPlatformSupport.positionSerializer`](/game-api/types/alta-networking/staticplatformsupport#m-positionserializer), [`ObjectHistory.networkRigidbody`](/game-api/types/alta-world-generation/objecthistory#m-networkrigidbody), [`Embeddable.networkRigidbody`](/game-api/types/global-e-h/embeddable#m-networkrigidbody), [`EmptyJoint.networkRigidbody`](/game-api/types/global-e-h/emptyjoint#m-networkrigidbody), [`Pickup.networkRigidbody`](/game-api/types/global-p/pickup#m-networkrigidbody), [`Pickup.NetworkRigidbody`](/game-api/types/global-p/pickup#m-networkrigidbody-2), [`SmallProjectile.networkRigidbody`](/game-api/types/global-s/smallprojectile#m-networkrigidbody), [`VelocityJoint.networkRigidbody`](/game-api/types/global-t-x/velocityjoint#m-networkrigidbody).
