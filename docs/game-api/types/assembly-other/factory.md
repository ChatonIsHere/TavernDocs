---
title: "Factory"
description: "Base for the VContainer factories."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Factory

An **abstract class** in `Alta.VContainerLayer.Runtime`, no namespace.

Base for the VContainer factories. Holds the injected container and a disposer, and disposes everything it created when it is disposed.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFactory`](/game-api/types/assembly-other/ifactory), `IDisposable`
- **Derived types** [`Factory<TInterface>`](/game-api/types/assembly-other/factory-tinterface), [`Factory<TParam, TInterface>`](/game-api/types/assembly-other/factory-tparam-tinterface), [`Factory<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tinterface), [`Factory<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tparam3-tinterface), [`FactoryAsync`](/game-api/types/assembly-other/factoryasync), [`FactoryAsyncPooled<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tconcrete-tinterface)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Factory()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"protected IObjectResolver container"}</code> | The injected VContainer resolver, used to inject or instantiate what the factory creates. |
| <Link id="m-disposer" /><code>{"protected "}<Link to="/game-api/types/assembly-other/idisposer">{"IDisposer"}</Link>{" disposer"}</code> | Injected disposer that collects created instances to dispose with the factory. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"virtual void Dispose()"}</code> | Disposes every `IDisposable` instance this factory created, through the disposer. |
| <Link id="m-tryadddisposable" /><code>{"protected void TryAddDisposable<TInstance>(TInstance instance)"}</code> | Adds the instance to the disposer if it implements `IDisposable`, so the factory's `Dispose` cleans it up. |
