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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationState(IPostProcessController postProcessController)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customizationcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/customizationplayercontroller">{"CustomizationPlayerController"}</Link>{" customizationController"}</code> | The local customization player controller while the room is open. |
| <Link id="m-customizationroom" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationRoom"}</code> | The spawned `CosmeticCustomizationManager` room. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> | Post processing controller, reset when the room opens. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | "Customization State". |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | `PlayerStateType.Customization`. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/customizationstatesettings">{"CustomizationStateSettings"}</Link>{" Settings { get; }"}</code> | The state's `CustomizationStateSettings` (room prefab, position, fade time and so on). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | Server: loads the chunk at the player's spawn position if they are not in one yet. |
| <Link id="m-onactivateremote" /><code>{"protected override async void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client, local player: spawns the customization room and controller, then resets post processing. |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | Server: counts a finish customization action for the player. |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | Client, local player: fades out, unlinks and destroys the customization controller and room. |
| <Link id="m-sync" /><code>{"protected override async void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the chosen cosmetics. On the server it checks them, saves them, syncs them to others and starts the customization to playing transition. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycustomizationcontrollerandroom" /><code>{"private void DestroyCustomizationControllerAndRoom()"}</code> | Client: destroys the customization controller and room. |
| <Link id="m-repositionplayer" /><code>{"private void RepositionPlayer()"}</code> | Client: turns and moves the customization controller to the room position, then fades the screen back in. |
| <Link id="m-spawncontroller" /><code>{"private void SpawnController()"}</code> | Client: spawns the customization player controller at the room, links it to the player and initializes it locally. |
| <Link id="m-spawncustomizationroom" /><code>{"private async Task SpawnCustomizationRoom()"}</code> | Client: loads owned cosmetics, spawns the room and makes its end button send the chosen cosmetics. |
| <Link id="m-verifycustomization" /><code>{"private async Task VerifyCustomization(bool isValid)"}</code> | Server: checks the player owns the sent cosmetics, and randomizes from owned items if not. |

</details>
