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
| <Link id="m-ctor" /><code>{"StateTransitionsManager("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState)"}</code> | <span className="api-desc">Creates a `StateTransitionsManager` from `parentState`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-parentstate" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" parentState"}</code> | <span className="api-desc">The state these transitions leave from.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-transitions" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{"> transitions"}</code> | <span className="api-desc">The transitions currently added.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | <span className="api-desc">Adds a transition, links it to this manager and the parent state, and turns it on. Warns if already added.</span> |
| <Link id="m-listenforstatedeactivation" /><code>{"void ListenForStateDeactivation()"}</code> | <span className="api-desc">Hooks the state manager so all transitions are removed when the parent state deactivates.</span> |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" transition)"}</code> | <span className="api-desc">Turns off and clears one transition. Warns if it wasn't added.</span> |
| <Link id="m-removealltransitions" /><code>{"void RemoveAllTransitions()"}</code> | <span className="api-desc">Turns off and clears every transition.</span> |
| <Link id="m-setactive" /><code>{"void SetActive("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition, bool isActive)"}</code> | <span className="api-desc">Turns a transition's listeners on or off without removing it.</span> |
| <Link id="m-settostate" /><code>{"virtual void SetToState("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationType, "}<Link to="/mod/game-api/types/alta-player/playerstatehandler">{"PlayerStateHandler"}</Link>{" preActivationCallback)"}</code> | <span className="api-desc">Switches the player's state manager to the given state, running the callback before it activates.</span> |
| <Link id="m-triggertransition" /><code>{"virtual void TriggerTransition("}<Link to="/mod/game-api/types/alta-player/iplayerstatetransition">{"IPlayerStateTransition"}</Link>{" stateTransition)"}</code> | <span className="api-desc">Adds the transition if needed, then runs it now.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearalltransitions" /><code>{"private void ClearAllTransitions("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">When the parent state deactivates, removes all transitions and stops listening.</span> |

</details>
