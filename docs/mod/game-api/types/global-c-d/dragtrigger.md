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
| <Link id="m-ctor" /><code>{"DragTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentdragger" /><code>{"private Collider currentDragger"}</code> | Unused field; `CurrentDragger` is an auto property. |
| <Link id="m-dragupdater" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" dragUpdater"}</code> | The running drag update coroutine. |
| <Link id="m-intersectingcolliders" /><code>{"private HashSet<Collider> intersectingColliders"}</code> | Colliders inside the trigger. |
| <Link id="m-maxdistancedropoff" /><code>{"private float maxDistanceDropoff"}</code> | Exponent that slows the ease back as the pull gets small. |
| <Link id="m-maxdragdistance" /><code>{"private float maxDragDistance"}</code> | Pull size below which easing back slows down. |
| <Link id="m-maxdragspeed" /><code>{"private float maxDragSpeed"}</code> | Most the pull can change per second. |
| <Link id="m-olddraggerposition" /><code>{"private Vector3 oldDraggerPosition"}</code> | Dragger position on the last frame. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dragpull" /><code>{"Vector3 DragPull { get; private set; }"}</code> | Total drag offset built up so far. It eases back to zero when nothing drags. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentdragger-2" /><code>{"private Collider CurrentDragger { get; set; }"}</code> | The collider currently dragging. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the drag update coroutine. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Adds a solid collider that has no `DragTrigger` of its own. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Removes the collider and clears it if it was dragging. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Starts the drag update coroutine. |
| <Link id="m-updatedragpull" /><code>{"private IEnumerator UpdateDragPull() (iterator)"}</code> | Each frame, adds the dragger's movement to `DragPull` (speed capped), or eases it back when none. |

</details>

## Used in

Members of other types that take, return or hold a `DragTrigger`:

[`HoverAnimator.HoverAnimationState.DragTrigger`](/mod/game-api/types/global-e-h/hoveranimator-hoveranimationstate#m-dragtrigger).
