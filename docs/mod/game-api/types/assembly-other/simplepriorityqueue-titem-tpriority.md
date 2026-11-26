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
| <Link id="m-ctor" /><code>{"SimplePriorityQueue()"}</code> | Creates a `SimplePriorityQueue` from `comparer`. |
| <Link id="m-ctor-2" /><code>{"SimplePriorityQueue(IComparer<TPriority> comparer)"}</code> | Creates a `SimplePriorityQueue` from `comparer`. |
| <Link id="m-ctor-3" /><code>{"SimplePriorityQueue(Comparison<TPriority> comparer)"}</code> | Creates a `SimplePriorityQueue` from `comparer`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-itemtonodescache" /><code>{"private readonly Dictionary<TItem, IList<"}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>>> _itemToNodesCache"}</code> | Lookup from each non-null item to its queued nodes. |
| <Link id="m-nullnodescache" /><code>{"private readonly IList<"}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>> _nullNodesCache"}</code> | Queued nodes whose item is null. |
| <Link id="m-queue" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority">{"GenericPriorityQueue"}</Link>{"<"}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority>, TPriority> _queue"}</code> | The underlying `GenericPriorityQueue`; also the lock object. |
| <Link id="m-initial-queue-size" /><code>{"private const int INITIAL_QUEUE_SIZE"}</code> | Starting capacity (10). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of queued entries. |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> | The first item, without removing it. Throws if the queue is empty. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the queue and the lookups. |
| <Link id="m-contains" /><code>{"bool Contains(TItem item)"}</code> | True if the item is queued at least once. |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> | Removes and returns the first item. Throws if the queue is empty. |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem item, TPriority priority)"}</code> | Adds the item with a priority. The same item can be queued more than once. |
| <Link id="m-enqueuewithoutduplicates" /><code>{"bool EnqueueWithoutDuplicates(TItem item, TPriority priority)"}</code> | Adds the item only if it is not queued yet. Returns false if it already is. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<TItem> GetEnumerator()"}</code> | Returns a snapshot of the queued items, in heap order (not sorted). |
| <Link id="m-getpriority" /><code>{"TPriority GetPriority(TItem item)"}</code> | Returns the item's priority. Throws if it is not queued. |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | Debug check that the lookups and the heap agree. |
| <Link id="m-remove" /><code>{"void Remove(TItem item)"}</code> | Removes one entry of the item. Throws if it is not queued. |
| <Link id="m-trydequeue" /><code>{"bool TryDequeue(out TItem first)"}</code> | Like `Dequeue`, but returns false instead of throwing on an empty queue. |
| <Link id="m-tryfirst" /><code>{"bool TryFirst(out TItem first)"}</code> | Like `First`, but returns false instead of throwing on an empty queue. |
| <Link id="m-trygetpriority" /><code>{"bool TryGetPriority(TItem item, out TPriority priority)"}</code> | Like `GetPriority`, but returns false if the item is not queued. |
| <Link id="m-tryremove" /><code>{"bool TryRemove(TItem item)"}</code> | Like `Remove`, but returns false if the item is not queued. |
| <Link id="m-tryupdatepriority" /><code>{"bool TryUpdatePriority(TItem item, TPriority priority)"}</code> | Like `UpdatePriority`, but returns false if the item is not queued. |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem item, TPriority priority)"}</code> | Changes the priority of one entry of the item. Throws if it is not queued. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtonodecache" /><code>{"private void AddToNodeCache("}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> node)"}</code> | Records a node in the item to node lookup. |
| <Link id="m-enqueuenolockorcache" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> EnqueueNoLockOrCache(TItem item, TPriority priority)"}</code> | Wraps the item in a node and queues it, doubling the capacity when full. Callers handle the lock and lookup. |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Returns a snapshot of the queued items, in heap order (not sorted). |
| <Link id="m-getexistingnode" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> GetExistingNode(TItem item)"}</code> | Finds one queued node for an item, or null. |
| <Link id="m-removefromnodecache" /><code>{"private void RemoveFromNodeCache("}<Link to="/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode">{"SimplePriorityQueue"}</Link>{"<TItem, TPriority> node)"}</code> | Removes a node from the item to node lookup. |

</details>
