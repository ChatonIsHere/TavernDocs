---
title: "NetworkedIKBody"
description: "Syncs a player's IK bone rotations from the local player to everyone else, who blend toward them each character update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedIKBody

A **class** in `Root.Township`, the global namespace.

Syncs a player's IK bone rotations from the local player to everyone else, who blend toward them each character update.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour), [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedIKBody()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for `PrepareForWrite`.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for `Serialize`.</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> | <span className="api-desc">Quaternion dot below which a bone counts as changed.</span> |
| <Link id="m-characterikcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" characterIKController"}</code> | <span className="api-desc">IK controller on the parent character.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Character dummy whose bones are synced.</span> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | <span className="api-desc">Blend factor per update toward received rotations.</span> |
| <Link id="m-ikboneidentifiers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] ikBoneIdentifiers"}</code> | <span className="api-desc">Which bones to sync.</span> |
| <Link id="m-ikbones" /><code>{"private Transform[] ikBones"}</code> | <span className="api-desc">Bone transforms being synced.</span> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">Set by `Initialize`; not otherwise used.</span> |
| <Link id="m-issendingbones" /><code>{"private bool[] isSendingBones"}</code> | <span className="api-desc">Per bone flags for which ones go in the next write.</span> |
| <Link id="m-latestrotations" /><code>{"private Quaternion[] latestRotations"}</code> | <span className="api-desc">Current rotation per bone: recorded on the local player, blended on others.</span> |
| <Link id="m-maxangledifference" /><code>{"private float maxAngleDifference"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-targetrotations" /><code>{"private Quaternion[] targetRotations"}</code> | <span className="api-desc">Last sent or received rotation per bone.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The network entity.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">33 bits per IK bone.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the shared `prepareForWriteTimer`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the shared `serializeTimer`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Marks the component initialized.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Picks the bones that moved past the angle threshold; always true for a full write.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads the bone rotations (all on a full write, else only changed ones with a flag each).</span> |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | <span className="api-desc">Local player: records bone rotations. Others: blends toward the received ones.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Maps the bone IDs to transforms and sets up the rotation arrays.</span> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | <span className="api-desc">Blends each bone toward its received rotation, inside the IK controller's pre and post IK calls.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Marks this body as the local player's, so it sends instead of receives.</span> |

</details>
