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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkRigidbody()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hassecondaryphysics" /><code>{"static bool HasSecondaryPhysics"}</code> | Global switch for relaying client-side collision results. False, so those messages are ignored. |
| <Link id="m-issuspended" /><code>{"bool isSuspended"}</code> | Public flag that nothing in the server build reads or sets. |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared profiling timer for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared profiling timer for `Serialize`. |

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"private Vector3 angularVelocity"}</code> | Last synced angular velocity. Clients blend toward it. |
| <Link id="m-baselerp" /><code>{"private const float BaseLerp"}</code> | Normal blend factor (0.3) used to pull a client body toward the synced state each fixed update. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform of the body. |
| <Link id="m-clientupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" clientUpdate"}</code> | Handle for the client fixed-update method in `updateModule`. |
| <Link id="m-isasleep" /><code>{"private bool isAsleep"}</code> | Whether this client body is counted as asleep (not in `AwakeNetworkRigidbodies`). |
| <Link id="m-isdestroyed" /><code>{"private bool isDestroyed"}</code> | True when the entity has no Rigidbody, or after `DestroyRigidbody`. |
| <Link id="m-isentitieschunkfullyloaded" /><code>{"private bool isEntitiesChunkFullyLoaded"}</code> | Client: whether the chunk the body spawned in has fully loaded. |
| <Link id="m-isscalechanged" /><code>{"private bool isScaleChanged"}</code> | Not used in this build. |
| <Link id="m-isserversleeping" /><code>{"private bool isServerSleeping"}</code> | Whether the server's body was asleep in the last sync. |
| <Link id="m-lastsynctime" /><code>{"private float lastSyncTime"}</code> | Time of the last sync. 0 means none yet. After 2 seconds with no sync the client body is put to sleep. |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> | Current blend factor toward the synced state. Lowered for a while after the client hands back authority. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-positionserializer" /><code>{"private "}<Link to="/game-api/types/global-p/positionserializer-t">{"PositionSerializer"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{"> positionSerializer"}</code> | Writes and reads the body's position and rotation, chunk relative. |
| <Link id="m-spawnedinchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" spawnedInChunk"}</code> | Client: the chunk the body spawned in, waited on before sleeping. |
| <Link id="m-synckinematic" /><code>{"private bool syncKinematic"}</code> | Synced kinematic state. While true, the client doesn't blend physics. |
| <Link id="m-syncsecondarycollision" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{"> syncSecondaryCollision"}</code> | Method sync made in `Initialize` for `SecondaryPhysics`. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Fixed update module that runs `ClientUpdate` for every active client body. |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | Last synced velocity. Clients blend toward it. |
| <Link id="m-waskinematic" /><code>{"private bool wasKinematic"}</code> | Kinematic state at the last write, used to spot changes. |
| <Link id="m-wassleeping" /><code>{"private bool wasSleeping"}</code> | Sleep state at the last write. A body that stays asleep and unchanged isn't resent. |

</details>

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

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | Caps this behaviour's serialized data at 265 bits. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Returns the shared `prepareForWriteTimer` profiling counter. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Returns the shared `serializeTimer` profiling counter. |

</details>

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
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Resets the easing strength. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyserializedvalues" /><code>{"private void ApplySerializedValues(bool isWriteFull)"}</code> | Client: snaps the body to the synced position, kinematic state and velocity when needed, or puts it to sleep if the server's is asleep. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Counts the body in `SpawnedCount` and `AwakeNetworkRigidbodies`. |
| <Link id="m-checkclientupdate" /><code>{"private void CheckClientUpdate(bool isActive)"}</code> | Registers or removes the client fixed-update method when the body becomes active or inactive. |
| <Link id="m-chunkfinishedloading" /><code>{"private void ChunkFinishedLoading("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Marks the spawn chunk as loaded so the client update can put the body to sleep. |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> | Destroys the entity if it still has no chunk. Used by the obsolete chunk serializer. |
| <Link id="m-disabledestroy" /><code>{"private void DisableDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Client: on scene destroy, unhooks the chunk load event and the client update. |
| <Link id="m-fadedampenjump" /><code>{"private IEnumerator FadeDampenJump(float initialLerp, float duration) (iterator)"}</code> | Coroutine that ramps the blend factor from a starting value back up to 0.3 over a duration. |
| <Link id="m-isparentnull" /><code>{"private static bool IsParentNull("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" target)"}</code> | True when the body has no parent or sits in the spawner's default folder. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | After a load, applies the saved kinematic state and velocity, or puts the body to sleep. |
| <Link id="m-makeparentnull" /><code>{"private static void MakeParentNull("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" target)"}</code> | Unparents the body's transform. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Updates the counters and unhooks the chunk event and client update. |
| <Link id="m-predictposition" /><code>{"private Vector3 PredictPosition(Vector3 initialVelocity, float time)"}</code> | Works out a position offset from a velocity over time, with gravity. Not called in this build. |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | When the entity is replaced, copies velocity and angular velocity to the new body unless position is excluded. |
| <Link id="m-secondaryphysics" /><code>{"private void SecondaryPhysics("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitNetworkRigidbody)"}</code> | Method sync for a body another body hit: position, rotation and velocities. Server relays it. Only runs if `HasSecondaryPhysics`. |
| <Link id="m-sendsecondarycoroutine" /><code>{"private IEnumerator SendSecondaryCoroutine("}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitRigidbody) (iterator)"}</code> | Waits a physics step and a frame, then sends the secondary collision sync. |
| <Link id="m-serializechunkandposition" /><code>{"private void SerializeChunkAndPosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, ref Vector3 position)"}</code> | Obsolete: writes or reads a chunk index (13 bits) and the position in that chunk. |
| <Link id="m-waitforchunktobeloadedtohandleremote" /><code>{"private void WaitForChunkToBeLoadedToHandleRemote()"}</code> | Client: finds the chunk the body spawned in and waits for it to fully load if it hasn't. |

</details>

## Used in

Members of other types that take, return or hold a `NetworkRigidbody`:

[`CraftingPart.networkRigidbody`](/game-api/types/alta-crafting/craftingpart#m-networkrigidbody), [`Lock.rigidBody`](/game-api/types/alta-items/lock#m-rigidbody), [`Lock.Rigidbody`](/game-api/types/alta-items/lock#m-rigidbody-2), [`StabilizePickupJoint.jointNetworkRigidbody`](/game-api/types/alta-items/stabilizepickupjoint#m-jointnetworkrigidbody), [`StaticPlatformSupport.positionSerializer`](/game-api/types/alta-networking/staticplatformsupport#m-positionserializer), [`ObjectHistory.networkRigidbody`](/game-api/types/alta-world-generation/objecthistory#m-networkrigidbody), [`Embeddable.networkRigidbody`](/game-api/types/global-e-h/embeddable#m-networkrigidbody), [`EmptyJoint.networkRigidbody`](/game-api/types/global-e-h/emptyjoint#m-networkrigidbody), [`Pickup.networkRigidbody`](/game-api/types/global-p/pickup#m-networkrigidbody), [`Pickup.NetworkRigidbody`](/game-api/types/global-p/pickup#m-networkrigidbody-2), [`SmallProjectile.networkRigidbody`](/game-api/types/global-s/smallprojectile#m-networkrigidbody), [`VelocityJoint.networkRigidbody`](/game-api/types/global-t-x/velocityjoint#m-networkrigidbody).
