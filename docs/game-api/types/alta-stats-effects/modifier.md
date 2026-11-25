---
title: "Modifier"
description: "Apply() and Remove() call InternalApply and InternalRemove once each."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Modifier

An **abstract class** in `Root.Township`, `Alta.StatSystem`.

`Apply()` and `Remove()` call `InternalApply` and `InternalRemove` once each.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`FullEmptyUpdateModifier`](/game-api/types/alta-stats-effects/fullemptyupdatemodifier), [`ModifierSet`](/game-api/types/alta-stats-effects/modifierset), [`StatModifier`](/game-api/types/alta-stats-effects/statmodifier), [`UpdateModifier`](/game-api/types/alta-stats-effects/updatemodifier)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Modifier()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isapplied" /><code>{"bool IsApplied { get; private set; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" Manager { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> |  |
| <Link id="m-initialize" /><code>{"virtual bool Initialize("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove()"}</code> |  |
| <Link id="m-internalapply" /><code>{"protected abstract void InternalApply()"}</code> |  |
| <Link id="m-internalremove" /><code>{"protected abstract void InternalRemove()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Modifier`:

[`ModifierSet.Add`](/game-api/types/alta-stats-effects/modifierset#m-add), [`ModifierSet.GetEnumerator`](/game-api/types/alta-stats-effects/modifierset#m-getenumerator), [`ModifierSet.modifiers`](/game-api/types/alta-stats-effects/modifierset#m-modifiers).
