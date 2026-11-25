---
title: "DefaultCosmeticInfo"
description: "class DefaultCosmeticInfo in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DefaultCosmeticInfo

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ISerializationCallbackReceiver`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DefaultCosmeticInfo()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"DefaultCosmeticInfo("}<Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category, "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" definition, IEnumerable<"}<Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"> colors)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> |  |
| <Link id="m-category" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> |  |
| <Link id="m-colors" /><code>{"private "}<Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] colors"}</code> |  |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" definition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" Category { get; }"}</code> |  |
| <Link id="m-colors-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"> Colors { get; }"}</code> |  |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"void OnAfterDeserialize()"}</code> |  |
| <Link id="m-onbeforeserialize" /><code>{"void OnBeforeSerialize()"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DefaultCosmeticInfo`:

[`CustomizationSettings.requiredDefaults`](/game-api/types/alta-customization/customizationsettings#m-requireddefaults), [`CustomizationSettings.RequiredDefaults`](/game-api/types/alta-customization/customizationsettings#m-requireddefaults-2), [`CustomizationWrapperSerializer.GetDefaults`](/game-api/types/alta-customization/customizationwrapperserializer#m-getdefaults), [`CustomizationWrapperSerializer.GetMissingDefaults`](/game-api/types/alta-customization/customizationwrapperserializer#m-getmissingdefaults).
