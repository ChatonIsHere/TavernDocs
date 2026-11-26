---
title: "ArrowFlightModifierComponent"
description: "Goes on an arrow part (such as fletching)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightModifierComponent

A **class** in `Root.Township`, no namespace.

Goes on an arrow part (such as fletching). When the part is crafted onto an arrow it adds its flight modifier to that `Arrow`, and removes it when taken off.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ArrowFlightModifierComponent()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | The crafting part whose connection is watched. |
| <Link id="m-modifier" /><code>{"private "}<Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{" modifier"}</code> | Backing field for `Modifier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-modifier-2" /><code><Link to="/game-api/types/global-a-b/arrowflightsettingsmodifier">{"ArrowFlightSettingsModifier"}</Link>{" Modifier { get; }"}</code> | The flight settings modifier this part adds. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the crafting part's crafted and decrafted events. |
| <Link id="m-oncrafted" /><code>{"private void OnCrafted("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" slot, bool isLoad)"}</code> | Adds the modifier to the `Arrow` above the connected part. |
| <Link id="m-ondecrafted" /><code>{"private void OnDecrafted("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" obj, bool isLoad)"}</code> | Removes the modifier from the `Arrow` above the connected part. |

</details>
