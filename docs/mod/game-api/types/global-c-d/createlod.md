---
title: "CreateLOD"
description: "Editor tool: when isGoing is ticked in the inspector, it builds a LODGroup from the lods prefabs plus a mesh-collider copy of LOD 0, then removes itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateLOD

A **class** in `Root.Township`, the global namespace.

Editor tool: when `isGoing` is ticked in the inspector, it builds a `LODGroup` from the `lods` prefabs plus a mesh-collider copy of LOD 0, then removes itself.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreateLOD()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isgoing" /><code>{"private bool isGoing"}</code> | <span className="api-desc">Inspector toggle that triggers the build.</span> |
| <Link id="m-lods" /><code>{"private GameObject[] lods"}</code> | <span className="api-desc">Prefabs to instantiate as LOD 0, 1, 2 and so on, with transition heights spread from 0.8 down to 0.01.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyeditor" /><code>{"private void DestroyEditor(Object target)"}</code> | <span className="api-desc">Meant to destroy an object in the editor; empty in this build, so nothing is removed.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Does the LOD build when `isGoing` is set and no `LODGroup` exists yet, then clears `isGoing`.</span> |

</details>
