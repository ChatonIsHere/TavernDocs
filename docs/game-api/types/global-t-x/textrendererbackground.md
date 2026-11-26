---
title: "TextRendererBackground"
description: "Adds a quad behind a TextRenderer sized to its text plus a margin, and keeps it fitted when the text changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextRendererBackground

A **class** in `Root.Township`, no namespace.

Adds a quad behind a `TextRenderer` sized to its text plus a margin, and keeps it fitted when the text changes. Not set up on headless servers.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TextRendererBackground()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | Material meant for Android; the code here only uses `pcMaterial`. |
| <Link id="m-margin" /><code>{"private Vector2 margin"}</code> | Extra width and height around the text. |
| <Link id="m-mesh" /><code>{"private static Mesh mesh"}</code> | Shared quad mesh used by every background. |
| <Link id="m-pcmaterial" /><code>{"private Material pcMaterial"}</code> | Material on the background quad. |
| <Link id="m-renderertransform" /><code>{"private Transform rendererTransform"}</code> | Transform of the created background object. |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | The text renderer to fit. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to the text renderer's text updates (not on headless). |
| <Link id="m-updatebackground" /><code>{"private void UpdateBackground()"}</code> | Creates the background quad if needed, then scales and centres it on the current text. |

</details>
