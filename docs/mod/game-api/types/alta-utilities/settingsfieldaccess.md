---
title: "SettingsFieldAccess"
description: "Asset that ties a settings menu entry to one game or server setting, read and written by reflection in the generic subclass."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsFieldAccess

A **class** in `Root.Township`, `Alta.Utilities`.

Asset that ties a settings menu entry to one game or server setting, read and written by reflection in the generic subclass.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`, [`ISettingsFieldAccess`](/mod/game-api/types/alta-utilities/isettingsfieldaccess)
- **Derived types** [`ServerCommandDefinitionBase`](/mod/game-api/types/alta-menus/servercommanddefinitionbase), [`SettingsFieldAccess<TFieldType>`](/mod/game-api/types/alta-utilities/settingsfieldaccess-tfieldtype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsFieldAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> | <span className="api-desc">Name shown for the setting. Backing field for `DisplayName`.</span> |
| <Link id="m-settingtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" settingType"}</code> | <span className="api-desc">Kind of setting, which picks the UI control. Backing field for `SettingType`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> | <span className="api-desc">Name shown in the settings menu.</span> |
| <Link id="m-settingdescription" /><code>{"virtual string SettingDescription { get; }"}</code> | <span className="api-desc">Help text for the setting. Empty in the base class.</span> |
| <Link id="m-settings" /><code>{"Settings Settings { get; set; }"}</code> | <span className="api-desc">The settings object values are read from and written to.</span> |
| <Link id="m-settingtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" { get; }"}</code> | <span className="api-desc">The kind of control: toggle, scroll, enum, command and so on.</span> |
| <Link id="m-onmodifed" /><code>{"protected Action OnModifed { get; private set; }"}</code> | <span className="api-desc">Called after a value is set. For game settings it notifies listeners and saves.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"virtual bool IsValid()"}</code> | <span className="api-desc">Whether the entry can be used. The generic version also needs the named property to exist.</span> |
| <Link id="m-setupfromgamesettings" /><code>{"void SetupFromGameSettings()"}</code> | <span className="api-desc">Points the entry at the local game settings, saving them on every change.</span> |
| <Link id="m-setupfromserversettings" /><code>{"void SetupFromServerSettings("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Points the entry at a server's settings. Changes aren't saved automatically.</span> |

## Used in

Members of other types that take, return or hold a `SettingsFieldAccess`:

<div className="api-used-in">

[`DevToolsBoard.settingsToDisplay`](/mod/game-api/types/alta-player/devtoolsboard#m-settingstodisplay), [`PooledMenuSettings.SetSettings`](/mod/game-api/types/alta-player/pooledmenusettings#m-setsettings), [`QuickAccessSettingsBoard.settingsToDisplay`](/mod/game-api/types/alta-player/quickaccesssettingsboard#m-settingstodisplay), [`SettingsQuickAccessMenu.settingsToDisplay`](/mod/game-api/types/alta-player/settingsquickaccessmenu#m-settingstodisplay), [`SettingsQuickAccessMenu.SettingsToDisplay`](/mod/game-api/types/alta-player/settingsquickaccessmenu#m-settingstodisplay-2).

</div>
