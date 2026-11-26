---
title: "EnumGameSettingAccess"
description: "Settings field access for an enum setting, offered as a list of names."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnumGameSettingAccess

A **class** in `Root.Township`, `Alta.Utilities`.

Settings field access for an enum setting, offered as a list of names. Can show custom display names, matched to the enum values by order.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`EnumSettingAccess`](/mod/game-api/types/alta-utilities/enumsettingaccess)
- **Derived types** [`EnumGameSettingAccess.Create`](/mod/game-api/types/alta-utilities/enumgamesettingaccess-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-utilities/enumgamesettingaccess-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnumGameSettingAccess()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customnames" /><code>{"private string[] customNames"}</code> | Display names, in the enum's order. |
| <Link id="m-customtoenumnames" /><code>{"private Dictionary<string, string> customToEnumNames"}</code> | Backing field for `CustomToEnumNames`. |
| <Link id="m-enumtocustomnames" /><code>{"private Dictionary<string, string> enumToCustomNames"}</code> | Backing field for `EnumToCustomNames`. |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | Set once the name maps are built. Nothing reads it. |
| <Link id="m-isusingcustomnames" /><code>{"private bool isUsingCustomNames"}</code> | Whether to show `customNames` instead of the enum names. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customtoenumnames-2" /><code>{"private Dictionary<string, string> CustomToEnumNames { get; }"}</code> | Display name to enum name map, built on first use. |
| <Link id="m-enumtocustomnames-2" /><code>{"private Dictionary<string, string> EnumToCustomNames { get; }"}</code> | Enum name to display name map, built on first use. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossiblevalue" /><code>{"override async Task<string[]> GetPossibleValue()"}</code> | The option names: the custom names if turned on, otherwise the enum's names. |
| <Link id="m-getvalue" /><code>{"override string GetValue()"}</code> | The current value as a name (the custom name if turned on). |
| <Link id="m-setvalue" /><code>{"override void SetValue(string value)"}</code> | Parses the name (mapping a custom name back first), sets the property and raises `OnModifed`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills the custom names from the enum names when custom names are on but empty. |
| <Link id="m-setupcustomnamemappings" /><code>{"private void SetupCustomNameMappings()"}</code> | Builds both name maps by index. Needs one custom name per enum value. |

</details>
