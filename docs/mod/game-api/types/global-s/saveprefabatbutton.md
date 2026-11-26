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
| <Link id="m-ctor" /><code>{"SavePrefabAtButton()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-directory" /><code>{"string directory"}</code> | Folder to save into. Read-only in the inspector. |
| <Link id="m-filename" /><code>{"string fileName"}</code> | File name to save as. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | The prefab to save. |
| <Link id="m-saveprefabat" /><code>{"private bool savePrefabAt"}</code> | Inspector button field that calls `SavePrefab`. |

</details>
