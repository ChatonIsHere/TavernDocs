---
title: "ICleanOnSerialize"
description: "Component that needs to reset state before its object is packed into a save, for example when an item is sent by postbox."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICleanOnSerialize

An **interface** in `Root.Township`, the global namespace.

Component that needs to reset state before its object is packed into a save, for example when an item is sent by postbox. `BasicDecay` and `Fuse` use it to cancel their timers.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`BasicDecay`](/mod/game-api/types/global-a-b/basicdecay), [`Fuse`](/mod/game-api/types/global-e-h/fuse)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onserialize" /><code>{"void OnSerialize()"}</code> | Called just before the object is serialized. |
