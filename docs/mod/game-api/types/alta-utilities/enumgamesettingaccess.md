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
| <Link id="m-ctor" /><code>{"EnumGameSettingAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customnames" /><code>{"private string[] customNames"}</code> | <span className="api-desc">Display names, in the enum's order.</span> |
| <Link id="m-customtoenumnames" /><code>{"private Dictionary<string, string> customToEnumNames"}</code> | <span className="api-desc">Backing field for `CustomToEnumNames`.</span> |
| <Link id="m-enumtocustomnames" /><code>{"private Dictionary<string, string> enumToCustomNames"}</code> | <span className="api-desc">Backing field for `EnumToCustomNames`.</span> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | <span className="api-desc">Set once the name maps are built. Nothing reads it.</span> |
| <Link id="m-isusingcustomnames" /><code>{"private bool isUsingCustomNames"}</code> | <span className="api-desc">Whether to show `customNames` instead of the enum names.</span> |

</details>

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customtoenumnames-2" /><code>{"private Dictionary<string, string> CustomToEnumNames { get; }"}</code> | <span className="api-desc">Display name to enum name map, built on first use.</span> |
| <Link id="m-enumtocustomnames-2" /><code>{"private Dictionary<string, string> EnumToCustomNames { get; }"}</code> | <span className="api-desc">Enum name to display name map, built on first use.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossiblevalue" /><code>{"override async Task<string[]> GetPossibleValue()"}</code> | <span className="api-desc">The option names: the custom names if turned on, otherwise the enum's names.</span> |
| <Link id="m-getvalue" /><code>{"override string GetValue()"}</code> | <span className="api-desc">The current value as a name (the custom name if turned on).</span> |
| <Link id="m-setvalue" /><code>{"override void SetValue(string value)"}</code> | <span className="api-desc">Parses the name (mapping a custom name back first), sets the property and raises `OnModifed`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills the custom names from the enum names when custom names are on but empty.</span> |
| <Link id="m-setupcustomnamemappings" /><code>{"private void SetupCustomNameMappings()"}</code> | <span className="api-desc">Builds both name maps by index. Needs one custom name per enum value.</span> |

</details>
