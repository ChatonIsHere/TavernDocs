---
title: "CosmeticParticleColorer"
description: "Colours a child ColoredParticleSystem with a cosmetic colour's first colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticParticleColorer

A **class** in `Root.Township`, the global namespace.

Colours a child `ColoredParticleSystem` with a cosmetic colour's first colour.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticParticleColorer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particlesystemwithcolor" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" particleSystemWithColor"}</code> | <span className="api-desc">The particle system coloured.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcolor" /><code>{"void SetColor("}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color)"}</code> | <span className="api-desc">Sets the particle colour to the cosmetic colour's `Color1`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build bake step: finds the `ColoredParticleSystem` in the children.</span> |

</details>
