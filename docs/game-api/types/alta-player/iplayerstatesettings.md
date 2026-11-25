---
title: "IPlayerStateSettings"
description: "interface IPlayerStateSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerStateSettings

An **interface** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlstoadd" /><code>{"List<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToAdd { get; }"}</code> |  |
| <Link id="m-controlstoremove" /><code>{"List<"}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{"> ControlsToRemove { get; }"}</code> |  |
| <Link id="m-statetype" /><code>{"Type StateType { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPlayerStateSettings`:

[`IPlayerState.Settings`](/game-api/types/alta-player/iplayerstate#m-settings), [`PlayerStateBase.Settings`](/game-api/types/alta-player/playerstatebase#m-settings).
