---
title: "ComponentEventSubscriber"
description: "Subscribes a component's handler to an event and unsubscribes itself, with an error log, if the component has been destroyed when the event fires."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentEventSubscriber

A **class** in `Root.Township`, the global namespace.

Subscribes a component's handler to an event and unsubscribes itself, with an error log, if the component has been destroyed when the event fires. Dispose to unsubscribe.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentEventSubscriber(Component component, Func<Action, Action> subscriber, Action<Action> unsubscriber)"}</code> | <span className="api-desc">Creates a `ComponentEventSubscriber` from `component`, `subscriber` and `unsubscriber`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private readonly Action action"}</code> | <span className="api-desc">The handler returned by the subscribe call, run when the event fires.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-owner" /><code>{"private readonly Component owner"}</code> | <span className="api-desc">The component the subscription belongs to.</span> |
| <Link id="m-path" /><code>{"private string path"}</code> | <span className="api-desc">Hierarchy path of `owner`, saved for the error message.</span> |
| <Link id="m-unsubscribe" /><code>{"private readonly Action<Action> unsubscribe"}</code> | <span className="api-desc">Delegate that removes the subscription.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Unsubscribes from the event.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"private void Invoke()"}</code> | <span className="api-desc">Runs the action, or unsubscribes and logs an error if the owning object has been destroyed.</span> |
| <Link id="m-updatepath" /><code>{"private void UpdatePath()"}</code> | <span className="api-desc">Stores the component's full hierarchy path, used in the error log.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ComponentEventSubscriber`:

<div className="api-used-in">

[`RecentPlayerElement.friendshipStatusSubscriber`](/mod/game-api/types/global-q-r/recentplayerelement#m-friendshipstatussubscriber).

</div>
