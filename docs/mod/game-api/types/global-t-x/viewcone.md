---
title: "ViewCone"
description: "A cone along the object's forward axis, used by AI to check whether a point is in view."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ViewCone

A **class** in `Root.Township`, the global namespace.

A cone along the object's forward axis, used by AI to check whether a point is in view.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ViewCone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angle" /><code>{"private float angle"}</code> | <span className="api-desc">Half-angle of the cone in degrees, from its forward axis (90 by default).</span> |
| <Link id="m-angledot" /><code>{"private float angleDot"}</code> | <span className="api-desc">Cosine of `angle`, set in `OnValidate`, used as a quick reject in `Contains`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">When false, `Contains` always returns false.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(Vector3 point, out float ratio)"}</code> | <span className="api-desc">Whether a point is inside the cone. `ratio` is 0 at the centre and 1 at the edge.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws lines around the cone's edge.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Updates `angleDot` to the cosine of `angle`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ViewCone`:

<div className="api-used-in">

[`ActiveFaceTarget.viewCone`](/mod/game-api/types/alta-intelligence/activefacetarget#m-viewcone), [`Babu.viewCone`](/mod/game-api/types/alta-intelligence/babu#m-viewcone), [`Babu.ViewCone`](/mod/game-api/types/alta-intelligence/babu#m-viewcone-2), [`Dragonfly.viewCone`](/mod/game-api/types/alta-intelligence/dragonfly#m-viewcone), [`Dragonfly.ViewCone`](/mod/game-api/types/alta-intelligence/dragonfly#m-viewcone-2), [`Gotera.viewCone`](/mod/game-api/types/alta-intelligence/gotera#m-viewcone), [`Gotera.ViewCone`](/mod/game-api/types/alta-intelligence/gotera#m-viewcone-2), [`IHasViewCone.ViewCone`](/mod/game-api/types/alta-intelligence/ihasviewcone#m-viewcone), [`Phantom.Alta.Intelligence.IHasViewCone.ViewCone`](/mod/game-api/types/alta-intelligence/phantom#m-alta-intelligence-ihasviewcone-viewcone), [`Phantom.viewCone`](/mod/game-api/types/alta-intelligence/phantom#m-viewcone), [`Turabada.viewCone`](/mod/game-api/types/alta-intelligence/turabada#m-viewcone), [`Turabada.ViewCone`](/mod/game-api/types/alta-intelligence/turabada#m-viewcone-2).

</div>
