---
title: "HierarchyInteractionFilter"
description: "Stops other players from using a set of interactables while a parent item (or its crafted root) is held by someone else."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HierarchyInteractionFilter

A **class** in `Root.Township`, the global namespace.

Stops other players from using a set of interactables while a parent item (or its crafted root) is held by someone else.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HierarchyInteractionFilter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentparent" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" currentParent"}</code> | <span className="api-desc">The interactable currently checked for being held.</span> |
| <Link id="m-interactablestofilter" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] interactablesToFilter"}</code> | <span className="api-desc">Interactables that get the filter.</span> |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" parent"}</code> | <span className="api-desc">The starting parent interactable.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Adds the filter to each interactable and follows crafting root changes of the parent pickup.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks the interaction if the parent is held by a player other than the interactor's.</span> |
| <Link id="m-updateparent" /><code>{"private void UpdateParent("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | <span className="api-desc">Switches the checked parent to the new crafting root's pickup.</span> |

</details>
