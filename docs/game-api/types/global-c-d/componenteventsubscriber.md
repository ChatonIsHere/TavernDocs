---
title: "ComponentEventSubscriber"
description: "Subscribes a component's handler to an event and unsubscribes itself, with an error log, if the component has been destroyed when the event fires."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentEventSubscriber

A **class** in `Root.Township`, no namespace.

Subscribes a component's handler to an event and unsubscribes itself, with an error log, if the component has been destroyed when the event fires. Dispose to unsubscribe.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentEventSubscriber(Component component, Func<Action, Action> subscriber, Action<Action> unsubscriber)"}</code> | Creates a `ComponentEventSubscriber` from `component`, `subscriber` and `unsubscriber`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private readonly Action action"}</code> | The handler returned by the subscribe call, run when the event fires. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-owner" /><code>{"private readonly Component owner"}</code> | The component the subscription belongs to. |
| <Link id="m-path" /><code>{"private string path"}</code> | Hierarchy path of `owner`, saved for the error message. |
| <Link id="m-unsubscribe" /><code>{"private readonly Action<Action> unsubscribe"}</code> | Delegate that removes the subscription. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Unsubscribes from the event. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"private void Invoke()"}</code> | Runs the action, or unsubscribes and logs an error if the owning object has been destroyed. |
| <Link id="m-updatepath" /><code>{"private void UpdatePath()"}</code> | Stores the component's full hierarchy path, used in the error log. |

</details>

## Used in

Members of other types that take, return or hold a `ComponentEventSubscriber`:

[`RecentPlayerElement.friendshipStatusSubscriber`](/game-api/types/global-q-r/recentplayerelement#m-friendshipstatussubscriber).
