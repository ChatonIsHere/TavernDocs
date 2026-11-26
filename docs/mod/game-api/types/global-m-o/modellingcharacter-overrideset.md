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
| <Link id="m-ctor" /><code>{"OverrideSet()"}</code> | <span className="api-desc">Creates a `ModellingCharacter.OverrideSet` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/global-m-o/modellingcharacter-itemarguments">{"ModellingCharacter.ItemArguments"}</Link>{"[] arguments"}</code> | <span className="api-desc">Colour arguments for each item in the set, in the set's order.</span> |
| <Link id="m-set" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticsetdefinition">{"CosmeticSetDefinition"}</Link>{" set"}</code> | <span className="api-desc">The cosmetic set to apply.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatearguments" /><code>{"void UpdateArguments()"}</code> | <span className="api-desc">Resizes and renames `arguments` to match the set's items and fills in default colours where none are set. Clears them if there is no set.</span> |

## Used in

Members of other types that take, return or hold a `OverrideSet`:

<div className="api-used-in">

[`ModellingCharacter.set`](/mod/game-api/types/global-m-o/modellingcharacter#m-set).

</div>
