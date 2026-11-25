---
title: "ViewCone"
description: "A cone along the object's forward axis, used by AI to check whether a point is in view."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ViewCone

A **class** in `Root.Township`, no namespace.

A cone along the object's forward axis, used by AI to check whether a point is in view.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ViewCone()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angle" /><code>{"private float angle"}</code> |  |
| <Link id="m-angledot" /><code>{"private float angleDot"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | When false, `Contains` always returns false. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(Vector3 point, out float ratio)"}</code> | Whether a point is inside the cone. `ratio` is 0 at the centre and 1 at the edge. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ViewCone`:

[`ActiveFaceTarget.viewCone`](/game-api/types/alta-intelligence/activefacetarget#m-viewcone), [`Babu.viewCone`](/game-api/types/alta-intelligence/babu#m-viewcone), [`Babu.ViewCone`](/game-api/types/alta-intelligence/babu#m-viewcone-2), [`Dragonfly.viewCone`](/game-api/types/alta-intelligence/dragonfly#m-viewcone), [`Dragonfly.ViewCone`](/game-api/types/alta-intelligence/dragonfly#m-viewcone-2), [`Gotera.viewCone`](/game-api/types/alta-intelligence/gotera#m-viewcone), [`Gotera.ViewCone`](/game-api/types/alta-intelligence/gotera#m-viewcone-2), [`IHasViewCone.ViewCone`](/game-api/types/alta-intelligence/ihasviewcone#m-viewcone), [`Phantom.Alta.Intelligence.IHasViewCone.ViewCone`](/game-api/types/alta-intelligence/phantom#m-alta-intelligence-ihasviewcone-viewcone), [`Phantom.viewCone`](/game-api/types/alta-intelligence/phantom#m-viewcone), [`Turabada.viewCone`](/game-api/types/alta-intelligence/turabada#m-viewcone), [`Turabada.ViewCone`](/game-api/types/alta-intelligence/turabada#m-viewcone-2).
