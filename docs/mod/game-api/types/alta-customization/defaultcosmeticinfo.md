---
title: "DefaultCosmeticInfo"
description: "A cosmetic every player must wear in a category unless they pick another, with its colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DefaultCosmeticInfo

A **class** in `Root.Township`, `Alta.Customization`.

A cosmetic every player must wear in a category unless they pick another, with its colours. Listed in `CustomizationSettings.RequiredDefaults` and added when loading a look that lacks one.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ISerializationCallbackReceiver`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DefaultCosmeticInfo()"}</code> | Creates a `DefaultCosmeticInfo` from `category`, `definition` and `colors`. |
| <Link id="m-ctor-2" /><code>{"DefaultCosmeticInfo("}<Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category, "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" definition, IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"> colors)"}</code> | Creates a `DefaultCosmeticInfo` from `category`, `definition` and `colors`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | Inspector label, copied from the category. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> | Backing field for `Category`. |
| <Link id="m-colors" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] colors"}</code> | Backing field for `Colors`. |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" definition"}</code> | Backing field for `Definition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" Category { get; }"}</code> | The customization category this default fills. |
| <Link id="m-colors-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"> Colors { get; }"}</code> | Colours applied with the default item. |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; }"}</code> | The cosmetic used as the default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"void OnAfterDeserialize()"}</code> | Does nothing. |
| <Link id="m-onbeforeserialize" /><code>{"void OnBeforeSerialize()"}</code> | Copies the category's name into `name` so the inspector list is labelled. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Lists the name, category, definition and colours. |

## Used in

Members of other types that take, return or hold a `DefaultCosmeticInfo`:

[`CustomizationSettings.requiredDefaults`](/mod/game-api/types/alta-customization/customizationsettings#m-requireddefaults), [`CustomizationSettings.RequiredDefaults`](/mod/game-api/types/alta-customization/customizationsettings#m-requireddefaults-2), [`CustomizationWrapperSerializer.GetDefaults`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-getdefaults), [`CustomizationWrapperSerializer.GetMissingDefaults`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-getmissingdefaults).
