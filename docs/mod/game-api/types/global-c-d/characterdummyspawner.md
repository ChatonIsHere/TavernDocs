---
title: "CharacterDummySpawner"
description: "A CharacterDummyPointer that makes its own CharacterDummy from a prefab the first time it's asked for one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterDummySpawner

A **class** in `Root.Township`, the global namespace.

A `CharacterDummyPointer` that makes its own `CharacterDummy` from a prefab the first time it's asked for one.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`CharacterDummyPointer`](/mod/game-api/types/global-c-d/characterdummypointer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterDummySpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidtexturesizemultiplier" /><code>{"private float androidTextureSizeMultiplier"}</code> | <span className="api-desc">Serialized but not read by this class.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" prefab"}</code> | <span className="api-desc">Dummy prefab to spawn.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-characterdummy" /><code>{"override "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The dummy. If none is set yet, instantiates `prefab` as a child and resets its local transform.</span> |
