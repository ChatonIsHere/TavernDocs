---
title: "LinkerPart"
description: "Generation part (Generatable/GPart Linker) that wires logic between spawned objects: after generation it links the LogicValueSender spawned by each from..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinkerPart

A **class** in `Root.Township`, the global namespace.

Generation part (`Generatable/GPart Linker`) that wires logic between spawned objects: after generation it links the `LogicValueSender` spawned by each `from` spawner to the receivers spawned by each `to` spawner.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinkerPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnerpart">{"SpawnerPart"}</Link>{"[] from"}</code> | <span className="api-desc">Spawner parts whose last spawned objects are the logic senders.</span> |
| <Link id="m-to" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnerpart">{"SpawnerPart"}</Link>{"[] to"}</code> | <span className="api-desc">Spawner parts whose last spawned objects are the logic receivers.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatedynamic" /><code>{"override void GenerateDynamic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core)"}</code> | <span className="api-desc">For each `from` spawner's last spawned object, links its `LogicValueSender` to every `to` spawner's `ILogicValueLinkReceiver`, logging errors when either is missing.</span> |
