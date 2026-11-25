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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkTransform()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for `Serialize`. |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedUpdate"}</code> |  |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> |  |
| <Link id="m-isalwayssnapping" /><code>{"private bool isAlwaysSnapping"}</code> |  |
| <Link id="m-isincludingscale" /><code>{"private bool isIncludingScale"}</code> |  |
| <Link id="m-issnapping" /><code>{"private bool isSnapping"}</code> |  |
| <Link id="m-isworldbasedposition" /><code>{"private bool isWorldBasedPosition"}</code> |  |
| <Link id="m-lastsynctime" /><code>{"private float lastSyncTime"}</code> |  |
| <Link id="m-latestposition" /><code>{"private Vector3 latestPosition"}</code> |  |
| <Link id="m-latestrotation" /><code>{"private Quaternion latestRotation"}</code> |  |
| <Link id="m-latestscale" /><code>{"private float latestScale"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maximumscale" /><code>{"private const float MaximumScale"}</code> |  |
| <Link id="m-movementthresholdsquared" /><code>{"private float movementThresholdSquared"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |  |
| <Link id="m-scale" /><code>{"private float scale"}</code> |  |
| <Link id="m-scalebits" /><code>{"private const int ScaleBits"}</code> |  |
| <Link id="m-scalechangedcount" /><code>{"private int scaleChangedCount"}</code> |  |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> |  |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> |  |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |  |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> |  |
| <Link id="m-wasnullchunk" /><code>{"private bool wasNullChunk"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-targettransform-2" /><code>{"Transform TargetTransform { get; set; }"}</code> | The transform synced. Defaults to this object's own. |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | On clients, starts the lerp update. The server always snaps. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: no extra setup. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | Records the current transform and returns whether it moved, turned or scaled past the thresholds. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the position (with chunk when world based), rotation and scale. Schedules a snap when the gap is large. |
| <Link id="m-setlerp" /><code>{"void SetLerp(float lerp)"}</code> | Sets how much of the gap is closed each fixed update. `PlayerLocomotionController` sets it from the smoothing setting. |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |  |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-snap" /><code>{"private void Snap()"}</code> |  |

## Used in

Members of other types that take, return or hold a `NetworkTransform`:

[`CharacterLocalityController.headNetworkTransform`](/game-api/types/alta-player/characterlocalitycontroller#m-headnetworktransform), [`Controller.networkTransform`](/game-api/types/global-c-d/controller#m-networktransform), [`Controller.NetworkTransform`](/game-api/types/global-c-d/controller#m-networktransform-2), [`PlayerLocomotionController.smoothTransforms`](/game-api/types/global-p/playerlocomotioncontroller#m-smoothtransforms).
