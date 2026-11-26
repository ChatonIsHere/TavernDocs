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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Values

| Member |
| --- |
| <Link id="m-combat" /><code>{"Combat = 3"}</code> |
| <Link id="m-customization" /><code>{"Customization = 4"}</code> |
| <Link id="m-dead" /><code>{"Dead = 6"}</code> |
| <Link id="m-downed" /><code>{"Downed = 8"}</code> |
| <Link id="m-equipment" /><code>{"Equipment = 5"}</code> |
| <Link id="m-firstjoin" /><code>{"FirstJoin = 1"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-playing" /><code>{"Playing = 2"}</code> |
| <Link id="m-spirit" /><code>{"Spirit = 7"}</code> |

## Used in

Members of other types that take, return or hold a `PlayerStateType`:

[`CombatState.StateType`](/mod/game-api/types/alta-player/combatstate#m-statetype), [`CustomizationState.StateType`](/mod/game-api/types/alta-player/customizationstate#m-statetype), [`DeadState.StateType`](/mod/game-api/types/alta-player/deadstate#m-statetype), [`DownedState.StateType`](/mod/game-api/types/alta-player/downedstate#m-statetype), [`EquipmentState.StateType`](/mod/game-api/types/alta-player/equipmentstate#m-statetype), [`FirstJoinState.StateType`](/mod/game-api/types/alta-player/firstjoinstate#m-statetype), [`IPlayerState.RequestStateChange`](/mod/game-api/types/alta-player/iplayerstate#m-requeststatechange), [`IPlayerState.StateType`](/mod/game-api/types/alta-player/iplayerstate#m-statetype), [`IPlayerStateFactory.CreateNewPlayerState`](/mod/game-api/types/alta-player/iplayerstatefactory#m-createnewplayerstate), [`IStateTransitionsManager.SetToState`](/mod/game-api/types/alta-player/istatetransitionsmanager#m-settostate), [`PlayerStateBase.requestStateChange`](/mod/game-api/types/alta-player/playerstatebase#m-requeststatechange), [`PlayerStateBase.RequestStateChange`](/mod/game-api/types/alta-player/playerstatebase#m-requeststatechange-2), [`PlayerStateBase.StateType`](/mod/game-api/types/alta-player/playerstatebase#m-statetype), [`PlayerStateChangeData.PlayerStateChangeData`](/mod/game-api/types/alta-player/playerstatechangedata#m-ctor), [`PlayerStateChangeData.state`](/mod/game-api/types/alta-player/playerstatechangedata#m-state), [`PlayerStateFactory.CreateNewPlayerState`](/mod/game-api/types/alta-player/playerstatefactory#m-createnewplayerstate), [`PlayerStateManager.CurrentStateType`](/mod/game-api/types/alta-player/playerstatemanager#m-currentstatetype), [`PlayerStateManager.GetCurrentStateOrBase`](/mod/game-api/types/alta-player/playerstatemanager#m-getcurrentstateorbase), [`PlayerStateManager.SetState`](/mod/game-api/types/alta-player/playerstatemanager#m-setstate), [`PlayerStateManager.syncStateChange`](/mod/game-api/types/alta-player/playerstatemanager#m-syncstatechange), [`PlayerStateManager.SyncStateChange`](/mod/game-api/types/alta-player/playerstatemanager#m-syncstatechange-2), [`PlayingState.StateType`](/mod/game-api/types/alta-player/playingstate#m-statetype), [`RemoteStateTransitionsManager.SetToState`](/mod/game-api/types/alta-player/remotestatetransitionsmanager#m-settostate), [`SpiritState.StateType`](/mod/game-api/types/alta-player/spiritstate#m-statetype), [`StateTransitionsManager.SetToState`](/mod/game-api/types/alta-player/statetransitionsmanager#m-settostate), [`EquipmentTransition<TFrom, TTo>.EquipmentTransition<TFrom, TTo>`](/mod/game-api/types/alta-player/equipmenttransition-tfrom-tto#m-ctor), [`IPlayerStateTransition.DestinationStateType`](/mod/game-api/types/alta-player/iplayerstatetransition#m-destinationstatetype), [`StateTransition<TFrom, TTo>.DestinationStateType`](/mod/game-api/types/alta-player/statetransition-tfrom-tto#m-destinationstatetype), [`StateTransition<TFrom, TTo>.StateTransition<TFrom, TTo>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto#m-ctor), [`DiscordController.oldState`](/mod/game-api/types/global-c-d/discordcontroller#m-oldstate).
