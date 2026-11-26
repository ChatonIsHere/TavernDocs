---
title: "ISettingsFieldAccess"
description: "A game or server setting shown in a menu, with a display name and description."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISettingsFieldAccess

An **interface** in `Root.Township`, `Alta.Utilities`.

A game or server setting shown in a menu, with a display name and description. Implemented by `SettingsFieldAccess` and menu command actions.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`SettingsFieldAccess`](/game-api/types/alta-utilities/settingsfieldaccess)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"string DisplayName { get; }"}</code> | Name shown for the setting in the menu. |
| <Link id="m-settingdescription" /><code>{"string SettingDescription { get; }"}</code> | Help text shown in the setting description panel. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid()"}</code> | Whether the setting should be shown or used right now. |

## Used in

Members of other types that take, return or hold a `ISettingsFieldAccess`:

[`AssistedSpawnCommandAction.SetSettings`](/game-api/types/alta-menus/assistedspawncommandaction#m-setsettings), [`MenuGameSetting.SetSettings`](/game-api/types/alta-menus/menugamesetting#m-setsettings), [`MenuGameSetting<T>.SetSettings`](/game-api/types/alta-menus/menugamesetting-t#m-setsettings), [`ServerCommandAction.SetSettings`](/game-api/types/alta-menus/servercommandaction#m-setsettings), [`ServerMultiCommandAction.SetSettings`](/game-api/types/alta-menus/servermulticommandaction#m-setsettings), [`SettingDescriptionPanel.currentSetting`](/game-api/types/global-s/settingdescriptionpanel#m-currentsetting), [`SettingDescriptionPanel.ShowSetting`](/game-api/types/global-s/settingdescriptionpanel#m-showsetting).
