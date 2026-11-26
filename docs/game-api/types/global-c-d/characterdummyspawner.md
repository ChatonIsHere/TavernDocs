---
title: "CharacterDummySpawner"
description: "A CharacterDummyPointer that makes its own CharacterDummy from a prefab the first time it's asked for one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterDummySpawner

A **class** in `Root.Township`, no namespace.

A `CharacterDummyPointer` that makes its own `CharacterDummy` from a prefab the first time it's asked for one.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`CharacterDummyPointer`](/game-api/types/global-c-d/characterdummypointer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CharacterDummySpawner()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidtexturesizemultiplier" /><code>{"private float androidTextureSizeMultiplier"}</code> | Serialized but not read by this class. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" prefab"}</code> | Dummy prefab to spawn. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-characterdummy" /><code>{"override "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" { get; set; }"}</code> | The dummy. If none is set yet, instantiates `prefab` as a child and resets its local transform. |
