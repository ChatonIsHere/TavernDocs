---
title: "SyncedColor"
description: "Network entity behaviour that sets a renderer's colour to one of a list of colours and raises an event when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SyncedColor

A **class** in `Root.Township`, the global namespace.

Network entity behaviour that sets a renderer's colour to one of a list of colours and raises an event when it changes. Despite the name, the code here sends nothing over the network.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SyncedColor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-block" /><code>{"private MaterialPropertyBlock block"}</code> | <span className="api-desc">Material property block used to set the colour.</span> |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> | <span className="api-desc">Renderer whose colour is set.</span> |
| <Link id="m-colorchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colorevent">{"ColorEvent"}</Link>{" colorChanged"}</code> | <span className="api-desc">Event raised with the new colour.</span> |
| <Link id="m-colors" /><code>{"private Color[] colors"}</code> | <span className="api-desc">Colours to pick from.</span> |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> | <span className="api-desc">Index of the current colour; starts at 3.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the material property block.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Only calls the base method.</span> |
| <Link id="m-setcolor" /><code>{"void SetColor(int index = 0)"}</code> | <span className="api-desc">Switches to the colour at an index if it's different: raises `colorChanged` and sets `_Color` on the renderer.</span> |
