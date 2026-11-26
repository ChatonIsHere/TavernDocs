---
title: "SimplePriorityQueue<TItem, TPriority>"
description: "class SimplePriorityQueue<TItem, TPriority> in Alta.Timing.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplePriorityQueue&lt;TItem, TPriority&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IPriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<TItem>`, `IEnumerable`
- **Derived types** [`SimplePriorityQueue<TItem>`](/game-api/types/assembly-other/simplepriorityqueue-titem)
- **Nested types** [`SimpleNode`](/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SimplePriorityQueue()"}</code> |
| <Link id="m-ctor-2" /><code>{"SimplePriorityQueue(IComparer<TPriority> comparer)"}</code> |
| <Link id="m-ctor-3" /><code>{"SimplePriorityQueue(Comparison<TPriority> comparer)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-itemtonodescache" /><code>{"private readonly Dictionary<TItem, IList<"}<Link to="/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>>> _itemToNodesCache"}</code> |
| <Link id="m-nullnodescache" /><code>{"private readonly IList<"}<Link to="/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>> _nullNodesCache"}</code> |
| <Link id="m-queue" /><code>{"private readonly "}<Link to="/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority">{"GenericPriorityQueue"}</Link>{"<"}<Link to="/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>, TPriority> _queue"}</code> |
| <Link id="m-initial-queue-size" /><code>{"private const int INITIAL_QUEUE_SIZE"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-contains" /><code>{"bool Contains(TItem item)"}</code> |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem item, TPriority priority)"}</code> |
| <Link id="m-enqueuewithoutduplicates" /><code>{"bool EnqueueWithoutDuplicates(TItem item, TPriority priority)"}</code> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<TItem> GetEnumerator()"}</code> |
| <Link id="m-getpriority" /><code>{"TPriority GetPriority(TItem item)"}</code> |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> |
| <Link id="m-remove" /><code>{"void Remove(TItem item)"}</code> |
| <Link id="m-trydequeue" /><code>{"bool TryDequeue(out TItem first)"}</code> |
| <Link id="m-tryfirst" /><code>{"bool TryFirst(out TItem first)"}</code> |
| <Link id="m-trygetpriority" /><code>{"bool TryGetPriority(TItem item, out TPriority priority)"}</code> |
| <Link id="m-tryremove" /><code>{"bool TryRemove(TItem item)"}</code> |
| <Link id="m-tryupdatepriority" /><code>{"bool TryUpdatePriority(TItem item, TPriority priority)"}</code> |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem item, TPriority priority)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addtonodecache" /><code>{"private void AddToNodeCache("}<Link to="/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> node)"}</code> |
| <Link id="m-enqueuenolockorcache" /><code>{"private "}<Link to="/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> EnqueueNoLockOrCache(TItem item, TPriority priority)"}</code> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |
| <Link id="m-getexistingnode" /><code>{"private "}<Link to="/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> GetExistingNode(TItem item)"}</code> |
| <Link id="m-removefromnodecache" /><code>{"private void RemoveFromNodeCache("}<Link to="/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> node)"}</code> |

</details>
