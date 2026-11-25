---
title: "CustomizationState"
description: "The player state for the character customization room."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationState

A **class** in `Root.Township`, `Alta.PlayerStates`.

The player state for the character customization room. The client spawns the room and a customization controller; when the player finishes, the server saves their cosmetics and moves them to playing.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase)
- **Derived types** [`CustomizationToPlayingTransition`](/game-api/types/alta-player/customizationtoplayingtransition), [`FirstJoinToCustomizationTransition`](/game-api/types/alta-player/firstjointocustomizationtransition), [`PlayingToCustomizationTransition`](/game-api/types/alta-player/playingtocustomizationtransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationState(IPostProcessController postProcessController)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-customizationcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/customizationplayercontroller">{"CustomizationPlayerController"}</Link>{" customizationController"}</code> |  |
| <Link id="m-customizationroom" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationRoom"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "Customization State". |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.Customization`. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/customizationstatesettings">{"CustomizationStateSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroycustomizationcontrollerandroom" /><code>{"private void DestroyCustomizationControllerAndRoom()"}</code> |  |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | Server: loads the chunk at the player's spawn position if they are not in one yet. |
| <Link id="m-onactivateremote" /><code>{"protected override async void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client, local player: spawns the customization room and controller, then resets post processing. |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | Server: counts a finish customization action for the player. |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client, local player: fades out, unlinks and destroys the customization controller and room. |
| <Link id="m-repositionplayer" /><code>{"private void RepositionPlayer()"}</code> |  |
| <Link id="m-spawncontroller" /><code>{"private void SpawnController()"}</code> |  |
| <Link id="m-spawncustomizationroom" /><code>{"private async Task SpawnCustomizationRoom()"}</code> |  |
| <Link id="m-sync" /><code>{"protected override async void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the chosen cosmetics. On the server it checks them, saves them, syncs them to others and starts the customization to playing transition. |
| <Link id="m-verifycustomization" /><code>{"private async Task VerifyCustomization(bool isValid)"}</code> |  |
