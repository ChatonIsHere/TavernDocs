---
title: "UpdateModifier"
description: "Internal modifier that runs an action on every StatManager update while applied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateModifier

A **internal class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal modifier that runs an action on every `StatManager` update while applied. Used by burn, poison and fullness stats.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Modifier`](/mod/game-api/types/alta-stats-effects/modifier)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateModifier(Action<"}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> update)"}</code> | <span className="api-desc">Creates an `UpdateModifier` from `update`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"Action<"}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> Update { get; private set; }"}</code> | <span className="api-desc">The action run each stat update.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalapply" /><code>{"protected override void InternalApply()"}</code> | <span className="api-desc">Subscribes the action to the manager's `Updated` event.</span> |
| <Link id="m-internalremove" /><code>{"protected override void InternalRemove()"}</code> | <span className="api-desc">Unsubscribes the action.</span> |
