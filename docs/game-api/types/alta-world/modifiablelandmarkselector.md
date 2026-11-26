---
title: "ModifiableLandmarkSelector"
description: "Swaps a landmark between its original and modified look, based on the ModifiableStaticManager state for its hash, and follows changes to that state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableLandmarkSelector

A **class** in `Root.Township`, `Alta.Chunks`.

Swaps a landmark between its original and modified look, based on the `ModifiableStaticManager` state for its hash, and follows changes to that state.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableLandmarkSelector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-final" /><code>{"private GameObject final"}</code> | Backing field for `Final`. |
| <Link id="m-modifiablehash" /><code>{"private uint modifiableHash"}</code> | Backing field for `ModifiableHash`. |
| <Link id="m-original" /><code>{"private GameObject original"}</code> | Backing field for `Original`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-final-2" /><code>{"GameObject Final { get; set; }"}</code> | Object shown when the landmark is modified. |
| <Link id="m-modifiablehash-2" /><code>{"uint ModifiableHash { get; set; }"}</code> | Hash of the modifiable static object this follows. |
| <Link id="m-original-2" /><code>{"GameObject Original { get; set; }"}</code> | Object shown when the landmark is not modified. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-select" /><code>{"void Select(bool isModified)"}</code> | Shows `Final` and hides `Original` when modified, and the other way round when not. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Reads the current modified state, shows the matching object and subscribes to `ObjectChanged`. |
| <Link id="m-checkchange" /><code>{"private void CheckChange(uint objectHash, bool isModified)"}</code> | Calls `Select` when the changed object's hash is this one's. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from `ObjectChanged`. |

</details>
