---
title: "IPlayerStateTransition"
description: "interface IPlayerStateTransition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerStateTransition

An **interface** in `Root.Township`, `Alta.PlayerStates.Transitions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`StateTransition<TFrom, TTo>`](/game-api/types/alta-player/statetransition-tfrom-tto)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destinationstatetype" /><code><Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" DestinationStateType { get; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> |  |
| <Link id="m-sourcestate" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" SourceState { set; }"}</code> |  |
| <Link id="m-statetransitionsmanager" /><code><Link to="/game-api/types/alta-player/istatetransitionsmanager">{"IStateTransitionsManager"}</Link>{" StateTransitionsManager { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-transitiontodestinationstateexternal" /><code>{"void TransitionToDestinationStateExternal()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPlayerStateTransition`:

[`IStateTransitionsManager.Add`](/game-api/types/alta-player/istatetransitionsmanager#m-add), [`IStateTransitionsManager.Remove`](/game-api/types/alta-player/istatetransitionsmanager#m-remove), [`IStateTransitionsManager.SetActive`](/game-api/types/alta-player/istatetransitionsmanager#m-setactive), [`IStateTransitionsManager.TriggerTransition`](/game-api/types/alta-player/istatetransitionsmanager#m-triggertransition), [`RemoteStateTransitionsManager.TriggerTransition`](/game-api/types/alta-player/remotestatetransitionsmanager#m-triggertransition), [`StateTransitionsManager.Add`](/game-api/types/alta-player/statetransitionsmanager#m-add), [`StateTransitionsManager.Remove`](/game-api/types/alta-player/statetransitionsmanager#m-remove), [`StateTransitionsManager.SetActive`](/game-api/types/alta-player/statetransitionsmanager#m-setactive), [`StateTransitionsManager.transitions`](/game-api/types/alta-player/statetransitionsmanager#m-transitions), [`StateTransitionsManager.TriggerTransition`](/game-api/types/alta-player/statetransitionsmanager#m-triggertransition).
