---
title: "DragTrigger"
description: "class DragTrigger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DragTrigger

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DragTrigger()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentdragger" /><code>{"private Collider currentDragger"}</code> |  |
| <Link id="m-dragupdater" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" dragUpdater"}</code> |  |
| <Link id="m-intersectingcolliders" /><code>{"private HashSet<Collider> intersectingColliders"}</code> |  |
| <Link id="m-maxdistancedropoff" /><code>{"private float maxDistanceDropoff"}</code> |  |
| <Link id="m-maxdragdistance" /><code>{"private float maxDragDistance"}</code> |  |
| <Link id="m-maxdragspeed" /><code>{"private float maxDragSpeed"}</code> |  |
| <Link id="m-olddraggerposition" /><code>{"private Vector3 oldDraggerPosition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dragpull" /><code>{"Vector3 DragPull { get; private set; }"}</code> |  |
| <Link id="m-currentdragger-2" /><code>{"private Collider CurrentDragger { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-updatedragpull" /><code>{"private IEnumerator UpdateDragPull() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DragTrigger`:

[`HoverAnimator.HoverAnimationState.DragTrigger`](/game-api/types/global-e-h/hoveranimator-hoveranimationstate#m-dragtrigger).
