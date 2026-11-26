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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ToggleLocalSpeedMenuAction()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Sets the "speed" stat's base to 1 if above 1, otherwise to 2. |
