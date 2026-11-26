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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Derived types** [`SettingsFieldAccess`](/mod/game-api/types/alta-utilities/settingsfieldaccess)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"string DisplayName { get; }"}</code> | <span className="api-desc">Name shown for the setting in the menu.</span> |
| <Link id="m-settingdescription" /><code>{"string SettingDescription { get; }"}</code> | <span className="api-desc">Help text shown in the setting description panel.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid()"}</code> | <span className="api-desc">Whether the setting should be shown or used right now.</span> |

## Used in

Members of other types that take, return or hold a `ISettingsFieldAccess`:

<div className="api-used-in">

[`AssistedSpawnCommandAction.SetSettings`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-setsettings), [`MenuGameSetting.SetSettings`](/mod/game-api/types/alta-menus/menugamesetting#m-setsettings), [`MenuGameSetting<T>.SetSettings`](/mod/game-api/types/alta-menus/menugamesetting-t#m-setsettings), [`ServerCommandAction.SetSettings`](/mod/game-api/types/alta-menus/servercommandaction#m-setsettings), [`ServerMultiCommandAction.SetSettings`](/mod/game-api/types/alta-menus/servermulticommandaction#m-setsettings), [`SettingDescriptionPanel.currentSetting`](/mod/game-api/types/global-s/settingdescriptionpanel#m-currentsetting), [`SettingDescriptionPanel.ShowSetting`](/mod/game-api/types/global-s/settingdescriptionpanel#m-showsetting).

</div>
