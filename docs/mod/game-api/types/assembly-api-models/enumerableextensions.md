---
title: "EnumerableExtensions"
description: "Small collection helpers used by the API models."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnumerableExtensions

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Extensions`.

Small collection helpers used by the API models.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addall" /><code>{"static void AddAll<T>(ICollection<T> list, IEnumerable<T> itemsToAdd)"}</code> | Adds every item from a sequence to the collection. |
| <Link id="m-asenumerable" /><code>{"static IEnumerable<T> AsEnumerable<T>(T item) (iterator)"}</code> | Wraps a single item in a one-item sequence. |
| <Link id="m-aslist" /><code>{"static List<T> AsList<T>(T item)"}</code> | Wraps a single item in a one-item list. |
| <Link id="m-batch" /><code>{"static IEnumerable<IEnumerable<TSource>> Batch<TSource>(IEnumerable<TSource> source, int size) (iterator)"}</code> | Splits a sequence into chunks of the given size; the last chunk may be shorter. |
| <Link id="m-containsany" /><code>{"static bool ContainsAny<T>(ICollection<T> list, IEnumerable<T> otherList)"}</code> | True if the collection contains any item of the other sequence. |
| <Link id="m-removeall" /><code>{"static void RemoveAll<T>(ICollection<T> list, IEnumerable<T> itemsToRemove)"}</code> | Removes every item of a sequence from the collection. |
