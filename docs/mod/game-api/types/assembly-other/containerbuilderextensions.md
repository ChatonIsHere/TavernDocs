---
title: "ContainerBuilderExtensions"
description: "Extension methods on VContainer's IContainerBuilder used by the game's installers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ContainerBuilderExtensions

A **static class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Extension methods on VContainer's `IContainerBuilder` used by the game's installers.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bind" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> Bind<TContract>(IContainerBuilder container)"}</code> | <span className="api-desc">Starts a fluent `Binder<TContract>` and registers it with the builder. Bindings are singletons by default.</span> |
| <Link id="m-injectandisolate" /><code>{"static void InjectAndIsolate<TContract>(IContainerBuilder container)"}</code> | <span className="api-desc">Registers the type as a VContainer entry point.</span> |
