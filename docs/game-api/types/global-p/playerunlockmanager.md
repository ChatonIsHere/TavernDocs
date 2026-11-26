---
title: "PlayerUnlockManager"
description: "A player's unlock progress for station chains such as the climbing tower: permanent unlocks, the run in progress, collected orbs and a checkpoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockManager

A **class** in `Root.Township`, no namespace.

A player's unlock progress for station chains such as the climbing tower: permanent unlocks, the run in progress, collected orbs and a checkpoint. One per player (`player.UnlockManager`); the server changes it, syncs it and saves it with the player.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/game-api/types/global-p/playercomponent), [`ISavable<PlayerUnlockManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerUnlockManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerUnlockManagerSaveData`](/game-api/types/global-p/playerunlockmanagersavedata)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockManager()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Injected analytics service used for unlock analytics. |
| <Link id="m-checkpoint" /><code>{"private Vector3 checkpoint"}</code> | Backing field for `Checkpoint`. Saved, not synced. |
| <Link id="m-currentunlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" currentUnlock"}</code> | Backing field for `CurrentUnlock`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-orbs" /><code>{"private HashSet<uint> orbs"}</code> | Backing field for `Orbs`. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for `SyncAll`, sent on connect and whenever unlocks change. |
| <Link id="m-unlocks" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> unlocks"}</code> | Backing field for `Unlocks`: the permanent unlocks, applied to the player when loading finishes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoint-2" /><code>{"Vector3 Checkpoint { get; }"}</code> | The run's checkpoint position. Saved but not synced to clients. |
| <Link id="m-currentunlock-2" /><code><Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" CurrentUnlock { get; }"}</code> | The unlock run in progress, or null. |
| <Link id="m-orbs-2" /><code>{"HashSet<uint> Orbs { get; }"}</code> | Orb indexes collected in the current run. |
| <Link id="m-unlocks-2" /><code>{"HashSet<"}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> Unlocks { get; }"}</code> | Unlocks the player has permanently. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modified" /><code>{"event Action Modified"}</code> | Raised whenever unlocks, the current run or orbs change. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addorb" /><code>{"void AddOrb(uint orbIndex)"}</code> | Server: adds a collected orb index and syncs. Indexes and count sync in 4 bits, so only 0 to 15 survive. |
| <Link id="m-cancelunlock" /><code>{"void CancelUnlock()"}</code> | Server: ends the current run and clears the checkpoint. |
| <Link id="m-check" /><code>{"bool Check("}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | Whether the player has an unlock permanently or is currently running it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced message and the orb light, and analytics for the local player. |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" newAnalyticsService)"}</code> | Receives the analytics service through dependency injection. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends this player's unlock state to a new player. |
| <Link id="m-removeorb" /><code>{"void RemoveOrb(uint orb)"}</code> | Server: removes an orb index and syncs. |
| <Link id="m-setcheckpoint" /><code>{"void SetCheckpoint(Vector3 newCheckpoint)"}</code> | Server: sets the checkpoint position. |
| <Link id="m-setcurrentunlock" /><code>{"void SetCurrentUnlock("}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | Server: starts a run for an unlock if its prerequisites are met; null ends it and clears the checkpoint. |
| <Link id="m-setpermanentunlock" /><code>{"void SetPermanentUnlock("}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, bool isUnlocked = true)"}</code> | Server: grants (if prerequisites are met) or removes an unlock, applying or removing its effects, and syncs. |
| <Link id="m-playerloadcomplete" /><code>{"protected override void PlayerLoadComplete()"}</code> | After the player loads, applies every permanent unlock to them and syncs. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-notifyplayerunlocksmodified" /><code>{"private void NotifyPlayerUnlocksModified()"}</code> | Fires `Modified`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the local-player-set handler. |
| <Link id="m-setupplayerunlockanalytics" /><code>{"private void SetupPlayerUnlockAnalytics("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" localPlayer)"}</code> | Attaches unlock analytics when this manager belongs to the local player. |
| <Link id="m-syncall" /><code>{"private void SyncAll("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server to client: syncs orbs, the current unlock and the permanent unlocks, then fires `Modified` on clients. |
| <Link id="m-synccurrentunlock" /><code>{"private void SyncCurrentUnlock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the current (in-progress) unlock, or that there is none. |
| <Link id="m-syncorbs" /><code>{"private void SyncOrbs("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the set of orb indexes, 4 bits each, so at most 15 orbs. |
| <Link id="m-syncpermanentunlocks" /><code>{"private void SyncPermanentUnlocks("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the full set of permanent unlocks by hash. |
| <Link id="m-syncplayerunlockstoclient" /><code>{"private void SyncPlayerUnlocksToClient()"}</code> | Server: sends everything to chunks and fires `Modified`. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerUnlockManager`:

[`IPlayer.UnlockManager`](/game-api/types/alta-networking/iplayer#m-unlockmanager), [`PlayerUnlockAnalytics.PlayerUnlockAnalytics`](/game-api/types/game-other-namespaces/playerunlockanalytics#m-ctor), [`PlayerUnlockAnalytics.unlockManager`](/game-api/types/game-other-namespaces/playerunlockanalytics#m-unlockmanager), [`ClimbingHandler.unlockManager`](/game-api/types/game-other-namespaces/climbinghandler#m-unlockmanager), [`Player.unlockManager`](/game-api/types/global-p/player#m-unlockmanager), [`Player.UnlockManager`](/game-api/types/global-p/player#m-unlockmanager-2), [`PlayerOrbLight.PlayerOrbLight`](/game-api/types/global-p/playerorblight#m-ctor), [`PlayerOrbLight.unlockManager`](/game-api/types/global-p/playerorblight#m-unlockmanager), [`Pointer.unlockManager`](/game-api/types/global-p/pointer#m-unlockmanager).
