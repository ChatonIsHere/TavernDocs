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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`ImpactTool`](/mod/game-api/types/alta-items/impacttool)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnGeneratedHit(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `OnGeneratedHit`:

<div className="api-used-in">

[`ImpactTool.OnBlocked`](/mod/game-api/types/alta-items/impacttool#m-onblocked), [`ImpactTool.OnHit`](/mod/game-api/types/alta-items/impacttool#m-onhit), [`ImpactTool.OnHitAny`](/mod/game-api/types/alta-items/impacttool#m-onhitany), [`PlayerEventsManager.OnHitWithTool`](/mod/game-api/types/global-p/playereventsmanager#m-onhitwithtool).

</div>
