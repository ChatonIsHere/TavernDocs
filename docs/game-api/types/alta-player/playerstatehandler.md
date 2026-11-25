---
title: "PlayerStateHandler"
description: "delegate PlayerStateHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateHandler

A **delegate** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerStateHandler`:

[`IStateTransitionsManager.SetToState`](/game-api/types/alta-player/istatetransitionsmanager#m-settostate), [`PlayerStateManager.EnterNewState`](/game-api/types/alta-player/playerstatemanager#m-enternewstate), [`PlayerStateManager.SetState`](/game-api/types/alta-player/playerstatemanager#m-setstate), [`PlayerStateManager.StateActivated`](/game-api/types/alta-player/playerstatemanager#m-stateactivated), [`PlayerStateManager.StateDeactivated`](/game-api/types/alta-player/playerstatemanager#m-statedeactivated), [`PlayerStateManager.StateMadeCurrent`](/game-api/types/alta-player/playerstatemanager#m-statemadecurrent), [`RemoteStateTransitionsManager.SetToState`](/game-api/types/alta-player/remotestatetransitionsmanager#m-settostate), [`StateTransitionsManager.SetToState`](/game-api/types/alta-player/statetransitionsmanager#m-settostate).
