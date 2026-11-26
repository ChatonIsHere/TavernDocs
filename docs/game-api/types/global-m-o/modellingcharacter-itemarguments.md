---
title: "ModellingCharacter.ItemArguments"
description: "Editor data for one item of a cosmetic override set on ModellingCharacter: the item's name and its colour arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.ItemArguments

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Editor data for one item of a cosmetic override set on `ModellingCharacter`: the item's name and its colour arguments.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/game-api/types/global-m-o/modellingcharacter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ItemArguments()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] arguments"}</code> | The two-colour customization arguments to apply to the item. |
| <Link id="m-name" /><code>{"string name"}</code> | The item's display name, kept in step with the set by `OverrideSet.UpdateArguments`. |

## Used in

Members of other types that take, return or hold a `ItemArguments`:

[`ModellingCharacter.OverrideSet.arguments`](/game-api/types/global-m-o/modellingcharacter-overrideset#m-arguments).
