---
title: "ChunkingPrefabReplace"
description: "Obsolete editor bake helper that swaps this object for an instance of a prefab's root, at the same transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkingPrefabReplace

A **class** in `Root.Township`, the global namespace.

Obsolete editor bake helper that swaps this object for an instance of a prefab's root, at the same transform.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/mod/game-api/types/global-i-l/ibakeable)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkingPrefabReplace()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">Backing field for `Prefab`. Moved up to the prefab's root on replace.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | <span className="api-desc">Set to true by `Bake`.</span> |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; set; }"}</code> | <span className="api-desc">The prefab to swap in.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkreplace" /><code>{"static void CheckReplace(ref GameObject target, bool isChunkingPrefabFolderForced = false)"}</code> | <span className="api-desc">Replaces the target if it has this component, or walks a `ChunkingPrefabFolder`'s children and replaces those.</span> |
| <Link id="m-replacewithprefab" /><code>{"GameObject ReplaceWithPrefab()"}</code> | <span className="api-desc">Instantiates the prefab's root object, copies this transform to it, destroys this object, and returns the new one.</span> |
| <Link id="m-validateprefab" /><code>{"bool ValidatePrefab()"}</code> | <span className="api-desc">Always returns false and does nothing.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> | <span className="api-desc">Marks it baked and runs `ReplaceWithPrefab`.</span> |

</details>
