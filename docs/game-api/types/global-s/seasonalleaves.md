---
title: "SeasonalLeaves"
description: "class SeasonalLeaves in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SeasonalLeaves

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SeasonalLeaves()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fadetime" /><code>{"private AnimationCurve fadeTime"}</code> |
| <Link id="m-gradient" /><code>{"private Gradient gradient"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |
| <Link id="m-randomness" /><code>{"private AnimationCurve randomness"}</code> |
| <Link id="m-randomseed" /><code>{"private float randomSeed"}</code> |
| <Link id="m-speed" /><code>{"private float speed"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |
| <Link id="m-time" /><code>{"private float time"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial()"}</code> |

</details>
