---
title: "ToggleRuntimeConsole"
description: "Developer quick access action that shows or hides a runtime console in front of the player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleRuntimeConsole

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Developer quick access action that shows or hides a runtime console in front of the player. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleRuntimeConsole()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-consoleprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/runtimeconsole">{"RuntimeConsole"}</Link>{" consolePrefab"}</code> | <span className="api-desc">Prefab for the console.</span> |
| <Link id="m-runtimeconsole" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/runtimeconsole">{"RuntimeConsole"}</Link>{" runtimeConsole"}</code> | <span className="api-desc">The created console.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True while the console is shown.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initconsole" /><code>{"void InitConsole()"}</code> | <span className="api-desc">Creates the console from the prefab the first time, hidden.</span> |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Creates the console if needed, moves it in front of the head and toggles it.</span> |
| <Link id="m-updateconsoleposition" /><code>{"void UpdateConsolePosition("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Puts the console 0.5 m in front of the head, facing the same way.</span> |
