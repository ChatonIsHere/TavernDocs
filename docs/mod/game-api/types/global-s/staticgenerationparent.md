---
title: "StaticGenerationParent"
description: "Networked root for static generation: picks a seed on the server, saves it, sends it to joining players, and each side regenerates the same static children..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticGenerationParent

A **class** in `Root.Township`, the global namespace.

Networked root for static generation: picks a seed on the server, saves it, sends it to joining players, and each side regenerates the same static children from that seed.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IStaticGeneration`](/mod/game-api/types/global-i-l/istaticgeneration), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour), [`ISavable<StaticGenerationParentSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<StaticGenerationParentSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`StaticGenerationParentSaveData`](/mod/game-api/types/global-s/staticgenerationparentsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticGenerationParent()"}</code> | <span className="api-desc">Creates a `StaticGenerationParent` with default values.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btntest" /><code>{"private bool btnTest"}</code> | <span className="api-desc">Inspector button that calls `Test`.</span> |
| <Link id="m-btntestrest" /><code>{"private bool btnTestRest"}</code> | <span className="api-desc">Inspector button that calls `TestReset`.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-isgenerated" /><code>{"private bool isGenerated"}</code> | <span className="api-desc">True once the targets have been generated, so a second `Generate` call does nothing.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; reports null entries in `targets`.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Random seed for generation. -1 until the server picks one or loads it from the save.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync that sends the seed to clients.</span> |
| <Link id="m-targets" /><code>{"private List<GameObject> targets"}</code> | <span className="api-desc">Child objects whose static generation this parent runs.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The `NetworkEntity` on this object, cached on `Initialize`.</span> |

## Methods

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void Generate("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | <span className="api-desc">The private overload runs static generation on this object with the saved seed. The interface one generates each of `targets` with its own random seed, once until `Reset`.</span> |
| <Link id="m-generate-2" /><code>{"private void IStaticGeneration.Generate("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">The private overload runs static generation on this object with the saved seed. The interface one generates each of `targets` with its own random seed, once until `Reset`.</span> |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | <span className="api-desc">Caches the entity and sets up the `StaticSeed` method sync.</span> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | <span className="api-desc">Server: picks a random seed if none was loaded, then generates.</span> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the seed to the joining player.</span> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-reset" /><code>{"private void IStaticGeneration.Reset()"}</code> | <span className="api-desc">Clears `isGenerated` and resets every target.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the seed; a client that receives it generates the static content.</span> |
| <Link id="m-test" /><code>{"private void Test()"}</code> | <span className="api-desc">Editor button: resets and regenerates with the current seed, or a random one if none is set.</span> |
| <Link id="m-testreset" /><code>{"private void TestReset()"}</code> | <span className="api-desc">Editor button: resets all static generation on this object.</span> |

</details>
