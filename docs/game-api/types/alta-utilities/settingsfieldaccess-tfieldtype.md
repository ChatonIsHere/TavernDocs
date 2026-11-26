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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`SettingsFieldAccess`](/game-api/types/alta-utilities/settingsfieldaccess)
- **Derived types** [`FloatGameSettingsAccess`](/game-api/types/alta-utilities/floatgamesettingsaccess), [`IntGameSettingsAccess`](/game-api/types/alta-utilities/intgamesettingsaccess), [`StringGameSettingsAccess`](/game-api/types/alta-utilities/stringgamesettingsaccess), [`ToggleGameSettingAccess`](/game-api/types/alta-utilities/togglegamesettingaccess)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected SettingsFieldAccess()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fieldname" /><code>{"private string fieldName"}</code> |
| <Link id="m-isserversetting" /><code>{"private bool isServerSetting"}</code> |
| <Link id="m-property" /><code>{"private PropertyInfo property"}</code> |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> |

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
