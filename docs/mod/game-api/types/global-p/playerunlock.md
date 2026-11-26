---
title: "PlayerUnlock"
description: "Asset for something a player can unlock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlock

A **class** in `Root.Township`, the global namespace.

Asset for something a player can unlock. It can raise the maximum of a stat on the player, list prerequisite unlocks and describe orb visuals on the body.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<PlayerUnlock>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PlayerUnlock`](/mod/game-api/types/global-p/playerunlock), [`PlayerUnlock.Create`](/mod/game-api/types/global-p/playerunlock-create), [`PlayerUnlockConverter`](/mod/game-api/types/global-p/playerunlockconverter)
- **Nested types** [`Create`](/mod/game-api/types/global-p/playerunlock-create), [`OrbProperties`](/mod/game-api/types/global-p/playerunlock-orbproperties), [`UnlockingPermissionsSetup`](/mod/game-api/types/global-p/playerunlock-unlockingpermissionssetup)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results), [Skills and unlocks](/mod/game-api/game-systems/skills-and-unlocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlock()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-orbs" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock-orbproperties">{"PlayerUnlock.OrbProperties"}</Link>{"[] orbs"}</code> | <span className="api-desc">Backing field for `Orbs`: orb prefabs, bones, positions and scales for this unlock.</span> |
| <Link id="m-prerequisites" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> prerequisites"}</code> | <span className="api-desc">Backing field for `Prerequisites`.</span> |
| <Link id="m-unlockingpermissions" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock-unlockingpermissionssetup">{"PlayerUnlock.UnlockingPermissionsSetup"}</Link>{" unlockingPermissions"}</code> | <span className="api-desc">Backing field for `UnlockingPermissions`: teleport and climb layer overrides and the max stat bonus.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-orbs-2" /><code><Link to="/mod/game-api/types/global-p/playerunlock-orbproperties">{"PlayerUnlock.OrbProperties"}</Link>{"[] Orbs { get; }"}</code> | <span className="api-desc">Orb visuals for this unlock: prefab, weight, bone, position and scale.</span> |
| <Link id="m-prerequisites-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> Prerequisites { get; }"}</code> | <span className="api-desc">Unlocks needed before this one.</span> |
| <Link id="m-unlockingpermissions-2" /><code><Link to="/mod/game-api/types/global-p/playerunlock-unlockingpermissionssetup">{"PlayerUnlock.UnlockingPermissionsSetup"}</Link>{" UnlockingPermissions { get; }"}</code> | <span className="api-desc">What the unlock changes: optional teleport and climb layer overrides, and the max stat change.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Adds the configured amount to the stat's maximum and base value, and again whenever the player gets a new controller.</span> |
| <Link id="m-removefrom" /><code>{"void RemoveFrom("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Takes back the stat change and stops reapplying it on new controllers.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canupdatemaxstat" /><code>{"private bool CanUpdateMaxStat("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">True when the player controller has health with a stat manager.</span> |
| <Link id="m-canupdatemaxstat-2" /><code>{"private bool CanUpdateMaxStat("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">True when the player controller has health with a stat manager.</span> |
| <Link id="m-updateplayercontroller" /><code>{"private void UpdatePlayerController("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Raises the unlock's max stat (range and base) on a new player controller. Runs on `ApplyTo` and each controller change.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerUnlock`:

<div className="api-used-in">

[`ChallengeAnalyticsEvent.ChallengeAnalyticsEvent`](/mod/game-api/types/game-other-namespaces/challengeanalyticsevent#m-ctor), [`SpiritModeDoorwaySaveData.playerUnlock`](/mod/game-api/types/game-other-namespaces/spiritmodedoorwaysavedata#m-playerunlock), [`SpiritModeDoorwaySaveDataOld1.playerUnlock`](/mod/game-api/types/game-other-namespaces/spiritmodedoorwaysavedataold1#m-playerunlock), [`Climber.unlock`](/mod/game-api/types/global-c-d/climber#m-unlock), [`ClimbingHand.ClimbingHand`](/mod/game-api/types/game-other-namespaces/climbinghand#m-ctor), [`ClimbingHand.unlock`](/mod/game-api/types/game-other-namespaces/climbinghand#m-unlock), [`ClimbingHandler.ClimbingHandler`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-ctor), [`AddUnlockToPlayer.playerUnlock`](/mod/game-api/types/game-other-namespaces/addunlocktoplayer#m-playerunlock), [`AddUnlockToPlayer.PlayerUnlock`](/mod/game-api/types/game-other-namespaces/addunlocktoplayer#m-playerunlock-2), [`AddUnlockToPlayerSaveData.PlayerUnlock`](/mod/game-api/types/game-other-namespaces/addunlocktoplayersavedata#m-playerunlock), [`ClimbingTowerTeleporterNode.playerUnlock`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-playerunlock), [`ClimbingTowerTeleporterNodeSaveDataOld2.unlockToActivateTeleporterNode`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold2#m-unlocktoactivateteleporternode), [`SpiritModeDoorway.playerUnlock`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway#m-playerunlock), [`SpiritModeDoorway.SyncDoorwayModification`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway#m-syncdoorwaymodification), [`SpiritModeDoorway.UnlockModificationPair.NewUnlock`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair#m-newunlock), [`PlayerUnlockConverter.GetFromString`](/mod/game-api/types/global-p/playerunlockconverter#m-getfromstring), [`PlayerUnlockManager.Check`](/mod/game-api/types/global-p/playerunlockmanager#m-check), [`PlayerUnlockManager.currentUnlock`](/mod/game-api/types/global-p/playerunlockmanager#m-currentunlock), [`PlayerUnlockManager.CurrentUnlock`](/mod/game-api/types/global-p/playerunlockmanager#m-currentunlock-2), [`PlayerUnlockManager.SetCurrentUnlock`](/mod/game-api/types/global-p/playerunlockmanager#m-setcurrentunlock), [`PlayerUnlockManager.SetPermanentUnlock`](/mod/game-api/types/global-p/playerunlockmanager#m-setpermanentunlock), [`PlayerUnlockManager.unlocks`](/mod/game-api/types/global-p/playerunlockmanager#m-unlocks), [`PlayerUnlockManager.Unlocks`](/mod/game-api/types/global-p/playerunlockmanager#m-unlocks-2), [`PlayerUnlockManagerSaveData.currentUnlock`](/mod/game-api/types/global-p/playerunlockmanagersavedata#m-currentunlock), [`PlayerUnlockManagerSaveData.unlocks`](/mod/game-api/types/global-p/playerunlockmanagersavedata#m-unlocks), [`PlayerUnlockStation.climbingUnlock`](/mod/game-api/types/global-p/playerunlockstation#m-climbingunlock), [`PlayerUnlockStation.InteractionInfo.currentUnlock`](/mod/game-api/types/global-p/playerunlockstation-interactioninfo#m-currentunlock), [`PlayerUnlockStationSaveData.climbingUnlock`](/mod/game-api/types/global-p/playerunlockstationsavedata#m-climbingunlock), [`PlayerUnlockStationSaveDataOld1.unlock`](/mod/game-api/types/global-p/playerunlockstationsavedataold1#m-unlock), [`PlayerUnlockStationSaveDataOld2.unlock`](/mod/game-api/types/global-p/playerunlockstationsavedataold2#m-unlock).

</div>
