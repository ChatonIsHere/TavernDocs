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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`Binder`](/game-api/types/assembly-other/binder)
- **Nested types** [`AltaRegistrationBuilder`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Binder(IContainerBuilder container)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultlifetime" /><code>{"private const Lifetime DefaultLifetime"}</code> | Constant: singleton. |

</details>

## Properties

<details>
<summary>6 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boundtypes" /><code>{"private List<Type> BoundTypes { get; }"}</code> | The contract types the result is registered as. Starts with `TContract`. |
| <Link id="m-container" /><code>{"private IContainerBuilder Container { get; }"}</code> | The container builder this binder registers into. |
| <Link id="m-hasentrypoints" /><code>{"private bool HasEntryPoints { get; set; }"}</code> | Set when the result or a bound type is a VContainer entry point, so the entry point dispatcher gets registered. |
| <Link id="m-lifetime" /><code>{"private Lifetime Lifetime { get; set; }"}</code> | The lifetime the registration uses. |
| <Link id="m-registrationbuilder" /><code>{"internal "}<Link to="/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder">{"Binder"}</Link>{"<TContract> RegistrationBuilder { get; }"}</code> | The builder registered with the container. It builds the final registration from this binder's settings. |
| <Link id="m-resulttype" /><code>{"private Type ResultType { get; set; }"}</code> | The concrete type resolved for the contract, set by `To`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-and" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> And<TAdditionalContract>()"}</code> | Also registers the result under another contract type. |
| <Link id="m-asscoped" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsScoped()"}</code> | Registers with scoped lifetime. |
| <Link id="m-assingleton" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsSingleton()"}</code> | Registers with singleton lifetime (the default). |
| <Link id="m-astransient" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsTransient()"}</code> | Registers with transient lifetime, a new instance each time it is resolved. |
| <Link id="m-to" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> To<TResult>()"}</code> | Sets the concrete type to resolve. The overload taking an instance registers that existing object instead. |
| <Link id="m-to-2" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> To<TResult>(TResult instance)"}</code> | Sets the concrete type to resolve. The overload taking an instance registers that existing object instead. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindtotype" /><code>{"private void BindToType(Type type)"}</code> | Adds a contract type to the bound types if it isn't there yet. |
| <Link id="m-registeranyvalidentrypoints" /><code>{"private void RegisterAnyValidEntryPoints()"}</code> | Checks the result type and bound types for entry point interfaces and binds any it finds. Called when the registration is built. |
| <Link id="m-registerentrypointintype" /><code>{"private void RegisterEntryPointInType(Type type)"}</code> | Binds any VContainer entry point interfaces a type implements, and notes that entry points exist. |

</details>

## Used in

Members of other types that take, return or hold a `Binder&lt;TContract>`:

[`Binder<TContract>.AltaRegistrationBuilder.AltaRegistrationBuilder`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder#m-ctor), [`Binder<TContract>.AltaRegistrationBuilder.Binder`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder#m-binder), [`ContainerBuilderExtensions.Bind`](/game-api/types/assembly-other/containerbuilderextensions#m-bind).
