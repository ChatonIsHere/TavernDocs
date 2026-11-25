---
title: "Binder<TContract>"
description: "class Binder<TContract> in Alta.LifetimeScopes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Binder&lt;TContract&gt;

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

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

| Member |
| --- |
| <Link id="m-defaultlifetime" /><code>{"private const Lifetime DefaultLifetime"}</code> |

</details>

## Properties

<details>
<summary>6 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-boundtypes" /><code>{"private List<Type> BoundTypes { get; }"}</code> |
| <Link id="m-container" /><code>{"private IContainerBuilder Container { get; }"}</code> |
| <Link id="m-hasentrypoints" /><code>{"private bool HasEntryPoints { get; set; }"}</code> |
| <Link id="m-lifetime" /><code>{"private Lifetime Lifetime { get; set; }"}</code> |
| <Link id="m-registrationbuilder" /><code>{"internal "}<Link to="/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder">{"Binder"}</Link>{"<TContract> RegistrationBuilder { get; }"}</code> |
| <Link id="m-resulttype" /><code>{"private Type ResultType { get; set; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-and" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> And<TAdditionalContract>()"}</code> |
| <Link id="m-asscoped" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsScoped()"}</code> |
| <Link id="m-assingleton" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsSingleton()"}</code> |
| <Link id="m-astransient" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> AsTransient()"}</code> |
| <Link id="m-to" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> To<TResult>()"}</code> |
| <Link id="m-to-2" /><code><Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> To<TResult>(TResult instance)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-bindtotype" /><code>{"private void BindToType(Type type)"}</code> |
| <Link id="m-registeranyvalidentrypoints" /><code>{"private void RegisterAnyValidEntryPoints()"}</code> |
| <Link id="m-registerentrypointintype" /><code>{"private void RegisterEntryPointInType(Type type)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Binder&lt;TContract>`:

[`Binder<TContract>.AltaRegistrationBuilder.AltaRegistrationBuilder`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder#m-ctor), [`Binder<TContract>.AltaRegistrationBuilder.Binder`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder#m-binder), [`ContainerBuilderExtensions.Bind`](/game-api/types/assembly-other/containerbuilderextensions#m-bind).
