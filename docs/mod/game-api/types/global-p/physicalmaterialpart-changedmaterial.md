---
title: "PhysicalMaterialPart.ChangedMaterial"
description: "Handler for PhysicalMaterialPart.MaterialChanged, given the new physical material and the channel it changed on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterialPart.ChangedMaterial

A **delegate** in `Root.Township`, the global namespace.

Handler for `PhysicalMaterialPart.MaterialChanged`, given the new physical material and the channel it changed on.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PhysicalMaterialPart`](/mod/game-api/types/global-p/physicalmaterialpart)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChangedMaterial(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ChangedMaterial`:

<div className="api-used-in">

[`PhysicalMaterialPart.MaterialChanged`](/mod/game-api/types/global-p/physicalmaterialpart#m-materialchanged).

</div>
