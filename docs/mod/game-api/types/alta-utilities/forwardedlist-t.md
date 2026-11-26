---
title: "ForwardedList<T>"
description: "A read-only view onto another listened list that can be swapped at runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForwardedList&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

A read-only view onto another listened list that can be swapped at runtime. It forwards the target's add, remove and target-changed events as its own, and reads as empty with no target.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`IListenedList<T>`](/mod/game-api/types/alta-utilities/ilistenedlist-t), `IEnumerable<T>`, `IEnumerable`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForwardedList()"}</code> | <span className="api-desc">Creates a `ForwardedList` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"private List<T> empty"}</code> | <span className="api-desc">Empty list returned when there is no target.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Item count of the current target, or 0 with none.</span> |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> | <span className="api-desc">Item at the index in the current target.</span> |
| <Link id="m-target-2" /><code><Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> Target { get; }"}</code> | <span className="api-desc">The list currently forwarded.</span> |
| <Link id="m-internal" /><code>{"protected List<T> Internal { get; }"}</code> | <span className="api-desc">The target's backing list, or an empty list when there is no target.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemAdded"}</code> | <span className="api-desc">Raised when an item is added to the current target.</span> |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemRemoved"}</code> | <span className="api-desc">Raised when an item is removed from the current target.</span> |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/targetchangedhandler-t">{"TargetChangedHandler"}</Link>{"<T> TargetChanged"}</code> | <span className="api-desc">Raised with the old and new target when the target changes, including in nested forwarded lists.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> | <span className="api-desc">Whether the current target contains the item.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the current target's items.</span> |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget)"}</code> | <span className="api-desc">Switches to a new target list, moving event hooks and raising `TargetChanged`. Items are not re-announced.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> | <span className="api-desc">Forwards the target's `ItemAdded` as this list's `ItemAdded`.</span> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the current target's items.</span> |
| <Link id="m-parenttargetchanged" /><code>{"private void ParentTargetChanged("}<Link to="/mod/game-api/types/alta-utilities/forwardedlist-t">{"ForwardedList"}</Link>{"<T> list, "}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> oldTarget, "}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget)"}</code> | <span className="api-desc">Passes on a target change from a nested forwarded list.</span> |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> | <span className="api-desc">Forwards the target's `ItemRemoved` as this list's `ItemRemoved`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ForwardedList&lt;T>`:

<div className="api-used-in">

[`TargetChangedHandler<T>.BeginInvoke`](/mod/game-api/types/alta-utilities/targetchangedhandler-t#m-begininvoke), [`TargetChangedHandler<T>.Invoke`](/mod/game-api/types/alta-utilities/targetchangedhandler-t#m-invoke).

</div>
