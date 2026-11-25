---
title: "PlayerUnlockManager"
description: "PlayerComponent, one per player (player.UnlockManager, also on IPlayer)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockManager

A **class** in `Root.Township`, no namespace.

`PlayerComponent`, one per player (`player.UnlockManager`, also on `IPlayer`).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PlayerComponent`](/game-api/types/global-p/playercomponent), [`ISavable<PlayerUnlockManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerUnlockManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerUnlockManagerSaveData`](/game-api/types/global-p/playerunlockmanagersavedata)
- **Documented in** [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-checkpoint" /><code>{"private Vector3 checkpoint"}</code> |  |
| <Link id="m-currentunlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" currentUnlock"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-orbs" /><code>{"private HashSet<uint> orbs"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-unlocks" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> unlocks"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoint-2" /><code>{"Vector3 Checkpoint { get; }"}</code> |  |
| <Link id="m-currentunlock-2" /><code><Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" CurrentUnlock { get; }"}</code> |  |
| <Link id="m-orbs-2" /><code>{"HashSet<uint> Orbs { get; }"}</code> |  |
| <Link id="m-unlocks-2" /><code>{"HashSet<"}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> Unlocks { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modified" /><code>{"event Action Modified"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addorb" /><code>{"void AddOrb(uint orbIndex)"}</code> |  |
| <Link id="m-cancelunlock" /><code>{"void CancelUnlock()"}</code> |  |
| <Link id="m-check" /><code>{"bool Check("}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" newAnalyticsService)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-removeorb" /><code>{"void RemoveOrb(uint orb)"}</code> |  |
| <Link id="m-setcheckpoint" /><code>{"void SetCheckpoint(Vector3 newCheckpoint)"}</code> |  |
| <Link id="m-setcurrentunlock" /><code>{"void SetCurrentUnlock("}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> |  |
| <Link id="m-setpermanentunlock" /><code>{"void SetPermanentUnlock("}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock, bool isUnlocked = true)"}</code> |  |
| <Link id="m-notifyplayerunlocksmodified" /><code>{"private void NotifyPlayerUnlocksModified()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-playerloadcomplete" /><code>{"protected override void PlayerLoadComplete()"}</code> |  |
| <Link id="m-setupplayerunlockanalytics" /><code>{"private void SetupPlayerUnlockAnalytics("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" localPlayer)"}</code> |  |
| <Link id="m-syncall" /><code>{"private void SyncAll("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-synccurrentunlock" /><code>{"private void SyncCurrentUnlock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncorbs" /><code>{"private void SyncOrbs("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncpermanentunlocks" /><code>{"private void SyncPermanentUnlocks("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncplayerunlockstoclient" /><code>{"private void SyncPlayerUnlocksToClient()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerUnlockManager`:

[`IPlayer.UnlockManager`](/game-api/types/alta-networking/iplayer#m-unlockmanager), [`PlayerUnlockAnalytics.PlayerUnlockAnalytics`](/game-api/types/game-other-namespaces/playerunlockanalytics#m-ctor), [`PlayerUnlockAnalytics.unlockManager`](/game-api/types/game-other-namespaces/playerunlockanalytics#m-unlockmanager), [`ClimbingHandler.unlockManager`](/game-api/types/game-other-namespaces/climbinghandler#m-unlockmanager), [`Player.unlockManager`](/game-api/types/global-p/player#m-unlockmanager), [`Player.UnlockManager`](/game-api/types/global-p/player#m-unlockmanager-2), [`PlayerOrbLight.PlayerOrbLight`](/game-api/types/global-p/playerorblight#m-ctor), [`PlayerOrbLight.unlockManager`](/game-api/types/global-p/playerorblight#m-unlockmanager), [`Pointer.unlockManager`](/game-api/types/global-p/pointer#m-unlockmanager).
