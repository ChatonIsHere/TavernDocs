---
title: "OrbBasinVfxController"
description: "Plays the particle trail from a climbing tower orb basin to a player: orb obtained, permanent unlock or tower completion."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OrbBasinVfxController

A **class** in `Root.Township`, `Features.Gameplay`.

Plays the particle trail from a climbing tower orb basin to a player: orb obtained, permanent unlock or tower completion. The server picks which and tells clients in the chunk, who play it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<OrbBasinVfxControllerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<OrbBasinVfxControllerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`OrbBasinVfxControllerSaveData`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata)
- **Nested types** [`ParticleType`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller-particletype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OrbBasinVfxController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addunlocktoplayer" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/addunlocktoplayer">{"AddUnlockToPlayer"}</Link>{" addUnlockToPlayer"}</code> | <span className="api-desc">The basin's `AddUnlockToPlayer`, whose unlock decides the permanent unlock effect.</span> |
| <Link id="m-orbobtainedvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" orbObtainedVfxData"}</code> | <span className="api-desc">Effect played when a player in spirit mode gets an orb. Saved.</span> |
| <Link id="m-particleorigin" /><code>{"private Transform particleOrigin"}</code> | <span className="api-desc">Where the particles start.</span> |
| <Link id="m-permanentunlockvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" permanentUnlockVfxData"}</code> | <span className="api-desc">Effect played when a player gets the permanent unlock. Saved.</span> |
| <Link id="m-playerunlockstation" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockstation">{"PlayerUnlockStation"}</Link>{" playerUnlockStation"}</code> | <span className="api-desc">The unlock station this basin belongs to.</span> |
| <Link id="m-syncorbbasinparticles" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncOrbBasinParticles"}</code> | <span className="api-desc">Method sync that plays an effect for a player.</span> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | <span className="api-desc">Method sync for the VFX data references.</span> |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer"}</code> | <span className="api-desc">The player the current effect is for.</span> |
| <Link id="m-towercompletionvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" towerCompletionVfxData"}</code> | <span className="api-desc">Effect played at a completion station. Saved.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the setup sync on `VfxData` and the play sync on `EnchantmentEffect`.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata">{"OrbBasinVfxControllerSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Restores the three VFX data references from save data.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the VFX data references to the joining player.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata">{"OrbBasinVfxControllerSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves the three VFX data references.</span> |
| <Link id="m-tryplayparticlesforplayer" /><code>{"void TryPlayParticlesForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: sets the target player and plays whichever effects apply. Usually called from the scene.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canplaybasinparticles" /><code>{"private bool CanPlayBasinParticles()"}</code> | <span className="api-desc">False on a headless server; in a local test, true when there is a target player; true on clients.</span> |
| <Link id="m-canplayparticlesforpermanentunlock" /><code>{"private bool CanPlayParticlesForPermanentUnlock()"}</code> | <span className="api-desc">True if the player is in spirit mode and does not have the basin's unlock yet.</span> |
| <Link id="m-canplayparticlesfortowercompletion" /><code>{"private bool CanPlayParticlesForTowerCompletion()"}</code> | <span className="api-desc">True if the unlock station is a completion station.</span> |
| <Link id="m-getvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" GetVfxData("}<Link to="/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller-particletype">{"OrbBasinVfxController.ParticleType"}</Link>{" type)"}</code> | <span className="api-desc">Returns the VFX data for an orb obtained, permanent unlock or tower completion effect.</span> |
| <Link id="m-hasvalidreferences" /><code>{"private bool HasValidReferences("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">True if the player and their unlock manager exist and the unlock station is set.</span> |
| <Link id="m-isstartunlockstation" /><code>{"private bool IsStartUnlockStation()"}</code> | <span className="api-desc">True if the unlock station is a start station.</span> |
| <Link id="m-istargetplayerinspiritmode" /><code>{"private bool IsTargetPlayerInSpiritMode()"}</code> | <span className="api-desc">True if the target player has a current unlock.</span> |
| <Link id="m-isvalid" /><code>{"private bool IsValid("}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData)"}</code> | <span className="api-desc">True if the references are valid and the VFX data exists and is set to play.</span> |
| <Link id="m-playparticle" /><code>{"private void PlayParticle("}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData)"}</code> | <span className="api-desc">Client: spawns the pooled particles at `particleOrigin` and sends them flying to the target player.</span> |
| <Link id="m-playparticlesfororbbasin" /><code>{"private void PlayParticlesForOrbBasin()"}</code> | <span className="api-desc">Server: tells chunks to play the orb obtained effect.</span> |
| <Link id="m-playparticlesforpermanentunlock" /><code>{"private void PlayParticlesForPermanentUnlock()"}</code> | <span className="api-desc">Server: tells chunks to play the permanent unlock effect.</span> |
| <Link id="m-playparticlesfortowercompletion" /><code>{"private void PlayParticlesForTowerCompletion()"}</code> | <span className="api-desc">Server: tells chunks to play the tower completion effect.</span> |
| <Link id="m-syncorbbasinparticles-2" /><code>{"private void SyncOrbBasinParticles("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int particleTypeAsInt)"}</code> | <span className="api-desc">Sends the target player and effect type; the receiver looks up the player and plays the effect.</span> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server to client: sends the three VFX data references. Logged as unauthorized if a client sends it.</span> |
| <Link id="m-tryplayparticles" /><code>{"private void TryPlayParticles()"}</code> | <span className="api-desc">Picks which effects fit the target player and station, and sends them.</span> |

</details>
