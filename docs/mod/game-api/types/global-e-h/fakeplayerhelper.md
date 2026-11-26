---
title: "FakePlayerHelper"
description: "Editor debug helper on a Player: chunks dropped into its lists in the Inspector during play get the player added to or removed from their player lists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePlayerHelper

A **class** in `Root.Township`, the global namespace.

Editor debug helper on a `Player`: chunks dropped into its lists in the Inspector during play get the player added to or removed from their player lists.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePlayerHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadchunks" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> loadChunks"}</code> | <span className="api-desc">Chunks to add this player to on the next Inspector change. Cleared after use.</span> |
| <Link id="m-unloadchunks" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> unloadChunks"}</code> | <span className="api-desc">Chunks to remove this player from on the next Inspector change. Cleared after use.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">In play mode, adds the player to each `loadChunks` chunk and removes it from each `unloadChunks` chunk, then clears both lists.</span> |

</details>
