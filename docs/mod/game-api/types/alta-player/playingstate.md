---
title: "PlayingState"
description: "The player state for normally playing in the world."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingState

A **class** in `Root.Township`, `Alta.PlayerStates`.

The player state for normally playing in the world. On the server, entering it spawns a player controller for the player's mode and adds transitions to combat, downed, customization and spirit.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/mod/game-api/types/alta-player/playerstatebase)
- **Derived types** [`CombatState`](/mod/game-api/types/alta-player/combatstate), [`DownedState`](/mod/game-api/types/alta-player/downedstate), [`EquipmentState`](/mod/game-api/types/alta-player/equipmentstate), [`PlayingToSpiritTransition`](/mod/game-api/types/alta-player/playingtospirittransition), [`SpiritState`](/mod/game-api/types/alta-player/spiritstate), [`SpiritToPlayingTransition`](/mod/game-api/types/alta-player/spirittoplayingtransition), [`CustomizationToPlayingTransition`](/mod/game-api/types/alta-player/customizationtoplayingtransition), [`DeadToPlayingTransition`](/mod/game-api/types/alta-player/deadtoplayingtransition), [`DownedToPlayingTransition`](/mod/game-api/types/alta-player/downedtoplayingtransition), [`EquipmentToPlayingTransition`](/mod/game-api/types/alta-player/equipmenttoplayingtransition), [`FirstJoinToPlayingTransition`](/mod/game-api/types/alta-player/firstjointoplayingtransition), [`PlayingToCombatTransition`](/mod/game-api/types/alta-player/playingtocombattransition), [`PlayingToCustomizationTransition`](/mod/game-api/types/alta-player/playingtocustomizationtransition), [`PlayingToDeadTransition`](/mod/game-api/types/alta-player/playingtodeadtransition), [`PlayingToDownedTransition`](/mod/game-api/types/alta-player/playingtodownedtransition), [`PlayingToEquipmentTransition`](/mod/game-api/types/alta-player/playingtoequipmenttransition)
- **Documented in** [Player states](/mod/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingState()"}</code> | <span className="api-desc">Creates a `PlayingState` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrespawning" /><code>{"bool IsRespawning { get; set; }"}</code> | <span className="api-desc">Set by the dead to playing transition so the new controller spawns at the respawn point.</span> |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> | <span className="api-desc">Display name, "Playing State".</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/playingstatesettings">{"PlayingStateSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The state's settings cast to `PlayingStateSettings`.</span> |
| <Link id="m-statetype" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> | <span className="api-desc">Always `PlayerStateType.Playing`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-syncstateenter" /><code>{"override void SyncStateEnter("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends nothing extra when entering.</span> |
| <Link id="m-syncstateleave" /><code>{"override void SyncStateLeave("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends nothing extra when leaving.</span> |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> | <span className="api-desc">Server: spawns a new player controller and adds the transitions out of playing.</span> |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: adds the transition to the equipment state for the local player.</span> |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> | <span className="api-desc">Client: removes the equipment transition for the local player.</span> |
| <Link id="m-ondecorated" /><code>{"protected override void OnDecorated("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Server: turns off the playing to combat transition while another state (other than equipment) decorates this one.</span> |
| <Link id="m-ondecoratedremote" /><code>{"protected override void OnDecoratedRemote("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Client: turns off the equipment transition for the local player while decorated.</span> |
| <Link id="m-onundecorated" /><code>{"protected override void OnUndecorated("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Server: turns the combat transition back on when a non-equipment decorator is removed.</span> |
| <Link id="m-onundecoratedremote" /><code>{"protected override void OnUndecoratedRemote("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> | <span className="api-desc">Client: turns the equipment transition back on for the local player.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawnplayercontroller" /><code>{"private void SpawnPlayerController()"}</code> | <span className="api-desc">Spawns the player controller prefab for the player's mode (VR, flat and so on), as a respawn if `IsRespawning`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayingState`:

<div className="api-used-in">

[`CombatState.CombatState`](/mod/game-api/types/alta-player/combatstate#m-ctor), [`DownedState.DownedState`](/mod/game-api/types/alta-player/downedstate#m-ctor), [`EquipmentState.EquipmentState`](/mod/game-api/types/alta-player/equipmentstate#m-ctor), [`SpiritState.SpiritState`](/mod/game-api/types/alta-player/spiritstate#m-ctor).

</div>
