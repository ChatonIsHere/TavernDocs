---
title: "PlayerStateHandler"
description: "Callback that receives a player state, such as the pre-activation callback of SetToState."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateHandler

A **delegate** in `Root.Township`, `Alta.PlayerStates`.

Callback that receives a player state, such as the pre-activation callback of `SetToState`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `PlayerStateHandler`:

<div className="api-used-in">

[`IStateTransitionsManager.SetToState`](/mod/game-api/types/alta-player/istatetransitionsmanager#m-settostate), [`PlayerStateManager.EnterNewState`](/mod/game-api/types/alta-player/playerstatemanager#m-enternewstate), [`PlayerStateManager.SetState`](/mod/game-api/types/alta-player/playerstatemanager#m-setstate), [`PlayerStateManager.StateActivated`](/mod/game-api/types/alta-player/playerstatemanager#m-stateactivated), [`PlayerStateManager.StateDeactivated`](/mod/game-api/types/alta-player/playerstatemanager#m-statedeactivated), [`PlayerStateManager.StateMadeCurrent`](/mod/game-api/types/alta-player/playerstatemanager#m-statemadecurrent), [`RemoteStateTransitionsManager.SetToState`](/mod/game-api/types/alta-player/remotestatetransitionsmanager#m-settostate), [`StateTransitionsManager.SetToState`](/mod/game-api/types/alta-player/statetransitionsmanager#m-settostate).

</div>
