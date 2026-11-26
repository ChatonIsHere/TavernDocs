---
title: "PhysicalMaterialPart.ChangedMaterial"
description: "Handler for PhysicalMaterialPart.MaterialChanged, given the new physical material and the channel it changed on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterialPart.ChangedMaterial

A **delegate** in `Root.Township`, no namespace.

Handler for `PhysicalMaterialPart.MaterialChanged`, given the new physical material and the channel it changed on.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChangedMaterial(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> |

## Used in

Members of other types that take, return or hold a `ChangedMaterial`:

[`PhysicalMaterialPart.MaterialChanged`](/game-api/types/global-p/physicalmaterialpart#m-materialchanged).
