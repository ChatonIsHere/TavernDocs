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
| <Link id="m-ctor" /><code>{"DownedState("}<Link to="/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState, "}<Link to="/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" newDebuffManager)"}</code> | Creates a `DownedState` from `playingState` and `newDebuffManager`. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" activity"}</code> | The `ReviveCompletableActivity` other players complete to revive this one. |
| <Link id="m-deathcountdownroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" deathCountdownRoutine"}</code> | Server: the running death countdown. |
| <Link id="m-debuffmanager" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" debuffManager"}</code> | Applies and removes the respawn debuffs. |
| <Link id="m-gravestone" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/gravestone">{"Gravestone"}</Link>{" gravestone"}</code> | The `Gravestone` component on the spawned gravestone. |
| <Link id="m-gravestoneentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" gravestoneEntity"}</code> | The gravestone entity spawned at the downed spot. |
| <Link id="m-leftinteractorentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" leftInteractorEntity"}</code> | Item respawned for the left hand when the state ends. |
| <Link id="m-leftinteractorsave" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" leftInteractorSave"}</code> | Save of what the left hand held when the player went down. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-respawnorb" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnorb">{"RespawnOrb"}</Link>{" respawnOrb"}</code> | The local player's `RespawnOrb`. |
| <Link id="m-respawnorbobject" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" respawnOrbObject"}</code> | The pooled object behind the respawn orb. |
| <Link id="m-rightinteractorentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" rightInteractorEntity"}</code> | Item respawned for the right hand when the state ends. |
| <Link id="m-rightinteractorsave" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" rightInteractorSave"}</code> | Save of what the right hand held when the player went down. |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | The ground point where the player went down. Gravestone, effects and orb are placed from it. |
| <Link id="m-syncactivateactions" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivateActions"}</code> | Network sync sent when the downed state starts. |
| <Link id="m-syncdeactivateactions" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDeactivateActions"}</code> | Network sync sent when the downed state ends. |
| <Link id="m-syncrespawnearly" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRespawnEarly"}</code> | Network sync the downed client sends to give up and respawn. |
| <Link id="m-synctimerincreasetodownedplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncTimerIncreaseToDownedPlayer"}</code> | Network sync for extra countdown time. |
| <Link id="m-timetorevive" /><code>{"private float timeToRevive"}</code> | Seconds the player stays downed. Starts at the server's `DownedStateDuration` and grows as the activity adds time. |
| <Link id="m-wasrevived" /><code>{"private bool wasRevived"}</code> | Set when the revive activity completes. Decides health restore, debuffs and whether items go back in hand. |

</details>

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
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | Server: stores held items, spawns the gravestone and starts the revive countdown. If the downed duration is 0 the player dies at once. |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | Clients: hides the body and docks and limits the hands to downed interactions. The downed player always sees ghost hands. |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | Server: removes the gravestone and revive objects and gives back held items. A revived player gets some health back and respawn debuffs. |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | Clients: shows the body again, restores hand interactions and removes the respawn orb. |

<details>
<summary>44 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyrespawndebuffs" /><code>{"private void ApplyRespawnDebuffs()"}</code> | Server: if the player was revived, applies the settings' respawn debuffs for `RespawnDebuffDurationInSeconds`. |
| <Link id="m-calculatespawnposition" /><code>{"private void CalculateSpawnPosition()"}</code> | Server: sets the downed spot to the ground under the player's feet (raycast down up to about 10 m). |
| <Link id="m-canplaypooledparticleeffect" /><code>{"private bool CanPlayPooledParticleEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | True when not headless and the effect definition is set. |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" downedStateSfx)"}</code> | True when the sound set exists and the player has a controller. |
| <Link id="m-clearactivitylisteners" /><code>{"private void ClearActivityListeners()"}</code> | Unhooks the revive activity's time increased and completed events. |
| <Link id="m-destroygravestone" /><code>{"private void DestroyGravestone()"}</code> | Server: destroys the gravestone entity, if one was spawned. |
| <Link id="m-destroyrespawnorb" /><code>{"private void DestroyRespawnOrb()"}</code> | Local player: force drops the respawn orb if held and returns it to the pool. |
| <Link id="m-dropdownedstateentity" /><code>{"private void DropDownedStateEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Makes a hand let go if it holds the revive orb or respawn orb. |
| <Link id="m-forcedroplocalentities" /><code>{"private void ForceDropLocalEntities("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Makes a hand let go of anything that isn't networked. |
| <Link id="m-forcegrabentity" /><code>{"private void ForceGrabEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Puts a restored held item back into a hand, dropping any downed state orb first. |
| <Link id="m-getrespawnorb" /><code>{"private async Task<Result<"}<Link to="/game-api/types/game-other-namespaces/respawnorb">{"RespawnOrb"}</Link>{">> GetRespawnOrb()"}</code> | Gets a respawn orb from the pool in front of the player at the settings' height and distance. |
| <Link id="m-grabinteractables" /><code>{"private void GrabInteractables()"}</code> | Puts the restored left and right held items back into the hands. |
| <Link id="m-increasetime" /><code>{"private void IncreaseTime(float timeIncreaseInSeconds)"}</code> | Server: adds time to the downed countdown (from the revive activity) and tells the downed player. |
| <Link id="m-isholdingdownedstateentity" /><code>{"private bool IsHoldingDownedStateEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Whether a hand holds the revive orb or respawn orb, matched by prefab name. |
| <Link id="m-isholdinglocalentity" /><code>{"private bool IsHoldingLocalEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Whether a hand holds a non networked interactable. |
| <Link id="m-loadinteractables" /><code>{"private void LoadInteractables()"}</code> | Server: respawns the items the hands held when the player went down. |
| <Link id="m-loadinteractablesonstateexit" /><code>{"private void LoadInteractablesOnStateExit()"}</code> | Server: respawns held items and puts them back in hand if revived or drop on death is off. |
| <Link id="m-onactivateactions" /><code>{"private void OnActivateActions()"}</code> | Server: starts the downed state, or kills the player at once if `DownedStateDuration` is 0. Saves held items, spawns the gravestone and starts the countdown. |
| <Link id="m-onactivateremoteactions" /><code>{"private void OnActivateRemoteActions()"}</code> | Client: hides the body and docks, disables body colliders and limits the hands to the downed interaction channel. |
| <Link id="m-onactivitycompleted" /><code>{"private void OnActivityCompleted()"}</code> | Server: when the revive activity completes, stops the countdown and moves the player back to playing. |
| <Link id="m-onplayercontrollersetremote" /><code>{"private void OnPlayerControllerSetRemote("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" setPlayerController)"}</code> | Client: runs the remote setup once this player's controller links. |
| <Link id="m-onplayercontrollersetserver" /><code>{"private void OnPlayerControllerSetServer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Server: runs the downed setup once the player's controller has loaded. |
| <Link id="m-playparticleeffectforplayer" /><code>{"private async void PlayParticleEffectForPlayer("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | Plays a pooled particle effect at half the player's height above the downed spot, then releases it. |
| <Link id="m-playsoundeffectforplayer" /><code>{"private void PlaySoundEffectForPlayer("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" downedStateSfx)"}</code> | Plays a sound on the player's head. |
| <Link id="m-saveheldinteractables" /><code>{"private void SaveHeldInteractables()"}</code> | Server: saves and despawns what each hand holds so it can come back when the state ends. |
| <Link id="m-setbodycollidersandparticlesactivestate" /><code>{"private void SetBodyCollidersAndParticlesActiveState(bool isActive)"}</code> | Turns the player's body colliders and on death effect controllers on or off. |
| <Link id="m-setbodyvisibility" /><code>{"private void SetBodyVisibility(bool isVisible)"}</code> | Shows or hides the body. The head shows only for other players who aren't downed. |
| <Link id="m-setdockvisibility" /><code>{"private void SetDockVisibility(bool isVisible)"}</code> | Shows or hides the belt and back docks. |
| <Link id="m-setnaturalhealthregenerationenabledstate" /><code>{"private void SetNaturalHealthRegenerationEnabledState(bool isEnabled)"}</code> | Turns the hunger stat (the settings' `HungerStat`) on or off, which stops natural regeneration while downed. |
| <Link id="m-setplayervisibility" /><code>{"private void SetPlayerVisibility(bool isVisible)"}</code> | Sets body and dock visibility together. |
| <Link id="m-sharedsetup" /><code>{"private void SharedSetup()"}</code> | Creates the four network syncs on the player character entity, if not made yet. |
| <Link id="m-spawngravestone" /><code>{"private void SpawnGravestone()"}</code> | Server: spawns the gravestone at the downed spot, facing the player's look direction, and assigns the player to it. |
| <Link id="m-spawninteractablefromsave" /><code>{"private void SpawnInteractableFromSave("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" saveData, out "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Spawns an entity from a saved held item, or returns null when there's no save. |
| <Link id="m-spawnrespawnorb" /><code>{"private async void SpawnRespawnOrb()"}</code> | Local player: spawns the respawn orb with the countdown. Releasing it asks the server to respawn early. |
| <Link id="m-startplayerdeath" /><code>{"private async void StartPlayerDeath()"}</code> | Server: starts the revive activity and the death countdown. |
| <Link id="m-startplayerdeathcountdown" /><code>{"private IEnumerator StartPlayerDeathCountdown() (iterator)"}</code> | Server coroutine: waits `timeToRevive` seconds, then kills the player. |
| <Link id="m-startreviveactivity" /><code>{"private void StartReviveActivity()"}</code> | Server: creates or restarts the revive activity and hooks its events. |
| <Link id="m-stopparticleeffect" /><code>{"private void StopParticleEffect("}<Link to="/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{" particleSystem)"}</code> | Hides and releases a pooled particle effect. |
| <Link id="m-syncactivateactions-2" /><code>{"private void SyncActivateActions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the countdown and downed spot to clients, which play the enter effects. The local player also gets the respawn orb. |
| <Link id="m-syncdeactivateactions-2" /><code>{"private void SyncDeactivateActions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Tells clients to play the exit effects. |
| <Link id="m-syncrespawnearly-2" /><code>{"private void SyncRespawnEarly("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler: when the server reads it (the player released the respawn orb), the player is killed. |
| <Link id="m-synctimerincreasetodownedplayer-2" /><code>{"private void SyncTimerIncreaseToDownedPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float timeIncreaseInSeconds)"}</code> | Network handler that adds the extra seconds to the downed player's respawn orb timer. |
| <Link id="m-tryrestorehealthtoplayer" /><code>{"private void TryRestoreHealthToPlayer()"}</code> | Server: if revived, sets health to `PercentageOfHealthToReturnToRevivedPlayers` of the maximum. |
| <Link id="m-trysaveinteractable" /><code>{"private void TrySaveInteractable("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" save)"}</code> | Saves and despawns a held item if it's a prefab root that saves. Otherwise outputs null. |

</details>
