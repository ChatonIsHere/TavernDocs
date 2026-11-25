---
title: "NetworkedIKBody"
description: "class NetworkedIKBody in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedIKBody

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkedIKBody()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> |
| <Link id="m-characterikcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterikcontroller">{"CharacterIKController"}</Link>{" characterIKController"}</code> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |
| <Link id="m-fixedupdatelerptime" /><code>{"private float fixedUpdateLerpTime"}</code> |
| <Link id="m-ikboneidentifiers" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] ikBoneIdentifiers"}</code> |
| <Link id="m-ikbones" /><code>{"private Transform[] ikBones"}</code> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |
| <Link id="m-issendingbones" /><code>{"private bool[] isSendingBones"}</code> |
| <Link id="m-latestrotations" /><code>{"private Quaternion[] latestRotations"}</code> |
| <Link id="m-maxangledifference" /><code>{"private float maxAngleDifference"}</code> |
| <Link id="m-targetrotations" /><code>{"private Quaternion[] targetRotations"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-prepareforwrite" /><code>{"bool PrepareForWrite(bool isWriteFull)"}</code> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |

</details>
