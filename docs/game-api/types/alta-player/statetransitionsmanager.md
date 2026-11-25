---
title: "StateTransitionsManager"
description: "class StateTransitionsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StateTransitionsManager

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`IStateTransitionsManager`](/game-api/types/alta-player/istatetransitionsmanager)
- **Derived types** [`RemoteStateTransitionsManager`](/game-api/types/alta-player/remotestatetransitionsmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StateTransitionsManager("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-parentstate" /><code>{"protected "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState"}</code> |  |
| <Link id="m-transitions" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{"> transitions"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> |  |
| <Link id="m-listenforstatedeactivation" /><code>{"void ListenForStateDeactivation()"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> |  |
| <Link id="m-removealltransitions" /><code>{"void RemoveAllTransitions()"}</code> |  |
| <Link id="m-setactive" /><code>{"void SetActive("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition, bool isActive)"}</code> |  |
| <Link id="m-settostate" /><code>{"virtual void SetToState("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> |  |
| <Link id="m-triggertransition" /><code>{"virtual void TriggerTransition("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> |  |
| <Link id="m-clearalltransitions" /><code>{"private void ClearAllTransitions("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
