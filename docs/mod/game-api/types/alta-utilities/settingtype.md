---
title: "SettingType"
description: "Kind of setting control in a settings menu: toggle, scroll, enum float, command, multi command or assisted multi command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingType

An **enum** in `Root.Township`, `Alta.Utilities`.

Kind of setting control in a settings menu: toggle, scroll, enum float, command, multi command or assisted multi command. Used to pick the menu widget, as in `DevToolsBoard`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Values

| Member |
| --- |
| <Link id="m-assistedmulticommand" /><code>{"AssistedMultiCommand = 5"}</code> |
| <Link id="m-command" /><code>{"Command = 3"}</code> |
| <Link id="m-enumfloat" /><code>{"EnumFloat = 2"}</code> |
| <Link id="m-multicommand" /><code>{"MultiCommand = 4"}</code> |
| <Link id="m-scroll" /><code>{"Scroll = 1"}</code> |
| <Link id="m-toggle" /><code>{"Toggle = 0"}</code> |

## Used in

Members of other types that take, return or hold a `SettingType`:

<div className="api-used-in">

[`DevToolsBoard.ScaleControl`](/mod/game-api/types/alta-player/devtoolsboard#m-scalecontrol), [`DevToolsBoard.SettingTypeScaler.settingType`](/mod/game-api/types/alta-player/devtoolsboard-settingtypescaler#m-settingtype), [`SettingsFieldAccess.settingType`](/mod/game-api/types/alta-utilities/settingsfieldaccess#m-settingtype), [`SettingsFieldAccess.SettingType`](/mod/game-api/types/alta-utilities/settingsfieldaccess#m-settingtype-2).

</div>
