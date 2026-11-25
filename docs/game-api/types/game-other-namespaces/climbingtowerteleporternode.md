---
title: "ClimbingTowerTeleporterNode"
description: "class ClimbingTowerTeleporterNode in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerTeleporterNode

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ClimbingTowerTeleporterNodeSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ClimbingTowerTeleporterNodeSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ClimbingTowerTeleporterNodeSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNode()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childteleporternodes" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{"> childTeleporterNodes"}</code> |  |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> |  |
| <Link id="m-isoutsidetowerteleporternode" /><code>{"private bool isOutsideTowerTeleporterNode"}</code> |  |
| <Link id="m-isrootteleporternode" /><code>{"private bool isRootTeleporterNode"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-orbindextoactivateteleporternode" /><code>{"private uint orbIndexToActivateTeleporterNode"}</code> |  |
| <Link id="m-playerunlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> |  |
| <Link id="m-rootteleporternode" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{" rootTeleporterNode"}</code> |  |
| <Link id="m-syncsavedatatoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSaveDataToClient"}</code> |  |
| <Link id="m-teleportdefinition" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{" teleportDefinition"}</code> |  |
| <Link id="m-teleportdelayinseconds" /><code>{"private float teleportDelayInSeconds"}</code> |  |
| <Link id="m-teleportoffset" /><code>{"private Vector3 teleportOffset"}</code> |  |
| <Link id="m-unlockstation" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlockstation">{"PlayerUnlockStation"}</Link>{" unlockStation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-teleport" /><code>{"void Teleport("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> |  |
| <Link id="m-teleportasync" /><code>{"async void TeleportAsync("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, float delayInSeconds)"}</code> |  |
| <Link id="m-calculateteleportdelay" /><code>{"private float CalculateTeleportDelay("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-canplayerteleporttochildnode" /><code>{"private bool CanPlayerTeleportToChildNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out int childNodeIndex)"}</code> |  |
| <Link id="m-canplayerteleporttorootnode" /><code>{"private bool CanPlayerTeleportToRootNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-cansetcheckpointtochildnode" /><code>{"private bool CanSetCheckpointToChildNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-filterteleporterinteraction" /><code>{"private void FilterTeleporterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-getteleportlocationforchildnode" /><code>{"private bool GetTeleportLocationForChildNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> |  |
| <Link id="m-getteleportlocationforcompletionnode" /><code>{"private bool GetTeleportLocationForCompletionNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> |  |
| <Link id="m-getteleportlocationforrootnode" /><code>{"private bool GetTeleportLocationForRootNode("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> |  |
| <Link id="m-getteleportpositionandrotation" /><code>{"private bool GetTeleportPositionAndRotation("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, out "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> |  |
| <Link id="m-getteleporttarget" /><code>{"private Vector3 GetTeleportTarget()"}</code> |  |
| <Link id="m-initializereferences" /><code>{"private void InitializeReferences()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-playercompletedchallengewithoutallorbs" /><code>{"private bool PlayerCompletedChallengeWithoutAllOrbs("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-setrootnode" /><code>{"private void SetRootNode("}<Link to="/game-api/types/game-other-namespaces/climbingtowerteleporternode">{"ClimbingTowerTeleporterNode"}</Link>{" newRootNode)"}</code> |  |
| <Link id="m-syncsavedatatoclient-2" /><code>{"private void SyncSaveDataToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
