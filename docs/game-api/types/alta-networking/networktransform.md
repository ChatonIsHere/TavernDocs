---
title: "NetworkTransform"
description: "Syncs a transform's local position, rotation and optional scale from the authoritative side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkTransform

A **class** in `Root.Township`, `Alta.Networking`.

Syncs a transform's local position, rotation and optional scale from the authoritative side. Remote copies lerp toward it each fixed update, or snap when far off.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkTransform()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for `Serialize`. |

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> | Rotation change threshold as a quaternion dot. A rotation closer than this to the last sent one doesn't count as a change. |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> | Handle for the registered `HandleRemote` fixed-update callback, or null when not lerping. |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | Lerp factor per fixed update on clients. At 1 or more the client snaps instead of lerping. Set by `SetLerp`. |
| <Link id="m-isalwayssnapping" /><code>{"private bool isAlwaysSnapping"}</code> | True on the server, or when the lerp factor is 1 or more: received values are applied with `Snap` every time. |
| <Link id="m-isincludingscale" /><code>{"private bool isIncludingScale"}</code> | Whether uniform scale (the x of local scale) is synced as well. |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> | True while a `Snap` is queued for the end of the current receive. |
| <Link id="m-isworldbasedposition" /><code>{"private bool isWorldBasedPosition"}</code> | When true, position is sent with its chunk via `Chunk.SerializeChunkAndPosition`. When false, as a short local vector (up to 10 units). |
| <Link id="m-lastsynctime" /><code>{"private float lastSyncTime"}</code> | Time of the last sync, or 0 if none yet. Nothing is applied until the first sync arrives. |
| <Link id="m-latestposition" /><code>{"private Vector3 latestPosition"}</code> | Last position applied to the transform by the lerp or a snap. |
| <Link id="m-latestrotation" /><code>{"private Quaternion latestRotation"}</code> | Last rotation applied to the transform by the lerp or a snap. |
| <Link id="m-latestscale" /><code>{"private float latestScale"}</code> | Last scale applied to the transform by the lerp or a snap. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maximumscale" /><code>{"private const float MaximumScale"}</code> | Largest scale the 10-bit scale field can send (10.23). |
| <Link id="m-movementthresholdsquared" /><code>{"private float movementThresholdSquared"}</code> | Squared distance the transform must move before a new position is sent. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Position being sent, or the last one received. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Rotation being sent, or the last one received. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Uniform scale being sent, or the last one received. |
| <Link id="m-scalebits" /><code>{"private const int ScaleBits"}</code> | Number of bits used to send the scale (10). |
| <Link id="m-scalechangedcount" /><code>{"private int scaleChangedCount"}</code> | Countdown of syncs that still include the scale after it last changed. Reset to `UnchangedResend`. |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | Distance from the received position past which the client snaps instead of lerping (default 2). |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> | Square of `snapDistance`, worked out in `Initialize`. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | Transform that is synced. Falls back to this object's own transform when empty. |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> | How many more syncs keep sending the scale after it stops changing (30). |
| <Link id="m-wasnullchunk" /><code>{"private bool wasNullChunk"}</code> | Server: set when the entity tried to sync with no chunk. A second time in a row destroys the entity. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targettransform-2" /><code>{"Transform TargetTransform { get; set; }"}</code> | The transform synced. Defaults to this object's own. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | Most bits one sync of this component can write (109). |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Returns the static timer shared by all `NetworkTransform`s for profiling `PrepareForWrite`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Returns the static timer shared by all `NetworkTransform`s for profiling `Serialize`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | On clients, starts the lerp update. The server always snaps. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: no extra setup. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | Records the current transform and returns whether it moved, turned or scaled past the thresholds. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the position (with chunk when world based), rotation and scale. Schedules a snap when the gap is large. |
| <Link id="m-setlerp" /><code>{"void SetLerp(float lerp)"}</code> | Sets how much of the gap is closed each fixed update. `PlayerLocomotionController` sets it from the smoothing setting. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | Client: runs each fixed update and lerps the target transform toward the last received position, rotation and scale. |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | On the local player's own object, stops the remote lerp so synced values don't pull the player around. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the fixed-update lerp. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Registers the fixed-update lerp again if the entity is initialized and this side doesn't always snap. |
| <Link id="m-snap" /><code>{"private void Snap()"}</code> | Moves the transform straight to the received values. Queued for the end of a receive when the gap is past `snapDistance`. |

</details>

## Used in

Members of other types that take, return or hold a `NetworkTransform`:

[`CharacterLocalityController.headNetworkTransform`](/game-api/types/alta-player/characterlocalitycontroller#m-headnetworktransform), [`Controller.networkTransform`](/game-api/types/global-c-d/controller#m-networktransform), [`Controller.NetworkTransform`](/game-api/types/global-c-d/controller#m-networktransform-2), [`PlayerLocomotionController.smoothTransforms`](/game-api/types/global-p/playerlocomotioncontroller#m-smoothtransforms).
