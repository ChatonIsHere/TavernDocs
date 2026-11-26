---
title: "StateTransition<TFrom, TTo>"
description: "Base for a rule that moves a player from one player state to another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StateTransition&lt;TFrom, TTo&gt;

An **abstract class** in `Root.Township`, `Alta.PlayerStates.Transitions`.

Base for a rule that moves a player from one player state to another. Subclasses hook up listeners while the transition is active and call `TransitionToDestinationState` when their condition is met.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`IPlayerStateTransition`](/mod/game-api/types/alta-player/iplayerstatetransition)
- **Derived types** [`PlayingToSpiritTransition`](/mod/game-api/types/alta-player/playingtospirittransition), [`SpiritToPlayingTransition`](/mod/game-api/types/alta-player/spirittoplayingtransition), [`CustomizationToPlayingTransition`](/mod/game-api/types/alta-player/customizationtoplayingtransition), [`DeadToPlayingTransition`](/mod/game-api/types/alta-player/deadtoplayingtransition), [`DownedToDeadTransition`](/mod/game-api/types/alta-player/downedtodeadtransition), [`DownedToPlayingTransition`](/mod/game-api/types/alta-player/downedtoplayingtransition), [`EquipmentTransition<TFrom, TTo>`](/mod/game-api/types/alta-player/equipmenttransition-tfrom-tto), [`FirstJoinToCustomizationTransition`](/mod/game-api/types/alta-player/firstjointocustomizationtransition), [`FirstJoinToPlayingTransition`](/mod/game-api/types/alta-player/firstjointoplayingtransition), [`PlayingToCustomizationTransition`](/mod/game-api/types/alta-player/playingtocustomizationtransition), [`PlayingToDeadTransition`](/mod/game-api/types/alta-player/playingtodeadtransition), [`PlayingToDownedTransition`](/mod/game-api/types/alta-player/playingtodownedtransition), [`ToCombatTransition<TFrom>`](/mod/game-api/types/alta-player/tocombattransition-tfrom)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StateTransition("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationStateType)"}</code> | Creates a `StateTransition` from `destinationStateType`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared logger for transitions. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Backing field for `IsActive`. |
| <Link id="m-sourcestate" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" sourceState"}</code> | Backing field for `SourceState`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destinationstatetype" /><code><Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" DestinationStateType { get; }"}</code> | The state type this transition leads to. |
| <Link id="m-sourcestate-2" /><code><Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" SourceState { get; }"}</code> | The state this transition belongs to. |
| <Link id="m-statetransitionsmanager" /><code><Link to="/mod/game-api/types/alta-player/istatetransitionsmanager">{"IStateTransitionsManager"}</Link>{" StateTransitionsManager { get; set; }"}</code> | Manager used to switch states. |
| <Link id="m-player" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; private set; }"}</code> | The player whose state this is, taken from the source state. |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; private set; }"}</code> | The player's controller. Filled in later if the player had none when the source state was set. |
| <Link id="m-statemanager" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; private set; }"}</code> | The player's state manager, taken from the source state. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-playerstates-transitions-iplayerstatetransition-isactive" /><code>{"private bool Alta.PlayerStates.Transitions.IPlayerStateTransition.IsActive { get; set; }"}</code> | Turning it on calls `AddListeners`, off calls `RemoveListeners`. Setting the same value again only logs a warning. |
| <Link id="m-alta-playerstates-transitions-iplayerstatetransition-sourcestate" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" Alta.PlayerStates.Transitions.IPlayerStateTransition.SourceState { set; }"}</code> | Sets the source state and picks up its state manager, player and player controller (waiting for the controller if it isn't set yet). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlisteners" /><code>{"protected abstract void AddListeners()"}</code> | Called when the transition becomes active; subscribe to whatever triggers it here. |
| <Link id="m-destinationpreactivationcallback" /><code>{"protected virtual void DestinationPreActivationCallback("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" activatedState)"}</code> | Called on the new state just before it activates. Does nothing by default. |
| <Link id="m-ontransitioncomplete" /><code>{"protected void OnTransitionComplete("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" transitionedState)"}</code> | Called after the switch with the new current state. Empty. |
| <Link id="m-removelisteners" /><code>{"protected abstract void RemoveListeners()"}</code> | Called when the transition becomes inactive; undo `AddListeners` here. |
| <Link id="m-transitiontodestinationstate" /><code>{"protected virtual "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" TransitionToDestinationState()"}</code> | Switches the player to the destination state and returns it. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Alta.PlayerStates.Transitions.IPlayerStateTransition.Clear()"}</code> | Clears the source state. |
| <Link id="m-transitiontodestinationstateexternal" /><code>{"private void Alta.PlayerStates.Transitions.IPlayerStateTransition.TransitionToDestinationStateExternal()"}</code> | Runs the transition from outside; used by the transitions manager's `TriggerTransition`. |
| <Link id="m-updateplayercontroller" /><code>{"private void UpdatePlayerController("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Picks up the player controller once the player gets one, then unhooks. |

</details>
