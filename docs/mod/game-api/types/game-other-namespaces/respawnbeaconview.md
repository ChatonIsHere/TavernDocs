---
title: "RespawnBeaconView"
description: "A respawn shrine beacon in the world."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnBeaconView

A **class** in `Root.Township`, `ATT.Respawn`.

A respawn shrine beacon in the world. Shows its graphics while the shrine has fuel.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IRespawnBeaconView`](/mod/game-api/types/game-other-namespaces/irespawnbeaconview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnBeaconView()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beacongraphics" /><code>{"private GameObject beaconGraphics"}</code> | <span className="api-desc">The beacon object toggled on and off.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-init" /><code>{"void Init("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Does nothing in this build.</span> |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" model)"}</code> | <span className="api-desc">Shows the beacon graphics when the shrine's fuel is above zero.</span> |
