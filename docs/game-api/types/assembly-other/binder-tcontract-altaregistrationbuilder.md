---
title: "Binder<TContract>.AltaRegistrationBuilder"
description: "class Binder<TContract>.AltaRegistrationBuilder in Alta.LifetimeScopes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Binder&lt;TContract&gt;.AltaRegistrationBuilder

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

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

| Member |
| --- |
| <Link id="m-instance" /><code>{"private object instance"}</code> |
| <Link id="m-instanceprovider" /><code>{"private IInstanceProvider instanceProvider"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-binder" /><code>{"private "}<Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{"<TContract> "}<Link to="/game-api/types/assembly-other/binder-tcontract">{"Binder"}</Link>{" { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-build" /><code>{"override Registration Build()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-bindtoinstance" /><code>{"internal void BindToInstance(object instance)"}</code> |
| <Link id="m-buildforcontract" /><code>{"private Registration BuildForContract()"}</code> |
| <Link id="m-buildforinstance" /><code>{"private Registration BuildForInstance()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AltaRegistrationBuilder`:

[`Binder<TContract>.RegistrationBuilder`](/game-api/types/assembly-other/binder-tcontract#m-registrationbuilder).
