---
title: "NetworkRigidbody"
description: "Syncs a physics object's position, rotation, velocity, kinematic and sleep state from the server to clients, and saves them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkRigidbody

A **class** in `Root.Township`, `Alta.Networking`.

Syncs a physics object's position, rotation, velocity, kinematic and sleep state from the server to clients, and saves them. On clients it eases the local rigidbody towards the server's values and sleeps it when updates stop. On almost every physics prefab.

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
| <Link id="m-hassecondaryphysics" /><code>{"static bool HasSecondaryPhysics"}</code> | Global switch for relaying client-side collision results. False, so those messages are ignored. |
| <Link id="m-issuspended" /><code>{"bool isSuspended"}</code> | Public flag that nothing in the server build reads or sets. |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared profiling timer for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared profiling timer for `Serialize`. |
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
| <Link id="m-awakenetworkrigidbodies" /><code>{"static int AwakeNetworkRigidbodies { get; private set; }"}</code> | Count of network rigidbodies not asleep, across the scene. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | Client: true while the client update is running. |
| <Link id="m-movementcontext" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; set; }"}</code> | Context that synced positions are relative to. |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | Last synced position. |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> | Last synced rotation. |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | Number of network rigidbodies in the scene. |
| <Link id="m-topic" /><code>{"Rigidbody Topic { get; private set; }"}</code> | The Unity rigidbody being synced. |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clientupdate-2" /><code>{"void ClientUpdate()"}</code> | Client, each fixed update: eases the body towards the synced values, or snaps and sleeps it after 2 seconds without an update. |
| <Link id="m-destroyrigidbody" /><code>{"void DestroyRigidbody()"}</code> | Destroys the Unity rigidbody and stops updating. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the position serializer and messages. Clients wait for the chunk to load before handling updates. |
| <Link id="m-lerpauthorityfromclient" /><code>{"void LerpAuthorityFromClient(float initialLerp, float duration)"}</code> | Lowers the easing strength for a while, then ramps it back up to the normal 0.3. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | Server: reports a change unless the body was and still is asleep with the same kinematic state. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Forgets the last sync time, so the next full update snaps the body into place. |
| <Link id="m-sendsecondarycollision" /><code>{"void SendSecondaryCollision("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hit)"}</code> | Sends another body's state after a collision, on the next frame. Only used when `HasSecondaryPhysics` is on. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the kinematic flag, position, rotation, sleep state and velocities. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isEnabled)"}</code> | Wakes the body's tracking; on a client also starts or stops the client update. |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | Finds the rigidbody on this object again. |
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
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Resets the easing strength. |
| <Link id="m-predictposition" /><code>{"private Vector3 PredictPosition(Vector3 initialVelocity, float time)"}</code> |  |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> |  |
| <Link id="m-secondaryphysics" /><code>{"private void SecondaryPhysics("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitNetworkRigidbody)"}</code> |  |
| <Link id="m-sendsecondarycoroutine" /><code>{"private IEnumerator SendSecondaryCoroutine("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitRigidbody) (iterator)"}</code> |  |
| <Link id="m-serializechunkandposition" /><code>{"private void SerializeChunkAndPosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, ref Vector3 position)"}</code> |  |
| <Link id="m-waitforchunktobeloadedtohandleremote" /><code>{"private void WaitForChunkToBeLoadedToHandleRemote()"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkRigidbody`:

[`CraftingPart.networkRigidbody`](/game-api/types/alta-crafting/craftingpart#m-networkrigidbody), [`Lock.rigidBody`](/game-api/types/alta-items/lock#m-rigidbody), [`Lock.Rigidbody`](/game-api/types/alta-items/lock#m-rigidbody-2), [`StabilizePickupJoint.jointNetworkRigidbody`](/game-api/types/alta-items/stabilizepickupjoint#m-jointnetworkrigidbody), [`StaticPlatformSupport.positionSerializer`](/game-api/types/alta-networking/staticplatformsupport#m-positionserializer), [`ObjectHistory.networkRigidbody`](/game-api/types/alta-world-generation/objecthistory#m-networkrigidbody), [`Embeddable.networkRigidbody`](/game-api/types/global-e-h/embeddable#m-networkrigidbody), [`EmptyJoint.networkRigidbody`](/game-api/types/global-e-h/emptyjoint#m-networkrigidbody), [`Pickup.networkRigidbody`](/game-api/types/global-p/pickup#m-networkrigidbody), [`Pickup.NetworkRigidbody`](/game-api/types/global-p/pickup#m-networkrigidbody-2), [`SmallProjectile.networkRigidbody`](/game-api/types/global-s/smallprojectile#m-networkrigidbody), [`VelocityJoint.networkRigidbody`](/game-api/types/global-t-x/velocityjoint#m-networkrigidbody).
