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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeBuilder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-preset" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset"}</code> | <span className="api-desc">Backing field for `Preset`.</span> |
| <Link id="m-selected" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" selected"}</code> | <span className="api-desc">Backing field for `Selected`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-preset-2" /><code><Link to="/mod/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" Preset { get; set; }"}</code> | <span className="api-desc">The preset tree being edited.</span> |
| <Link id="m-selected-2" /><code><Link to="/mod/game-api/types/alta-crafting/woodcutconnection">{"WoodcutConnection"}</Link>{" Selected { get; set; }"}</code> | <span className="api-desc">The selected woodcut connection.</span> |
