---
title: "MainMenuCraft"
description: "Main menu helper that joins a craft insert into a slot one frame after spawn (without effects), then removes itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuCraft

A **class** in `Root.Township`, no namespace.

Main menu helper that joins a craft insert into a slot one frame after spawn (without effects), then removes itself. Used to show pre-built crafted pieces.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuCraft()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insert" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointinsert">{"JointInsert"}</Link>{" insert"}</code> | The insert to connect. |
| <Link id="m-slot" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot"}</code> | The slot to connect it into. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | After a frame, connects `insert` into `slot` and destroys this component. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Clears `slot` in the editor if it does not support the insert's type. |

</details>
