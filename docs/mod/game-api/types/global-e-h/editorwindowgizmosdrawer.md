---
title: "EditorWindowGizmosDrawer"
description: "Hidden object that lets non-scene code draw gizmos: register a callback and it is run from OnDrawGizmos."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorWindowGizmosDrawer

A **class** in `Root.Township`, the global namespace.

Hidden object that lets non-scene code draw gizmos: register a callback and it is run from `OnDrawGizmos`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorWindowGizmosDrawer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scenedrawer" /><code>{"private static "}<Link to="/mod/game-api/types/global-e-h/editorwindowgizmosdrawer">{"EditorWindowGizmosDrawer"}</Link>{" sceneDrawer"}</code> | The hidden drawer instance. |

</details>

## Events

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gizmoscallback" /><code>{"private static event Action gizmosCallback"}</code> | The registered gizmo callbacks. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregistercallback" /><code>{"static void DeregisterCallback(Action callback)"}</code> | Removes a gizmo callback. |
| <Link id="m-registercallback" /><code>{"static void RegisterCallback(Action callback)"}</code> | Adds a callback once, creating the hidden drawer object if needed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Runs the callbacks, or destroys the drawer object when none are left. |

</details>
