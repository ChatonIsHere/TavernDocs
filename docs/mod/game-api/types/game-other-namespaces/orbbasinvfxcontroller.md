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
| <Link id="m-ctor" /><code>{"OrbBasinVfxController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addunlocktoplayer" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/addunlocktoplayer">{"AddUnlockToPlayer"}</Link>{" addUnlockToPlayer"}</code> | The basin's `AddUnlockToPlayer`, whose unlock decides the permanent unlock effect. |
| <Link id="m-orbobtainedvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" orbObtainedVfxData"}</code> | Effect played when a player in spirit mode gets an orb. Saved. |
| <Link id="m-particleorigin" /><code>{"private Transform particleOrigin"}</code> | Where the particles start. |
| <Link id="m-permanentunlockvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" permanentUnlockVfxData"}</code> | Effect played when a player gets the permanent unlock. Saved. |
| <Link id="m-playerunlockstation" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockstation">{"PlayerUnlockStation"}</Link>{" playerUnlockStation"}</code> | The unlock station this basin belongs to. |
| <Link id="m-syncorbbasinparticles" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncOrbBasinParticles"}</code> | Method sync that plays an effect for a player. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | Method sync for the VFX data references. |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" targetPlayer"}</code> | The player the current effect is for. |
| <Link id="m-towercompletionvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" towerCompletionVfxData"}</code> | Effect played at a completion station. Saved. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the setup sync on `VfxData` and the play sync on `EnchantmentEffect`. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata">{"OrbBasinVfxControllerSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Restores the three VFX data references from save data. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the VFX data references to the joining player. |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata">{"OrbBasinVfxControllerSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves the three VFX data references. |
| <Link id="m-tryplayparticlesforplayer" /><code>{"void TryPlayParticlesForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: sets the target player and plays whichever effects apply. Usually called from the scene. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canplaybasinparticles" /><code>{"private bool CanPlayBasinParticles()"}</code> | False on a headless server; in a local test, true when there is a target player; true on clients. |
| <Link id="m-canplayparticlesforpermanentunlock" /><code>{"private bool CanPlayParticlesForPermanentUnlock()"}</code> | True if the player is in spirit mode and does not have the basin's unlock yet. |
| <Link id="m-canplayparticlesfortowercompletion" /><code>{"private bool CanPlayParticlesForTowerCompletion()"}</code> | True if the unlock station is a completion station. |
| <Link id="m-getvfxdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" GetVfxData("}<Link to="/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller-particletype">{"OrbBasinVfxController.ParticleType"}</Link>{" type)"}</code> | Returns the VFX data for an orb obtained, permanent unlock or tower completion effect. |
| <Link id="m-hasvalidreferences" /><code>{"private bool HasValidReferences("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if the player and their unlock manager exist and the unlock station is set. |
| <Link id="m-isstartunlockstation" /><code>{"private bool IsStartUnlockStation()"}</code> | True if the unlock station is a start station. |
| <Link id="m-istargetplayerinspiritmode" /><code>{"private bool IsTargetPlayerInSpiritMode()"}</code> | True if the target player has a current unlock. |
| <Link id="m-isvalid" /><code>{"private bool IsValid("}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData)"}</code> | True if the references are valid and the VFX data exists and is set to play. |
| <Link id="m-playparticle" /><code>{"private void PlayParticle("}<Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" vfxData)"}</code> | Client: spawns the pooled particles at `particleOrigin` and sends them flying to the target player. |
| <Link id="m-playparticlesfororbbasin" /><code>{"private void PlayParticlesForOrbBasin()"}</code> | Server: tells chunks to play the orb obtained effect. |
| <Link id="m-playparticlesforpermanentunlock" /><code>{"private void PlayParticlesForPermanentUnlock()"}</code> | Server: tells chunks to play the permanent unlock effect. |
| <Link id="m-playparticlesfortowercompletion" /><code>{"private void PlayParticlesForTowerCompletion()"}</code> | Server: tells chunks to play the tower completion effect. |
| <Link id="m-syncorbbasinparticles-2" /><code>{"private void SyncOrbBasinParticles("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int particleTypeAsInt)"}</code> | Sends the target player and effect type; the receiver looks up the player and plays the effect. |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server to client: sends the three VFX data references. Logged as unauthorized if a client sends it. |
| <Link id="m-tryplayparticles" /><code>{"private void TryPlayParticles()"}</code> | Picks which effects fit the target player and station, and sends them. |

</details>
