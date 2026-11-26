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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationCategory`](/game-api/types/alta-customization/customizationcategory)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEquipmentCategory()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"override uint GetRandom(ICollection<uint> items, bool canUseNonOwnedItems)"}</code> | Not implemented; throws `NotImplementedException`. |
| <Link id="m-getrandom-2" /><code>{"override "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" GetRandom(ICollection<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> items)"}</code> | Not implemented; throws `NotImplementedException`. |
