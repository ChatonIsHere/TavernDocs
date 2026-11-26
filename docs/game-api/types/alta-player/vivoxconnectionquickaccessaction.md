---
title: "VivoxConnectionQuickAccessAction"
description: "Unused quick access action for the Vivox connection: always hidden and does nothing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxConnectionQuickAccessAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Unused quick access action for the Vivox connection: always hidden and does nothing.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VivoxConnectionQuickAccessAction()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haseffectonrun" /><code>{"override bool HasEffectOnRun { get; }"}</code> | False. |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Always true, so it is never shown. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True while Vivox is logged in. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Does nothing. |
