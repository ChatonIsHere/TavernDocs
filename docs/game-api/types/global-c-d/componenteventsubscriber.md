---
title: "ComponentEventSubscriber"
description: "class ComponentEventSubscriber in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentEventSubscriber

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentEventSubscriber(Component component, Func<Action, Action> subscriber, Action<Action> unsubscriber)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private readonly Action action"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-owner" /><code>{"private readonly Component owner"}</code> |  |
| <Link id="m-path" /><code>{"private string path"}</code> |  |
| <Link id="m-unsubscribe" /><code>{"private readonly Action<Action> unsubscribe"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-invoke" /><code>{"private void Invoke()"}</code> |  |
| <Link id="m-updatepath" /><code>{"private void UpdatePath()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ComponentEventSubscriber`:

[`RecentPlayerElement.friendshipStatusSubscriber`](/game-api/types/global-q-r/recentplayerelement#m-friendshipstatussubscriber).
