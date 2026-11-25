---
title: "UpdateModifier"
description: "Runs an action on every Updated while applied."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateModifier

A **internal class** in `Root.Township`, `Alta.StatSystem`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Runs an action on every `Updated` while applied.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Modifier`](/game-api/types/alta-stats-effects/modifier)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UpdateModifier(Action<"}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> update)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-update" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{"> Update { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-internalapply" /><code>{"protected override void InternalApply()"}</code> |
| <Link id="m-internalremove" /><code>{"protected override void InternalRemove()"}</code> |
