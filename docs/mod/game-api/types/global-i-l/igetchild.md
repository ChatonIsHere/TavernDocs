---
title: "IGetChild"
description: "Told by BuildupChild when it gains or loses its child entity, for example DisposablePickupHolder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGetChild

An **interface** in `Root.Township`, the global namespace.

Told by `BuildupChild` when it gains or loses its child entity, for example `DisposablePickupHolder`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`DisposablePickupHolder`](/mod/game-api/types/global-c-d/disposablepickupholder)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-losechild" /><code>{"void LoseChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | <span className="api-desc">Called when the child entity is removed.</span> |
| <Link id="m-registerchild" /><code>{"void RegisterChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | <span className="api-desc">Called when a child entity is attached.</span> |
