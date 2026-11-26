---
title: "Array2dGenerationHelper.ThreadRowsAction"
description: "Work for one row in Array2dGenerationHelper.ThreadRows."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Array2dGenerationHelper.ThreadRowsAction

A **delegate** in `Root.Township`, `Alta.Forests`.

Work for one row in `Array2dGenerationHelper.ThreadRows`. Each row runs as its own task with its own seeded random.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Array2dGenerationHelper`](/game-api/types/alta-world-generation/array2dgenerationhelper)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ThreadRowsAction(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Random random, int row, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual Task Invoke(Random random, int row)"}</code> |

## Used in

Members of other types that take, return or hold a `ThreadRowsAction`:

[`Array2dGenerationHelper.ThreadRows`](/game-api/types/alta-world-generation/array2dgenerationhelper#m-threadrows-3).
