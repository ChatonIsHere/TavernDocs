---
title: "PlayingState"
description: "class PlayingState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayingState

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase)
- **Derived types** [`CombatState`](/game-api/types/alta-player/combatstate), [`DownedState`](/game-api/types/alta-player/downedstate), [`EquipmentState`](/game-api/types/alta-player/equipmentstate), [`PlayingToSpiritTransition`](/game-api/types/alta-player/playingtospirittransition), [`SpiritState`](/game-api/types/alta-player/spiritstate), [`SpiritToPlayingTransition`](/game-api/types/alta-player/spirittoplayingtransition), [`CustomizationToPlayingTransition`](/game-api/types/alta-player/customizationtoplayingtransition), [`DeadToPlayingTransition`](/game-api/types/alta-player/deadtoplayingtransition), [`DownedToPlayingTransition`](/game-api/types/alta-player/downedtoplayingtransition), [`EquipmentToPlayingTransition`](/game-api/types/alta-player/equipmenttoplayingtransition), [`FirstJoinToPlayingTransition`](/game-api/types/alta-player/firstjointoplayingtransition), [`PlayingToCombatTransition`](/game-api/types/alta-player/playingtocombattransition), [`PlayingToCustomizationTransition`](/game-api/types/alta-player/playingtocustomizationtransition), [`PlayingToDeadTransition`](/game-api/types/alta-player/playingtodeadtransition), [`PlayingToDownedTransition`](/game-api/types/alta-player/playingtodownedtransition), [`PlayingToEquipmentTransition`](/game-api/types/alta-player/playingtoequipmenttransition)
- **Documented in** [Player states](/game-api/networking/player-states)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingState()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrespawning" /><code>{"bool IsRespawning { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"override string Name { get; set; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/playingstatesettings">{"PlayingStateSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-statetype" /><code>{"override "}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-syncstateenter" /><code>{"override void SyncStateEnter("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstateleave" /><code>{"override void SyncStateLeave("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-onactivate" /><code>{"protected override void OnActivate()"}</code> |  |
| <Link id="m-onactivateremote" /><code>{"protected override void OnActivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-ondeactivateremote" /><code>{"protected override void OnDeactivateRemote(bool isPlayerCharacterSpawned)"}</code> |  |
| <Link id="m-ondecorated" /><code>{"protected override void OnDecorated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
| <Link id="m-ondecoratedremote" /><code>{"protected override void OnDecoratedRemote("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
| <Link id="m-onundecorated" /><code>{"protected override void OnUndecorated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
| <Link id="m-onundecoratedremote" /><code>{"protected override void OnUndecoratedRemote("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
| <Link id="m-spawnplayercontroller" /><code>{"private void SpawnPlayerController()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayingState`:

[`CombatState.CombatState`](/game-api/types/alta-player/combatstate#m-ctor), [`DownedState.DownedState`](/game-api/types/alta-player/downedstate#m-ctor), [`EquipmentState.EquipmentState`](/game-api/types/alta-player/equipmentstate#m-ctor), [`SpiritState.SpiritState`](/game-api/types/alta-player/spiritstate#m-ctor).
