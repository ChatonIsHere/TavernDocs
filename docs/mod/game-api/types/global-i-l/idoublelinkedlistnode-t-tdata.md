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
| <Link id="m-next" /><code>{"T Next { get; set; }"}</code> | The next node. |
| <Link id="m-previous" /><code>{"T Previous { get; set; }"}</code> | The previous node. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activechanged" /><code>{"void ActiveChanged(bool isActive)"}</code> | Called when the node turns active or inactive. |
| <Link id="m-initialize" /><code>{"void Initialize(TData nodeData)"}</code> | Sets the node up from its data. |
