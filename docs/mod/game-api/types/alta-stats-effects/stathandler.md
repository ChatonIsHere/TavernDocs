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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `StatHandler`:

<div className="api-used-in">

[`Stat.Bind`](/mod/game-api/types/alta-stats-effects/stat#m-bind), [`Stat.Changed`](/mod/game-api/types/alta-stats-effects/stat#m-changed), [`Stat.ChangedExternal`](/mod/game-api/types/alta-stats-effects/stat#m-changedexternal), [`Stat.DefinitionEvent`](/mod/game-api/types/alta-stats-effects/stat#m-definitionevent), [`Stat.NetworkChanged`](/mod/game-api/types/alta-stats-effects/stat#m-networkchanged).

</div>
