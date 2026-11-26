---
title: "ToggleDebugMovementMenuAction"
description: "Developer quick access action that toggles debug movement on the local smooth locomotion controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleDebugMovementMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Developer quick access action that toggles debug movement on the local smooth locomotion controller.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleDebugMovementMenuAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True if the local player uses smooth locomotion with debug movement on. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden for non-developers. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True for developers only. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Toggles smooth locomotion debug movement. |
