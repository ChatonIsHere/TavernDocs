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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)
- **Attributes** `ProfileNetworkSerialized`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransform()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for `PrepareForWrite`.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for `Serialize`.</span> |

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> | <span className="api-desc">Rotation change threshold as a quaternion dot. A rotation closer than this to the last sent one doesn't count as a change.</span> |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> | <span className="api-desc">Handle for the registered `HandleRemote` fixed-update callback, or null when not lerping.</span> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | <span className="api-desc">Lerp factor per fixed update on clients. At 1 or more the client snaps instead of lerping. Set by `SetLerp`.</span> |
| <Link id="m-isalwayssnapping" /><code>{"private bool isAlwaysSnapping"}</code> | <span className="api-desc">True on the server, or when the lerp factor is 1 or more: received values are applied with `Snap` every time.</span> |
| <Link id="m-isincludingscale" /><code>{"private bool isIncludingScale"}</code> | <span className="api-desc">Whether uniform scale (the x of local scale) is synced as well.</span> |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> | <span className="api-desc">True while a `Snap` is queued for the end of the current receive.</span> |
| <Link id="m-isworldbasedposition" /><code>{"private bool isWorldBasedPosition"}</code> | <span className="api-desc">When true, position is sent with its chunk via `Chunk.SerializeChunkAndPosition`. When false, as a short local vector (up to 10 units).</span> |
| <Link id="m-lastsynctime" /><code>{"private float lastSyncTime"}</code> | <span className="api-desc">Time of the last sync, or 0 if none yet. Nothing is applied until the first sync arrives.</span> |
| <Link id="m-latestposition" /><code>{"private Vector3 latestPosition"}</code> | <span className="api-desc">Last position applied to the transform by the lerp or a snap.</span> |
| <Link id="m-latestrotation" /><code>{"private Quaternion latestRotation"}</code> | <span className="api-desc">Last rotation applied to the transform by the lerp or a snap.</span> |
| <Link id="m-latestscale" /><code>{"private float latestScale"}</code> | <span className="api-desc">Last scale applied to the transform by the lerp or a snap.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maximumscale" /><code>{"private const float MaximumScale"}</code> | <span className="api-desc">Largest scale the 10-bit scale field can send (10.23).</span> |
| <Link id="m-movementthresholdsquared" /><code>{"private float movementThresholdSquared"}</code> | <span className="api-desc">Squared distance the transform must move before a new position is sent.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Position being sent, or the last one received.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Rotation being sent, or the last one received.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Uniform scale being sent, or the last one received.</span> |
| <Link id="m-scalebits" /><code>{"private const int ScaleBits"}</code> | <span className="api-desc">Number of bits used to send the scale (10).</span> |
| <Link id="m-scalechangedcount" /><code>{"private int scaleChangedCount"}</code> | <span className="api-desc">Countdown of syncs that still include the scale after it last changed. Reset to `UnchangedResend`.</span> |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | <span className="api-desc">Distance from the received position past which the client snaps instead of lerping (default 2).</span> |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> | <span className="api-desc">Square of `snapDistance`, worked out in `Initialize`.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">Transform that is synced. Falls back to this object's own transform when empty.</span> |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> | <span className="api-desc">How many more syncs keep sending the scale after it stops changing (30).</span> |
| <Link id="m-wasnullchunk" /><code>{"private bool wasNullChunk"}</code> | <span className="api-desc">Server: set when the entity tried to sync with no chunk. A second time in a row destroys the entity.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targettransform-2" /><code>{"Transform TargetTransform { get; set; }"}</code> | <span className="api-desc">The transform synced. Defaults to this object's own.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Most bits one sync of this component can write (109).</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the static timer shared by all `NetworkTransform`s for profiling `PrepareForWrite`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the static timer shared by all `NetworkTransform`s for profiling `Serialize`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">On clients, starts the lerp update. The server always snaps.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: no extra setup.</span> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Records the current transform and returns whether it moved, turned or scaled past the thresholds.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads the position (with chunk when world based), rotation and scale. Schedules a snap when the gap is large.</span> |
| <Link id="m-setlerp" /><code>{"void SetLerp(float lerp)"}</code> | <span className="api-desc">Sets how much of the gap is closed each fixed update. `PlayerLocomotionController` sets it from the smoothing setting.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | <span className="api-desc">Client: runs each fixed update and lerps the target transform toward the last received position, rotation and scale.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">On the local player's own object, stops the remote lerp so synced values don't pull the player around.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the fixed-update lerp.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Registers the fixed-update lerp again if the entity is initialized and this side doesn't always snap.</span> |
| <Link id="m-snap" /><code>{"private void Snap()"}</code> | <span className="api-desc">Moves the transform straight to the received values. Queued for the end of a receive when the gap is past `snapDistance`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkTransform`:

<div className="api-used-in">

[`CharacterLocalityController.headNetworkTransform`](/mod/game-api/types/alta-player/characterlocalitycontroller#m-headnetworktransform), [`Controller.networkTransform`](/mod/game-api/types/global-c-d/controller#m-networktransform), [`Controller.NetworkTransform`](/mod/game-api/types/global-c-d/controller#m-networktransform-2), [`PlayerLocomotionController.smoothTransforms`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-smoothtransforms).

</div>
