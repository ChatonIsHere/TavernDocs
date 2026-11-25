---
title: "SettingsFieldAccess"
description: "class SettingsFieldAccess in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsFieldAccess

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`, [`ISettingsFieldAccess`](/game-api/types/alta-utilities/isettingsfieldaccess)
- **Derived types** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase), [`SettingsFieldAccess<TFieldType>`](/game-api/types/alta-utilities/settingsfieldaccess-tfieldtype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsFieldAccess()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> |  |
| <Link id="m-settingtype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" settingType"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> |  |
| <Link id="m-settingdescription" /><code>{"virtual string SettingDescription { get; }"}</code> |  |
| <Link id="m-settings" /><code>{"Settings Settings { get; set; }"}</code> |  |
| <Link id="m-settingtype-2" /><code><Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" { get; }"}</code> |  |
| <Link id="m-onmodifed" /><code>{"protected Action OnModifed { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"virtual bool IsValid()"}</code> |  |
| <Link id="m-setupfromgamesettings" /><code>{"void SetupFromGameSettings()"}</code> |  |
| <Link id="m-setupfromserversettings" /><code>{"void SetupFromServerSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SettingsFieldAccess`:

[`DevToolsBoard.settingsToDisplay`](/game-api/types/alta-player/devtoolsboard#m-settingstodisplay), [`PooledMenuSettings.SetSettings`](/game-api/types/alta-player/pooledmenusettings#m-setsettings), [`QuickAccessSettingsBoard.settingsToDisplay`](/game-api/types/alta-player/quickaccesssettingsboard#m-settingstodisplay), [`SettingsQuickAccessMenu.settingsToDisplay`](/game-api/types/alta-player/settingsquickaccessmenu#m-settingstodisplay), [`SettingsQuickAccessMenu.SettingsToDisplay`](/game-api/types/alta-player/settingsquickaccessmenu#m-settingstodisplay-2).
