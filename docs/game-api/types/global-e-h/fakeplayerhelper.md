---
title: "FakePlayerHelper"
description: "Editor debug helper on a Player: chunks dropped into its lists in the Inspector during play get the player added to or removed from their player lists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePlayerHelper

A **class** in `Root.Township`, no namespace.

Editor debug helper on a `Player`: chunks dropped into its lists in the Inspector during play get the player added to or removed from their player lists.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePlayerHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadchunks" /><code>{"private List<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> loadChunks"}</code> | Chunks to add this player to on the next Inspector change. Cleared after use. |
| <Link id="m-unloadchunks" /><code>{"private List<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> unloadChunks"}</code> | Chunks to remove this player from on the next Inspector change. Cleared after use. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | In play mode, adds the player to each `loadChunks` chunk and removes it from each `unloadChunks` chunk, then clears both lists. |

</details>
