---
title: "IDynamicQueueElement<T>"
description: "An element of a doubly linked queue that keeps its own Next and Previous links."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDynamicQueueElement&lt;T&gt;

An **interface** in `Root.Township`, `Alta.Blacksmithing`.

An element of a doubly linked queue that keeps its own `Next` and `Previous` links.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`RecyclerOutputSlot`](/mod/game-api/types/alta-crafting/recycleroutputslot)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-next" /><code>{"T Next { get; set; }"}</code> | The next element in the queue. |
| <Link id="m-previous" /><code>{"T Previous { get; set; }"}</code> | The previous element in the queue. |
