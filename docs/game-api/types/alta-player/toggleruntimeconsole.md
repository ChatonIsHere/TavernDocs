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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleRuntimeConsole()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-consoleprefab" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole">{"RuntimeConsole"}</Link>{" consolePrefab"}</code> | Prefab for the console. |
| <Link id="m-runtimeconsole" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole">{"RuntimeConsole"}</Link>{" runtimeConsole"}</code> | The created console. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True while the console is shown. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initconsole" /><code>{"void InitConsole()"}</code> | Creates the console from the prefab the first time, hidden. |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Creates the console if needed, moves it in front of the head and toggles it. |
| <Link id="m-updateconsoleposition" /><code>{"void UpdateConsolePosition("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Puts the console 0.5 m in front of the head, facing the same way. |
