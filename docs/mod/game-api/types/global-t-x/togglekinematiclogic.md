---
title: "ToggleKinematicLogic"
description: "Small component with methods to turn its rigidbody's isKinematic on or off, for wiring to UnityEvents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleKinematicLogic

A **class** in `Root.Township`, the global namespace.

Small component with methods to turn its rigidbody's `isKinematic` on or off, for wiring to UnityEvents.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleKinematicLogic()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">The rigidbody on this object.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kinematicoff" /><code>{"void KinematicOff()"}</code> | <span className="api-desc">Sets the rigidbody non-kinematic, so physics moves it.</span> |
| <Link id="m-kinematicon" /><code>{"void KinematicOn()"}</code> | <span className="api-desc">Sets the rigidbody kinematic.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the rigidbody on the same object.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ToggleKinematicLogic`:

<div className="api-used-in">

[`StalactiteFall.stalactites`](/mod/game-api/types/global-s/stalactitefall#m-stalactites).

</div>
