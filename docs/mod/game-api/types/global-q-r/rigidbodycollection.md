---
title: "RigidbodyCollection"
description: "Holds a list of rigidbodies, filled from children in the editor, and gives them as a set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigidbodyCollection

A **class** in `Root.Township`, the global namespace.

Holds a list of rigidbodies, filled from children in the editor, and gives them as a set.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RigidbodyCollection()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbodies" /><code>{"private List<Rigidbody> rigidbodies"}</code> | Serialized list of rigidbodies. |
| <Link id="m-uniquerigidbodies" /><code>{"private HashSet<Rigidbody> uniqueRigidbodies"}</code> | Cached set behind `Rigidbodies`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbodies-2" /><code>{"HashSet<Rigidbody> Rigidbodies { get; }"}</code> | The rigidbodies as a set without duplicates, built on first use. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Editor: fills the list with every rigidbody in the children. |

</details>

## Used in

Members of other types that take, return or hold a `RigidbodyCollection`:

[`PlayerCharacter.rigidbodies`](/mod/game-api/types/alta-player/playercharacter#m-rigidbodies), [`PlayerCharacter.Rigidbodies`](/mod/game-api/types/alta-player/playercharacter#m-rigidbodies-2).
