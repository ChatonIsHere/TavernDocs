---
title: "ToggleAccessibleDockMenuAction"
description: "Accessibility quick access action that toggles accessible dock positions (AccessibleDocks)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleAccessibleDockMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Accessibility quick access action that toggles accessible dock positions (`AccessibleDocks`). Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleAccessibleDockMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True while accessible docks are on.</span> |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | <span className="api-desc">Hidden unless accessibility features are on.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Toggles accessible docks.</span> |
