---
title: "StalactiteFall"
description: "Drops stalactites one at a time: each call frees a random one that hasn't fallen yet."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StalactiteFall

A **class** in `Root.Township`, the global namespace.

Drops stalactites one at a time: each call frees a random one that hasn't fallen yet.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StalactiteFall()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stalactites" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/togglekinematiclogic">{"ToggleKinematicLogic"}</Link>{"[] stalactites"}</code> | <span className="api-desc">The stalactites, each with a kinematic toggle.</span> |
| <Link id="m-triggeredvalues" /><code>{"private bool[] triggeredValues"}</code> | <span className="api-desc">Which stalactites have dropped.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendonetrue" /><code>{"void SendOneTrue()"}</code> | <span className="api-desc">Turns off kinematic on a random undropped stalactite, or logs if all have dropped.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alltriggered" /><code>{"private bool AllTriggered()"}</code> | <span className="api-desc">True once every stalactite has dropped.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets up the dropped flags.</span> |

</details>
