---
title: "WoodcutPooledObject"
description: "Pooled woodcutting particle effect that destroys itself after a time and takes on a tree species' wood material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutPooledObject

A **class** in `Root.Township`, no namespace.

Pooled woodcutting particle effect that destroys itself after a time and takes on a tree species' wood material.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`DestroyByTime`](/game-api/types/global-c-d/destroybytime)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutPooledObject()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particles" /><code>{"private ParticleSystemRenderer[] particles"}</code> | The particle renderers that get the species material. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setspecies" /><code>{"void SetSpecies("}<Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species)"}</code> | Sets every particle renderer to the species' non-atlased, non-deforming wood material (channel A). |
