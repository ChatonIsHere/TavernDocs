---
title: "PhysicsFPSMenuAction"
description: "Disabled developer quick access action: always hidden and does nothing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicsFPSMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Disabled developer quick access action: always hidden and does nothing.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicsFPSMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | <span className="api-desc">Always true, so it is never shown.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Always false.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller = null)"}</code> | <span className="api-desc">Does nothing.</span> |
