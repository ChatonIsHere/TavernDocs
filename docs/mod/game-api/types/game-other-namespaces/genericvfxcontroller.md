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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`HandTouchVfxController`](/mod/game-api/types/game-other-namespaces/handtouchvfxcontroller), [`RepairBoxVfxController`](/mod/game-api/types/game-other-namespaces/repairboxvfxcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericVFXController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activepooledsystems" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"> activePooledSystems"}</code> | <span className="api-desc">Client: effects currently playing.</span> |
| <Link id="m-allindex" /><code>{"private const int AllIndex"}</code> | <span className="api-desc">-1, meaning every effect in the list.</span> |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> | <span className="api-desc">Inspector button that calls `PlayAll`.</span> |
| <Link id="m-btnstop" /><code>{"private bool btnStop"}</code> | <span className="api-desc">Inspector button that calls `StopAll`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-pooldefinitions" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] poolDefinitions"}</code> | <span className="api-desc">Pooled particle effects, addressed by index.</span> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | <span className="api-desc">Where effects spawn, and their rotation.</span> |
| <Link id="m-syncparticleactivation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncParticleActivation"}</code> | <span className="api-desc">Method sync for play messages.</span> |
| <Link id="m-syncparticlestop" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncParticleStop"}</code> | <span className="api-desc">Method sync for stop messages.</span> |
| <Link id="m-tomilliseconds" /><code>{"private const int ToMilliseconds"}</code> | <span className="api-desc">1000, used to turn effect durations into a delay.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the play and stop syncs on `VfxControllerPlay` and `VfxControllerStop`.</span> |
| <Link id="m-playall" /><code>{"void PlayAll()"}</code> | <span className="api-desc">Server: plays every effect on clients.</span> |
| <Link id="m-playvfxatindex" /><code>{"void PlayVfxAtIndex(int index)"}</code> | <span className="api-desc">Server: tells clients in the chunk to play the effect at the index (or all for -1).</span> |
| <Link id="m-stopall" /><code>{"void StopAll()"}</code> | <span className="api-desc">Server: stops every effect on clients.</span> |
| <Link id="m-stopvfxfromindex" /><code>{"void StopVfxFromIndex(int index)"}</code> | <span className="api-desc">Server: tells clients to stop the effect at the index (or all for -1).</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canplaypooledparticleeffect" /><code>{"private bool CanPlayPooledParticleEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | <span className="api-desc">True on clients or local test when the definition exists; never on a dedicated server.</span> |
| <Link id="m-isvalidindex" /><code>{"private bool IsValidIndex(int index)"}</code> | <span className="api-desc">True for -1 or an index inside `poolDefinitions`.</span> |
| <Link id="m-isvalidlocaltest" /><code>{"private bool IsValidLocalTest("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">True when reading in a local test, so the effect also plays there.</span> |
| <Link id="m-playallpooledparticleeffects" /><code>{"private void PlayAllPooledParticleEffects()"}</code> | <span className="api-desc">Client: plays each effect in the list.</span> |
| <Link id="m-playpooledparticleeffect" /><code>{"private async void PlayPooledParticleEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | <span className="api-desc">Client: spawns the pooled effect at the spawn point and, if it auto-disables, stops it after its duration.</span> |
| <Link id="m-playvfxonclient" /><code>{"private void PlayVfxOnClient(int index)"}</code> | <span className="api-desc">Client: plays the effect at the index, or all of them.</span> |
| <Link id="m-stopalltargetsystems" /><code>{"private void StopAllTargetSystems("}<Link to="/mod/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"[] pooledParticleSystems)"}</code> | <span className="api-desc">Client: stops all the given systems.</span> |
| <Link id="m-stopalltargetsystemswithindex" /><code>{"private void StopAllTargetSystemsWithIndex("}<Link to="/mod/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"[] pooledParticleSystems, int index)"}</code> | <span className="api-desc">Client: stops the given systems that came from the pool at the index.</span> |
| <Link id="m-stoptargetsystem" /><code>{"private void StopTargetSystem("}<Link to="/mod/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{" targetPooledParticleSystem)"}</code> | <span className="api-desc">Deactivates and releases a system back to its pool, and forgets it.</span> |
| <Link id="m-stopvfxonclient" /><code>{"private void StopVfxOnClient(int index)"}</code> | <span className="api-desc">Client: stops active effects for the index, or all of them.</span> |
| <Link id="m-syncparticleactivationtoclient" /><code>{"private void SyncParticleActivationToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | <span className="api-desc">Sends the index and plays it on remote clients.</span> |
| <Link id="m-syncparticlestoptoclient" /><code>{"private void SyncParticleStopToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | <span className="api-desc">Sends the index and stops it on remote clients.</span> |

</details>
