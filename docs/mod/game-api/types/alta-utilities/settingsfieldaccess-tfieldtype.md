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
| <Link id="m-ctor" /><code>{"protected SettingsFieldAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fieldname" /><code>{"private string fieldName"}</code> | <span className="api-desc">Name of the public property on `GameSettings` or `ServerSettings` to read and write.</span> |
| <Link id="m-isserversetting" /><code>{"private bool isServerSetting"}</code> | <span className="api-desc">If true the property is looked up on `ServerSettings`, otherwise on `GameSettings`.</span> |
| <Link id="m-property" /><code>{"private PropertyInfo property"}</code> | <span className="api-desc">Cached reflected property. Backing field for `Property`.</span> |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> | <span className="api-desc">Description text for the setting. Backing field for `SettingDescription`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> | <span className="api-desc">Description text set in the asset.</span> |
| <Link id="m-property-2" /><code>{"protected PropertyInfo Property { get; }"}</code> | <span className="api-desc">The reflected property, looked up by field name on `GameSettings` or `ServerSettings`. Falls back to game settings if none were set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"virtual TFieldType GetValue()"}</code> | <span className="api-desc">Reads the property from the current settings object.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | <span className="api-desc">True if the named property exists on the settings type.</span> |
| <Link id="m-setvalue" /><code>{"virtual void SetValue(TFieldType value)"}</code> | <span className="api-desc">Writes the property, then (for game settings) notifies listeners and saves the game config.</span> |
