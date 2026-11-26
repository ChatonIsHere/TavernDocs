---
title: "SyncedColor"
description: "Network entity behaviour that sets a renderer's colour to one of a list of colours and raises an event when it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SyncedColor

A **class** in `Root.Township`, no namespace.

Network entity behaviour that sets a renderer's colour to one of a list of colours and raises an event when it changes. Despite the name, the code here sends nothing over the network.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SyncedColor()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-block" /><code>{"private MaterialPropertyBlock block"}</code> | Material property block used to set the colour. |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> | Renderer whose colour is set. |
| <Link id="m-colorchanged" /><code>{"private "}<Link to="/game-api/types/global-c-d/colorevent">{"ColorEvent"}</Link>{" colorChanged"}</code> | Event raised with the new colour. |
| <Link id="m-colors" /><code>{"private Color[] colors"}</code> | Colours to pick from. |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> | Index of the current colour; starts at 3. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the material property block. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Only calls the base method. |
| <Link id="m-setcolor" /><code>{"void SetColor(int index = 0)"}</code> | Switches to the colour at an index if it's different: raises `colorChanged` and sets `_Color` on the renderer. |
