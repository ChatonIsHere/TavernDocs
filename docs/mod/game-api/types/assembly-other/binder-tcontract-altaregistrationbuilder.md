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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`Binder<TContract>`](/mod/game-api/types/assembly-other/binder-tcontract)
- **Inherits or implements** `RegistrationBuilder`
- **Nested types** [`InstanceProvider`](/mod/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder-instanceprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaRegistrationBuilder("}<Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> binder)"}</code> | <span className="api-desc">Creates a `Binder` from `binder`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private object instance"}</code> | <span className="api-desc">Instance set by `BindToInstance`, or null.</span> |
| <Link id="m-instanceprovider" /><code>{"private IInstanceProvider instanceProvider"}</code> | <span className="api-desc">Instance provider field. Not used in this class's code.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-binder" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> "}<Link to="/mod/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{" { get; }"}</code> | <span className="api-desc">The binder this builder reads its types and lifetime from.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-build" /><code>{"override Registration Build()"}</code> | <span className="api-desc">Adds any entry point interfaces, makes sure the entry point dispatcher is registered if needed, then builds the registration.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindtoinstance" /><code>{"internal void BindToInstance(object instance)"}</code> | <span className="api-desc">Stores an instance so the registration always returns it.</span> |
| <Link id="m-buildforcontract" /><code>{"private Registration BuildForContract()"}</code> | <span className="api-desc">Builds a normal type registration bound to every contract type.</span> |
| <Link id="m-buildforinstance" /><code>{"private Registration BuildForInstance()"}</code> | <span className="api-desc">Builds a registration whose provider always returns the bound instance.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AltaRegistrationBuilder`:

<div className="api-used-in">

[`Binder<TContract>.RegistrationBuilder`](/mod/game-api/types/assembly-other/binder-tcontract#m-registrationbuilder).

</div>
