---
title: "LinkedMesh"
description: "Builder component for chains of linked pieces: each link sits Length away from its Previous link and spawns one of its Prefabs as a child."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinkedMesh

A **class** in `Root.Township`, no namespace.

Builder component for chains of linked pieces: each link sits `Length` away from its `Previous` link and spawns one of its `Prefabs` as a child. Probably an editor tool for laying out ropes or fences.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)
- **Attributes** `SelectionBase`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LinkedMesh()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-child" /><code>{"private GameObject child"}</code> | The currently spawned prefab instance. |
| <Link id="m-isaddingchild" /><code>{"private bool isAddingChild"}</code> | Serialized flag that nothing in this class reads; probably used by an editor script. |
| <Link id="m-length" /><code>{"private float length"}</code> | Backing field for `Length`. |
| <Link id="m-oldindex" /><code>{"private int oldIndex"}</code> | Last applied prefab index, so `PrefabIndex` only respawns when the value changes or the child is missing. |
| <Link id="m-prefabindex" /><code>{"private int prefabIndex"}</code> | Backing field for `PrefabIndex`. |
| <Link id="m-prefabs" /><code>{"private GameObject[] prefabs"}</code> | Backing field for `Prefabs`. |
| <Link id="m-previous" /><code>{"private "}<Link to="/game-api/types/global-i-l/linkedmesh">{"LinkedMesh"}</Link>{" previous"}</code> | Backing field for `Previous`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-length-2" /><code>{"float Length { get; set; }"}</code> | Distance this link keeps from `Previous`. |
| <Link id="m-prefabindex-2" /><code>{"int PrefabIndex { get; set; }"}</code> | Which entry of `Prefabs` is spawned as the child. Setting it destroys the current child and spawns the new prefab at the local origin. |
| <Link id="m-prefabs-2" /><code>{"GameObject[] Prefabs { get; set; }"}</code> | Prefabs this link can show; `PrefabIndex` picks one. |
| <Link id="m-previous-2" /><code><Link to="/game-api/types/global-i-l/linkedmesh">{"LinkedMesh"}</Link>{" Previous { get; set; }"}</code> | The link before this one. Setting it moves this link `Length` away from it and turns it to face back along the chain. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editorsafedestroy" /><code>{"private void EditorSafeDestroy(GameObject gameObject)"}</code> | Destroys the old child object through `ObjectUtility.Destroy`, used when `PrefabIndex` changes. |

</details>
