---
title: "StatHandler"
description: "Callback that gets a Stat, used for stat change events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatHandler

A **delegate** in `Root.Township`, `Alta.StatSystem`.

Callback that gets a `Stat`, used for stat change events.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `StatHandler`:

[`Stat.Bind`](/game-api/types/alta-stats-effects/stat#m-bind), [`Stat.Changed`](/game-api/types/alta-stats-effects/stat#m-changed), [`Stat.ChangedExternal`](/game-api/types/alta-stats-effects/stat#m-changedexternal), [`Stat.DefinitionEvent`](/game-api/types/alta-stats-effects/stat#m-definitionevent), [`Stat.NetworkChanged`](/game-api/types/alta-stats-effects/stat#m-networkchanged).
