---
title: "CookingPotVolume"
description: "class CookingPotVolume in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPotVolume

A **class** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookingPotVolume()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-containedcolliders" /><code>{"private HashSet<Collider> containedColliders"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-containedcookables" /><code>{"HashSet<GameObject> ContainedCookables { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-ingredientadded" /><code>{"event Action<GameObject> IngredientAdded"}</code> |
| <Link id="m-ingredientremoved" /><code>{"event Action<GameObject> IngredientRemoved"}</code> |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CookingPotVolume`:

[`CookingPot.potVolume`](/game-api/types/alta-crafting/cookingpot#m-potvolume).
