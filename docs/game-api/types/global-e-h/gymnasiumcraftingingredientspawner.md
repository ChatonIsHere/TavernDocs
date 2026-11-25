---
title: "GymnasiumCraftingIngredientSpawner"
description: "class GymnasiumCraftingIngredientSpawner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumCraftingIngredientSpawner

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GymnasiumCraftingIngredientSpawner()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dockcount" /><code>{"private int dockCount"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-ingredientdocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] ingredientDocks"}</code> |
| <Link id="m-recipedock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" recipeDock"}</code> |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondockrecipe" /><code>{"private void OnDockRecipe("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-prefabisstackable" /><code>{"private bool PrefabIsStackable(uint prefabHash)"}</code> |
| <Link id="m-spawn" /><code>{"private void Spawn(int currentDockIndex, uint prefabHash, int count)"}</code> |
| <Link id="m-spawnitems" /><code>{"private void SpawnItems(Dictionary<uint, int> ingredientDictionary)"}</code> |

</details>
