---
title: "TextRendererBackground"
description: "Adds a quad behind a TextRenderer sized to its text plus a margin, and keeps it fitted when the text changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextRendererBackground

A **class** in `Root.Township`, the global namespace.

Adds a quad behind a `TextRenderer` sized to its text plus a margin, and keeps it fitted when the text changes. Not set up on headless servers.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextRendererBackground()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | <span className="api-desc">Material meant for Android; the code here only uses `pcMaterial`.</span> |
| <Link id="m-margin" /><code>{"private Vector2 margin"}</code> | <span className="api-desc">Extra width and height around the text.</span> |
| <Link id="m-mesh" /><code>{"private static Mesh mesh"}</code> | <span className="api-desc">Shared quad mesh used by every background.</span> |
| <Link id="m-pcmaterial" /><code>{"private Material pcMaterial"}</code> | <span className="api-desc">Material on the background quad.</span> |
| <Link id="m-renderertransform" /><code>{"private Transform rendererTransform"}</code> | <span className="api-desc">Transform of the created background object.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">The text renderer to fit.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to the text renderer's text updates (not on headless).</span> |
| <Link id="m-updatebackground" /><code>{"private void UpdateBackground()"}</code> | <span className="api-desc">Creates the background quad if needed, then scales and centres it on the current text.</span> |

</details>
