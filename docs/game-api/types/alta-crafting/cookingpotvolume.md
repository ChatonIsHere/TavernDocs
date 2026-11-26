---
title: "CookingPotVolume"
description: "Trigger volume on a cooking pot that tracks which rigidbodies are inside it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPotVolume

A **class** in `Root.Township`, `Alta.Cooking`.

Trigger volume on a cooking pot that tracks which rigidbodies are inside it. `CookingPot` listens to its events.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingPotVolume()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containedcolliders" /><code>{"private HashSet<Collider> containedColliders"}</code> | Colliders currently inside the volume. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedcookables" /><code>{"HashSet<GameObject> ContainedCookables { get; }"}</code> | GameObjects of the rigidbodies currently inside the volume. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ingredientadded" /><code>{"event Action<GameObject> IngredientAdded"}</code> | Raised with a rigidbody's GameObject when it first enters the volume. |
| <Link id="m-ingredientremoved" /><code>{"event Action<GameObject> IngredientRemoved"}</code> | Raised with a rigidbody's GameObject when it leaves the volume. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Unity callback. Adds the collider's rigidbody and raises `IngredientAdded`. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Unity callback. Removes the collider's rigidbody and raises `IngredientRemoved`. |

</details>

## Used in

Members of other types that take, return or hold a `CookingPotVolume`:

[`CookingPot.potVolume`](/game-api/types/alta-crafting/cookingpot#m-potvolume).
