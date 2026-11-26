---
title: "CustomizationSettings"
description: "Global settings asset for character customization: effects, default cosmetics and required default parts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationSettings

A **class** in `Root.Township`, `Alta.Customization`.

Global settings asset for character customization: effects, default cosmetics and required default parts. Get it with `GlobalSettings<CustomizationSettings>.Instance`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`GlobalSettings<CustomizationSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CustomizationSettings`](/game-api/types/alta-customization/customizationsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationSettings()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" addedEffect"}</code> | Backing field for `AddedEffect`. |
| <Link id="m-debugcategorywhitelist" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{"> debugCategoryWhitelist"}</code> | Backing field for `DebugCategoryWhitelist`. |
| <Link id="m-defaultcosmetics" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinitionset">{"PlayerCosmeticDefinitionSet"}</Link>{" defaultCosmetics"}</code> | Backing field for `DefaultCosmetics`. |
| <Link id="m-disappeareffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" disappearEffect"}</code> | Backing field for `DisappearEffect`. |
| <Link id="m-requireddefaults" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> requiredDefaults"}</code> | Backing field for `RequiredDefaults`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-addedeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" AddedEffect { get; }"}</code> | Pooled effect for adding an item. |
| <Link id="m-debugcategorywhitelist-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{"> DebugCategoryWhitelist { get; }"}</code> | Categories to keep when saving in the editor, for debugging. |
| <Link id="m-defaultcosmetics-2" /><code><Link to="/game-api/types/alta-customization/playercosmeticdefinitionset">{"PlayerCosmeticDefinitionSet"}</Link>{" DefaultCosmetics { get; }"}</code> | Set of cosmetics everyone has by default. |
| <Link id="m-disappeareffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DisappearEffect { get; }"}</code> | Pooled effect for an item disappearing. |
| <Link id="m-requireddefaults-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> RequiredDefaults { get; }"}</code> | Default parts that must always be present. |
| <Link id="m-usecategorywhitelistwhensaving" /><code>{"bool UseCategoryWhitelistWhenSaving { get; }"}</code> | True only in the editor when the debug whitelist has entries. |
