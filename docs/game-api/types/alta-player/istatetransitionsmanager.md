---
title: "IStateTransitionsManager"
description: "Manages a player state's transitions to other states."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStateTransitionsManager

An **interface** in `Root.Township`, `Alta.PlayerStates`.

Manages a player state's transitions to other states. Implemented by `StateTransitionsManager`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`StateTransitionsManager`](/game-api/types/alta-player/statetransitionsmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | Adds a transition. |
| <Link id="m-listenforstatedeactivation" /><code>{"void ListenForStateDeactivation()"}</code> | Removes all transitions when the parent state is deactivated. |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | Removes a transition. |
| <Link id="m-removealltransitions" /><code>{"void RemoveAllTransitions()"}</code> | Removes every transition. |
| <Link id="m-setactive" /><code>{"void SetActive("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition, bool isActive)"}</code> | Turns a transition on or off. |
| <Link id="m-settostate" /><code>{"void SetToState("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> | Asks the state manager to switch to a state type, with a callback run before it activates. |
| <Link id="m-triggertransition" /><code>{"void TriggerTransition("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> | Runs a transition now. |

## Used in

Members of other types that take, return or hold a `IStateTransitionsManager`:

[`PlayerStateBase.TransitionsManager`](/game-api/types/alta-player/playerstatebase#m-transitionsmanager), [`IPlayerStateTransition.StateTransitionsManager`](/game-api/types/alta-player/iplayerstatetransition#m-statetransitionsmanager), [`StateTransition<TFrom, TTo>.StateTransitionsManager`](/game-api/types/alta-player/statetransition-tfrom-tto#m-statetransitionsmanager).
