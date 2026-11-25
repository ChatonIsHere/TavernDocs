---
title: "EquipmentState"
description: "class EquipmentState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentState

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase<PlayingState>`](/game-api/types/alta-player/playerstatebase-t)
- **Derived types** [`EquipmentToPlayingTransition`](/game-api/types/alta-player/equipmenttoplayingtransition), [`PlayingToEquipmentTransition`](/game-api/types/alta-player/playingtoequipmenttransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentState("}<Link to="/game-api/types/alta-player/playingstate">{"PlayingState"}</Link>{" playingState)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activename" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeName"}</code> |  |
| <Link id="m-remotedummyeffects" /><code>{"private "}<Link to="/game-api/types/global-q-r/remoteequipmentmodevisuals">{"RemoteEquipmentModeVisuals"}</Link>{" remoteDummyEffects"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationroom" /><code><Link to="/game-api/types/alta-customization/equipmentcustomizationroom">{"EquipmentCustomizationRoom"}</Link>{" CustomizationRoom { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> |  |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatestateactivation" /><code>{"override bool ValidateStateActivation(bool isDuringLoading)"}</code> |  |
| <Link id="m-destroycustomizationdummy" /><code>{"private void DestroyCustomizationDummy()"}</code> |  |
| <Link id="m-destroyremoteeffects" /><code>{"private void DestroyRemoteEffects(bool isAnimatingEffects)"}</code> |  |
| <Link id="m-getdummyspawnposition" /><code>{"private Vector3 GetDummySpawnPosition()"}</code> |  |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> |  |
| <Link id="m-onplayercontrollerfound" /><code>{"protected override void OnPlayerControllerFound("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, bool isFromOnActivate)"}</code> |  |
| <Link id="m-onplayercontrollerlost" /><code>{"protected override void OnPlayerControllerLost(bool isFromOnDeactivate)"}</code> |  |
| <Link id="m-positioninfrontofplayer" /><code>{"private void PositionInFrontOfPlayer(Transform transformToPosition)"}</code> |  |
| <Link id="m-spawncustomizationdummy" /><code>{"private void SpawnCustomizationDummy()"}</code> |  |
| <Link id="m-spawnremotedummyeffects" /><code>{"private void SpawnRemoteDummyEffects(bool isAnimatingEffects)"}</code> |  |
| <Link id="m-updatenameboardposition" /><code>{"private void UpdateNameBoardPosition()"}</code> |  |
