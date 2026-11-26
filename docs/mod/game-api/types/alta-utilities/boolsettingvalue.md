---
title: "BoolSettingValue"
description: "Serializable check that a bool game setting has an expected value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoolSettingValue

A **class** in `Root.Township`, `Alta.Utilities`.

Serializable check that a bool game setting has an expected value.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoolSettingValue()"}</code> | Creates a `BoolSettingValue` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-expectedvalue" /><code>{"private bool expectedValue"}</code> | The value the setting must have. |
| <Link id="m-setting" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/togglegamesettingaccess">{"ToggleGameSettingAccess"}</Link>{" setting"}</code> | The bool setting to read. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | True when the setting's current value equals `expectedValue`. |

## Used in

Members of other types that take, return or hold a `BoolSettingValue`:

[`SettingBasedToggler.expectedBoolValues`](/mod/game-api/types/alta-utilities/settingbasedtoggler#m-expectedboolvalues).
