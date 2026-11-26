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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`FloatGameSettingsAccess`](/mod/game-api/types/alta-utilities/floatgamesettingsaccess)
- **Derived types** [`EnumFloatGameSettingsAccess.CreateEnum`](/mod/game-api/types/alta-utilities/enumfloatgamesettingsaccess-createenum)
- **Nested types** [`CreateEnum`](/mod/game-api/types/alta-utilities/enumfloatgamesettingsaccess-createenum)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnumFloatGameSettingsAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-possiblevalues" /><code>{"private float[] possibleValues"}</code> | <span className="api-desc">Backing field for `PossibleValues`.</span> |
| <Link id="m-possiblevaluesnames" /><code>{"private string[] possibleValuesNames"}</code> | <span className="api-desc">Backing field for `PossibleValuesNames`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-possiblevalues-2" /><code>{"float[] PossibleValues { get; }"}</code> | <span className="api-desc">The float values the setting can take.</span> |
| <Link id="m-possiblevaluesnames-2" /><code>{"string[] PossibleValuesNames { get; }"}</code> | <span className="api-desc">Display names matching `PossibleValues`.</span> |

## Used in

Members of other types that take, return or hold a `EnumFloatGameSettingsAccess`:

<div className="api-used-in">

[`StandardFloatAsEnum.enumSettings`](/mod/game-api/types/alta-menus/standardfloatasenum#m-enumsettings).

</div>
