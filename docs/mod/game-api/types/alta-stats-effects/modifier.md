---
title: "Modifier"
description: "Base for something that changes stats on a StatManager, with apply and remove that only run once each."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Modifier

An **abstract class** in `Root.Township`, `Alta.StatSystem`.

Base for something that changes stats on a `StatManager`, with apply and remove that only run once each.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Derived types** [`FullEmptyUpdateModifier`](/mod/game-api/types/alta-stats-effects/fullemptyupdatemodifier), [`ModifierSet`](/mod/game-api/types/alta-stats-effects/modifierset), [`StatModifier`](/mod/game-api/types/alta-stats-effects/statmodifier), [`UpdateModifier`](/mod/game-api/types/alta-stats-effects/updatemodifier)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Modifier()"}</code> | Creates a `Modifier` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isapplied" /><code>{"bool IsApplied { get; private set; }"}</code> | True while the modifier is applied. |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" Manager { get; private set; }"}</code> | The stat manager it works on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | Applies the modifier if not already applied. |
| <Link id="m-initialize" /><code>{"virtual bool Initialize("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Binds it to a stat manager. False means it can't be used, probably. |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | Removes the modifier if applied. |
| <Link id="m-internalapply" /><code>{"protected abstract void InternalApply()"}</code> | Subclass: does the actual change. |
| <Link id="m-internalremove" /><code>{"protected abstract void InternalRemove()"}</code> | Subclass: undoes the change. |

## Used in

Members of other types that take, return or hold a `Modifier`:

[`ModifierSet.Add`](/mod/game-api/types/alta-stats-effects/modifierset#m-add), [`ModifierSet.GetEnumerator`](/mod/game-api/types/alta-stats-effects/modifierset#m-getenumerator), [`ModifierSet.modifiers`](/mod/game-api/types/alta-stats-effects/modifierset#m-modifiers).
