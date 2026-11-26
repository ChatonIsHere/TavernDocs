---
title: "SpiritModeDoorway"
description: "Trigger doorway in the climbing tower that puts players into spirit mode (sets their current unlock) or takes them out of it as they walk or teleport through."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritModeDoorway

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Trigger doorway in the climbing tower that puts players into spirit mode (sets their current unlock) or takes them out of it as they walk or teleport through. The change is sent as a message and applied on the server.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ITeleportAwareTrigger`](/mod/game-api/types/global-i-l/iteleportawaretrigger), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit), [`IForcedPresenceOnServer`](/mod/game-api/types/alta-networking/iforcedpresenceonserver), [`ISavable<SpiritModeDoorwaySaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SpiritModeDoorwaySaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SpiritModeDoorwaySaveData`](/mod/game-api/types/game-other-namespaces/spiritmodedoorwaysavedata)
- **Nested types** [`UnlockModificationPair`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritModeDoorway()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boxcollider" /><code>{"private BoxCollider boxCollider"}</code> | Trigger collider of the doorway. Its size is saved and synced. |
| <Link id="m-doorwaymode" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/spiritmodedoorwaymode">{"SpiritModeDoorwayMode"}</Link>{" doorwayMode"}</code> | Whether the door adds or removes spirit mode. |
| <Link id="m-isonewaydoor" /><code>{"private bool isOneWayDoor"}</code> | When true, teleporting through only counts from the door's forward side. |
| <Link id="m-playerunlock" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> | The unlock given as spirit mode. |
| <Link id="m-spiritdoorpasssfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" spiritDoorPassSfx"}</code> | Sound played when a player passes through and their mode changes. |
| <Link id="m-syncplayerunlockdoormodification" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair">{"SpiritModeDoorway.UnlockModificationPair"}</Link>{"> syncPlayerUnlockDoorModification"}</code> | Method sync for the add or remove unlock message. |
| <Link id="m-syncsavedata" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSaveData"}</code> | Method sync for the door settings. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the save-data sync on `SyncA` and the unlock change sync on `SettingsChanged`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the door's settings to the joining player. |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> | When a player character enters the collider, updates that player's spirit mode. The one-way check is not applied here. |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | When a player teleports through, updates their spirit mode, honouring the one-way direction. |
| <Link id="m-syncdoorwaymodification" /><code>{"void SyncDoorwayModification("}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" newUnlock, bool isGivingUnlock)"}</code> | Sends an add or remove unlock message to chunks; the receiving server applies it to the sender. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canenterspiritmode" /><code>{"private bool CanEnterSpiritMode("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if this door adds spirit mode and the player has no current unlock. |
| <Link id="m-canexitspiritmode" /><code>{"private bool CanExitSpiritMode("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if this door removes spirit mode and the player has a current unlock. |
| <Link id="m-cansyncdoormodification" /><code>{"private bool CanSyncDoorModification("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair">{"SpiritModeDoorway.UnlockModificationPair"}</Link>{" unlockModificationPair)"}</code> | Only applies a received change on the server (or in a local test), and only when it carries an unlock. |
| <Link id="m-enteredonewaydoorfromcorrectdirection" /><code>{"private bool EnteredOneWayDoorFromCorrectDirection("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if the player's head is on the door's forward side. |
| <Link id="m-playsoundeffectforplayer" /><code>{"private void PlaySoundEffectForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Plays the door pass sound on the player's head. |
| <Link id="m-syncplayerunlockdoormodification-2" /><code>{"private void SyncPlayerUnlockDoorModification("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/game-other-namespaces/spiritmodedoorway-unlockmodificationpair">{"SpiritModeDoorway.UnlockModificationPair"}</Link>{" unlockModificationPair)"}</code> | Server: applies a received change, setting the unlock and a checkpoint at the player's feet, or cancelling the unlock. |
| <Link id="m-syncsavedata-2" /><code>{"private void SyncSaveData("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server to client: sends the unlock, collider size, door mode and one-way flag. |
| <Link id="m-updatespiritmode" /><code>{"private void UpdateSpiritMode("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Plays the sound and sends the add or remove message if the player qualifies. |

</details>
