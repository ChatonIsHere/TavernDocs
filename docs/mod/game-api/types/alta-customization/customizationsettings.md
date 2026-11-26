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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`GlobalSettings<CustomizationSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`CustomizationSettings`](/mod/game-api/types/alta-customization/customizationsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" addedEffect"}</code> | <span className="api-desc">Backing field for `AddedEffect`.</span> |
| <Link id="m-debugcategorywhitelist" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/customizationcategory">{"CustomizationCategory"}</Link>{"> debugCategoryWhitelist"}</code> | <span className="api-desc">Backing field for `DebugCategoryWhitelist`.</span> |
| <Link id="m-defaultcosmetics" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinitionset">{"PlayerCosmeticDefinitionSet"}</Link>{" defaultCosmetics"}</code> | <span className="api-desc">Backing field for `DefaultCosmetics`.</span> |
| <Link id="m-disappeareffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" disappearEffect"}</code> | <span className="api-desc">Backing field for `DisappearEffect`.</span> |
| <Link id="m-requireddefaults" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> requiredDefaults"}</code> | <span className="api-desc">Backing field for `RequiredDefaults`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-addedeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" AddedEffect { get; }"}</code> | <span className="api-desc">Pooled effect for adding an item.</span> |
| <Link id="m-debugcategorywhitelist-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/icustomizationcategory">{"ICustomizationCategory"}</Link>{"> DebugCategoryWhitelist { get; }"}</code> | <span className="api-desc">Categories to keep when saving in the editor, for debugging.</span> |
| <Link id="m-defaultcosmetics-2" /><code><Link to="/mod/game-api/types/alta-customization/playercosmeticdefinitionset">{"PlayerCosmeticDefinitionSet"}</Link>{" DefaultCosmetics { get; }"}</code> | <span className="api-desc">Set of cosmetics everyone has by default.</span> |
| <Link id="m-disappeareffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DisappearEffect { get; }"}</code> | <span className="api-desc">Pooled effect for an item disappearing.</span> |
| <Link id="m-requireddefaults-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> RequiredDefaults { get; }"}</code> | <span className="api-desc">Default parts that must always be present.</span> |
| <Link id="m-usecategorywhitelistwhensaving" /><code>{"bool UseCategoryWhitelistWhenSaving { get; }"}</code> | <span className="api-desc">True only in the editor when the debug whitelist has entries.</span> |
