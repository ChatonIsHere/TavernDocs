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
| <Link id="m-ctor" /><code>{"DefaultCosmeticInfo()"}</code> | <span className="api-desc">Creates a `DefaultCosmeticInfo` from `category`, `definition` and `colors`.</span> |
| <Link id="m-ctor-2" /><code>{"DefaultCosmeticInfo("}<Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category, "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" definition, IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"> colors)"}</code> | <span className="api-desc">Creates a `DefaultCosmeticInfo` from `category`, `definition` and `colors`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">Inspector label, copied from the category.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" category"}</code> | <span className="api-desc">Backing field for `Category`.</span> |
| <Link id="m-colors" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] colors"}</code> | <span className="api-desc">Backing field for `Colors`.</span> |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Backing field for `Definition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{" Category { get; }"}</code> | <span className="api-desc">The customization category this default fills.</span> |
| <Link id="m-colors-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"> Colors { get; }"}</code> | <span className="api-desc">Colours applied with the default item.</span> |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The cosmetic used as the default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"void OnAfterDeserialize()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-onbeforeserialize" /><code>{"void OnBeforeSerialize()"}</code> | <span className="api-desc">Copies the category's name into `name` so the inspector list is labelled.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Lists the name, category, definition and colours.</span> |

## Used in

Members of other types that take, return or hold a `DefaultCosmeticInfo`:

<div className="api-used-in">

[`CustomizationSettings.requiredDefaults`](/mod/game-api/types/alta-customization/customizationsettings#m-requireddefaults), [`CustomizationSettings.RequiredDefaults`](/mod/game-api/types/alta-customization/customizationsettings#m-requireddefaults-2), [`CustomizationWrapperSerializer.GetDefaults`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-getdefaults), [`CustomizationWrapperSerializer.GetMissingDefaults`](/mod/game-api/types/alta-customization/customizationwrapperserializer#m-getmissingdefaults).

</div>
