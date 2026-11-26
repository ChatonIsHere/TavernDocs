---
title: "CameraClaimer"
description: "Client debug helper for scenes without a player: keeps one camera active and lets F3 cycle through every camera with this component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraClaimer

A **class** in `Root.Township`, no namespace.

Client debug helper for scenes without a player: keeps one camera active and lets F3 cycle through every camera with this component. Turns itself off once a `PlayerController` exists or on a headless build.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CameraClaimer()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static readonly List<"}<Link to="/game-api/types/global-c-d/cameraclaimer">{"CameraClaimer"}</Link>{"> all"}</code> | Every `CameraClaimer` that has started. Destroyed ones are removed when F3 is pressed. |
| <Link id="m-checkcamera" /><code>{"private Camera checkCamera"}</code> | The `Camera` on this object. |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/global-c-d/cameraclaimer">{"CameraClaimer"}</Link>{" current"}</code> | The claimer whose camera is active now. |
| <Link id="m-oldcurrent" /><code>{"private static "}<Link to="/game-api/types/global-c-d/cameraclaimer">{"CameraClaimer"}</Link>{" oldCurrent"}</code> | The current claimer as of the last frame, so F3 is ignored the frame the current one changes. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Registers the camera and, if it's enabled, makes it the current one and disables the previous current claimer. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Disables itself when a player controller exists or headless. Otherwise F3 switches to the next registered camera. |

</details>
