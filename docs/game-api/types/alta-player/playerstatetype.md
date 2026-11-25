---
title: "PlayerStateType"
description: "The player states: none, first join, playing, combat, customization, equipment, dead, spirit and downed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateType

An **enum** in `Root.Township`, `Alta.PlayerStates`.

The player states: none, first join, playing, combat, customization, equipment, dead, spirit and downed.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-combat" /><code>{"Combat = 3"}</code> |  |
| <Link id="m-customization" /><code>{"Customization = 4"}</code> |  |
| <Link id="m-dead" /><code>{"Dead = 6"}</code> |  |
| <Link id="m-downed" /><code>{"Downed = 8"}</code> |  |
| <Link id="m-equipment" /><code>{"Equipment = 5"}</code> |  |
| <Link id="m-firstjoin" /><code>{"FirstJoin = 1"}</code> |  |
| <Link id="m-none" /><code>{"None = 0"}</code> |  |
| <Link id="m-playing" /><code>{"Playing = 2"}</code> |  |
| <Link id="m-spirit" /><code>{"Spirit = 7"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerStateType`:

[`CombatState.StateType`](/game-api/types/alta-player/combatstate#m-statetype), [`CustomizationState.StateType`](/game-api/types/alta-player/customizationstate#m-statetype), [`DeadState.StateType`](/game-api/types/alta-player/deadstate#m-statetype), [`DownedState.StateType`](/game-api/types/alta-player/downedstate#m-statetype), [`EquipmentState.StateType`](/game-api/types/alta-player/equipmentstate#m-statetype), [`FirstJoinState.StateType`](/game-api/types/alta-player/firstjoinstate#m-statetype), [`IPlayerState.RequestStateChange`](/game-api/types/alta-player/iplayerstate#m-requeststatechange), [`IPlayerState.StateType`](/game-api/types/alta-player/iplayerstate#m-statetype), [`IPlayerStateFactory.CreateNewPlayerState`](/game-api/types/alta-player/iplayerstatefactory#m-createnewplayerstate), [`IStateTransitionsManager.SetToState`](/game-api/types/alta-player/istatetransitionsmanager#m-settostate), [`PlayerStateBase.requestStateChange`](/game-api/types/alta-player/playerstatebase#m-requeststatechange), [`PlayerStateBase.RequestStateChange`](/game-api/types/alta-player/playerstatebase#m-requeststatechange-2), [`PlayerStateBase.StateType`](/game-api/types/alta-player/playerstatebase#m-statetype), [`PlayerStateChangeData.PlayerStateChangeData`](/game-api/types/alta-player/playerstatechangedata#m-ctor), [`PlayerStateChangeData.state`](/game-api/types/alta-player/playerstatechangedata#m-state), [`PlayerStateFactory.CreateNewPlayerState`](/game-api/types/alta-player/playerstatefactory#m-createnewplayerstate), [`PlayerStateManager.CurrentStateType`](/game-api/types/alta-player/playerstatemanager#m-currentstatetype), [`PlayerStateManager.GetCurrentStateOrBase`](/game-api/types/alta-player/playerstatemanager#m-getcurrentstateorbase), [`PlayerStateManager.SetState`](/game-api/types/alta-player/playerstatemanager#m-setstate), [`PlayerStateManager.syncStateChange`](/game-api/types/alta-player/playerstatemanager#m-syncstatechange), [`PlayerStateManager.SyncStateChange`](/game-api/types/alta-player/playerstatemanager#m-syncstatechange-2), [`PlayingState.StateType`](/game-api/types/alta-player/playingstate#m-statetype), [`RemoteStateTransitionsManager.SetToState`](/game-api/types/alta-player/remotestatetransitionsmanager#m-settostate), [`SpiritState.StateType`](/game-api/types/alta-player/spiritstate#m-statetype), [`StateTransitionsManager.SetToState`](/game-api/types/alta-player/statetransitionsmanager#m-settostate), [`EquipmentTransition<TFrom, TTo>.EquipmentTransition<TFrom, TTo>`](/game-api/types/alta-player/equipmenttransition-tfrom-tto#m-ctor), [`IPlayerStateTransition.DestinationStateType`](/game-api/types/alta-player/iplayerstatetransition#m-destinationstatetype), [`StateTransition<TFrom, TTo>.DestinationStateType`](/game-api/types/alta-player/statetransition-tfrom-tto#m-destinationstatetype), [`StateTransition<TFrom, TTo>.StateTransition<TFrom, TTo>`](/game-api/types/alta-player/statetransition-tfrom-tto#m-ctor), [`DiscordController.oldState`](/game-api/types/global-c-d/discordcontroller#m-oldstate).
