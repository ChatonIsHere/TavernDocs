---
title: "GenericVFXController"
description: "Networked trigger for a list of pooled particle effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericVFXController

A **class** in `Root.Township`, `Features`.

Networked trigger for a list of pooled particle effects. The server says which effect to play or stop (by index, or -1 for all) and clients spawn them at `spawnPoint`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`HandTouchVfxController`](/game-api/types/game-other-namespaces/handtouchvfxcontroller), [`RepairBoxVfxController`](/game-api/types/game-other-namespaces/repairboxvfxcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericVFXController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activepooledsystems" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"> activePooledSystems"}</code> | Client: effects currently playing. |
| <Link id="m-allindex" /><code>{"private const int AllIndex"}</code> | -1, meaning every effect in the list. |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> | Inspector button that calls `PlayAll`. |
| <Link id="m-btnstop" /><code>{"private bool btnStop"}</code> | Inspector button that calls `StopAll`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pooldefinitions" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] poolDefinitions"}</code> | Pooled particle effects, addressed by index. |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | Where effects spawn, and their rotation. |
| <Link id="m-syncparticleactivation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncParticleActivation"}</code> | Method sync for play messages. |
| <Link id="m-syncparticlestop" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncParticleStop"}</code> | Method sync for stop messages. |
| <Link id="m-tomilliseconds" /><code>{"private const int ToMilliseconds"}</code> | 1000, used to turn effect durations into a delay. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the play and stop syncs on `VfxControllerPlay` and `VfxControllerStop`. |
| <Link id="m-playall" /><code>{"void PlayAll()"}</code> | Server: plays every effect on clients. |
| <Link id="m-playvfxatindex" /><code>{"void PlayVfxAtIndex(int index)"}</code> | Server: tells clients in the chunk to play the effect at the index (or all for -1). |
| <Link id="m-stopall" /><code>{"void StopAll()"}</code> | Server: stops every effect on clients. |
| <Link id="m-stopvfxfromindex" /><code>{"void StopVfxFromIndex(int index)"}</code> | Server: tells clients to stop the effect at the index (or all for -1). |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canplaypooledparticleeffect" /><code>{"private bool CanPlayPooledParticleEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | True on clients or local test when the definition exists; never on a dedicated server. |
| <Link id="m-isvalidindex" /><code>{"private bool IsValidIndex(int index)"}</code> | True for -1 or an index inside `poolDefinitions`. |
| <Link id="m-isvalidlocaltest" /><code>{"private bool IsValidLocalTest("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | True when reading in a local test, so the effect also plays there. |
| <Link id="m-playallpooledparticleeffects" /><code>{"private void PlayAllPooledParticleEffects()"}</code> | Client: plays each effect in the list. |
| <Link id="m-playpooledparticleeffect" /><code>{"private async void PlayPooledParticleEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | Client: spawns the pooled effect at the spawn point and, if it auto-disables, stops it after its duration. |
| <Link id="m-playvfxonclient" /><code>{"private void PlayVfxOnClient(int index)"}</code> | Client: plays the effect at the index, or all of them. |
| <Link id="m-stopalltargetsystems" /><code>{"private void StopAllTargetSystems("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"[] pooledParticleSystems)"}</code> | Client: stops all the given systems. |
| <Link id="m-stopalltargetsystemswithindex" /><code>{"private void StopAllTargetSystemsWithIndex("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"[] pooledParticleSystems, int index)"}</code> | Client: stops the given systems that came from the pool at the index. |
| <Link id="m-stoptargetsystem" /><code>{"private void StopTargetSystem("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{" targetPooledParticleSystem)"}</code> | Deactivates and releases a system back to its pool, and forgets it. |
| <Link id="m-stopvfxonclient" /><code>{"private void StopVfxOnClient(int index)"}</code> | Client: stops active effects for the index, or all of them. |
| <Link id="m-syncparticleactivationtoclient" /><code>{"private void SyncParticleActivationToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | Sends the index and plays it on remote clients. |
| <Link id="m-syncparticlestoptoclient" /><code>{"private void SyncParticleStopToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | Sends the index and stops it on remote clients. |

</details>
