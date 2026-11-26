---
title: "TriggerDebugSetSpawnMenuAction"
description: "Developer quick access action that runs the console command debug set {localplayer}."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerDebugSetSpawnMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Developer quick access action that runs the console command `debug set {localplayer}`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerDebugSetSpawnMenuAction()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden for non-developers. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True for developers only. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Routes `debug set {localplayer}` through `CommandSync`. |
