---
title: "IDespawnable"
description: "An object a pooled factory can return to its pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDespawnable

An **interface** in `Alta.VContainerLayer.Runtime`, no namespace.

An object a pooled factory can return to its pool.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`IPooledInstance`](/game-api/types/assembly-other/ipooledinstance), [`IPooledInstance<TParam1, TParam2, TParam3>`](/game-api/types/assembly-other/ipooledinstance-intparam1-intparam2-intparam3), [`IPooledInstance<TParam1, TParam2>`](/game-api/types/assembly-other/ipooledinstance-intparam1-intparam2), [`IPooledInstance<TParam>`](/game-api/types/assembly-other/ipooledinstance-intparam)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondespawn" /><code>{"void OnDespawn()"}</code> | Called by the pooled factory when the object goes back to the pool. |
