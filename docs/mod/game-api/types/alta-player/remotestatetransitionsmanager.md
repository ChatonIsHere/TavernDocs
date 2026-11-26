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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`StateTransitionsManager`](/mod/game-api/types/alta-player/statetransitionsmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteStateTransitionsManager("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState)"}</code> | <span className="api-desc">Creates a `RemoteStateTransitionsManager` from `parentState`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settostate" /><code>{"override void SetToState("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> | <span className="api-desc">Asks the server to change to the given state; the pre-activation callback is not used.</span> |
| <Link id="m-triggertransition" /><code>{"override void TriggerTransition("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> | <span className="api-desc">Asks the server to change to the transition's destination state.</span> |
