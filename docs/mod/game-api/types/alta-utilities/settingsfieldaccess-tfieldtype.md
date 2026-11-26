---
title: "SettingsFieldAccess<TFieldType>"
description: "An asset that reads and writes one named property of GameSettings or ServerSettings by reflection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsFieldAccess&lt;TFieldType&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities`.

An asset that reads and writes one named property of `GameSettings` or `ServerSettings` by reflection. Used by quick access menu and settings UI entries.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`SettingsFieldAccess`](/mod/game-api/types/alta-utilities/settingsfieldaccess)
- **Derived types** [`FloatGameSettingsAccess`](/mod/game-api/types/alta-utilities/floatgamesettingsaccess), [`IntGameSettingsAccess`](/mod/game-api/types/alta-utilities/intgamesettingsaccess), [`StringGameSettingsAccess`](/mod/game-api/types/alta-utilities/stringgamesettingsaccess), [`ToggleGameSettingAccess`](/mod/game-api/types/alta-utilities/togglegamesettingaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SettingsFieldAccess()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fieldname" /><code>{"private string fieldName"}</code> | Name of the public property on `GameSettings` or `ServerSettings` to read and write. |
| <Link id="m-isserversetting" /><code>{"private bool isServerSetting"}</code> | If true the property is looked up on `ServerSettings`, otherwise on `GameSettings`. |
| <Link id="m-property" /><code>{"private PropertyInfo property"}</code> | Cached reflected property. Backing field for `Property`. |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | Description text for the setting. Backing field for `SettingDescription`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | Description text set in the asset. |
| <Link id="m-property-2" /><code>{"protected PropertyInfo Property { get; }"}</code> | The reflected property, looked up by field name on `GameSettings` or `ServerSettings`. Falls back to game settings if none were set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"virtual TFieldType GetValue()"}</code> | Reads the property from the current settings object. |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | True if the named property exists on the settings type. |
| <Link id="m-setvalue" /><code>{"virtual void SetValue(TFieldType value)"}</code> | Writes the property, then (for game settings) notifies listeners and saves the game config. |
