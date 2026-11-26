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
| <Link id="m-ctor" /><code>{"BoolSettingValue()"}</code> | <span className="api-desc">Creates a `BoolSettingValue` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-expectedvalue" /><code>{"private bool expectedValue"}</code> | <span className="api-desc">The value the setting must have.</span> |
| <Link id="m-setting" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/togglegamesettingaccess">{"ToggleGameSettingAccess"}</Link>{" setting"}</code> | <span className="api-desc">The bool setting to read.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | <span className="api-desc">True when the setting's current value equals `expectedValue`.</span> |

## Used in

Members of other types that take, return or hold a `BoolSettingValue`:

<div className="api-used-in">

[`SettingBasedToggler.expectedBoolValues`](/mod/game-api/types/alta-utilities/settingbasedtoggler#m-expectedboolvalues).

</div>
