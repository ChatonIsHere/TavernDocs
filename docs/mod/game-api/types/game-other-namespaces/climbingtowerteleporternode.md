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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ClimbingTowerTeleporterNodeSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ClimbingTowerTeleporterNodeSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ClimbingTowerTeleporterNodeSaveData`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNode()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-childteleporternodes" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{"> childTeleporterNodes"}</code> | <span className="api-desc">The root node's child nodes, filled from its children on the server and from the sync on clients.</span> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The interactable that starts the teleport.</span> |
| <Link id="m-isoutsidetowerteleporternode" /><code>{"private bool isOutsideTowerTeleporterNode"}</code> | <span className="api-desc">Marks the end teleporter that sends players out of the tower.</span> |
| <Link id="m-isrootteleporternode" /><code>{"private bool isRootTeleporterNode"}</code> | <span className="api-desc">Marks the tower's start node.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-orbindextoactivateteleporternode" /><code>{"private uint orbIndexToActivateTeleporterNode"}</code> | <span className="api-desc">The orb a player needs to use this node, or to be sent to it.</span> |
| <Link id="m-playerunlock" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> | <span className="api-desc">Inspector unlock field. Not used by this class's code.</span> |
| <Link id="m-rootteleporternode" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{" rootTeleporterNode"}</code> | <span className="api-desc">Static, so shared by every tower: the most recently set root node.</span> |
| <Link id="m-syncsavedatatoclient" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSaveDataToClient"}</code> | <span className="api-desc">Method sync for the orb index and child list.</span> |
| <Link id="m-teleportdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{" teleportDefinition"}</code> | <span className="api-desc">Teleport effect used to move the player.</span> |
| <Link id="m-teleportdelayinseconds" /><code>{"private float teleportDelayInSeconds"}</code> | <span className="api-desc">Wait before teleporting, default 3 seconds.</span> |
| <Link id="m-teleportoffset" /><code>{"private Vector3 teleportOffset"}</code> | <span className="api-desc">Local offset of the arrival point at this node.</span> |
| <Link id="m-unlockstation" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockstation">{"PlayerUnlockStation"}</Link>{" unlockStation"}</code> | <span className="api-desc">Optional unlock station checked for the no-delay completion case.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Adds the interaction filter (except on the outside node) and creates the save-data method sync on `SyncC`.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: makes the entity pick its location chunk by position, and records itself as the root if it is one.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: collects references and sends the orb index and child node list to the joining player.</span> |
| <Link id="m-teleport" /><code>{"void Teleport("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Teleports the last player who used the interactable, after the delay. Hooked up from the scene.</span> |
| <Link id="m-teleportasync" /><code>{"async void TeleportAsync("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float delayInSeconds)"}</code> | <span className="api-desc">Server: finds the destination, sets a checkpoint when leaving the root, waits the delay, then teleports and turns the player.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateteleportdelay" /><code>{"private float CalculateTeleportDelay("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">No delay if the player is at a completion station without all orbs, otherwise `teleportDelayInSeconds`.</span> |
| <Link id="m-canplayerteleporttochildnode" /><code>{"private bool CanPlayerTeleportToChildNode("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out int childNodeIndex)"}</code> | <span className="api-desc">Finds the last child node whose orb the player has, returning its index.</span> |
| <Link id="m-canplayerteleporttorootnode" /><code>{"private bool CanPlayerTeleportToRootNode("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">True if the player has this node's orb.</span> |
| <Link id="m-cansetcheckpointtochildnode" /><code>{"private bool CanSetCheckpointToChildNode("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">True on the root node when the player has at least one orb.</span> |
| <Link id="m-filterteleporterinteraction" /><code>{"private void FilterTeleporterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter: only lets a player use the teleporter if it has somewhere to send them.</span> |
| <Link id="m-getteleportlocationforchildnode" /><code>{"private bool GetTeleportLocationForChildNode("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/mod/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | <span className="api-desc">Gets the offset position of the highest child node the player can reach.</span> |
| <Link id="m-getteleportlocationforcompletionnode" /><code>{"private bool GetTeleportLocationForCompletionNode("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/mod/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | <span className="api-desc">Picks a random spot in the `OutsideTower` spawn area if the player has this node's orb, otherwise in `TowerCP2`.</span> |
| <Link id="m-getteleportlocationforrootnode" /><code>{"private bool GetTeleportLocationForRootNode("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/mod/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | <span className="api-desc">Gets the root node's offset position, if the player has this node's orb.</span> |
| <Link id="m-getteleportpositionandrotation" /><code>{"private bool GetTeleportPositionAndRotation("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/mod/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | <span className="api-desc">Picks the destination based on whether this is the outside, root or a child node.</span> |
| <Link id="m-getteleporttarget" /><code>{"private Vector3 GetTeleportTarget()"}</code> | <span className="api-desc">World position of this node with `teleportOffset` applied.</span> |
| <Link id="m-initializereferences" /><code>{"private void InitializeReferences()"}</code> | <span className="api-desc">On the root node, collects child nodes from its direct children and points them at this root.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a red sphere at the teleport offset in the editor.</span> |
| <Link id="m-playercompletedchallengewithoutallorbs" /><code>{"private bool PlayerCompletedChallengeWithoutAllOrbs("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">True if the unlock station is a completion station and the player lacks some orbs.</span> |
| <Link id="m-setrootnode" /><code>{"private void SetRootNode("}<Link to="/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{" newRootNode)"}</code> | <span className="api-desc">Sets the root node reference.</span> |
| <Link id="m-syncsavedatatoclient-2" /><code>{"private void SyncSaveDataToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server to client: sends the orb index and the child nodes' entity IDs, which the client resolves into `childTeleporterNodes`.</span> |

</details>
