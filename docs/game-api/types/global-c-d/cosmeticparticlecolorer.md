---
title: "CosmeticParticleColorer"
description: "Colours a child ColoredParticleSystem with a cosmetic colour's first colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticParticleColorer

A **class** in `Root.Township`, no namespace.

Colours a child `ColoredParticleSystem` with a cosmetic colour's first colour.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CosmeticParticleColorer()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particlesystemwithcolor" /><code>{"private "}<Link to="/game-api/types/global-c-d/coloredparticlesystem">{"ColoredParticleSystem"}</Link>{" particleSystemWithColor"}</code> | The particle system coloured. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcolor" /><code>{"void SetColor("}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color)"}</code> | Sets the particle colour to the cosmetic colour's `Color1`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build bake step: finds the `ColoredParticleSystem` in the children. |

</details>
