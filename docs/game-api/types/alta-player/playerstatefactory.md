---
title: "PlayerStateFactory"
description: "class PlayerStateFactory in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStateFactory

A **class** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`IPlayerStateFactory`](/game-api/types/alta-player/iplayerstatefactory)
- **Attributes** `UsedImplicitly`, `Preserve`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerStateFactory(IPostProcessController postProcessController)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-debuffmanager" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/downedstatedebuffmanager">{"DownedStateDebuffManager"}</Link>{" debuffManager"}</code> |
| <Link id="m-postprocesscontroller" /><code>{"private readonly IPostProcessController postProcessController"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-createnewplayerstate" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" CreateNewPlayerState("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" stateType, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseStateForDecorators)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-findstateoftype" /><code>{"private static T FindStateOfType<T>("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" stateToSearch)"}</code> |

</details>
