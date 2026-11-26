---
title: "GymnasiumCraftingIngredientSpawner"
description: "Gymnasium test helper: docking a recipe page in one dock spawns that recipe's ingredients into a row of other docks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumCraftingIngredientSpawner

A **class** in `Root.Township`, the global namespace.

Gymnasium test helper: docking a recipe page in one dock spawns that recipe's ingredients into a row of other docks.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumCraftingIngredientSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockcount" /><code>{"private int dockCount"}</code> | <span className="api-desc">Number of ingredient docks, cached in `Awake`.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The network entity on this object; its chunk is used for items that don't fit in a dock.</span> |
| <Link id="m-ingredientdocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] ingredientDocks"}</code> | <span className="api-desc">Docks that the ingredients are spawned into, in order.</span> |
| <Link id="m-recipedock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" recipeDock"}</code> | <span className="api-desc">Dock the player puts the recipe page in.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `OnDockRecipe` to the recipe dock and counts the ingredient docks.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks `OnDockRecipe` from the recipe dock.</span> |
| <Link id="m-ondockrecipe" /><code>{"private void OnDockRecipe("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Runs when a pickup is docked; if it is a page with an `ICraftingIngredientProvider`, spawns its ingredients, else logs why not.</span> |
| <Link id="m-prefabisstackable" /><code>{"private bool PrefabIsStackable(uint prefabHash)"}</code> | <span className="api-desc">True if the prefab's item is stackable, so a whole quantity can go in one dock.</span> |
| <Link id="m-spawn" /><code>{"private void Spawn(int currentDockIndex, uint prefabHash, int count)"}</code> | <span className="api-desc">Empties the dock at the given index and spawns the items docked there, or spawns one loose above the object once docks run out.</span> |
| <Link id="m-spawnitems" /><code>{"private void SpawnItems(Dictionary<uint, int> ingredientDictionary)"}</code> | <span className="api-desc">Spawns each ingredient: stackable or single items get one dock each, other items get one dock per unit.</span> |

</details>
