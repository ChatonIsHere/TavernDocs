---
title: "PlayerUnlock"
description: "Asset for something a player can unlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlock

A **class** in `Root.Township`, no namespace.

Asset for something a player can unlock. It can raise the maximum of a stat on the player, list prerequisite unlocks and describe orb visuals on the body.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<PlayerUnlock>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PlayerUnlock`](/game-api/types/global-p/playerunlock), [`PlayerUnlock.Create`](/game-api/types/global-p/playerunlock-create), [`PlayerUnlockConverter`](/game-api/types/global-p/playerunlockconverter)
- **Nested types** [`Create`](/game-api/types/global-p/playerunlock-create), [`OrbProperties`](/game-api/types/global-p/playerunlock-orbproperties), [`UnlockingPermissionsSetup`](/game-api/types/global-p/playerunlock-unlockingpermissionssetup)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results), [Skills and unlocks](/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerUnlock()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-orbs" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock-orbproperties">{"PlayerUnlock.OrbProperties"}</Link>{"[] orbs"}</code> |
| <Link id="m-prerequisites" /><code>{"private List<"}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> prerequisites"}</code> |
| <Link id="m-unlockingpermissions" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock-unlockingpermissionssetup">{"PlayerUnlock.UnlockingPermissionsSetup"}</Link>{" unlockingPermissions"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orbs-2" /><code><Link to="/game-api/types/global-p/playerunlock-orbproperties">{"PlayerUnlock.OrbProperties"}</Link>{"[] Orbs { get; }"}</code> | Orb visuals for this unlock: prefab, weight, bone, position and scale. |
| <Link id="m-prerequisites-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> Prerequisites { get; }"}</code> | Unlocks needed before this one. |
| <Link id="m-unlockingpermissions-2" /><code><Link to="/game-api/types/global-p/playerunlock-unlockingpermissionssetup">{"PlayerUnlock.UnlockingPermissionsSetup"}</Link>{" UnlockingPermissions { get; }"}</code> | What the unlock changes: optional teleport and climb layer overrides, and the max stat change. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Adds the configured amount to the stat's maximum and base value, and again whenever the player gets a new controller. |
| <Link id="m-removefrom" /><code>{"void RemoveFrom("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Takes back the stat change and stops reapplying it on new controllers. |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-canupdatemaxstat" /><code>{"private bool CanUpdateMaxStat("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-canupdatemaxstat-2" /><code>{"private bool CanUpdateMaxStat("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |
| <Link id="m-updateplayercontroller" /><code>{"private void UpdatePlayerController("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerUnlock`:

[`ChallengeAnalyticsEvent.ChallengeAnalyticsEvent`](/game-api/types/game-other-namespaces/challengeanalyticsevent#m-ctor), [`SpiritModeDoorwaySaveData.playerUnlock`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedata#m-playerunlock), [`SpiritModeDoorwaySaveDataOld1.playerUnlock`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedataold1#m-playerunlock), [`Climber.unlock`](/game-api/types/global-c-d/climber#m-unlock), [`ClimbingHand.ClimbingHand`](/game-api/types/game-other-namespaces/climbinghand#m-ctor), [`ClimbingHand.unlock`](/game-api/types/game-other-namespaces/climbinghand#m-unlock), [`ClimbingHandler.ClimbingHandler`](/game-api/types/game-other-namespaces/climbinghandler#m-ctor), [`AddUnlockToPlayer.playerUnlock`](/game-api/types/game-other-namespaces/addunlocktoplayer#m-playerunlock), [`AddUnlockToPlayer.PlayerUnlock`](/game-api/types/game-other-namespaces/addunlocktoplayer#m-playerunlock-2), [`AddUnlockToPlayerSaveData.PlayerUnlock`](/game-api/types/game-other-namespaces/addunlocktoplayersavedata#m-playerunlock), [`ClimbingTowerTeleporterNode.playerUnlock`](/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-playerunlock), [`ClimbingTowerTeleporterNodeSaveDataOld2.unlockToActivateTeleporterNode`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold2#m-unlocktoactivateteleporternode), [`SpiritModeDoorway.playerUnlock`](/game-api/types/game-other-namespaces/spiritmodedoorway#m-playerunlock), [`SpiritModeDoorway.SyncDoorwayModification`](/game-api/types/game-other-namespaces/spiritmodedoorway#m-syncdoorwaymodification), [`SpiritModeDoorway.UnlockModificationPair.NewUnlock`](/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair#m-newunlock), [`PlayerUnlockConverter.GetFromString`](/game-api/types/global-p/playerunlockconverter#m-getfromstring), [`PlayerUnlockManager.Check`](/game-api/types/global-p/playerunlockmanager#m-check), [`PlayerUnlockManager.currentUnlock`](/game-api/types/global-p/playerunlockmanager#m-currentunlock), [`PlayerUnlockManager.CurrentUnlock`](/game-api/types/global-p/playerunlockmanager#m-currentunlock-2), [`PlayerUnlockManager.SetCurrentUnlock`](/game-api/types/global-p/playerunlockmanager#m-setcurrentunlock), [`PlayerUnlockManager.SetPermanentUnlock`](/game-api/types/global-p/playerunlockmanager#m-setpermanentunlock), [`PlayerUnlockManager.unlocks`](/game-api/types/global-p/playerunlockmanager#m-unlocks), [`PlayerUnlockManager.Unlocks`](/game-api/types/global-p/playerunlockmanager#m-unlocks-2), [`PlayerUnlockManagerSaveData.currentUnlock`](/game-api/types/global-p/playerunlockmanagersavedata#m-currentunlock), [`PlayerUnlockManagerSaveData.unlocks`](/game-api/types/global-p/playerunlockmanagersavedata#m-unlocks), [`PlayerUnlockStation.climbingUnlock`](/game-api/types/global-p/playerunlockstation#m-climbingunlock), [`PlayerUnlockStation.InteractionInfo.currentUnlock`](/game-api/types/global-p/playerunlockstation-interactioninfo#m-currentunlock), [`PlayerUnlockStationSaveData.climbingUnlock`](/game-api/types/global-p/playerunlockstationsavedata#m-climbingunlock), [`PlayerUnlockStationSaveDataOld1.unlock`](/game-api/types/global-p/playerunlockstationsavedataold1#m-unlock), [`PlayerUnlockStationSaveDataOld2.unlock`](/game-api/types/global-p/playerunlockstationsavedataold2#m-unlock).
