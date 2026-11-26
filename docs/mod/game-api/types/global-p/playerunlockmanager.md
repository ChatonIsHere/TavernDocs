---
title: "PlayerUnlockManager"
description: "A player's unlock progress for station chains such as the climbing tower: permanent unlocks, the run in progress, collected orbs and a checkpoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockManager

A **class** in `Root.Township`, the global namespace.

A player's unlock progress for station chains such as the climbing tower: permanent unlocks, the run in progress, collected orbs and a checkpoint. One per player (`player.UnlockManager`); the server changes it, syncs it and saves it with the player.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/mod/game-api/types/global-p/playercomponent), [`ISavable<PlayerUnlockManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerUnlockManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerUnlockManagerSaveData`](/mod/game-api/types/global-p/playerunlockmanagersavedata)
- **Documented in** [Skills and unlocks](/mod/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Injected analytics service used for unlock analytics.</span> |
| <Link id="m-checkpoint" /><code>{"private Vector3 checkpoint"}</code> | <span className="api-desc">Backing field for `Checkpoint`. Saved, not synced.</span> |
| <Link id="m-currentunlock" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" currentUnlock"}</code> | <span className="api-desc">Backing field for `CurrentUnlock`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-orbs" /><code>{"private HashSet<uint> orbs"}</code> | <span className="api-desc">Backing field for `Orbs`.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for `SyncAll`, sent on connect and whenever unlocks change.</span> |
| <Link id="m-unlocks" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> unlocks"}</code> | <span className="api-desc">Backing field for `Unlocks`: the permanent unlocks, applied to the player when loading finishes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoint-2" /><code>{"Vector3 Checkpoint { get; }"}</code> | <span className="api-desc">The run's checkpoint position. Saved but not synced to clients.</span> |
| <Link id="m-currentunlock-2" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" CurrentUnlock { get; }"}</code> | <span className="api-desc">The unlock run in progress, or null.</span> |
| <Link id="m-orbs-2" /><code>{"HashSet<uint> Orbs { get; }"}</code> | <span className="api-desc">Orb indexes collected in the current run.</span> |
| <Link id="m-unlocks-2" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> Unlocks { get; }"}</code> | <span className="api-desc">Unlocks the player has permanently.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modified" /><code>{"event Action Modified"}</code> | <span className="api-desc">Raised whenever unlocks, the current run or orbs change.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addorb" /><code>{"void AddOrb(uint orbIndex)"}</code> | <span className="api-desc">Server: adds a collected orb index and syncs. Indexes and count sync in 4 bits, so only 0 to 15 survive.</span> |
| <Link id="m-cancelunlock" /><code>{"void CancelUnlock()"}</code> | <span className="api-desc">Server: ends the current run and clears the checkpoint.</span> |
| <Link id="m-check" /><code>{"bool Check("}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | <span className="api-desc">Whether the player has an unlock permanently or is currently running it.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced message and the orb light, and analytics for the local player.</span> |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" newAnalyticsService)"}</code> | <span className="api-desc">Receives the analytics service through dependency injection.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends this player's unlock state to a new player.</span> |
| <Link id="m-removeorb" /><code>{"void RemoveOrb(uint orb)"}</code> | <span className="api-desc">Server: removes an orb index and syncs.</span> |
| <Link id="m-setcheckpoint" /><code>{"void SetCheckpoint(Vector3 newCheckpoint)"}</code> | <span className="api-desc">Server: sets the checkpoint position.</span> |
| <Link id="m-setcurrentunlock" /><code>{"void SetCurrentUnlock("}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | <span className="api-desc">Server: starts a run for an unlock if its prerequisites are met; null ends it and clears the checkpoint.</span> |
| <Link id="m-setpermanentunlock" /><code>{"void SetPermanentUnlock("}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, bool isUnlocked = true)"}</code> | <span className="api-desc">Server: grants (if prerequisites are met) or removes an unlock, applying or removing its effects, and syncs.</span> |
| <Link id="m-playerloadcomplete" /><code>{"protected override void PlayerLoadComplete()"}</code> | <span className="api-desc">After the player loads, applies every permanent unlock to them and syncs.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-notifyplayerunlocksmodified" /><code>{"private void NotifyPlayerUnlocksModified()"}</code> | <span className="api-desc">Fires `Modified`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the local-player-set handler.</span> |
| <Link id="m-setupplayerunlockanalytics" /><code>{"private void SetupPlayerUnlockAnalytics("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" localPlayer)"}</code> | <span className="api-desc">Attaches unlock analytics when this manager belongs to the local player.</span> |
| <Link id="m-syncall" /><code>{"private void SyncAll("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server to client: syncs orbs, the current unlock and the permanent unlocks, then fires `Modified` on clients.</span> |
| <Link id="m-synccurrentunlock" /><code>{"private void SyncCurrentUnlock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the current (in-progress) unlock, or that there is none.</span> |
| <Link id="m-syncorbs" /><code>{"private void SyncOrbs("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the set of orb indexes, 4 bits each, so at most 15 orbs.</span> |
| <Link id="m-syncpermanentunlocks" /><code>{"private void SyncPermanentUnlocks("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the full set of permanent unlocks by hash.</span> |
| <Link id="m-syncplayerunlockstoclient" /><code>{"private void SyncPlayerUnlocksToClient()"}</code> | <span className="api-desc">Server: sends everything to chunks and fires `Modified`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerUnlockManager`:

<div className="api-used-in">

[`IPlayer.UnlockManager`](/mod/game-api/types/alta-networking/iplayer#m-unlockmanager), [`PlayerUnlockAnalytics.PlayerUnlockAnalytics`](/mod/game-api/types/game-other-namespaces/playerunlockanalytics#m-ctor), [`PlayerUnlockAnalytics.unlockManager`](/mod/game-api/types/game-other-namespaces/playerunlockanalytics#m-unlockmanager), [`ClimbingHandler.unlockManager`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-unlockmanager), [`Player.unlockManager`](/mod/game-api/types/global-p/player#m-unlockmanager), [`Player.UnlockManager`](/mod/game-api/types/global-p/player#m-unlockmanager-2), [`PlayerOrbLight.PlayerOrbLight`](/mod/game-api/types/global-p/playerorblight#m-ctor), [`PlayerOrbLight.unlockManager`](/mod/game-api/types/global-p/playerorblight#m-unlockmanager), [`Pointer.unlockManager`](/mod/game-api/types/global-p/pointer#m-unlockmanager).

</div>
