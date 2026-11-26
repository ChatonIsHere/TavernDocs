---
title: "ChunkingPrefabReplace"
description: "Obsolete editor bake helper that swaps this object for an instance of a prefab's root, at the same transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkingPrefabReplace

A **class** in `Root.Township`, no namespace.

Obsolete editor bake helper that swaps this object for an instance of a prefab's root, at the same transform.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/game-api/types/global-i-l/ibakeable)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkingPrefabReplace()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | Backing field for `Prefab`. Moved up to the prefab's root on replace. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | Set to true by `Bake`. |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; set; }"}</code> | The prefab to swap in. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkreplace" /><code>{"static void CheckReplace(ref GameObject target, bool isChunkingPrefabFolderForced = false)"}</code> | Replaces the target if it has this component, or walks a `ChunkingPrefabFolder`'s children and replaces those. |
| <Link id="m-replacewithprefab" /><code>{"GameObject ReplaceWithPrefab()"}</code> | Instantiates the prefab's root object, copies this transform to it, destroys this object, and returns the new one. |
| <Link id="m-validateprefab" /><code>{"bool ValidatePrefab()"}</code> | Always returns false and does nothing. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> | Marks it baked and runs `ReplaceWithPrefab`. |

</details>
