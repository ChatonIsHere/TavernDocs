---
title: "PlayerCosmeticDefinitionSet"
description: "ScriptableObject list of cosmetic definition hashes (menu Township/Customization/Cosmetic Set)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCosmeticDefinitionSet

A **class** in `Root.Township`, `Alta.Customization`.

ScriptableObject list of cosmetic definition hashes (menu Township/Customization/Cosmetic Set). Used for `CustomizationSettings.DefaultCosmetics`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticDefinitionSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hashes" /><code>{"private List<uint> hashes"}</code> | <span className="api-desc">Backing field for `Hashes` (hidden in the inspector).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hashes-2" /><code>{"List<uint> Hashes { get; }"}</code> | <span className="api-desc">Cosmetic definition hashes in the set.</span> |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticDefinitionSet`:

<div className="api-used-in">

[`CustomizationSettings.defaultCosmetics`](/mod/game-api/types/alta-customization/customizationsettings#m-defaultcosmetics), [`CustomizationSettings.DefaultCosmetics`](/mod/game-api/types/alta-customization/customizationsettings#m-defaultcosmetics-2).

</div>
