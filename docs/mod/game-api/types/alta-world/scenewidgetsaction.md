---
title: "SceneWidgetsAction"
description: "Developer quick access menu action that toggles debug scene widgets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneWidgetsAction

A **class** in `Root.Township`, `Alta.Chunks`.

Developer quick access menu action that toggles debug scene widgets. Only shown in dev builds.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneWidgetsAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Backing field for `IsActive`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"override bool IsActive { get; }"}</code> | Whether the widgets are on. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | True outside dev, so it is hidden. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True only in dev. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Toggles the debug widgets on or off. |
