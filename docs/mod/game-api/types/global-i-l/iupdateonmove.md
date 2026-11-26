---
title: "IUpdateOnMove"
description: "Component on an entity that is told when the entity is moved by a move message, such as StorageOrganizer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUpdateOnMove

An **interface** in `Root.Township`, the global namespace.

Component on an entity that is told when the entity is moved by a move message, such as `StorageOrganizer`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`StorageOrganizer`](/mod/game-api/types/alta-items/storageorganizer), [`VisibleNetworkRigidbody`](/mod/game-api/types/global-t-x/visiblenetworkrigidbody)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-moved" /><code>{"void Moved()"}</code> | Called after the entity has moved. |
