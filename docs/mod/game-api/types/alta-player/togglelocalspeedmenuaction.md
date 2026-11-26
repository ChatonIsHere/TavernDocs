---
title: "ToggleLocalSpeedMenuAction"
description: "Debug quick access action that switches the local player's base speed stat between 1 and 2."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleLocalSpeedMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Debug quick access action that switches the local player's base speed stat between 1 and 2.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleLocalSpeedMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Sets the "speed" stat's base to 1 if above 1, otherwise to 2.</span> |
