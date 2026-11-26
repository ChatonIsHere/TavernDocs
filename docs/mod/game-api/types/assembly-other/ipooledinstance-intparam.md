---
title: "IPooledInstance<TParam>"
description: "Pooled object that gets one parameter each time it is spawned."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPooledInstance&lt;TParam&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, the global namespace.

Pooled object that gets one parameter each time it is spawned.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IDespawnable`](/mod/game-api/types/assembly-other/idespawnable)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onspawn" /><code>{"void OnSpawn(TParam param)"}</code> | Called with the spawn parameter when the object is taken from the pool. |
