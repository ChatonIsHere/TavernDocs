---
title: "SimplePriorityQueue<TItem, TPriority>"
description: "Thread-safe priority queue for any item type: it wraps items in nodes for you, grows as needed and locks on every call."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplePriorityQueue&lt;TItem, TPriority&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Thread-safe priority queue for any item type: it wraps items in nodes for you, grows as needed and locks on every call. The lowest priority value comes out first; equal priorities keep their order.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IPriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<TItem>`, `IEnumerable`
- **Derived types** [`SimplePriorityQueue<TItem>`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem)
- **Nested types** [`SimpleNode`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplePriorityQueue()"}</code> | <span className="api-desc">Creates a `SimplePriorityQueue` from `comparer`.</span> |
| <Link id="m-ctor-2" /><code>{"SimplePriorityQueue(IComparer<TPriority> comparer)"}</code> | <span className="api-desc">Creates a `SimplePriorityQueue` from `comparer`.</span> |
| <Link id="m-ctor-3" /><code>{"SimplePriorityQueue(Comparison<TPriority> comparer)"}</code> | <span className="api-desc">Creates a `SimplePriorityQueue` from `comparer`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-itemtonodescache" /><code>{"private readonly Dictionary<TItem, IList<"}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>>> _itemToNodesCache"}</code> | <span className="api-desc">Lookup from each non-null item to its queued nodes.</span> |
| <Link id="m-nullnodescache" /><code>{"private readonly IList<"}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>> _nullNodesCache"}</code> | <span className="api-desc">Queued nodes whose item is null.</span> |
| <Link id="m-queue" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority">{"GenericPriorityQueue"}</Link>{"<"}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>, TPriority> _queue"}</code> | <span className="api-desc">The underlying `GenericPriorityQueue`; also the lock object.</span> |
| <Link id="m-initial-queue-size" /><code>{"private const int INITIAL_QUEUE_SIZE"}</code> | <span className="api-desc">Starting capacity (10).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of queued entries.</span> |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> | <span className="api-desc">The first item, without removing it. Throws if the queue is empty.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the queue and the lookups.</span> |
| <Link id="m-contains" /><code>{"bool Contains(TItem item)"}</code> | <span className="api-desc">True if the item is queued at least once.</span> |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> | <span className="api-desc">Removes and returns the first item. Throws if the queue is empty.</span> |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem item, TPriority priority)"}</code> | <span className="api-desc">Adds the item with a priority. The same item can be queued more than once.</span> |
| <Link id="m-enqueuewithoutduplicates" /><code>{"bool EnqueueWithoutDuplicates(TItem item, TPriority priority)"}</code> | <span className="api-desc">Adds the item only if it is not queued yet. Returns false if it already is.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<TItem> GetEnumerator()"}</code> | <span className="api-desc">Returns a snapshot of the queued items, in heap order (not sorted).</span> |
| <Link id="m-getpriority" /><code>{"TPriority GetPriority(TItem item)"}</code> | <span className="api-desc">Returns the item's priority. Throws if it is not queued.</span> |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | <span className="api-desc">Debug check that the lookups and the heap agree.</span> |
| <Link id="m-remove" /><code>{"void Remove(TItem item)"}</code> | <span className="api-desc">Removes one entry of the item. Throws if it is not queued.</span> |
| <Link id="m-trydequeue" /><code>{"bool TryDequeue(out TItem first)"}</code> | <span className="api-desc">Like `Dequeue`, but returns false instead of throwing on an empty queue.</span> |
| <Link id="m-tryfirst" /><code>{"bool TryFirst(out TItem first)"}</code> | <span className="api-desc">Like `First`, but returns false instead of throwing on an empty queue.</span> |
| <Link id="m-trygetpriority" /><code>{"bool TryGetPriority(TItem item, out TPriority priority)"}</code> | <span className="api-desc">Like `GetPriority`, but returns false if the item is not queued.</span> |
| <Link id="m-tryremove" /><code>{"bool TryRemove(TItem item)"}</code> | <span className="api-desc">Like `Remove`, but returns false if the item is not queued.</span> |
| <Link id="m-tryupdatepriority" /><code>{"bool TryUpdatePriority(TItem item, TPriority priority)"}</code> | <span className="api-desc">Like `UpdatePriority`, but returns false if the item is not queued.</span> |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem item, TPriority priority)"}</code> | <span className="api-desc">Changes the priority of one entry of the item. Throws if it is not queued.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtonodecache" /><code>{"private void AddToNodeCache("}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> node)"}</code> | <span className="api-desc">Records a node in the item to node lookup.</span> |
| <Link id="m-enqueuenolockorcache" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> EnqueueNoLockOrCache(TItem item, TPriority priority)"}</code> | <span className="api-desc">Wraps the item in a node and queues it, doubling the capacity when full. Callers handle the lock and lookup.</span> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Returns a snapshot of the queued items, in heap order (not sorted).</span> |
| <Link id="m-getexistingnode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> GetExistingNode(TItem item)"}</code> | <span className="api-desc">Finds one queued node for an item, or null.</span> |
| <Link id="m-removefromnodecache" /><code>{"private void RemoveFromNodeCache("}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> node)"}</code> | <span className="api-desc">Removes a node from the item to node lookup.</span> |

</details>
