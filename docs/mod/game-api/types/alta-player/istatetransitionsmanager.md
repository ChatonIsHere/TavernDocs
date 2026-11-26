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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`StateTransitionsManager`](/mod/game-api/types/alta-player/statetransitionsmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | <span className="api-desc">Adds a transition.</span> |
| <Link id="m-listenforstatedeactivation" /><code>{"void ListenForStateDeactivation()"}</code> | <span className="api-desc">Removes all transitions when the parent state is deactivated.</span> |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | <span className="api-desc">Removes a transition.</span> |
| <Link id="m-removealltransitions" /><code>{"void RemoveAllTransitions()"}</code> | <span className="api-desc">Removes every transition.</span> |
| <Link id="m-setactive" /><code>{"void SetActive("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition, bool isActive)"}</code> | <span className="api-desc">Turns a transition on or off.</span> |
| <Link id="m-settostate" /><code>{"void SetToState("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> | <span className="api-desc">Asks the state manager to switch to a state type, with a callback run before it activates.</span> |
| <Link id="m-triggertransition" /><code>{"void TriggerTransition("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> | <span className="api-desc">Runs a transition now.</span> |

## Used in

Members of other types that take, return or hold a `IStateTransitionsManager`:

<div className="api-used-in">

[`PlayerStateBase.TransitionsManager`](/mod/game-api/types/alta-player/playerstatebase#m-transitionsmanager), [`IPlayerStateTransition.StateTransitionsManager`](/mod/game-api/types/alta-player/iplayerstatetransition#m-statetransitionsmanager), [`StateTransition<TFrom, TTo>.StateTransitionsManager`](/mod/game-api/types/alta-player/statetransition-tfrom-tto#m-statetransitionsmanager).

</div>
