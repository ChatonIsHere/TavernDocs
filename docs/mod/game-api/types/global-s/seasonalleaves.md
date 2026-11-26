---
title: "SeasonalLeaves"
description: "Cycles a leaf material's colour, fade and randomness through a gradient and curves over time, with the cycle position synced to joining players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SeasonalLeaves

A **class** in `Root.Township`, the global namespace.

Cycles a leaf material's colour, fade and randomness through a gradient and curves over time, with the cycle position synced to joining players.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SeasonalLeaves()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadetime" /><code>{"private AnimationCurve fadeTime"}</code> | Curve for the `_FadeTime` shader value over the cycle. |
| <Link id="m-gradient" /><code>{"private Gradient gradient"}</code> | Leaf colour over the cycle. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The leaf material to change. Shared, so every user of it changes. |
| <Link id="m-randomness" /><code>{"private AnimationCurve randomness"}</code> | Curve for the `_Randomness` shader value over the cycle. |
| <Link id="m-randomseed" /><code>{"private float randomSeed"}</code> | Seed sent to the shader as `_Seed`, new each cycle. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Cycles per second. Default 0.1. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for time and seed. |
| <Link id="m-time" /><code>{"private float time"}</code> | Position in the cycle from 0 to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Picks a random seed and creates the sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current time and seed to a joining player. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Updates the material in the editor. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs `time` and `randomSeed`, and updates the material when reading. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Advances `time` by `speed`; when it wraps past 1, picks a new seed, sends it to the chunks and sets it on the material. |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial()"}</code> | Sets the material's `_Color`, `_FadeTime` and `_Randomness` from the gradient and curves at the current time. |

</details>
