---
title: "CharacterShellHelper"
description: "Editor script helper that builds a new character shell from a body rig, copying materials from an existing set of skinned meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterShellHelper

A **class** in `Root.Township`, the global namespace.

Editor script helper that builds a new character shell from a body rig, copying materials from an existing set of skinned meshes.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ScriptHelper`](/mod/game-api/types/alta-utilities/scripthelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterShellHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-existinggroup" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skinnedmeshrenderergroup">{"SkinnedMeshRendererGroup"}</Link>{" existingGroup"}</code> | <span className="api-desc">The current shell's skinned mesh group. Disabled and replaced by `CreateShell`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createshell" /><code>{"void CreateShell(Transform newBodyRoot)"}</code> | <span className="api-desc">Duplicates the body root, keeps only the skinned meshes that match the existing group by name (with its materials), and swaps it in as the current group.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-recursivedelete" /><code>{"private void RecursiveDelete(Transform transform, List<SkinnedMeshRenderer> renderersToIgnore)"}</code> | <span className="api-desc">Destroys every skinned mesh object under a transform that isn't in the keep list.</span> |

</details>
