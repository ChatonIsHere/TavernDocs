---
title: "ArrowFlightModifierComponent"
description: "Goes on an arrow part (such as fletching)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightModifierComponent

A **class** in `Root.Township`, the global namespace.

Goes on an arrow part (such as fletching). When the part is crafted onto an arrow it adds its flight modifier to that `Arrow`, and removes it when taken off.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ArrowFlightModifierComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">The crafting part whose connection is watched.</span> |
| <Link id="m-modifier" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{" modifier"}</code> | <span className="api-desc">Backing field for `Modifier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifier-2" /><code><Link to="/mod/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{" Modifier { get; }"}</code> | <span className="api-desc">The flight settings modifier this part adds.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the crafting part's crafted and decrafted events.</span> |
| <Link id="m-oncrafted" /><code>{"private void OnCrafted("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slot, bool isLoad)"}</code> | <span className="api-desc">Adds the modifier to the `Arrow` above the connected part.</span> |
| <Link id="m-ondecrafted" /><code>{"private void OnDecrafted("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" obj, bool isLoad)"}</code> | <span className="api-desc">Removes the modifier from the `Arrow` above the connected part.</span> |

</details>
