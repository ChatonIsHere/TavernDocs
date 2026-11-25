---
title: "SettingsFieldAccess<TFieldType>"
description: "abstract class SettingsFieldAccess<TFieldType> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsFieldAccess&lt;TFieldType&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`SettingsFieldAccess`](/game-api/types/alta-utilities/settingsfieldaccess)
- **Derived types** [`FloatGameSettingsAccess`](/game-api/types/alta-utilities/floatgamesettingsaccess), [`IntGameSettingsAccess`](/game-api/types/alta-utilities/intgamesettingsaccess), [`StringGameSettingsAccess`](/game-api/types/alta-utilities/stringgamesettingsaccess), [`ToggleGameSettingAccess`](/game-api/types/alta-utilities/togglegamesettingaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SettingsFieldAccess()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fieldname" /><code>{"private string fieldName"}</code> |  |
| <Link id="m-isserversetting" /><code>{"private bool isServerSetting"}</code> |  |
| <Link id="m-property" /><code>{"private PropertyInfo property"}</code> |  |
| <Link id="m-settingdescription" /><code>{"private string settingDescription"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingdescription-2" /><code>{"override string SettingDescription { get; }"}</code> |  |
| <Link id="m-property-2" /><code>{"protected PropertyInfo Property { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"virtual TFieldType GetValue()"}</code> |  |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> |  |
| <Link id="m-setvalue" /><code>{"virtual void SetValue(TFieldType value)"}</code> |  |
