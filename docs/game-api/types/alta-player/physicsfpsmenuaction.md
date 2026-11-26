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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PhysicsFPSMenuAction()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Always true, so it is never shown. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always false. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller = null)"}</code> | Does nothing. |
