---
title: "IPlayerStateSettings"
description: "Settings for one player state: which state class it is for and which controller modes it adds and removes while active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerStateSettings

An **interface** in `Root.Township`, `Alta.PlayerStates`.

Settings for one player state: which state class it is for and which controller modes it adds and removes while active.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`PlayerStateSettings`](/mod/game-api/types/alta-player/playerstatesettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlstoadd" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToAdd { get; }"}</code> | <span className="api-desc">Controller modes added when the state activates and removed when it ends.</span> |
| <Link id="m-controlstoremove" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToRemove { get; }"}</code> | <span className="api-desc">Controller modes removed when the state activates and added back when it ends.</span> |
| <Link id="m-statetype" /><code>{"Type StateType { get; }"}</code> | <span className="api-desc">The player state class these settings belong to.</span> |

## Used in

Members of other types that take, return or hold a `IPlayerStateSettings`:

<div className="api-used-in">

[`IPlayerState.Settings`](/mod/game-api/types/alta-player/iplayerstate#m-settings), [`PlayerStateBase.Settings`](/mod/game-api/types/alta-player/playerstatebase#m-settings).

</div>
