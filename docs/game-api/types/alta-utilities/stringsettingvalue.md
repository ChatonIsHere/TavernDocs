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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StringSettingValue()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-expectedvalue" /><code>{"private string expectedValue"}</code> | The value to compare with. |
| <Link id="m-isinversed" /><code>{"private bool isInversed"}</code> | Flips the check to not equal. |
| <Link id="m-setting" /><code>{"private "}<Link to="/game-api/types/alta-utilities/stringgamesettingsaccess">{"StringGameSettingsAccess"}</Link>{" setting"}</code> | The string setting to read. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> | True when the setting equals `expectedValue`, or when it doesn't if `isInversed` is set. |

## Used in

Members of other types that take, return or hold a `StringSettingValue`:

[`SettingBasedToggler.expectedStringValues`](/game-api/types/alta-utilities/settingbasedtoggler#m-expectedstringvalues).
