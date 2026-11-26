---
title: "ToggleKinematicLogic"
description: "Small component with methods to turn its rigidbody's isKinematic on or off, for wiring to UnityEvents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleKinematicLogic

A **class** in `Root.Township`, no namespace.

Small component with methods to turn its rigidbody's `isKinematic` on or off, for wiring to UnityEvents.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleKinematicLogic()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | The rigidbody on this object. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kinematicoff" /><code>{"void KinematicOff()"}</code> | Sets the rigidbody non-kinematic, so physics moves it. |
| <Link id="m-kinematicon" /><code>{"void KinematicOn()"}</code> | Sets the rigidbody kinematic. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the rigidbody on the same object. |

</details>

## Used in

Members of other types that take, return or hold a `ToggleKinematicLogic`:

[`StalactiteFall.stalactites`](/game-api/types/global-s/stalactitefall#m-stalactites).
