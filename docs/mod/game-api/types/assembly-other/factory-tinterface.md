---
title: "Factory<TInterface>"
description: "Synchronous factory with no parameters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Factory&lt;TInterface&gt;

An **abstract class** in `Alta.VContainerLayer.Runtime`, the global namespace.

Synchronous factory with no parameters. Subclasses build the object in `CreateInstance`; `Create` then injects it and tracks it for disposal.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Factory`](/mod/game-api/types/assembly-other/factory), [`IFactory<TInterface>`](/mod/game-api/types/assembly-other/ifactory-outtinstance), [`IFactory`](/mod/game-api/types/assembly-other/ifactory-outtinstance), `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Factory()"}</code> | Creates a `Factory` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"virtual TInterface Create()"}</code> | Calls `CreateInstance`, injects the result through the container, registers it for disposal and returns it. |
| <Link id="m-createinstance" /><code>{"protected abstract TInterface CreateInstance()"}</code> | Abstract. Builds the raw instance; implemented by each concrete factory. |
