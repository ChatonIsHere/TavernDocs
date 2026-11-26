---
title: "RiverAudio"
description: "Client: moves an ambience audio source to the nearest point on the river to the local player's head and fades its volume by river size and distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverAudio

A **class** in `Root.Township`, `Alta.Forests`.

Client: moves an ambience audio source to the nearest point on the river to the local player's head and fades its volume by river size and distance.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverAudio()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mindistance" /><code>{"float minDistance"}</code> | <span className="api-desc">Scales the falloff curve; the volume factor is capped at 1.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-audiosource" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" audioSource"}</code> | <span className="api-desc">The ambience audio this component positions and fades.</span> |
| <Link id="m-lastpath" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" lastPath"}</code> | <span className="api-desc">The river path the sound was on last frame, checked first next frame.</span> |
| <Link id="m-maxsize" /><code>{"private float maxSize"}</code> | <span className="api-desc">River volume that counts as full loudness.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">How fast the source slides towards the river while silent; when audible it snaps.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | <span className="api-desc">The local player being tracked.</span> |
| <Link id="m-river" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | <span className="api-desc">The river generator whose overground paths are used.</span> |
| <Link id="m-rolloffcurve" /><code>{"private AnimationCurve rolloffCurve"}</code> | <span className="api-desc">An animation curve field; this code doesn't read it.</span> |
| <Link id="m-rolloffscale" /><code>{"private float rolloffScale"}</code> | <span className="api-desc">How quickly volume drops with distance in `Falloff`.</span> |
| <Link id="m-volumespeed" /><code>{"private float volumeSpeed"}</code> | <span className="api-desc">How fast the volume eases towards its target, per second.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Mutes the audio, disables the component and waits for the local player to be set.</span> |
| <Link id="m-disable" /><code>{"private void Disable("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Mutes and disables the component when the local player's entity is destroyed by the scene.</span> |
| <Link id="m-falloff" /><code>{"private float Falloff(float input)"}</code> | <span className="api-desc">Turns a distance into a volume factor using `minDistance` and `rolloffScale`.</span> |
| <Link id="m-localplayerset" /><code>{"private void LocalPlayerSet("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Stores the new local player, hooks its destruction and enables the component.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the local player events.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Finds the loudest nearby river path, moves the source to its closest point and eases the volume. Mutes when far outside the forest.</span> |

</details>
