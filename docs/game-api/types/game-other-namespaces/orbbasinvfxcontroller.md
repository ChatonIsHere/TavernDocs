---
title: "OrbBasinVfxController"
description: "class OrbBasinVfxController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OrbBasinVfxController

A **class** in `Root.Township`, `Features.Gameplay`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<OrbBasinVfxControllerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<OrbBasinVfxControllerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`OrbBasinVfxControllerSaveData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata)
- **Nested types** [`ParticleType`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller-particletype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OrbBasinVfxController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-addunlocktoplayer" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/addunlocktoplayer">{"AddUnlockToPlayer"}</Link>{" addUnlockToPlayer"}</code> |  |
| <Link id="m-orbobtainedvfxdata" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" orbObtainedVfxData"}</code> |  |
| <Link id="m-particleorigin" /><code>{"private Transform particleOrigin"}</code> |  |
| <Link id="m-permanentunlockvfxdata" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" permanentUnlockVfxData"}</code> |  |
| <Link id="m-playerunlockstation" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlockstation">{"PlayerUnlockStation"}</Link>{" playerUnlockStation"}</code> |  |
| <Link id="m-syncorbbasinparticles" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncOrbBasinParticles"}</code> |  |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> |  |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer"}</code> |  |
| <Link id="m-towercompletionvfxdata" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" towerCompletionVfxData"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata">{"OrbBasinVfxControllerSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata">{"OrbBasinVfxControllerSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-tryplayparticlesforplayer" /><code>{"void TryPlayParticlesForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-canplaybasinparticles" /><code>{"private bool CanPlayBasinParticles()"}</code> |  |
| <Link id="m-canplayparticlesforpermanentunlock" /><code>{"private bool CanPlayParticlesForPermanentUnlock()"}</code> |  |
| <Link id="m-canplayparticlesfortowercompletion" /><code>{"private bool CanPlayParticlesForTowerCompletion()"}</code> |  |
| <Link id="m-getvfxdata" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" GetVfxData("}<Link to="/game-api/types/game-other-namespaces/orbbasinvfxcontroller-particletype">{"OrbBasinVfxController.ParticleType"}</Link>{" type)"}</code> |  |
| <Link id="m-hasvalidreferences" /><code>{"private bool HasValidReferences("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-isstartunlockstation" /><code>{"private bool IsStartUnlockStation()"}</code> |  |
| <Link id="m-istargetplayerinspiritmode" /><code>{"private bool IsTargetPlayerInSpiritMode()"}</code> |  |
| <Link id="m-isvalid" /><code>{"private bool IsValid("}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData)"}</code> |  |
| <Link id="m-playparticle" /><code>{"private void PlayParticle("}<Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData)"}</code> |  |
| <Link id="m-playparticlesfororbbasin" /><code>{"private void PlayParticlesForOrbBasin()"}</code> |  |
| <Link id="m-playparticlesforpermanentunlock" /><code>{"private void PlayParticlesForPermanentUnlock()"}</code> |  |
| <Link id="m-playparticlesfortowercompletion" /><code>{"private void PlayParticlesForTowerCompletion()"}</code> |  |
| <Link id="m-syncorbbasinparticles-2" /><code>{"private void SyncOrbBasinParticles("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int particleTypeAsInt)"}</code> |  |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-tryplayparticles" /><code>{"private void TryPlayParticles()"}</code> |  |
