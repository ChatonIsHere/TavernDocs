---
title: "EnumFloatGameSettingsAccess"
description: "Float setting access that only takes values from a fixed list, each with a display name, for settings shown as a set of choices."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnumFloatGameSettingsAccess

A **class** in `Root.Township`, `Alta.Utilities`.

Float setting access that only takes values from a fixed list, each with a display name, for settings shown as a set of choices.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`FloatGameSettingsAccess`](/game-api/types/alta-utilities/floatgamesettingsaccess)
- **Derived types** [`EnumFloatGameSettingsAccess.CreateEnum`](/game-api/types/alta-utilities/enumfloatgamesettingsaccess-createenum)
- **Nested types** [`CreateEnum`](/game-api/types/alta-utilities/enumfloatgamesettingsaccess-createenum)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnumFloatGameSettingsAccess()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-possiblevalues" /><code>{"private float[] possibleValues"}</code> | Backing field for `PossibleValues`. |
| <Link id="m-possiblevaluesnames" /><code>{"private string[] possibleValuesNames"}</code> | Backing field for `PossibleValuesNames`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-possiblevalues-2" /><code>{"float[] PossibleValues { get; }"}</code> | The float values the setting can take. |
| <Link id="m-possiblevaluesnames-2" /><code>{"string[] PossibleValuesNames { get; }"}</code> | Display names matching `PossibleValues`. |

## Used in

Members of other types that take, return or hold a `EnumFloatGameSettingsAccess`:

[`StandardFloatAsEnum.enumSettings`](/game-api/types/alta-menus/standardfloatasenum#m-enumsettings).
