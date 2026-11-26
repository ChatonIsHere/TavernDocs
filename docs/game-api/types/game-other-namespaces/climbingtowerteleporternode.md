---
title: "ClimbingTowerTeleporterNode"
description: "Climbing tower teleporter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerTeleporterNode

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Climbing tower teleporter. The root node at the tower base sends a player to the highest child node they hold the orb for; child nodes send them back to the root; the outside node sends them out of the tower. Teleports run on the server.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ClimbingTowerTeleporterNodeSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ClimbingTowerTeleporterNodeSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ClimbingTowerTeleporterNodeSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNode()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-childteleporternodes" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{"> childTeleporterNodes"}</code> | The root node's child nodes, filled from its children on the server and from the sync on clients. |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The interactable that starts the teleport. |
| <Link id="m-isoutsidetowerteleporternode" /><code>{"private bool isOutsideTowerTeleporterNode"}</code> | Marks the end teleporter that sends players out of the tower. |
| <Link id="m-isrootteleporternode" /><code>{"private bool isRootTeleporterNode"}</code> | Marks the tower's start node. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-orbindextoactivateteleporternode" /><code>{"private uint orbIndexToActivateTeleporterNode"}</code> | The orb a player needs to use this node, or to be sent to it. |
| <Link id="m-playerunlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> | Inspector unlock field. Not used by this class's code. |
| <Link id="m-rootteleporternode" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{" rootTeleporterNode"}</code> | Static, so shared by every tower: the most recently set root node. |
| <Link id="m-syncsavedatatoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSaveDataToClient"}</code> | Method sync for the orb index and child list. |
| <Link id="m-teleportdefinition" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{" teleportDefinition"}</code> | Teleport effect used to move the player. |
| <Link id="m-teleportdelayinseconds" /><code>{"private float teleportDelayInSeconds"}</code> | Wait before teleporting, default 3 seconds. |
| <Link id="m-teleportoffset" /><code>{"private Vector3 teleportOffset"}</code> | Local offset of the arrival point at this node. |
| <Link id="m-unlockstation" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlockstation">{"PlayerUnlockStation"}</Link>{" unlockStation"}</code> | Optional unlock station checked for the no-delay completion case. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Adds the interaction filter (except on the outside node) and creates the save-data method sync on `SyncC`. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: makes the entity pick its location chunk by position, and records itself as the root if it is one. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: collects references and sends the orb index and child node list to the joining player. |
| <Link id="m-teleport" /><code>{"void Teleport("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Teleports the last player who used the interactable, after the delay. Hooked up from the scene. |
| <Link id="m-teleportasync" /><code>{"async void TeleportAsync("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float delayInSeconds)"}</code> | Server: finds the destination, sets a checkpoint when leaving the root, waits the delay, then teleports and turns the player. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateteleportdelay" /><code>{"private float CalculateTeleportDelay("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | No delay if the player is at a completion station without all orbs, otherwise `teleportDelayInSeconds`. |
| <Link id="m-canplayerteleporttochildnode" /><code>{"private bool CanPlayerTeleportToChildNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out int childNodeIndex)"}</code> | Finds the last child node whose orb the player has, returning its index. |
| <Link id="m-canplayerteleporttorootnode" /><code>{"private bool CanPlayerTeleportToRootNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | True if the player has this node's orb. |
| <Link id="m-cansetcheckpointtochildnode" /><code>{"private bool CanSetCheckpointToChildNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | True on the root node when the player has at least one orb. |
| <Link id="m-filterteleporterinteraction" /><code>{"private void FilterTeleporterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter: only lets a player use the teleporter if it has somewhere to send them. |
| <Link id="m-getteleportlocationforchildnode" /><code>{"private bool GetTeleportLocationForChildNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | Gets the offset position of the highest child node the player can reach. |
| <Link id="m-getteleportlocationforcompletionnode" /><code>{"private bool GetTeleportLocationForCompletionNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | Picks a random spot in the `OutsideTower` spawn area if the player has this node's orb, otherwise in `TowerCP2`. |
| <Link id="m-getteleportlocationforrootnode" /><code>{"private bool GetTeleportLocationForRootNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | Gets the root node's offset position, if the player has this node's orb. |
| <Link id="m-getteleportpositionandrotation" /><code>{"private bool GetTeleportPositionAndRotation("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | Picks the destination based on whether this is the outside, root or a child node. |
| <Link id="m-getteleporttarget" /><code>{"private Vector3 GetTeleportTarget()"}</code> | World position of this node with `teleportOffset` applied. |
| <Link id="m-initializereferences" /><code>{"private void InitializeReferences()"}</code> | On the root node, collects child nodes from its direct children and points them at this root. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws a red sphere at the teleport offset in the editor. |
| <Link id="m-playercompletedchallengewithoutallorbs" /><code>{"private bool PlayerCompletedChallengeWithoutAllOrbs("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | True if the unlock station is a completion station and the player lacks some orbs. |
| <Link id="m-setrootnode" /><code>{"private void SetRootNode("}<Link to="/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{" newRootNode)"}</code> | Sets the root node reference. |
| <Link id="m-syncsavedatatoclient-2" /><code>{"private void SyncSaveDataToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server to client: sends the orb index and the child nodes' entity IDs, which the client resolves into `childTeleporterNodes`. |

</details>
