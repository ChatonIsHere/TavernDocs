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
| <Link id="m-ctor" /><code>{"ToggleAccessibleDockMenuAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True while accessible docks are on. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden unless accessibility features are on. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Toggles accessible docks. |
