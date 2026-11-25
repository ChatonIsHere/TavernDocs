---
title: "GenericVFXController"
description: "class GenericVFXController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericVFXController

A **class** in `Root.Township`, `Features`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`HandTouchVfxController`](/game-api/types/game-other-namespaces/handtouchvfxcontroller), [`RepairBoxVfxController`](/game-api/types/game-other-namespaces/repairboxvfxcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericVFXController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activepooledsystems" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"> activePooledSystems"}</code> |  |
| <Link id="m-allindex" /><code>{"private const int AllIndex"}</code> |  |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> |  |
| <Link id="m-btnstop" /><code>{"private bool btnStop"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-pooldefinitions" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{"[] poolDefinitions"}</code> |  |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> |  |
| <Link id="m-syncparticleactivation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncParticleActivation"}</code> |  |
| <Link id="m-syncparticlestop" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncParticleStop"}</code> |  |
| <Link id="m-tomilliseconds" /><code>{"private const int ToMilliseconds"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-playall" /><code>{"void PlayAll()"}</code> |  |
| <Link id="m-playvfxatindex" /><code>{"void PlayVfxAtIndex(int index)"}</code> |  |
| <Link id="m-stopall" /><code>{"void StopAll()"}</code> |  |
| <Link id="m-stopvfxfromindex" /><code>{"void StopVfxFromIndex(int index)"}</code> |  |
| <Link id="m-canplaypooledparticleeffect" /><code>{"private bool CanPlayPooledParticleEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> |  |
| <Link id="m-isvalidindex" /><code>{"private bool IsValidIndex(int index)"}</code> |  |
| <Link id="m-isvalidlocaltest" /><code>{"private bool IsValidLocalTest("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-playallpooledparticleeffects" /><code>{"private void PlayAllPooledParticleEffects()"}</code> |  |
| <Link id="m-playpooledparticleeffect" /><code>{"private async void PlayPooledParticleEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> |  |
| <Link id="m-playvfxonclient" /><code>{"private void PlayVfxOnClient(int index)"}</code> |  |
| <Link id="m-stopalltargetsystems" /><code>{"private void StopAllTargetSystems("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"[] pooledParticleSystems)"}</code> |  |
| <Link id="m-stopalltargetsystemswithindex" /><code>{"private void StopAllTargetSystemsWithIndex("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{"[] pooledParticleSystems, int index)"}</code> |  |
| <Link id="m-stoptargetsystem" /><code>{"private void StopTargetSystem("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{" targetPooledParticleSystem)"}</code> |  |
| <Link id="m-stopvfxonclient" /><code>{"private void StopVfxOnClient(int index)"}</code> |  |
| <Link id="m-syncparticleactivationtoclient" /><code>{"private void SyncParticleActivationToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> |  |
| <Link id="m-syncparticlestoptoclient" /><code>{"private void SyncParticleStopToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> |  |
