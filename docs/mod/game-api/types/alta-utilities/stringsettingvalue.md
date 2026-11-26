---
title: "StringSettingValue"
description: "Serializable check that a string game setting does, or does not, equal an expected value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StringSettingValue

A **class** in `Root.Township`, `Alta.Utilities`.

Serializable check that a string game setting does, or does not, equal an expected value.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StringSettingValue()"}</code> | <span className="api-desc">Creates a `StringSettingValue` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-expectedvalue" /><code>{"private string expectedValue"}</code> | <span className="api-desc">The value to compare with.</span> |
| <Link id="m-isinversed" /><code>{"private bool isInversed"}</code> | <span className="api-desc">Flips the check to not equal.</span> |
| <Link id="m-setting" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/stringgamesettingsaccess">{"StringGameSettingsAccess"}</Link>{" setting"}</code> | <span className="api-desc">The string setting to read.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | <span className="api-desc">True when the setting equals `expectedValue`, or when it doesn't if `isInversed` is set.</span> |

## Used in

Members of other types that take, return or hold a `StringSettingValue`:

<div className="api-used-in">

[`SettingBasedToggler.expectedStringValues`](/mod/game-api/types/alta-utilities/settingbasedtoggler#m-expectedstringvalues).

</div>
