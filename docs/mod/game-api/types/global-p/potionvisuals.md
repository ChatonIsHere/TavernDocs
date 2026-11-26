---
title: "PotionVisuals"
description: "Client: visuals for a potion bottle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PotionVisuals

A **class** in `Root.Township`, the global namespace.

Client: visuals for a potion bottle. Tints and shows the bubbling particles to match its liquid and sets up the splash when it breaks.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PotionVisuals()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakparticlespawner" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/coloredpooledparticlespawner">{"ColoredPooledParticleSpawner"}</Link>{" breakParticleSpawner"}</code> | <span className="api-desc">Spawns the splash when the potion breaks.</span> |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">The potion's liquid container.</span> |
| <Link id="m-poppingparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" poppingParticles"}</code> | <span className="api-desc">Bubbling particles inside the bottle.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the liquid container, hooks its changes and the break spawner, and hides the bubbles.</span> |
| <Link id="m-liquidchanged" /><code>{"private void LiquidChanged("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | <span className="api-desc">Shows and tints the bubbles and allows the break splash when there is liquid; hides them when empty.</span> |
| <Link id="m-setsplashparticlescontainer" /><code>{"private void SetSplashParticlesContainer("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" obj)"}</code> | <span className="api-desc">Links spawned splash particles to this container.</span> |

</details>
