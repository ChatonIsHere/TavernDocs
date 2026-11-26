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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`IListenedList<T>`](/game-api/types/alta-utilities/ilistenedlist-t), `IEnumerable<T>`, `IEnumerable`
- **Attributes** `DefaultMember`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForwardedList()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"private List<T> empty"}</code> | Empty list returned when there is no target. |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> target"}</code> | Backing field for `Target`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Item count of the current target, or 0 with none. |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> | Item at the index in the current target. |
| <Link id="m-target-2" /><code><Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> Target { get; }"}</code> | The list currently forwarded. |
| <Link id="m-internal" /><code>{"protected List<T> Internal { get; }"}</code> | The target's backing list, or an empty list when there is no target. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemAdded"}</code> | Raised when an item is added to the current target. |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemRemoved"}</code> | Raised when an item is removed from the current target. |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/game-api/types/alta-utilities/targetchangedhandler-t">{"TargetChangedHandler"}</Link>{"<T> TargetChanged"}</code> | Raised with the old and new target when the target changes, including in nested forwarded lists. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> | Whether the current target contains the item. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> | Enumerates the current target's items. |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget)"}</code> | Switches to a new target list, moving event hooks and raising `TargetChanged`. Items are not re-announced. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> | Forwards the target's `ItemAdded` as this list's `ItemAdded`. |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the current target's items. |
| <Link id="m-parenttargetchanged" /><code>{"private void ParentTargetChanged("}<Link to="/game-api/types/alta-utilities/forwardedlist-t">{"ForwardedList"}</Link>{"<T> list, "}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> oldTarget, "}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget)"}</code> | Passes on a target change from a nested forwarded list. |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> | Forwards the target's `ItemRemoved` as this list's `ItemRemoved`. |

</details>

## Used in

Members of other types that take, return or hold a `ForwardedList&lt;T>`:

[`TargetChangedHandler<T>.BeginInvoke`](/game-api/types/alta-utilities/targetchangedhandler-t#m-begininvoke), [`TargetChangedHandler<T>.Invoke`](/game-api/types/alta-utilities/targetchangedhandler-t#m-invoke).
