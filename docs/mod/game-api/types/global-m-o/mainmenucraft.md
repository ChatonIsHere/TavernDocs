---
title: "MainMenuCraft"
description: "Main menu helper that joins a craft insert into a slot one frame after spawn (without effects), then removes itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuCraft

A **class** in `Root.Township`, the global namespace.

Main menu helper that joins a craft insert into a slot one frame after spawn (without effects), then removes itself. Used to show pre-built crafted pieces.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuCraft()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insert" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointinsert">{"JointInsert"}</Link>{" insert"}</code> | <span className="api-desc">The insert to connect.</span> |
| <Link id="m-slot" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot"}</code> | <span className="api-desc">The slot to connect it into.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">After a frame, connects `insert` into `slot` and destroys this component.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Clears `slot` in the editor if it does not support the insert's type.</span> |

</details>
