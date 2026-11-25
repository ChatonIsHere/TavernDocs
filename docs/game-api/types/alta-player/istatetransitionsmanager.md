---
title: "IStateTransitionsManager"
description: "interface IStateTransitionsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStateTransitionsManager

An **interface** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`StateTransitionsManager`](/game-api/types/alta-player/statetransitionsmanager)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> |  |
| <Link id="m-listenforstatedeactivation" /><code>{"void ListenForStateDeactivation()"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> |  |
| <Link id="m-removealltransitions" /><code>{"void RemoveAllTransitions()"}</code> |  |
| <Link id="m-setactive" /><code>{"void SetActive("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition, bool isActive)"}</code> |  |
| <Link id="m-settostate" /><code>{"void SetToState("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> |  |
| <Link id="m-triggertransition" /><code>{"void TriggerTransition("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IStateTransitionsManager`:

[`PlayerStateBase.TransitionsManager`](/game-api/types/alta-player/playerstatebase#m-transitionsmanager), [`IPlayerStateTransition.StateTransitionsManager`](/game-api/types/alta-player/iplayerstatetransition#m-statetransitionsmanager), [`StateTransition<TFrom, TTo>.StateTransitionsManager`](/game-api/types/alta-player/statetransition-tfrom-tto#m-statetransitionsmanager).
