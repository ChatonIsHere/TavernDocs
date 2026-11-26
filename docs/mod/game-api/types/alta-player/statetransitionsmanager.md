---
title: "StateTransitionsManager"
description: "Holds the active transitions out of one player state and runs them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StateTransitionsManager

A **class** in `Root.Township`, `Alta.PlayerStates`.

Holds the active transitions out of one player state and runs them. The server-side version; clients get `RemoteStateTransitionsManager`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`IStateTransitionsManager`](/mod/game-api/types/alta-player/istatetransitionsmanager)
- **Derived types** [`RemoteStateTransitionsManager`](/mod/game-api/types/alta-player/remotestatetransitionsmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StateTransitionsManager("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState)"}</code> | Creates a `StateTransitionsManager` from `parentState`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-parentstate" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState"}</code> | The state these transitions leave from. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-transitions" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{"> transitions"}</code> | The transitions currently added. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | Adds a transition, links it to this manager and the parent state, and turns it on. Warns if already added. |
| <Link id="m-listenforstatedeactivation" /><code>{"void ListenForStateDeactivation()"}</code> | Hooks the state manager so all transitions are removed when the parent state deactivates. |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | Turns off and clears one transition. Warns if it wasn't added. |
| <Link id="m-removealltransitions" /><code>{"void RemoveAllTransitions()"}</code> | Turns off and clears every transition. |
| <Link id="m-setactive" /><code>{"void SetActive("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition, bool isActive)"}</code> | Turns a transition's listeners on or off without removing it. |
| <Link id="m-settostate" /><code>{"virtual void SetToState("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> | Switches the player's state manager to the given state, running the callback before it activates. |
| <Link id="m-triggertransition" /><code>{"virtual void TriggerTransition("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> | Adds the transition if needed, then runs it now. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearalltransitions" /><code>{"private void ClearAllTransitions("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | When the parent state deactivates, removes all transitions and stops listening. |

</details>
