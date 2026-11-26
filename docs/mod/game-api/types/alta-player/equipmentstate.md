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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/mod/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`EquipmentToPlayingTransition`](/mod/game-api/types/alta-player/equipmenttoplayingtransition), [`PlayingToEquipmentTransition`](/mod/game-api/types/alta-player/playingtoequipmenttransition)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentState("}<Link to="/mod/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> | <span className="api-desc">Creates an `EquipmentState` from `playingState`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activename" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeName"}</code> | <span className="api-desc">The pooled name board shown above the dummy.</span> |
| <Link id="m-remotedummyeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/remoteequipmentmodevisuals">{"RemoteEquipmentModeVisuals"}</Link>{" remoteDummyEffects"}</code> | <span className="api-desc">The spawned remote visuals for this player.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered `UpdateNameBoardPosition` method.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationroom" /><code><Link to="/mod/game-api/types/alta-customization/equipmentcustomizationroom">{"EquipmentCustomizationRoom"}</Link>{" CustomizationRoom { get; private set; }"}</code> | <span className="api-desc">The `EquipmentCustomizationRoom` spawned for the local player.</span> |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">"Equipment State".</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">`PlayerStateType.Equipment`.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The state's `EquipmentStateSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringLoading)"}</code> | <span className="api-desc">False while loading, true otherwise.</span> |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-onplayercontrollerfound" /><code>{"protected override void OnPlayerControllerFound("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isFromOnActivate)"}</code> | <span className="api-desc">Local player: spawns the room and name board and adds the back-to-playing transition. Others: spawns the remote dummy effect.</span> |
| <Link id="m-onplayercontrollerlost" /><code>{"protected override void OnPlayerControllerLost(bool isFromOnDeactivate)"}</code> | <span className="api-desc">Removes the room or the remote effect.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycustomizationdummy" /><code>{"private void DestroyCustomizationDummy()"}</code> | <span className="api-desc">Local player: unlinks the equipment room, stops the name board update and releases the name board.</span> |
| <Link id="m-destroyremoteeffects" /><code>{"private void DestroyRemoteEffects(bool isAnimatingEffects)"}</code> | <span className="api-desc">Other players: makes the remote dummy effect disappear, or destroys it straight away.</span> |
| <Link id="m-getdummyspawnposition" /><code>{"private Vector3 GetDummySpawnPosition()"}</code> | <span className="api-desc">A point in front of the player's feet, along the head's flat forward, at `DummySpawnDistanceFromPlayer`.</span> |
| <Link id="m-positioninfrontofplayer" /><code>{"private void PositionInFrontOfPlayer(Transform transformToPosition)"}</code> | <span className="api-desc">Puts a transform at the dummy spawn position facing the player's feet.</span> |
| <Link id="m-spawncustomizationdummy" /><code>{"private void SpawnCustomizationDummy()"}</code> | <span className="api-desc">Local player: spawns the equipment room in front of the player and a name board above the dummy.</span> |
| <Link id="m-spawnremotedummyeffects" /><code>{"private void SpawnRemoteDummyEffects(bool isAnimatingEffects)"}</code> | <span className="api-desc">Spawns the effect other players (and the server) see in front of someone in equipment mode.</span> |
| <Link id="m-updatenameboardposition" /><code>{"private void UpdateNameBoardPosition()"}</code> | <span className="api-desc">Each frame keeps the name board above the dummy's head, facing the player.</span> |

</details>
