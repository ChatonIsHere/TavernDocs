---
title: "ForwardedList<T>"
description: "class ForwardedList<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForwardedList&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

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

| Member |
| --- |
| <Link id="m-empty" /><code>{"private List<T> empty"}</code> |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> target"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> |
| <Link id="m-target-2" /><code><Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> Target { get; }"}</code> |
| <Link id="m-internal" /><code>{"protected List<T> Internal { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemAdded"}</code> |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemRemoved"}</code> |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/game-api/types/alta-utilities/targetchangedhandler-t">{"TargetChangedHandler"}</Link>{"<T> TargetChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> |
| <Link id="m-settarget" /><code>{"void SetTarget("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |
| <Link id="m-parenttargetchanged" /><code>{"private void ParentTargetChanged("}<Link to="/game-api/types/alta-utilities/forwardedlist-t">{"ForwardedList"}</Link>{"<T> list, "}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> oldTarget, "}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget)"}</code> |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ForwardedList&lt;T>`:

[`TargetChangedHandler<T>.BeginInvoke`](/game-api/types/alta-utilities/targetchangedhandler-t#m-begininvoke), [`TargetChangedHandler<T>.Invoke`](/game-api/types/alta-utilities/targetchangedhandler-t#m-invoke).
