---
title: "IQuickAccessSettingsBoard"
description: "A board that the settings quick access menu spawns in front of the player, such as QuickAccessSettingsBoard and DevToolsBoard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IQuickAccessSettingsBoard

An **interface** in `Root.Township`, `Alta.QuickAccessActions`.

A board that the settings quick access menu spawns in front of the player, such as `QuickAccessSettingsBoard` and `DevToolsBoard`. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`DevToolsBoard`](/mod/game-api/types/alta-player/devtoolsboard), [`QuickAccessSettingsBoard`](/mod/game-api/types/alta-player/quickaccesssettingsboard)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The board's transform, used to position it in front of the player. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancedisabled" /><code>{"event Action DistanceDisabled"}</code> | Raised when the board closes itself because the player moved too far away; `SettingsQuickAccessMenu` then releases it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"void Release()"}</code> | Returns the board to its pool. Called by `SettingsQuickAccessMenu` when the board is closed or the player dies. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings)"}</code> | Fills the board from the `SettingsQuickAccessMenu` action that opened it. |

## Used in

Members of other types that take, return or hold a `IQuickAccessSettingsBoard`:

[`SettingsQuickAccessMenu.activeBoard`](/mod/game-api/types/alta-player/settingsquickaccessmenu#m-activeboard).
