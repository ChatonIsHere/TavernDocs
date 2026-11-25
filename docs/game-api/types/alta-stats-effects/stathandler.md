---
title: "StatHandler"
description: "delegate StatHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatHandler

A **delegate** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |

## Used in

Members of other types that take, return or hold a `StatHandler`:

[`Stat.Bind`](/game-api/types/alta-stats-effects/stat#m-bind), [`Stat.Changed`](/game-api/types/alta-stats-effects/stat#m-changed), [`Stat.ChangedExternal`](/game-api/types/alta-stats-effects/stat#m-changedexternal), [`Stat.DefinitionEvent`](/game-api/types/alta-stats-effects/stat#m-definitionevent), [`Stat.NetworkChanged`](/game-api/types/alta-stats-effects/stat#m-networkchanged).
