---
title: "MenuGameSetting"
description: "Base for an in-game menu widget that shows one game setting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuGameSetting

An **abstract class** in `Root.Township`, `Alta.Menu`.

Base for an in-game menu widget that shows one game setting. The generic `MenuGameSetting<T>` does the work.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`MenuGameSetting<T>`](/game-api/types/alta-menus/menugamesetting-t), [`ServerCommandAction`](/game-api/types/alta-menus/servercommandaction), [`ServerMultiCommandAction`](/game-api/types/alta-menus/servermulticommandaction)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected MenuGameSetting()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"abstract void SetSettings("}<Link to="/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | Switches the widget to show another setting and sets it up again. |

## Used in

Members of other types that take, return or hold a `MenuGameSetting`:

[`PooledMenuSettings.menuGameSetting`](/game-api/types/alta-player/pooledmenusettings#m-menugamesetting).
