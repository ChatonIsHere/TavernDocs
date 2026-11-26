---
title: "ForceLoadChunk"
description: "Keeps a chunk force loaded while this component is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForceLoadChunk

A **class** in `Root.Township`, no namespace.

Keeps a chunk force loaded while this component is enabled. It disables itself on `Awake`, so something must enable it.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForceLoadChunk()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | The chunk on this object. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the `Chunk` and disables the component. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Clears `IsForceLoaded` on the chunk in play mode. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets `IsForceLoaded` on the chunk in play mode. |

</details>
