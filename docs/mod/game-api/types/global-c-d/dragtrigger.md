---
title: "DragTrigger"
description: "Trigger that builds up a drag offset from a solid collider moving through it, and lets it ease back when nothing touches it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DragTrigger

A **class** in `Root.Township`, the global namespace.

Trigger that builds up a drag offset from a solid collider moving through it, and lets it ease back when nothing touches it. Read `DragPull`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DragTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentdragger" /><code>{"private Collider currentDragger"}</code> | <span className="api-desc">Unused field; `CurrentDragger` is an auto property.</span> |
| <Link id="m-dragupdater" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" dragUpdater"}</code> | <span className="api-desc">The running drag update coroutine.</span> |
| <Link id="m-intersectingcolliders" /><code>{"private HashSet<Collider> intersectingColliders"}</code> | <span className="api-desc">Colliders inside the trigger.</span> |
| <Link id="m-maxdistancedropoff" /><code>{"private float maxDistanceDropoff"}</code> | <span className="api-desc">Exponent that slows the ease back as the pull gets small.</span> |
| <Link id="m-maxdragdistance" /><code>{"private float maxDragDistance"}</code> | <span className="api-desc">Pull size below which easing back slows down.</span> |
| <Link id="m-maxdragspeed" /><code>{"private float maxDragSpeed"}</code> | <span className="api-desc">Most the pull can change per second.</span> |
| <Link id="m-olddraggerposition" /><code>{"private Vector3 oldDraggerPosition"}</code> | <span className="api-desc">Dragger position on the last frame.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dragpull" /><code>{"Vector3 DragPull { get; private set; }"}</code> | <span className="api-desc">Total drag offset built up so far. It eases back to zero when nothing drags.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentdragger-2" /><code>{"private Collider CurrentDragger { get; set; }"}</code> | <span className="api-desc">The collider currently dragging.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the drag update coroutine.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Adds a solid collider that has no `DragTrigger` of its own.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Removes the collider and clears it if it was dragging.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Starts the drag update coroutine.</span> |
| <Link id="m-updatedragpull" /><code>{"private IEnumerator UpdateDragPull() (iterator)"}</code> | <span className="api-desc">Each frame, adds the dragger's movement to `DragPull` (speed capped), or eases it back when none.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DragTrigger`:

<div className="api-used-in">

[`HoverAnimator.HoverAnimationState.DragTrigger`](/mod/game-api/types/global-e-h/hoveranimator-hoveranimationstate#m-dragtrigger).

</div>
