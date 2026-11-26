---
title: "Binder<TContract>.AltaRegistrationBuilder.InstanceProvider"
description: "VContainer instance provider that always returns one fixed object, used when a binding is made to an existing instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Binder&lt;TContract&gt;.AltaRegistrationBuilder.InstanceProvider

A **private class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

VContainer instance provider that always returns one fixed object, used when a binding is made to an existing instance.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`Binder<TContract>.AltaRegistrationBuilder`](/mod/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder)
- **Inherits or implements** `IInstanceProvider`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstanceProvider(object instance)"}</code> | Creates a `Binder` from `instance`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private readonly object instance"}</code> | The object handed out. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawninstance" /><code>{"object SpawnInstance(IObjectResolver resolver)"}</code> | Returns the stored instance. |
