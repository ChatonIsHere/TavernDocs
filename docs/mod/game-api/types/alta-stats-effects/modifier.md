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
| <Link id="m-ctor" /><code>{"protected Modifier()"}</code> | <span className="api-desc">Creates a `Modifier` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isapplied" /><code>{"bool IsApplied { get; private set; }"}</code> | <span className="api-desc">True while the modifier is applied.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" Manager { get; private set; }"}</code> | <span className="api-desc">The stat manager it works on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | <span className="api-desc">Applies the modifier if not already applied.</span> |
| <Link id="m-initialize" /><code>{"virtual bool Initialize("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | <span className="api-desc">Binds it to a stat manager. False means it can't be used, probably.</span> |
| <Link id="m-remove" /><code>{"void Remove()"}</code> | <span className="api-desc">Removes the modifier if applied.</span> |
| <Link id="m-internalapply" /><code>{"protected abstract void InternalApply()"}</code> | <span className="api-desc">Subclass: does the actual change.</span> |
| <Link id="m-internalremove" /><code>{"protected abstract void InternalRemove()"}</code> | <span className="api-desc">Subclass: undoes the change.</span> |

## Used in

Members of other types that take, return or hold a `Modifier`:

<div className="api-used-in">

[`ModifierSet.Add`](/mod/game-api/types/alta-stats-effects/modifierset#m-add), [`ModifierSet.GetEnumerator`](/mod/game-api/types/alta-stats-effects/modifierset#m-getenumerator), [`ModifierSet.modifiers`](/mod/game-api/types/alta-stats-effects/modifierset#m-modifiers).

</div>
