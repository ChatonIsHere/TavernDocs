---
title: "LinkedMesh"
description: "Builder component for chains of linked pieces: each link sits Length away from its Previous link and spawns one of its Prefabs as a child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinkedMesh

A **class** in `Root.Township`, the global namespace.

Builder component for chains of linked pieces: each link sits `Length` away from its `Previous` link and spawns one of its `Prefabs` as a child. Probably an editor tool for laying out ropes or fences.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinkedMesh()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-child" /><code>{"private GameObject child"}</code> | <span className="api-desc">The currently spawned prefab instance.</span> |
| <Link id="m-isaddingchild" /><code>{"private bool isAddingChild"}</code> | <span className="api-desc">Serialized flag that nothing in this class reads; probably used by an editor script.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">Backing field for `Length`.</span> |
| <Link id="m-oldindex" /><code>{"private int oldIndex"}</code> | <span className="api-desc">Last applied prefab index, so `PrefabIndex` only respawns when the value changes or the child is missing.</span> |
| <Link id="m-prefabindex" /><code>{"private int prefabIndex"}</code> | <span className="api-desc">Backing field for `PrefabIndex`.</span> |
| <Link id="m-prefabs" /><code>{"private GameObject[] prefabs"}</code> | <span className="api-desc">Backing field for `Prefabs`.</span> |
| <Link id="m-previous" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/linkedmesh">{"LinkedMesh"}</Link>{" previous"}</code> | <span className="api-desc">Backing field for `Previous`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-length-2" /><code>{"float Length { get; set; }"}</code> | <span className="api-desc">Distance this link keeps from `Previous`.</span> |
| <Link id="m-prefabindex-2" /><code>{"int PrefabIndex { get; set; }"}</code> | <span className="api-desc">Which entry of `Prefabs` is spawned as the child. Setting it destroys the current child and spawns the new prefab at the local origin.</span> |
| <Link id="m-prefabs-2" /><code>{"GameObject[] Prefabs { get; set; }"}</code> | <span className="api-desc">Prefabs this link can show; `PrefabIndex` picks one.</span> |
| <Link id="m-previous-2" /><code><Link to="/mod/game-api/types/global-i-l/linkedmesh">{"LinkedMesh"}</Link>{" Previous { get; set; }"}</code> | <span className="api-desc">The link before this one. Setting it moves this link `Length` away from it and turns it to face back along the chain.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editorsafedestroy" /><code>{"private void EditorSafeDestroy(GameObject gameObject)"}</code> | <span className="api-desc">Destroys the old child object through `ObjectUtility.Destroy`, used when `PrefabIndex` changes.</span> |

</details>
