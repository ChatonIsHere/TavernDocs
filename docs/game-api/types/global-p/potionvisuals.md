---
title: "PotionVisuals"
description: "Client: visuals for a potion bottle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PotionVisuals

A **class** in `Root.Township`, no namespace.

Client: visuals for a potion bottle. Tints and shows the bubbling particles to match its liquid and sets up the splash when it breaks.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PotionVisuals()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakparticlespawner" /><code>{"private "}<Link to="/game-api/types/global-c-d/coloredpooledparticlespawner">{"ColoredPooledParticleSpawner"}</Link>{" breakParticleSpawner"}</code> | Spawns the splash when the potion breaks. |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container"}</code> | The potion's liquid container. |
| <Link id="m-poppingparticles" /><code>{"private "}<Link to="/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" poppingParticles"}</code> | Bubbling particles inside the bottle. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the liquid container, hooks its changes and the break spawner, and hides the bubbles. |
| <Link id="m-liquidchanged" /><code>{"private void LiquidChanged("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | Shows and tints the bubbles and allows the break splash when there is liquid; hides them when empty. |
| <Link id="m-setsplashparticlescontainer" /><code>{"private void SetSplashParticlesContainer("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" obj)"}</code> | Links spawned splash particles to this container. |

</details>
