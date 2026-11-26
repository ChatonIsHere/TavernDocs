---
title: "Array2dGenerationHelper"
description: "Helpers that split forest generation work into parallel Task.Run jobs, by row or by square segment of a 2D array."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Array2dGenerationHelper

A **static class** in `Root.Township`, `Alta.Forests`.

Helpers that split forest generation work into parallel `Task.Run` jobs, by row or by square segment of a 2D array.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested types** [`ThreadRowsAction`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction), [`ThreadRowsAction<T, TData>`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-t-tdata), [`ThreadRowsAction<TContext, T, TData>`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-tcontext-t-tdata), [`ThreadRowsAction<TContext>`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-tcontext)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-threadrows" /><code>{"static async Task ThreadRows<TContext>(TContext context, Random random, int rows, "}<Link to="/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-tcontext">{"Array2dGenerationHelper.ThreadRowsAction"}</Link>{"<TContext> operation)"}</code> | Runs the operation in parallel, once per row or per segment (up to `maxSegment` cells square), each with its own seeded `Random`, and awaits all. |
| <Link id="m-threadrows-2" /><code>{"static async Task ThreadRows<TContext, T, TData>(TContext context, Random random, T[,] values, TData data, "}<Link to="/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-tcontext-t-tdata">{"Array2dGenerationHelper.ThreadRowsAction"}</Link>{"<TContext, T, TData> operation, int maxSegment = 64)"}</code> | Runs the operation in parallel, once per row or per segment (up to `maxSegment` cells square), each with its own seeded `Random`, and awaits all. |
| <Link id="m-threadrows-3" /><code>{"static async Task ThreadRows(Random random, int rows, "}<Link to="/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction">{"Array2dGenerationHelper.ThreadRowsAction"}</Link>{" operation)"}</code> | Runs the operation in parallel, once per row or per segment (up to `maxSegment` cells square), each with its own seeded `Random`, and awaits all. |
| <Link id="m-threadrows-4" /><code>{"static async Task ThreadRows<T, TData>(Random random, T[,] values, TData data, "}<Link to="/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-t-tdata">{"Array2dGenerationHelper.ThreadRowsAction"}</Link>{"<T, TData> operation, int maxSegment = 64)"}</code> | Runs the operation in parallel, once per row or per segment (up to `maxSegment` cells square), each with its own seeded `Random`, and awaits all. |
