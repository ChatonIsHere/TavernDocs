---
title: "ModellingCharacter.ItemArguments"
description: "Editor data for one item of a cosmetic override set on ModellingCharacter: the item's name and its colour arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.ItemArguments

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Editor data for one item of a cosmetic override set on `ModellingCharacter`: the item's name and its colour arguments.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/mod/game-api/types/global-m-o/modellingcharacter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemArguments()"}</code> | <span className="api-desc">Creates a `ModellingCharacter.ItemArguments` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] arguments"}</code> | <span className="api-desc">The two-colour customization arguments to apply to the item.</span> |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">The item's display name, kept in step with the set by `OverrideSet.UpdateArguments`.</span> |

## Used in

Members of other types that take, return or hold a `ItemArguments`:

<div className="api-used-in">

[`ModellingCharacter.OverrideSet.arguments`](/mod/game-api/types/global-m-o/modellingcharacter-overrideset#m-arguments).

</div>
