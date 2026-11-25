---
title: "SpiritModeDoorway"
description: "class SpiritModeDoorway in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritModeDoorway

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ITeleportAwareTrigger`](/game-api/types/global-i-l/iteleportawaretrigger), [`IDontSplit`](/game-api/types/global-i-l/idontsplit), [`IForcedPresenceOnServer`](/game-api/types/alta-networking/iforcedpresenceonserver), [`ISavable<SpiritModeDoorwaySaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpiritModeDoorwaySaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SpiritModeDoorwaySaveData`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedata)
- **Nested types** [`UnlockModificationPair`](/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpiritModeDoorway()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-boxcollider" /><code>{"private BoxCollider boxCollider"}</code> |
| <Link id="m-doorwaymode" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/spiritmodedoorwaymode">{"SpiritModeDoorwayMode"}</Link>{" doorwayMode"}</code> |
| <Link id="m-isonewaydoor" /><code>{"private bool isOneWayDoor"}</code> |
| <Link id="m-playerunlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> |
| <Link id="m-spiritdoorpasssfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" spiritDoorPassSfx"}</code> |
| <Link id="m-syncplayerunlockdoormodification" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair">{"SpiritModeDoorway.UnlockModificationPair"}</Link>{"> syncPlayerUnlockDoorModification"}</code> |
| <Link id="m-syncsavedata" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSaveData"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-syncdoorwaymodification" /><code>{"void SyncDoorwayModification("}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" newUnlock, bool isGivingUnlock)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-canenterspiritmode" /><code>{"private bool CanEnterSpiritMode("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-canexitspiritmode" /><code>{"private bool CanExitSpiritMode("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-cansyncdoormodification" /><code>{"private bool CanSyncDoorModification("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair">{"SpiritModeDoorway.UnlockModificationPair"}</Link>{" unlockModificationPair)"}</code> |
| <Link id="m-enteredonewaydoorfromcorrectdirection" /><code>{"private bool EnteredOneWayDoorFromCorrectDirection("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-playsoundeffectforplayer" /><code>{"private void PlaySoundEffectForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-syncplayerunlockdoormodification-2" /><code>{"private void SyncPlayerUnlockDoorModification("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair">{"SpiritModeDoorway.UnlockModificationPair"}</Link>{" unlockModificationPair)"}</code> |
| <Link id="m-syncsavedata-2" /><code>{"private void SyncSaveData("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updatespiritmode" /><code>{"private void UpdateSpiritMode("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |

</details>
