---
title: "PlayerStateFactory"
description: "Creates player state objects by PlayerStateType."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateFactory

A **class** in `Root.Township`, `Alta.PlayerStates`.

Creates player state objects by `PlayerStateType`. Injected through VContainer as `IPlayerStateFactory`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`IPlayerStateFactory`](/mod/game-api/types/alta-player/iplayerstatefactory)
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateFactory(IPostProcessController postProcessController)"}</code> | <span className="api-desc">Creates a `PlayerStateFactory` from `postProcessController`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debuffmanager" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" debuffManager"}</code> | <span className="api-desc">One `DownedStateDebuffManager` shared by every `DownedState` this factory makes.</span> |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> | <span className="api-desc">Post-process controller handed to new customization states.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnewplayerstate" /><code><Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" CreateNewPlayerState("}<Link to="/mod/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType, "}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseStateForDecorators)"}</code> | <span className="api-desc">Makes a new state of the given type. Decorator states (combat, equipment, spirit, downed) get the `PlayingState` found under the given base state.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findstateoftype" /><code>{"private static T FindStateOfType<T>("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" stateToSearch)"}</code> | <span className="api-desc">Walks down a state's `BaseState` chain and returns the first state of the given type, or null.</span> |

</details>
