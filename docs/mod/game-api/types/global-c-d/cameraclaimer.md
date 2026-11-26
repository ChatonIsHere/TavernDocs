---
title: "CameraClaimer"
description: "Client debug helper for scenes without a player: keeps one camera active and lets F3 cycle through every camera with this component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraClaimer

A **class** in `Root.Township`, the global namespace.

Client debug helper for scenes without a player: keeps one camera active and lets F3 cycle through every camera with this component. Turns itself off once a `PlayerController` exists or on a headless build.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraClaimer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static readonly List<"}<Link to="/mod/game-api/types/global-c-d/cameraclaimer">{"CameraClaimer"}</Link>{"> all"}</code> | <span className="api-desc">Every `CameraClaimer` that has started. Destroyed ones are removed when F3 is pressed.</span> |
| <Link id="m-checkcamera" /><code>{"private Camera checkCamera"}</code> | <span className="api-desc">The `Camera` on this object.</span> |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/global-c-d/cameraclaimer">{"CameraClaimer"}</Link>{" current"}</code> | <span className="api-desc">The claimer whose camera is active now.</span> |
| <Link id="m-oldcurrent" /><code>{"private static "}<Link to="/mod/game-api/types/global-c-d/cameraclaimer">{"CameraClaimer"}</Link>{" oldCurrent"}</code> | <span className="api-desc">The current claimer as of the last frame, so F3 is ignored the frame the current one changes.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Registers the camera and, if it's enabled, makes it the current one and disables the previous current claimer.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Disables itself when a player controller exists or headless. Otherwise F3 switches to the next registered camera.</span> |

</details>
