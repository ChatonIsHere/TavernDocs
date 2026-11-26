---
title: "IFactoryAsyncPooled<TInterface>"
description: "Async factory that reuses instances from a pool, with no spawn parameters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFactoryAsyncPooled&lt;TInterface&gt;

An **interface** in `Alta.VContainerLayer.Runtime`, no namespace.

Async factory that reuses instances from a pool, with no spawn parameters.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/game-api/types/assembly-other/ifactory), `IDisposable`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-despawn" /><code>{"void Despawn(TInterface instance)"}</code> | Returns the instance to the pool. |
| <Link id="m-spawn" /><code>{"Task<TInterface> Spawn()"}</code> | Gets an instance from the pool, or makes one, and returns it when ready. |
