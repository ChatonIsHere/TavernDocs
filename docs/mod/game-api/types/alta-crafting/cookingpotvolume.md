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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingPotVolume()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containedcolliders" /><code>{"private HashSet<Collider> containedColliders"}</code> | <span className="api-desc">Colliders currently inside the volume.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-containedcookables" /><code>{"HashSet<GameObject> ContainedCookables { get; }"}</code> | <span className="api-desc">GameObjects of the rigidbodies currently inside the volume.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ingredientadded" /><code>{"event Action<GameObject> IngredientAdded"}</code> | <span className="api-desc">Raised with a rigidbody's GameObject when it first enters the volume.</span> |
| <Link id="m-ingredientremoved" /><code>{"event Action<GameObject> IngredientRemoved"}</code> | <span className="api-desc">Raised with a rigidbody's GameObject when it leaves the volume.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Unity callback. Adds the collider's rigidbody and raises `IngredientAdded`.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Unity callback. Removes the collider's rigidbody and raises `IngredientRemoved`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CookingPotVolume`:

<div className="api-used-in">

[`CookingPot.potVolume`](/mod/game-api/types/alta-crafting/cookingpot#m-potvolume).

</div>
