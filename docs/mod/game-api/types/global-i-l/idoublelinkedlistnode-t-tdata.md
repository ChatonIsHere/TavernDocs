---
title: "IDoubleLinkedListNode<T, TData>"
description: "A node in a doubly linked list that is set up from data and told when it turns active or inactive."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDoubleLinkedListNode&lt;T, TData&gt;

An **interface** in `Root.Township`, the global namespace.

A node in a doubly linked list that is set up from data and told when it turns active or inactive.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-next" /><code>{"T Next { get; set; }"}</code> | <span className="api-desc">The next node.</span> |
| <Link id="m-previous" /><code>{"T Previous { get; set; }"}</code> | <span className="api-desc">The previous node.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activechanged" /><code>{"void ActiveChanged(bool isActive)"}</code> | <span className="api-desc">Called when the node turns active or inactive.</span> |
| <Link id="m-initialize" /><code>{"void Initialize(TData nodeData)"}</code> | <span className="api-desc">Sets the node up from its data.</span> |
