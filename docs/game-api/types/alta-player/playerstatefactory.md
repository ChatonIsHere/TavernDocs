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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`IPlayerStateFactory`](/game-api/types/alta-player/iplayerstatefactory)
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStateFactory(IPostProcessController postProcessController)"}</code> | Creates a `PlayerStateFactory` from `postProcessController`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-debuffmanager" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" debuffManager"}</code> | One `DownedStateDebuffManager` shared by every `DownedState` this factory makes. |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> | Post-process controller handed to new customization states. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createnewplayerstate" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" CreateNewPlayerState("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseStateForDecorators)"}</code> | Makes a new state of the given type. Decorator states (combat, equipment, spirit, downed) get the `PlayingState` found under the given base state. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-findstateoftype" /><code>{"private static T FindStateOfType<T>("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" stateToSearch)"}</code> | Walks down a state's `BaseState` chain and returns the first state of the given type, or null. |

</details>
