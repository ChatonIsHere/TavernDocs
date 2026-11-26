---
title: "ModellingCharacter.IDefinition"
description: "Private shared shape of ModellingCharacter's cosmetic entries: a cosmetic and its colours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.IDefinition

An **private interface** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private shared shape of `ModellingCharacter`'s cosmetic entries: a cosmetic and its colours.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/mod/game-api/types/global-m-o/modellingcharacter)
- **Derived types** [`ModellingCharacter.Definition`](/mod/game-api/types/global-m-o/modellingcharacter-definition), [`ModellingCharacter.FreeDefinition`](/mod/game-api/types/global-m-o/modellingcharacter-freedefinition)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] Arguments { get; set; }"}</code> | The colour pairs for the cosmetic. |
| <Link id="m-asset" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Asset { get; set; }"}</code> | The cosmetic definition. |

## Used in

Members of other types that take, return or hold a `IDefinition`:

[`ModellingCharacter.Add`](/mod/game-api/types/global-m-o/modellingcharacter#m-add), [`ModellingCharacter.Fix`](/mod/game-api/types/global-m-o/modellingcharacter#m-fix).
