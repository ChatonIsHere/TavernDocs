---
title: "Binder<TContract>"
description: "Fluent helper for registering a type in a VContainer container, made by container.Bind<TContract>()."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Binder&lt;TContract&gt;

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Fluent helper for registering a type in a VContainer container, made by `container.Bind<TContract>()`. Registers as a singleton by default and picks up VContainer entry point interfaces (like `ITickable`) by itself.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`Binder`](/mod/game-api/types/assembly-other/binder)
- **Nested types** [`AltaRegistrationBuilder`](/mod/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Binder(IContainerBuilder container)"}</code> | <span className="api-desc">Creates a `Binder` from `container`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultlifetime" /><code>{"private const Lifetime DefaultLifetime"}</code> | <span className="api-desc">Constant: singleton.</span> |

</details>

## Properties

<details className="api-private">
<summary>6 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boundtypes" /><code>{"private List<Type> BoundTypes { get; }"}</code> | <span className="api-desc">The contract types the result is registered as. Starts with `TContract`.</span> |
| <Link id="m-container" /><code>{"private IContainerBuilder Container { get; }"}</code> | <span className="api-desc">The container builder this binder registers into.</span> |
| <Link id="m-hasentrypoints" /><code>{"private bool HasEntryPoints { get; set; }"}</code> | <span className="api-desc">Set when the result or a bound type is a VContainer entry point, so the entry point dispatcher gets registered.</span> |
| <Link id="m-lifetime" /><code>{"private Lifetime Lifetime { get; set; }"}</code> | <span className="api-desc">The lifetime the registration uses.</span> |
| <Link id="m-registrationbuilder" /><code>{"internal "}<Link to="/mod/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder">{"Binder"}</Link>{"<TContract> RegistrationBuilder { get; }"}</code> | <span className="api-desc">The builder registered with the container. It builds the final registration from this binder's settings.</span> |
| <Link id="m-resulttype" /><code>{"private Type ResultType { get; set; }"}</code> | <span className="api-desc">The concrete type resolved for the contract, set by `To`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-and" /><code><Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> And<TAdditionalContract>()"}</code> | <span className="api-desc">Also registers the result under another contract type.</span> |
| <Link id="m-asscoped" /><code><Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsScoped()"}</code> | <span className="api-desc">Registers with scoped lifetime.</span> |
| <Link id="m-assingleton" /><code><Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsSingleton()"}</code> | <span className="api-desc">Registers with singleton lifetime (the default).</span> |
| <Link id="m-astransient" /><code><Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsTransient()"}</code> | <span className="api-desc">Registers with transient lifetime, a new instance each time it is resolved.</span> |
| <Link id="m-to" /><code><Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> To<TResult>()"}</code> | <span className="api-desc">Sets the concrete type to resolve. The overload taking an instance registers that existing object instead.</span> |
| <Link id="m-to-2" /><code><Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> To<TResult>(TResult instance)"}</code> | <span className="api-desc">Sets the concrete type to resolve. The overload taking an instance registers that existing object instead.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindtotype" /><code>{"private void BindToType(Type type)"}</code> | <span className="api-desc">Adds a contract type to the bound types if it isn't there yet.</span> |
| <Link id="m-registeranyvalidentrypoints" /><code>{"private void RegisterAnyValidEntryPoints()"}</code> | <span className="api-desc">Checks the result type and bound types for entry point interfaces and binds any it finds. Called when the registration is built.</span> |
| <Link id="m-registerentrypointintype" /><code>{"private void RegisterEntryPointInType(Type type)"}</code> | <span className="api-desc">Binds any VContainer entry point interfaces a type implements, and notes that entry points exist.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Binder&lt;TContract>`:

<div className="api-used-in">

[`Binder<TContract>.AltaRegistrationBuilder.AltaRegistrationBuilder`](/mod/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder#m-ctor), [`Binder<TContract>.AltaRegistrationBuilder.Binder`](/mod/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder#m-binder), [`ContainerBuilderExtensions.Bind`](/mod/game-api/types/assembly-other/containerbuilderextensions#m-bind).

</div>
