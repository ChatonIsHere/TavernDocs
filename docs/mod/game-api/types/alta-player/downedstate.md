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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/mod/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`DownedToDeadTransition`](/mod/game-api/types/alta-player/downedtodeadtransition), [`DownedToPlayingTransition`](/mod/game-api/types/alta-player/downedtoplayingtransition), [`PlayingToDownedTransition`](/mod/game-api/types/alta-player/playingtodownedtransition)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownedState("}<Link to="/mod/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState, "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" newDebuffManager)"}</code> | <span className="api-desc">Creates a `DownedState` from `playingState` and `newDebuffManager`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" activity"}</code> | <span className="api-desc">The `ReviveCompletableActivity` other players complete to revive this one.</span> |
| <Link id="m-deathcountdownroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" deathCountdownRoutine"}</code> | <span className="api-desc">Server: the running death countdown.</span> |
| <Link id="m-debuffmanager" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" debuffManager"}</code> | <span className="api-desc">Applies and removes the respawn debuffs.</span> |
| <Link id="m-gravestone" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/gravestone">{"Gravestone"}</Link>{" gravestone"}</code> | <span className="api-desc">The `Gravestone` component on the spawned gravestone.</span> |
| <Link id="m-gravestoneentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" gravestoneEntity"}</code> | <span className="api-desc">The gravestone entity spawned at the downed spot.</span> |
| <Link id="m-leftinteractorentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" leftInteractorEntity"}</code> | <span className="api-desc">Item respawned for the left hand when the state ends.</span> |
| <Link id="m-leftinteractorsave" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" leftInteractorSave"}</code> | <span className="api-desc">Save of what the left hand held when the player went down.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-respawnorb" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/respawnorb">{"RespawnOrb"}</Link>{" respawnOrb"}</code> | <span className="api-desc">The local player's `RespawnOrb`.</span> |
| <Link id="m-respawnorbobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" respawnOrbObject"}</code> | <span className="api-desc">The pooled object behind the respawn orb.</span> |
| <Link id="m-rightinteractorentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" rightInteractorEntity"}</code> | <span className="api-desc">Item respawned for the right hand when the state ends.</span> |
| <Link id="m-rightinteractorsave" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" rightInteractorSave"}</code> | <span className="api-desc">Save of what the right hand held when the player went down.</span> |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | <span className="api-desc">The ground point where the player went down. Gravestone, effects and orb are placed from it.</span> |
| <Link id="m-syncactivateactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivateActions"}</code> | <span className="api-desc">Network sync sent when the downed state starts.</span> |
| <Link id="m-syncdeactivateactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDeactivateActions"}</code> | <span className="api-desc">Network sync sent when the downed state ends.</span> |
| <Link id="m-syncrespawnearly" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncRespawnEarly"}</code> | <span className="api-desc">Network sync the downed client sends to give up and respawn.</span> |
| <Link id="m-synctimerincreasetodownedplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<float> syncTimerIncreaseToDownedPlayer"}</code> | <span className="api-desc">Network sync for extra countdown time.</span> |
| <Link id="m-timetorevive" /><code>{"private float timeToRevive"}</code> | <span className="api-desc">Seconds the player stays downed. Starts at the server's `DownedStateDuration` and grows as the activity adds time.</span> |
| <Link id="m-wasrevived" /><code>{"private bool wasRevived"}</code> | <span className="api-desc">Set when the revive activity completes. Decides health restore, debuffs and whether items go back in hand.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-killingimpact" /><code><Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" KillingImpact { get; set; }"}</code> | <span className="api-desc">The damage that downed the player.</span> |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">"Downed State".</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The downed state settings: timers, effects, gravestone, orbs, health returned and debuffs.</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">`PlayerStateType.Downed`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcedeactivateactions" /><code>{"void ForceDeactivateActions()"}</code> | <span className="api-desc">Runs the server leave logic straight away (gravestone, held items, health and debuffs).</span> |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | <span className="api-desc">Server: stores held items, spawns the gravestone and starts the revive countdown. If the downed duration is 0 the player dies at once.</span> |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Clients: hides the body and docks and limits the hands to downed interactions. The downed player always sees ghost hands.</span> |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | <span className="api-desc">Server: removes the gravestone and revive objects and gives back held items. A revived player gets some health back and respawn debuffs.</span> |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Clients: shows the body again, restores hand interactions and removes the respawn orb.</span> |

<details className="api-private">
<summary>44 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyrespawndebuffs" /><code>{"private void ApplyRespawnDebuffs()"}</code> | <span className="api-desc">Server: if the player was revived, applies the settings' respawn debuffs for `RespawnDebuffDurationInSeconds`.</span> |
| <Link id="m-calculatespawnposition" /><code>{"private void CalculateSpawnPosition()"}</code> | <span className="api-desc">Server: sets the downed spot to the ground under the player's feet (raycast down up to about 10 m).</span> |
| <Link id="m-canplaypooledparticleeffect" /><code>{"private bool CanPlayPooledParticleEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | <span className="api-desc">True when not headless and the effect definition is set.</span> |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" downedStateSfx)"}</code> | <span className="api-desc">True when the sound set exists and the player has a controller.</span> |
| <Link id="m-clearactivitylisteners" /><code>{"private void ClearActivityListeners()"}</code> | <span className="api-desc">Unhooks the revive activity's time increased and completed events.</span> |
| <Link id="m-destroygravestone" /><code>{"private void DestroyGravestone()"}</code> | <span className="api-desc">Server: destroys the gravestone entity, if one was spawned.</span> |
| <Link id="m-destroyrespawnorb" /><code>{"private void DestroyRespawnOrb()"}</code> | <span className="api-desc">Local player: force drops the respawn orb if held and returns it to the pool.</span> |
| <Link id="m-dropdownedstateentity" /><code>{"private void DropDownedStateEntity("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Makes a hand let go if it holds the revive orb or respawn orb.</span> |
| <Link id="m-forcedroplocalentities" /><code>{"private void ForceDropLocalEntities("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Makes a hand let go of anything that isn't networked.</span> |
| <Link id="m-forcegrabentity" /><code>{"private void ForceGrabEntity("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Puts a restored held item back into a hand, dropping any downed state orb first.</span> |
| <Link id="m-getrespawnorb" /><code>{"private async Task<Result<"}<Link to="/mod/game-api/types/game-other-namespaces/respawnorb">{"RespawnOrb"}</Link>{">> GetRespawnOrb()"}</code> | <span className="api-desc">Gets a respawn orb from the pool in front of the player at the settings' height and distance.</span> |
| <Link id="m-grabinteractables" /><code>{"private void GrabInteractables()"}</code> | <span className="api-desc">Puts the restored left and right held items back into the hands.</span> |
| <Link id="m-increasetime" /><code>{"private void IncreaseTime(float timeIncreaseInSeconds)"}</code> | <span className="api-desc">Server: adds time to the downed countdown (from the revive activity) and tells the downed player.</span> |
| <Link id="m-isholdingdownedstateentity" /><code>{"private bool IsHoldingDownedStateEntity("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Whether a hand holds the revive orb or respawn orb, matched by prefab name.</span> |
| <Link id="m-isholdinglocalentity" /><code>{"private bool IsHoldingLocalEntity("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Whether a hand holds a non networked interactable.</span> |
| <Link id="m-loadinteractables" /><code>{"private void LoadInteractables()"}</code> | <span className="api-desc">Server: respawns the items the hands held when the player went down.</span> |
| <Link id="m-loadinteractablesonstateexit" /><code>{"private void LoadInteractablesOnStateExit()"}</code> | <span className="api-desc">Server: respawns held items and puts them back in hand if revived or drop on death is off.</span> |
| <Link id="m-onactivateactions" /><code>{"private void OnActivateActions()"}</code> | <span className="api-desc">Server: starts the downed state, or kills the player at once if `DownedStateDuration` is 0. Saves held items, spawns the gravestone and starts the countdown.</span> |
| <Link id="m-onactivateremoteactions" /><code>{"private void OnActivateRemoteActions()"}</code> | <span className="api-desc">Client: hides the body and docks, disables body colliders and limits the hands to the downed interaction channel.</span> |
| <Link id="m-onactivitycompleted" /><code>{"private void OnActivityCompleted()"}</code> | <span className="api-desc">Server: when the revive activity completes, stops the countdown and moves the player back to playing.</span> |
| <Link id="m-onplayercontrollersetremote" /><code>{"private void OnPlayerControllerSetRemote("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" setPlayerController)"}</code> | <span className="api-desc">Client: runs the remote setup once this player's controller links.</span> |
| <Link id="m-onplayercontrollersetserver" /><code>{"private void OnPlayerControllerSetServer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Server: runs the downed setup once the player's controller has loaded.</span> |
| <Link id="m-playparticleeffectforplayer" /><code>{"private async void PlayParticleEffectForPlayer("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledObjectDefinition)"}</code> | <span className="api-desc">Plays a pooled particle effect at half the player's height above the downed spot, then releases it.</span> |
| <Link id="m-playsoundeffectforplayer" /><code>{"private void PlaySoundEffectForPlayer("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" downedStateSfx)"}</code> | <span className="api-desc">Plays a sound on the player's head.</span> |
| <Link id="m-saveheldinteractables" /><code>{"private void SaveHeldInteractables()"}</code> | <span className="api-desc">Server: saves and despawns what each hand holds so it can come back when the state ends.</span> |
| <Link id="m-setbodycollidersandparticlesactivestate" /><code>{"private void SetBodyCollidersAndParticlesActiveState(bool isActive)"}</code> | <span className="api-desc">Turns the player's body colliders and on death effect controllers on or off.</span> |
| <Link id="m-setbodyvisibility" /><code>{"private void SetBodyVisibility(bool isVisible)"}</code> | <span className="api-desc">Shows or hides the body. The head shows only for other players who aren't downed.</span> |
| <Link id="m-setdockvisibility" /><code>{"private void SetDockVisibility(bool isVisible)"}</code> | <span className="api-desc">Shows or hides the belt and back docks.</span> |
| <Link id="m-setnaturalhealthregenerationenabledstate" /><code>{"private void SetNaturalHealthRegenerationEnabledState(bool isEnabled)"}</code> | <span className="api-desc">Turns the hunger stat (the settings' `HungerStat`) on or off, which stops natural regeneration while downed.</span> |
| <Link id="m-setplayervisibility" /><code>{"private void SetPlayerVisibility(bool isVisible)"}</code> | <span className="api-desc">Sets body and dock visibility together.</span> |
| <Link id="m-sharedsetup" /><code>{"private void SharedSetup()"}</code> | <span className="api-desc">Creates the four network syncs on the player character entity, if not made yet.</span> |
| <Link id="m-spawngravestone" /><code>{"private void SpawnGravestone()"}</code> | <span className="api-desc">Server: spawns the gravestone at the downed spot, facing the player's look direction, and assigns the player to it.</span> |
| <Link id="m-spawninteractablefromsave" /><code>{"private void SpawnInteractableFromSave("}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" saveData, out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Spawns an entity from a saved held item, or returns null when there's no save.</span> |
| <Link id="m-spawnrespawnorb" /><code>{"private async void SpawnRespawnOrb()"}</code> | <span className="api-desc">Local player: spawns the respawn orb with the countdown. Releasing it asks the server to respawn early.</span> |
| <Link id="m-startplayerdeath" /><code>{"private async void StartPlayerDeath()"}</code> | <span className="api-desc">Server: starts the revive activity and the death countdown.</span> |
| <Link id="m-startplayerdeathcountdown" /><code>{"private IEnumerator StartPlayerDeathCountdown() (iterator)"}</code> | <span className="api-desc">Server coroutine: waits `timeToRevive` seconds, then kills the player.</span> |
| <Link id="m-startreviveactivity" /><code>{"private void StartReviveActivity()"}</code> | <span className="api-desc">Server: creates or restarts the revive activity and hooks its events.</span> |
| <Link id="m-stopparticleeffect" /><code>{"private void StopParticleEffect("}<Link to="/mod/game-api/types/game-other-namespaces/pooledparticlesystem">{"PooledParticleSystem"}</Link>{" particleSystem)"}</code> | <span className="api-desc">Hides and releases a pooled particle effect.</span> |
| <Link id="m-syncactivateactions-2" /><code>{"private void SyncActivateActions("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the countdown and downed spot to clients, which play the enter effects. The local player also gets the respawn orb.</span> |
| <Link id="m-syncdeactivateactions-2" /><code>{"private void SyncDeactivateActions("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Tells clients to play the exit effects.</span> |
| <Link id="m-syncrespawnearly-2" /><code>{"private void SyncRespawnEarly("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler: when the server reads it (the player released the respawn orb), the player is killed.</span> |
| <Link id="m-synctimerincreasetodownedplayer-2" /><code>{"private void SyncTimerIncreaseToDownedPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, float timeIncreaseInSeconds)"}</code> | <span className="api-desc">Network handler that adds the extra seconds to the downed player's respawn orb timer.</span> |
| <Link id="m-tryrestorehealthtoplayer" /><code>{"private void TryRestoreHealthToPlayer()"}</code> | <span className="api-desc">Server: if revived, sets health to `PercentageOfHealthToReturnToRevivedPlayers` of the maximum.</span> |
| <Link id="m-trysaveinteractable" /><code>{"private void TrySaveInteractable("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" save)"}</code> | <span className="api-desc">Saves and despawns a held item if it's a prefab root that saves. Otherwise outputs null.</span> |

</details>
