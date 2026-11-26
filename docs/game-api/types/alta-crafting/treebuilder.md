---
title: "TreeBuilder"
description: "Editor helper that holds the currently selected woodcut connection and preset tree while building trees."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeBuilder

A **class** in `Root.Township`, `Alta.Woodcutting`.

Editor helper that holds the currently selected woodcut connection and preset tree while building trees.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeBuilder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-preset" /><code>{"private "}<Link to="/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset"}</code> | Backing field for `Preset`. |
| <Link id="m-selected" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" selected"}</code> | Backing field for `Selected`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-preset-2" /><code><Link to="/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" Preset { get; set; }"}</code> | The preset tree being edited. |
| <Link id="m-selected-2" /><code><Link to="/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" Selected { get; set; }"}</code> | The selected woodcut connection. |
