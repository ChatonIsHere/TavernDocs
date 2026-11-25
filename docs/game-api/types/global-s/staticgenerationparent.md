---
title: "StaticGenerationParent"
description: "class StaticGenerationParent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticGenerationParent

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IStaticGeneration`](/game-api/types/global-i-l/istaticgeneration), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour), [`ISavable<StaticGenerationParentSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<StaticGenerationParentSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`StaticGenerationParentSaveData`](/game-api/types/global-s/staticgenerationparentsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticGenerationParent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-btntest" /><code>{"private bool btnTest"}</code> |  |
| <Link id="m-btntestrest" /><code>{"private bool btnTestRest"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-isgenerated" /><code>{"private bool isGenerated"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-targets" /><code>{"private List<GameObject> targets"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> |  |
| <Link id="m-generate-2" /><code>{"private void IStaticGeneration.Generate("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> |  |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-test" /><code>{"private void Test()"}</code> |  |
| <Link id="m-testreset" /><code>{"private void TestReset()"}</code> |  |
