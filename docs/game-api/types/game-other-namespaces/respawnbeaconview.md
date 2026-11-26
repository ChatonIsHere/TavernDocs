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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`IRespawnBeaconView`](/game-api/types/game-other-namespaces/irespawnbeaconview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnBeaconView()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beacongraphics" /><code>{"private GameObject beaconGraphics"}</code> | The beacon object toggled on and off. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-init" /><code>{"void Init("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" settings)"}</code> | Does nothing in this build. |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" model)"}</code> | Shows the beacon graphics when the shrine's fuel is above zero. |
