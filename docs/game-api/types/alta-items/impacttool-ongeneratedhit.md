---
title: "ImpactTool.OnGeneratedHit"
description: "Callback for an ImpactTool hit or block, given the hit and the tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTool.OnGeneratedHit

A **delegate** in `Root.Township`, `Alta.Impact`.

Callback for an `ImpactTool` hit or block, given the hit and the tool. Used by `OnHit`, `OnBlocked` and the static `OnHitAny`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`ImpactTool`](/game-api/types/alta-items/impacttool)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnGeneratedHit(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `OnGeneratedHit`:

[`ImpactTool.OnBlocked`](/game-api/types/alta-items/impacttool#m-onblocked), [`ImpactTool.OnHit`](/game-api/types/alta-items/impacttool#m-onhit), [`ImpactTool.OnHitAny`](/game-api/types/alta-items/impacttool#m-onhitany), [`PlayerEventsManager.OnHitWithTool`](/game-api/types/global-p/playereventsmanager#m-onhitwithtool).
