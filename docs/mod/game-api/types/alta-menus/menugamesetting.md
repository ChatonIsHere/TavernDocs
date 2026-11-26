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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`MenuGameSetting<T>`](/mod/game-api/types/alta-menus/menugamesetting-t), [`ServerCommandAction`](/mod/game-api/types/alta-menus/servercommandaction), [`ServerMultiCommandAction`](/mod/game-api/types/alta-menus/servermulticommandaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MenuGameSetting()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setsettings" /><code>{"abstract void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/isettingsfieldaccess">{"ISettingsFieldAccess"}</Link>{" newSettingToDisplay)"}</code> | <span className="api-desc">Switches the widget to show another setting and sets it up again.</span> |

## Used in

Members of other types that take, return or hold a `MenuGameSetting`:

<div className="api-used-in">

[`PooledMenuSettings.menuGameSetting`](/mod/game-api/types/alta-player/pooledmenusettings#m-menugamesetting).

</div>
