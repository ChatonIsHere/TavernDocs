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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerCosmeticDefinitionSet()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hashes" /><code>{"private List<uint> hashes"}</code> | Backing field for `Hashes` (hidden in the inspector). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hashes-2" /><code>{"List<uint> Hashes { get; }"}</code> | Cosmetic definition hashes in the set. |

## Used in

Members of other types that take, return or hold a `PlayerCosmeticDefinitionSet`:

[`CustomizationSettings.defaultCosmetics`](/game-api/types/alta-customization/customizationsettings#m-defaultcosmetics), [`CustomizationSettings.DefaultCosmetics`](/game-api/types/alta-customization/customizationsettings#m-defaultcosmetics-2).
