---
title: "PlayerEquipmentCategory"
description: "Customization category asset for player equipment."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEquipmentCategory

A **class** in `Root.Township`, `Alta.Customization`.

Customization category asset for player equipment. Not finished: both `GetRandom` overloads throw.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationCategory`](/mod/game-api/types/alta-customization/customizationcategory)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEquipmentCategory()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"override uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> | <span className="api-desc">Not implemented; throws `NotImplementedException`.</span> |
| <Link id="m-getrandom-2" /><code>{"override "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> | <span className="api-desc">Not implemented; throws `NotImplementedException`.</span> |
