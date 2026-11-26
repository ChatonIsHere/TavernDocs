---
title: "RemoteStateTransitionsManager"
description: "Client-side transitions manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteStateTransitionsManager

A **class** in `Root.Township`, `Alta.PlayerStates`.

Client-side transitions manager. Player states on a client get this one, so a transition sends a state change request to the server instead of switching locally.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`StateTransitionsManager`](/game-api/types/alta-player/statetransitionsmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RemoteStateTransitionsManager("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settostate" /><code>{"override void SetToState("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> | Asks the server to change to the given state; the pre-activation callback is not used. |
| <Link id="m-triggertransition" /><code>{"override void TriggerTransition("}<Link to="/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> | Asks the server to change to the transition's destination state. |
