---
title: "ModellingCharacter.OverrideSet"
description: "A cosmetic set that ModellingCharacter puts on its character, with per-item colour arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.OverrideSet

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A cosmetic set that `ModellingCharacter` puts on its character, with per-item colour arguments.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/mod/game-api/types/global-m-o/modellingcharacter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OverrideSet()"}</code> | Creates a `ModellingCharacter.OverrideSet` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/global-m-o/modellingcharacter-itemarguments">{"ModellingCharacter.ItemArguments"}</Link>{"[] arguments"}</code> | Colour arguments for each item in the set, in the set's order. |
| <Link id="m-set" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticsetdefinition">{"CosmeticSetDefinition"}</Link>{" set"}</code> | The cosmetic set to apply. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatearguments" /><code>{"void UpdateArguments()"}</code> | Resizes and renames `arguments` to match the set's items and fills in default colours where none are set. Clears them if there is no set. |

## Used in

Members of other types that take, return or hold a `OverrideSet`:

[`ModellingCharacter.set`](/mod/game-api/types/global-m-o/modellingcharacter#m-set).
