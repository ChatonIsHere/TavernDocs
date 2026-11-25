---
title: "ImpactTool.OnGeneratedHit"
description: "delegate ImpactTool.OnGeneratedHit in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactTool.OnGeneratedHit

A **delegate** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`ImpactTool`](/game-api/types/alta-items/impacttool)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OnGeneratedHit(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |

## Used in

Members of other types that take, return or hold a `OnGeneratedHit`:

[`ImpactTool.OnBlocked`](/game-api/types/alta-items/impacttool#m-onblocked), [`ImpactTool.OnHit`](/game-api/types/alta-items/impacttool#m-onhit), [`ImpactTool.OnHitAny`](/game-api/types/alta-items/impacttool#m-onhitany), [`PlayerEventsManager.OnHitWithTool`](/game-api/types/global-p/playereventsmanager#m-onhitwithtool).
