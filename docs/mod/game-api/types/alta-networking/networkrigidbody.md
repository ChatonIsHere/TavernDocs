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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`ISavableFull<NetworkRigidbodySaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<NetworkRigidbodySaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<NetworkRigidbodySaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t), [`IGetRigidbody`](/mod/game-api/types/alta-crafting/igetrigidbody), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler)
- **Derived types** [`NetworkRigidbodySaveData`](/mod/game-api/types/alta-networking/networkrigidbodysavedata), [`VisibleNetworkRigidbody`](/mod/game-api/types/global-t-x/visiblenetworkrigidbody)
- **Attributes** `ProfileNetworkSerialized`, `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkRigidbody()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hassecondaryphysics" /><code>{"static bool HasSecondaryPhysics"}</code> | <span className="api-desc">Global switch for relaying client-side collision results. False, so those messages are ignored.</span> |
| <Link id="m-issuspended" /><code>{"bool isSuspended"}</code> | <span className="api-desc">Public flag that nothing in the server build reads or sets.</span> |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared profiling timer for `PrepareForWrite`.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared profiling timer for `Serialize`.</span> |

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"private Vector3 angularVelocity"}</code> | <span className="api-desc">Last synced angular velocity. Clients blend toward it.</span> |
| <Link id="m-baselerp" /><code>{"private const float BaseLerp"}</code> | <span className="api-desc">Normal blend factor (0.3) used to pull a client body toward the synced state each fixed update.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of the body.</span> |
| <Link id="m-clientupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" clientUpdate"}</code> | <span className="api-desc">Handle for the client fixed-update method in `updateModule`.</span> |
| <Link id="m-isasleep" /><code>{"private bool isAsleep"}</code> | <span className="api-desc">Whether this client body is counted as asleep (not in `AwakeNetworkRigidbodies`).</span> |
| <Link id="m-isdestroyed" /><code>{"private bool isDestroyed"}</code> | <span className="api-desc">True when the entity has no Rigidbody, or after `DestroyRigidbody`.</span> |
| <Link id="m-isentitieschunkfullyloaded" /><code>{"private bool isEntitiesChunkFullyLoaded"}</code> | <span className="api-desc">Client: whether the chunk the body spawned in has fully loaded.</span> |
| <Link id="m-isscalechanged" /><code>{"private bool isScaleChanged"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-isserversleeping" /><code>{"private bool isServerSleeping"}</code> | <span className="api-desc">Whether the server's body was asleep in the last sync.</span> |
| <Link id="m-lastsynctime" /><code>{"private float lastSyncTime"}</code> | <span className="api-desc">Time of the last sync. 0 means none yet. After 2 seconds with no sync the client body is put to sleep.</span> |
| <Link id="m-lerp" /><code>{"private float lerp"}</code> | <span className="api-desc">Current blend factor toward the synced state. Lowered for a while after the client hands back authority.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-positionserializer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionserializer-t">{"PositionSerializer"}</Link>{"<"}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{"> positionSerializer"}</code> | <span className="api-desc">Writes and reads the body's position and rotation, chunk relative.</span> |
| <Link id="m-spawnedinchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" spawnedInChunk"}</code> | <span className="api-desc">Client: the chunk the body spawned in, waited on before sleeping.</span> |
| <Link id="m-synckinematic" /><code>{"private bool syncKinematic"}</code> | <span className="api-desc">Synced kinematic state. While true, the client doesn't blend physics.</span> |
| <Link id="m-syncsecondarycollision" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{"> syncSecondaryCollision"}</code> | <span className="api-desc">Method sync made in `Initialize` for `SecondaryPhysics`.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Fixed update module that runs `ClientUpdate` for every active client body.</span> |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | <span className="api-desc">Last synced velocity. Clients blend toward it.</span> |
| <Link id="m-waskinematic" /><code>{"private bool wasKinematic"}</code> | <span className="api-desc">Kinematic state at the last write, used to spot changes.</span> |
| <Link id="m-wassleeping" /><code>{"private bool wasSleeping"}</code> | <span className="api-desc">Sleep state at the last write. A body that stays asleep and unchanged isn't resent.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-awakenetworkrigidbodies" /><code>{"static int AwakeNetworkRigidbodies { get; private set; }"}</code> | <span className="api-desc">Count of network rigidbodies not asleep, across the scene.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">Client: true while the client update is running.</span> |
| <Link id="m-movementcontext" /><code><Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; set; }"}</code> | <span className="api-desc">Context that synced positions are relative to.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Last synced position.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> | <span className="api-desc">Last synced rotation.</span> |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | <span className="api-desc">Number of network rigidbodies in the scene.</span> |
| <Link id="m-topic" /><code>{"Rigidbody Topic { get; private set; }"}</code> | <span className="api-desc">The Unity rigidbody being synced.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Caps this behaviour's serialized data at 265 bits.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the shared `prepareForWriteTimer` profiling counter.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the shared `serializeTimer` profiling counter.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clientupdate-2" /><code>{"void ClientUpdate()"}</code> | <span className="api-desc">Client, each fixed update: eases the body towards the synced values, or snaps and sleeps it after 2 seconds without an update.</span> |
| <Link id="m-destroyrigidbody" /><code>{"void DestroyRigidbody()"}</code> | <span className="api-desc">Destroys the Unity rigidbody and stops updating.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the position serializer and messages. Clients wait for the chunk to load before handling updates.</span> |
| <Link id="m-lerpauthorityfromclient" /><code>{"void LerpAuthorityFromClient(float initialLerp, float duration)"}</code> | <span className="api-desc">Lowers the easing strength for a while, then ramps it back up to the normal 0.3.</span> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Server: reports a change unless the body was and still is asleep with the same kinematic state.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Forgets the last sync time, so the next full update snaps the body into place.</span> |
| <Link id="m-sendsecondarycollision" /><code>{"void SendSecondaryCollision("}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hit)"}</code> | <span className="api-desc">Sends another body's state after a collision, on the next frame. Only used when `HasSecondaryPhysics` is on.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads the kinematic flag, position, rotation, sleep state and velocities.</span> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isEnabled)"}</code> | <span className="api-desc">Wakes the body's tracking; on a client also starts or stops the client update.</span> |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | <span className="api-desc">Finds the rigidbody on this object again.</span> |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | <span className="api-desc">Resets the easing strength.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyserializedvalues" /><code>{"private void ApplySerializedValues(bool isWriteFull)"}</code> | <span className="api-desc">Client: snaps the body to the synced position, kinematic state and velocity when needed, or puts it to sleep if the server's is asleep.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Counts the body in `SpawnedCount` and `AwakeNetworkRigidbodies`.</span> |
| <Link id="m-checkclientupdate" /><code>{"private void CheckClientUpdate(bool isActive)"}</code> | <span className="api-desc">Registers or removes the client fixed-update method when the body becomes active or inactive.</span> |
| <Link id="m-chunkfinishedloading" /><code>{"private void ChunkFinishedLoading("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Marks the spawn chunk as loaded so the client update can put the body to sleep.</span> |
| <Link id="m-delaydestroy" /><code>{"private void DelayDestroy()"}</code> | <span className="api-desc">Destroys the entity if it still has no chunk. Used by the obsolete chunk serializer.</span> |
| <Link id="m-disabledestroy" /><code>{"private void DisableDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Client: on scene destroy, unhooks the chunk load event and the client update.</span> |
| <Link id="m-fadedampenjump" /><code>{"private IEnumerator FadeDampenJump(float initialLerp, float duration) (iterator)"}</code> | <span className="api-desc">Coroutine that ramps the blend factor from a starting value back up to 0.3 over a duration.</span> |
| <Link id="m-isparentnull" /><code>{"private static bool IsParentNull("}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" target)"}</code> | <span className="api-desc">True when the body has no parent or sits in the spawner's default folder.</span> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | <span className="api-desc">After a load, applies the saved kinematic state and velocity, or puts the body to sleep.</span> |
| <Link id="m-makeparentnull" /><code>{"private static void MakeParentNull("}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" target)"}</code> | <span className="api-desc">Unparents the body's transform.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Updates the counters and unhooks the chunk event and client update.</span> |
| <Link id="m-predictposition" /><code>{"private Vector3 PredictPosition(Vector3 initialVelocity, float time)"}</code> | <span className="api-desc">Works out a position offset from a velocity over time, with gravity. Not called in this build.</span> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | <span className="api-desc">When the entity is replaced, copies velocity and angular velocity to the new body unless position is excluded.</span> |
| <Link id="m-secondaryphysics" /><code>{"private void SecondaryPhysics("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitNetworkRigidbody)"}</code> | <span className="api-desc">Method sync for a body another body hit: position, rotation and velocities. Server relays it. Only runs if `HasSecondaryPhysics`.</span> |
| <Link id="m-sendsecondarycoroutine" /><code>{"private IEnumerator SendSecondaryCoroutine("}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" hitRigidbody) (iterator)"}</code> | <span className="api-desc">Waits a physics step and a frame, then sends the secondary collision sync.</span> |
| <Link id="m-serializechunkandposition" /><code>{"private void SerializeChunkAndPosition("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, ref Vector3 position)"}</code> | <span className="api-desc">Obsolete: writes or reads a chunk index (13 bits) and the position in that chunk.</span> |
| <Link id="m-waitforchunktobeloadedtohandleremote" /><code>{"private void WaitForChunkToBeLoadedToHandleRemote()"}</code> | <span className="api-desc">Client: finds the chunk the body spawned in and waits for it to fully load if it hasn't.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkRigidbody`:

<div className="api-used-in">

[`CraftingPart.networkRigidbody`](/mod/game-api/types/alta-crafting/craftingpart#m-networkrigidbody), [`Lock.rigidBody`](/mod/game-api/types/alta-items/lock#m-rigidbody), [`Lock.Rigidbody`](/mod/game-api/types/alta-items/lock#m-rigidbody-2), [`StabilizePickupJoint.jointNetworkRigidbody`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-jointnetworkrigidbody), [`StaticPlatformSupport.positionSerializer`](/mod/game-api/types/alta-networking/staticplatformsupport#m-positionserializer), [`ObjectHistory.networkRigidbody`](/mod/game-api/types/alta-world-generation/objecthistory#m-networkrigidbody), [`Embeddable.networkRigidbody`](/mod/game-api/types/global-e-h/embeddable#m-networkrigidbody), [`EmptyJoint.networkRigidbody`](/mod/game-api/types/global-e-h/emptyjoint#m-networkrigidbody), [`Pickup.networkRigidbody`](/mod/game-api/types/global-p/pickup#m-networkrigidbody), [`Pickup.NetworkRigidbody`](/mod/game-api/types/global-p/pickup#m-networkrigidbody-2), [`SmallProjectile.networkRigidbody`](/mod/game-api/types/global-s/smallprojectile#m-networkrigidbody), [`VelocityJoint.networkRigidbody`](/mod/game-api/types/global-t-x/velocityjoint#m-networkrigidbody).

</div>
