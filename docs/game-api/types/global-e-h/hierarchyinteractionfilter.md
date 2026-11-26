---
title: "HierarchyInteractionFilter"
description: "Stops other players from using a set of interactables while a parent item (or its crafted root) is held by someone else."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HierarchyInteractionFilter

A **class** in `Root.Township`, no namespace.

Stops other players from using a set of interactables while a parent item (or its crafted root) is held by someone else.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HierarchyInteractionFilter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentparent" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" currentParent"}</code> | The interactable currently checked for being held. |
| <Link id="m-interactablestofilter" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] interactablesToFilter"}</code> | Interactables that get the filter. |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" parent"}</code> | The starting parent interactable. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Adds the filter to each interactable and follows crafting root changes of the parent pickup. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks the interaction if the parent is held by a player other than the interactor's. |
| <Link id="m-updateparent" /><code>{"private void UpdateParent("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | Switches the checked parent to the new crafting root's pickup. |

</details>
