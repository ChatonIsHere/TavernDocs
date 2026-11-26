---
title: "ModellingCharacter.OverrideSet"
description: "A cosmetic set that ModellingCharacter puts on its character, with per-item colour arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.OverrideSet

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A cosmetic set that `ModellingCharacter` puts on its character, with per-item colour arguments.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/game-api/types/global-m-o/modellingcharacter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OverrideSet()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/global-m-o/modellingcharacter-itemarguments">{"ModellingCharacter.ItemArguments"}</Link>{"[] arguments"}</code> | Colour arguments for each item in the set, in the set's order. |
| <Link id="m-set" /><code><Link to="/game-api/types/alta-customization/cosmeticsetdefinition">{"CosmeticSetDefinition"}</Link>{" set"}</code> | The cosmetic set to apply. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatearguments" /><code>{"void UpdateArguments()"}</code> | Resizes and renames `arguments` to match the set's items and fills in default colours where none are set. Clears them if there is no set. |

## Used in

Members of other types that take, return or hold a `OverrideSet`:

[`ModellingCharacter.set`](/game-api/types/global-m-o/modellingcharacter#m-set).
