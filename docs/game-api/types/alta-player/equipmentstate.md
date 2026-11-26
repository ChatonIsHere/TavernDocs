---
title: "EquipmentState"
description: "Player state for the equipment (cosmetics) screen."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentState

A **class** in `Root.Township`, `Alta.PlayerStates`.

Player state for the equipment (cosmetics) screen. The local player gets a customization room with a dummy and name board in front of them; others see a remote effect there.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`EquipmentToPlayingTransition`](/game-api/types/alta-player/equipmenttoplayingtransition), [`PlayingToEquipmentTransition`](/game-api/types/alta-player/playingtoequipmenttransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentState("}<Link to="/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> | Creates an `EquipmentState` from `playingState`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activename" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeName"}</code> | The pooled name board shown above the dummy. |
| <Link id="m-remotedummyeffects" /><code>{"private "}<Link to="/game-api/types/global-q-r/remoteequipmentmodevisuals">{"RemoteEquipmentModeVisuals"}</Link>{" remoteDummyEffects"}</code> | The spawned remote visuals for this player. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered `UpdateNameBoardPosition` method. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationroom" /><code><Link to="/game-api/types/alta-customization/equipmentcustomizationroom">{"EquipmentCustomizationRoom"}</Link>{" CustomizationRoom { get; private set; }"}</code> | The `EquipmentCustomizationRoom` spawned for the local player. |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "Equipment State". |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.Equipment`. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" Settings { get; }"}</code> | The state's `EquipmentStateSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringLoading)"}</code> | False while loading, true otherwise. |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | Does nothing. |
| <Link id="m-onplayercontrollerfound" /><code>{"protected override void OnPlayerControllerFound("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isFromOnActivate)"}</code> | Local player: spawns the room and name board and adds the back-to-playing transition. Others: spawns the remote dummy effect. |
| <Link id="m-onplayercontrollerlost" /><code>{"protected override void OnPlayerControllerLost(bool isFromOnDeactivate)"}</code> | Removes the room or the remote effect. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycustomizationdummy" /><code>{"private void DestroyCustomizationDummy()"}</code> | Local player: unlinks the equipment room, stops the name board update and releases the name board. |
| <Link id="m-destroyremoteeffects" /><code>{"private void DestroyRemoteEffects(bool isAnimatingEffects)"}</code> | Other players: makes the remote dummy effect disappear, or destroys it straight away. |
| <Link id="m-getdummyspawnposition" /><code>{"private Vector3 GetDummySpawnPosition()"}</code> | A point in front of the player's feet, along the head's flat forward, at `DummySpawnDistanceFromPlayer`. |
| <Link id="m-positioninfrontofplayer" /><code>{"private void PositionInFrontOfPlayer(Transform transformToPosition)"}</code> | Puts a transform at the dummy spawn position facing the player's feet. |
| <Link id="m-spawncustomizationdummy" /><code>{"private void SpawnCustomizationDummy()"}</code> | Local player: spawns the equipment room in front of the player and a name board above the dummy. |
| <Link id="m-spawnremotedummyeffects" /><code>{"private void SpawnRemoteDummyEffects(bool isAnimatingEffects)"}</code> | Spawns the effect other players (and the server) see in front of someone in equipment mode. |
| <Link id="m-updatenameboardposition" /><code>{"private void UpdateNameBoardPosition()"}</code> | Each frame keeps the name board above the dummy's head, facing the player. |

</details>
