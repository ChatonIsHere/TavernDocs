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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`, [`ISettingsFieldAccess`](/game-api/types/alta-utilities/isettingsfieldaccess)
- **Derived types** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase), [`SettingsFieldAccess<TFieldType>`](/game-api/types/alta-utilities/settingsfieldaccess-tfieldtype)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SettingsFieldAccess()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> | Name shown for the setting. Backing field for `DisplayName`. |
| <Link id="m-settingtype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" settingType"}</code> | Kind of setting, which picks the UI control. Backing field for `SettingType`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> | Name shown in the settings menu. |
| <Link id="m-settingdescription" /><code>{"virtual string SettingDescription { get; }"}</code> | Help text for the setting. Empty in the base class. |
| <Link id="m-settings" /><code>{"Settings Settings { get; set; }"}</code> | The settings object values are read from and written to. |
| <Link id="m-settingtype-2" /><code><Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" { get; }"}</code> | The kind of control: toggle, scroll, enum, command and so on. |
| <Link id="m-onmodifed" /><code>{"protected Action OnModifed { get; private set; }"}</code> | Called after a value is set. For game settings it notifies listeners and saves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"virtual bool IsValid()"}</code> | Whether the entry can be used. The generic version also needs the named property to exist. |
| <Link id="m-setupfromgamesettings" /><code>{"void SetupFromGameSettings()"}</code> | Points the entry at the local game settings, saving them on every change. |
| <Link id="m-setupfromserversettings" /><code>{"void SetupFromServerSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Points the entry at a server's settings. Changes aren't saved automatically. |

## Used in

Members of other types that take, return or hold a `SettingsFieldAccess`:

[`DevToolsBoard.settingsToDisplay`](/game-api/types/alta-player/devtoolsboard#m-settingstodisplay), [`PooledMenuSettings.SetSettings`](/game-api/types/alta-player/pooledmenusettings#m-setsettings), [`QuickAccessSettingsBoard.settingsToDisplay`](/game-api/types/alta-player/quickaccesssettingsboard#m-settingstodisplay), [`SettingsQuickAccessMenu.settingsToDisplay`](/game-api/types/alta-player/settingsquickaccessmenu#m-settingstodisplay), [`SettingsQuickAccessMenu.SettingsToDisplay`](/game-api/types/alta-player/settingsquickaccessmenu#m-settingstodisplay-2).
