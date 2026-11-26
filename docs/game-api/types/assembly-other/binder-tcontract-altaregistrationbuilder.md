---
title: "Binder<TContract>.AltaRegistrationBuilder"
description: "VContainer registration builder used by Binder<TContract>."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Binder&lt;TContract&gt;.AltaRegistrationBuilder

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

VContainer registration builder used by `Binder<TContract>`. Builds the registration from the binder's types and lifetime, or from a bound instance.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`Binder<TContract>`](/game-api/types/assembly-other/binder-tcontract)
- **Inherits or implements** `RegistrationBuilder`
- **Nested types** [`InstanceProvider`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder-instanceprovider)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaRegistrationBuilder("}<Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> binder)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private object instance"}</code> | Instance set by `BindToInstance`, or null. |
| <Link id="m-instanceprovider" /><code>{"private IInstanceProvider instanceProvider"}</code> | Instance provider field. Not used in this class's code. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-binder" /><code>{"private "}<Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> "}<Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{" { get; }"}</code> | The binder this builder reads its types and lifetime from. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-build" /><code>{"override Registration Build()"}</code> | Adds any entry point interfaces, makes sure the entry point dispatcher is registered if needed, then builds the registration. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindtoinstance" /><code>{"internal void BindToInstance(object instance)"}</code> | Stores an instance so the registration always returns it. |
| <Link id="m-buildforcontract" /><code>{"private Registration BuildForContract()"}</code> | Builds a normal type registration bound to every contract type. |
| <Link id="m-buildforinstance" /><code>{"private Registration BuildForInstance()"}</code> | Builds a registration whose provider always returns the bound instance. |

</details>

## Used in

Members of other types that take, return or hold a `AltaRegistrationBuilder`:

[`Binder<TContract>.RegistrationBuilder`](/game-api/types/assembly-other/binder-tcontract#m-registrationbuilder).
