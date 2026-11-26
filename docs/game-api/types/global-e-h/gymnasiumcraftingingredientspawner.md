---
title: "GymnasiumCraftingIngredientSpawner"
description: "Gymnasium test helper: docking a recipe page in one dock spawns that recipe's ingredients into a row of other docks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumCraftingIngredientSpawner

A **class** in `Root.Township`, no namespace.

Gymnasium test helper: docking a recipe page in one dock spawns that recipe's ingredients into a row of other docks.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GymnasiumCraftingIngredientSpawner()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockcount" /><code>{"private int dockCount"}</code> | Number of ingredient docks, cached in `Awake`. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The network entity on this object; its chunk is used for items that don't fit in a dock. |
| <Link id="m-ingredientdocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] ingredientDocks"}</code> | Docks that the ingredients are spawned into, in order. |
| <Link id="m-recipedock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" recipeDock"}</code> | Dock the player puts the recipe page in. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `OnDockRecipe` to the recipe dock and counts the ingredient docks. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks `OnDockRecipe` from the recipe dock. |
| <Link id="m-ondockrecipe" /><code>{"private void OnDockRecipe("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Runs when a pickup is docked; if it is a page with an `ICraftingIngredientProvider`, spawns its ingredients, else logs why not. |
| <Link id="m-prefabisstackable" /><code>{"private bool PrefabIsStackable(uint prefabHash)"}</code> | True if the prefab's item is stackable, so a whole quantity can go in one dock. |
| <Link id="m-spawn" /><code>{"private void Spawn(int currentDockIndex, uint prefabHash, int count)"}</code> | Empties the dock at the given index and spawns the items docked there, or spawns one loose above the object once docks run out. |
| <Link id="m-spawnitems" /><code>{"private void SpawnItems(Dictionary<uint, int> ingredientDictionary)"}</code> | Spawns each ingredient: stackable or single items get one dock each, other items get one dock per unit. |

</details>
