---
title: "IPlayerStateTransition"
description: "A possible move from one player state to another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerStateTransition

An **interface** in `Root.Township`, `Alta.PlayerStates.Transitions`.

A possible move from one player state to another. While active it listens for its trigger, then asks the transitions manager to switch states.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`StateTransition<TFrom, TTo>`](/mod/game-api/types/alta-player/statetransition-tfrom-tto)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destinationstatetype" /><code><Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" DestinationStateType { get; }"}</code> | <span className="api-desc">The state this transition leads to.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">Whether the transition is listening for its trigger. Setting it adds or removes the listeners.</span> |
| <Link id="m-sourcestate" /><code><Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" SourceState { set; }"}</code> | <span className="api-desc">The state this transition leads away from. Setting it also picks up that state's player and manager.</span> |
| <Link id="m-statetransitionsmanager" /><code><Link to="/mod/game-api/types/alta-player/istatetransitionsmanager">{"IStateTransitionsManager"}</Link>{" StateTransitionsManager { get; set; }"}</code> | <span className="api-desc">The manager that performs the switch.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Clears the source state.</span> |
| <Link id="m-transitiontodestinationstateexternal" /><code>{"void TransitionToDestinationStateExternal()"}</code> | <span className="api-desc">Switches to the destination state now, from outside the transition.</span> |

## Used in

Members of other types that take, return or hold a `IPlayerStateTransition`:

<div className="api-used-in">

[`IStateTransitionsManager.Add`](/mod/game-api/types/alta-player/istatetransitionsmanager#m-add), [`IStateTransitionsManager.Remove`](/mod/game-api/types/alta-player/istatetransitionsmanager#m-remove), [`IStateTransitionsManager.SetActive`](/mod/game-api/types/alta-player/istatetransitionsmanager#m-setactive), [`IStateTransitionsManager.TriggerTransition`](/mod/game-api/types/alta-player/istatetransitionsmanager#m-triggertransition), [`RemoteStateTransitionsManager.TriggerTransition`](/mod/game-api/types/alta-player/remotestatetransitionsmanager#m-triggertransition), [`StateTransitionsManager.Add`](/mod/game-api/types/alta-player/statetransitionsmanager#m-add), [`StateTransitionsManager.Remove`](/mod/game-api/types/alta-player/statetransitionsmanager#m-remove), [`StateTransitionsManager.SetActive`](/mod/game-api/types/alta-player/statetransitionsmanager#m-setactive), [`StateTransitionsManager.transitions`](/mod/game-api/types/alta-player/statetransitionsmanager#m-transitions), [`StateTransitionsManager.TriggerTransition`](/mod/game-api/types/alta-player/statetransitionsmanager#m-triggertransition).

</div>
