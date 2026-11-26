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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/mod/game-api/types/alta-player/playerstatebase)
- **Derived types** [`CustomizationToPlayingTransition`](/mod/game-api/types/alta-player/customizationtoplayingtransition), [`FirstJoinToCustomizationTransition`](/mod/game-api/types/alta-player/firstjointocustomizationtransition), [`PlayingToCustomizationTransition`](/mod/game-api/types/alta-player/playingtocustomizationtransition)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationState(IPostProcessController postProcessController)"}</code> | <span className="api-desc">Creates a `CustomizationState` from `postProcessController`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customizationcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/customizationplayercontroller">{"CustomizationPlayerController"}</Link>{" customizationController"}</code> | <span className="api-desc">The local customization player controller while the room is open.</span> |
| <Link id="m-customizationroom" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationRoom"}</code> | <span className="api-desc">The spawned `CosmeticCustomizationManager` room.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> | <span className="api-desc">Post processing controller, reset when the room opens.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">"Customization State".</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">`PlayerStateType.Customization`.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/customizationstatesettings">{"CustomizationStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The state's `CustomizationStateSettings` (room prefab, position, fade time and so on).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | <span className="api-desc">Server: loads the chunk at the player's spawn position if they are not in one yet.</span> |
| <Link id="m-onactivateremote" /><code>{"protected override async void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client, local player: spawns the customization room and controller, then resets post processing.</span> |
| <Link id="m-ondeactivate" /><code>{"protected override void OnDeactivate()"}</code> | <span className="api-desc">Server: counts a finish customization action for the player.</span> |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client, local player: fades out, unlinks and destroys the customization controller and room.</span> |
| <Link id="m-sync" /><code>{"protected override async void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the chosen cosmetics. On the server it checks them, saves them, syncs them to others and starts the customization to playing transition.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroycustomizationcontrollerandroom" /><code>{"private void DestroyCustomizationControllerAndRoom()"}</code> | <span className="api-desc">Client: destroys the customization controller and room.</span> |
| <Link id="m-repositionplayer" /><code>{"private void RepositionPlayer()"}</code> | <span className="api-desc">Client: turns and moves the customization controller to the room position, then fades the screen back in.</span> |
| <Link id="m-spawncontroller" /><code>{"private void SpawnController()"}</code> | <span className="api-desc">Client: spawns the customization player controller at the room, links it to the player and initializes it locally.</span> |
| <Link id="m-spawncustomizationroom" /><code>{"private async Task SpawnCustomizationRoom()"}</code> | <span className="api-desc">Client: loads owned cosmetics, spawns the room and makes its end button send the chosen cosmetics.</span> |
| <Link id="m-verifycustomization" /><code>{"private async Task VerifyCustomization(bool isValid)"}</code> | <span className="api-desc">Server: checks the player owns the sent cosmetics, and randomizes from owned items if not.</span> |

</details>
