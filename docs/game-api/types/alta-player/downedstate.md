---
title: "DownedState"
description: "The player state between being knocked down and dying, used when the server's downed state duration is above 0."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownedState

A **class** in `Root.Township`, `Alta.PlayerStates`.

The player state between being knocked down and dying, used when the server's downed state duration is above 0. The server spawns a gravestone and runs a revive activity and a countdown to death; the downed player gets a respawn orb.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`DownedToDeadTransition`](/game-api/types/alta-player/downedtodeadtransition), [`DownedToPlayingTransition`](/game-api/types/alta-player/downedtoplayingtransition), [`PlayingToDownedTransition`](/game-api/types/alta-player/playingtodownedtransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownedState("}<Link to="/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState, "}<Link to="/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" newDebuffManager)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" activity"}</code> |  |
| <Link id="m-deathcountdownroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" deathCountdownRoutine"}</code> |  |
| <Link id="m-debuffmanager" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" debuffManager"}</code> |  |
| <Link id="m-gravestone" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/gravestone">{"Gravestone"}</Link>{" gravestone"}</code> |  |
| <Link id="m-gravestoneentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" gravestoneEntity"}</code> |  |
| <Link id="m-leftinteractorentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" leftInteractorEntity"}</code> |  |
| <Link id="m-leftinteractorsave" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" leftInteractorSave"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-respawnorb" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnorb">{"RespawnOrb"}</Link>{" respawnOrb"}</code> |  |
| <Link id="m-respawnorbobject" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" respawnOrbObject"}</code> |  |
| <Link id="m-rightinteractorentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" rightInteractorEntity"}</code> |  |
| <Link id="m-rightinteractorsave" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" rightInteractorSave"}</code> |  |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> |  |
| <Link id="m-syncactivateactions" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivateActions"}</code> |  |
| <Link id="m-syncdeactivateactions" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDeactivateActions"}</code> |  |
| <Link id="m-syncrespawnearly" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRespawnEarly"}</code> |  |
| <Link id="m-synctimerincreasetodownedplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncTimerIncreaseToDownedPlayer"}</code> |  |
| <Link id="m-timetorevive" /><code>{"private float timeToRevive"}</code> |  |
| <Link id="m-wasrevived" /><code>{"private bool wasRevived"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code><Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" KillingImpact { get; set; }"}</code> | The damage that downed the player. |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "Downed State". |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" Settings { get; }"}</code> | The downed state settings: timers, effects, gravestone, orbs, health returned and debuffs. |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.Downed`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcedeactivateactions" /><code>{"void ForceDeactivateActions()"}</code> | Runs the server leave logic straight away (gravestone, held items, health and debuffs). |
| <Link id="m-applyrespawndebuffs" /><code>{"private void ApplyRespawnDebuffs()"}</code> |  |
| <Link id="m-calculatespawnposition" /><code>{"private void CalculateSpawnPosition()"}</code> |  |
| <Link id="m-canplaypooledparticleeffect" /><code>{"private bool CanPlayPooledParticleEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> |  |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" downedStateSfx)"}</code> |  |
| <Link id="m-clearactivitylisteners" /><code>{"private void ClearActivityListeners()"}</code> |  |
| <Link id="m-destroygravestone" /><code>{"private void DestroyGravestone()"}</code> |  |
| <Link id="m-destroyrespawnorb" /><code>{"private void DestroyRespawnOrb()"}</code> |  |
| <Link id="m-dropdownedstateentity" /><code>{"private void DropDownedStateEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-forcedroplocalentities" /><code>{"private void ForceDropLocalEntities("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-forcegrabentity" /><code>{"private void ForceGrabEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-getrespawnorb" /><code>{"private async Task<Result<"}<Link to="/game-api/types/game-other-namespaces/respawnorb">{"RespawnOrb"}</Link>{">> GetRespawnOrb()"}</code> |  |
| <Link id="m-grabinteractables" /><code>{"private void GrabInteractables()"}</code> |  |
| <Link id="m-increasetime" /><code>{"private void IncreaseTime(float timeIncreaseInSeconds)"}</code> |  |
| <Link id="m-isholdingdownedstateentity" /><code>{"private bool IsHoldingDownedStateEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-isholdinglocalentity" /><code>{"private bool IsHoldingLocalEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-loadinteractables" /><code>{"private void LoadInteractables()"}</code> |  |
| <Link id="m-loadinteractablesonstateexit" /><code>{"private void LoadInteractablesOnStateExit()"}</code> |  |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | Server: stores held items, spawns the gravestone and starts the revive countdown. If the downed duration is 0 the player dies at once. |
| <Link id="m-onactivateactions" /><code>{"private void OnActivateActions()"}</code> |  |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | Clients: hides the body and docks and limits the hands to downed interactions. The downed player always sees ghost hands. |
| <Link id="m-onactivateremoteactions" /><code>{"private void OnActivateRemoteActions()"}</code> |  |
| <Link id="m-onactivitycompleted" /><code>{"private void OnActivityCompleted()"}</code> |  |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | Server: removes the gravestone and revive objects and gives back held items. A revived player gets some health back and respawn debuffs. |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | Clients: shows the body again, restores hand interactions and removes the respawn orb. |
| <Link id="m-onplayercontrollersetremote" /><code>{"private void OnPlayerControllerSetRemote("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" setPlayerController)"}</code> |  |
| <Link id="m-onplayercontrollersetserver" /><code>{"private void OnPlayerControllerSetServer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> |  |
| <Link id="m-playparticleeffectforplayer" /><code>{"private async void PlayParticleEffectForPlayer("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> |  |
| <Link id="m-playsoundeffectforplayer" /><code>{"private void PlaySoundEffectForPlayer("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" downedStateSfx)"}</code> |  |
| <Link id="m-saveheldinteractables" /><code>{"private void SaveHeldInteractables()"}</code> |  |
| <Link id="m-setbodycollidersandparticlesactivestate" /><code>{"private void SetBodyCollidersAndParticlesActiveState(bool isActive)"}</code> |  |
| <Link id="m-setbodyvisibility" /><code>{"private void SetBodyVisibility(bool isVisible)"}</code> |  |
| <Link id="m-setdockvisibility" /><code>{"private void SetDockVisibility(bool isVisible)"}</code> |  |
| <Link id="m-setnaturalhealthregenerationenabledstate" /><code>{"private void SetNaturalHealthRegenerationEnabledState(bool isEnabled)"}</code> |  |
| <Link id="m-setplayervisibility" /><code>{"private void SetPlayerVisibility(bool isVisible)"}</code> |  |
| <Link id="m-sharedsetup" /><code>{"private void SharedSetup()"}</code> |  |
| <Link id="m-spawngravestone" /><code>{"private void SpawnGravestone()"}</code> |  |
| <Link id="m-spawninteractablefromsave" /><code>{"private void SpawnInteractableFromSave("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" saveData, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-spawnrespawnorb" /><code>{"private async void SpawnRespawnOrb()"}</code> |  |
| <Link id="m-startplayerdeath" /><code>{"private async void StartPlayerDeath()"}</code> |  |
| <Link id="m-startplayerdeathcountdown" /><code>{"private IEnumerator StartPlayerDeathCountdown() (iterator)"}</code> |  |
| <Link id="m-startreviveactivity" /><code>{"private void StartReviveActivity()"}</code> |  |
| <Link id="m-stopparticleeffect" /><code>{"private void StopParticleEffect("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{" particleSystem)"}</code> |  |
| <Link id="m-syncactivateactions-2" /><code>{"private void SyncActivateActions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncdeactivateactions-2" /><code>{"private void SyncDeactivateActions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncrespawnearly-2" /><code>{"private void SyncRespawnEarly("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-synctimerincreasetodownedplayer-2" /><code>{"private void SyncTimerIncreaseToDownedPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float timeIncreaseInSeconds)"}</code> |  |
| <Link id="m-tryrestorehealthtoplayer" /><code>{"private void TryRestoreHealthToPlayer()"}</code> |  |
| <Link id="m-trysaveinteractable" /><code>{"private void TrySaveInteractable("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" save)"}</code> |  |
