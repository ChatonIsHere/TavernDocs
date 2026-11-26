---
title: "RebindSkinnedMeshRenderers"
description: "Editor tool meant to rebind child skinned meshes to a character's bones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RebindSkinnedMeshRenderers

A **class** in `Root.Township`, the global namespace.

Editor tool meant to rebind child skinned meshes to a character's bones. `Rebind` is empty in this build.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RebindSkinnedMeshRenderers()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnrebind" /><code>{"private bool btnRebind"}</code> | Inspector button that calls `Rebind`. |
| <Link id="m-pointer" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" pointer"}</code> | Character dummy pointer to bind to. |
| <Link id="m-root" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" root"}</code> | Root bone to bind from. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rebind" /><code>{"private void Rebind()"}</code> | Empty in this build. |

</details>
