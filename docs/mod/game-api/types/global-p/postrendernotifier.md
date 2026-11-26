---
title: "PostRenderNotifier"
description: "Client: on cameras."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostRenderNotifier

A **class** in `Root.Township`, the global namespace.

Client: on cameras. Raises a static event once every active camera with this component has finished rendering for the frame.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostRenderNotifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameracount" /><code>{"private static int cameraCount"}</code> | <span className="api-desc">Static count of cameras still to render this frame.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"Camera Camera { get; private set; }"}</code> | <span className="api-desc">The camera on this object.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-renderfinished" /><code>{"static event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" RenderFinished"}</code> | <span className="api-desc">Static event raised after the last counted camera renders.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores the camera on this object.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Counts this camera if it is active.</span> |
| <Link id="m-onpostrender" /><code>{"private void OnPostRender()"}</code> | <span className="api-desc">Counts this camera as done, and raises `RenderFinished` when all are done.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Resets the camera count for the frame.</span> |

</details>
