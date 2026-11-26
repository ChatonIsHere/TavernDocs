---
title: "SavePrefabAtButton"
description: "Editor helper with an inspector button to save a prefab to a path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavePrefabAtButton

A **class** in `Root.Township`, the global namespace.

Editor helper with an inspector button to save a prefab to a path. The save method isn't in this build.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavePrefabAtButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-directory" /><code>{"string directory"}</code> | <span className="api-desc">Folder to save into. Read-only in the inspector.</span> |
| <Link id="m-filename" /><code>{"string fileName"}</code> | <span className="api-desc">File name to save as.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">The prefab to save.</span> |
| <Link id="m-saveprefabat" /><code>{"private bool savePrefabAt"}</code> | <span className="api-desc">Inspector button field that calls `SavePrefab`.</span> |

</details>
