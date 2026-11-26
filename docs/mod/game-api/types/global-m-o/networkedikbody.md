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
| <Link id="m-ctor" /><code>{"NetworkedIKBody()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for `PrepareForWrite`. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for `Serialize`. |

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> | Quaternion dot below which a bone counts as changed. |
| <Link id="m-characterikcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" characterIKController"}</code> | IK controller on the parent character. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Character dummy whose bones are synced. |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> | Blend factor per update toward received rotations. |
| <Link id="m-ikboneidentifiers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] ikBoneIdentifiers"}</code> | Which bones to sync. |
| <Link id="m-ikbones" /><code>{"private Transform[] ikBones"}</code> | Bone transforms being synced. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Set by `Initialize`; not otherwise used. |
| <Link id="m-issendingbones" /><code>{"private bool[] isSendingBones"}</code> | Per bone flags for which ones go in the next write. |
| <Link id="m-latestrotations" /><code>{"private Quaternion[] latestRotations"}</code> | Current rotation per bone: recorded on the local player, blended on others. |
| <Link id="m-maxangledifference" /><code>{"private float maxAngleDifference"}</code> | Unused. |
| <Link id="m-targetrotations" /><code>{"private Quaternion[] targetRotations"}</code> | Last sent or received rotation per bone. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The network entity. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | 33 bits per IK bone. |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Returns the shared `prepareForWriteTimer`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Returns the shared `serializeTimer`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Marks the component initialized. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Empty. |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Empty. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Empty. |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> | Picks the bones that moved past the angle threshold; always true for a full write. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the bone rotations (all on a full write, else only changed ones with a flag each). |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Local player: records bone rotations. Others: blends toward the received ones. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Maps the bone IDs to transforms and sets up the rotation arrays. |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | Blends each bone toward its received rotation, inside the IK controller's pre and post IK calls. |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Marks this body as the local player's, so it sends instead of receives. |

</details>
