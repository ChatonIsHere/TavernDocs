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
| <Link id="m-ctor" /><code>{"SeasonalLeaves()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadetime" /><code>{"private AnimationCurve fadeTime"}</code> | <span className="api-desc">Curve for the `_FadeTime` shader value over the cycle.</span> |
| <Link id="m-gradient" /><code>{"private Gradient gradient"}</code> | <span className="api-desc">Leaf colour over the cycle.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The leaf material to change. Shared, so every user of it changes.</span> |
| <Link id="m-randomness" /><code>{"private AnimationCurve randomness"}</code> | <span className="api-desc">Curve for the `_Randomness` shader value over the cycle.</span> |
| <Link id="m-randomseed" /><code>{"private float randomSeed"}</code> | <span className="api-desc">Seed sent to the shader as `_Seed`, new each cycle.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Cycles per second. Default 0.1.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for time and seed.</span> |
| <Link id="m-time" /><code>{"private float time"}</code> | <span className="api-desc">Position in the cycle from 0 to 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Picks a random seed and creates the sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current time and seed to a joining player.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Updates the material in the editor.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs `time` and `randomSeed`, and updates the material when reading.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Advances `time` by `speed`; when it wraps past 1, picks a new seed, sends it to the chunks and sets it on the material.</span> |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial()"}</code> | <span className="api-desc">Sets the material's `_Color`, `_FadeTime` and `_Randomness` from the gradient and curves at the current time.</span> |

</details>
