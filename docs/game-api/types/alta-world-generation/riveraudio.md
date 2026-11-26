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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverAudio()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mindistance" /><code>{"float minDistance"}</code> | Scales the falloff curve; the volume factor is capped at 1. |

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-audiosource" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" audioSource"}</code> | The ambience audio this component positions and fades. |
| <Link id="m-lastpath" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" lastPath"}</code> | The river path the sound was on last frame, checked first next frame. |
| <Link id="m-maxsize" /><code>{"private float maxSize"}</code> | River volume that counts as full loudness. |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | How fast the source slides towards the river while silent; when audible it snaps. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | The local player being tracked. |
| <Link id="m-river" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> | The river generator whose overground paths are used. |
| <Link id="m-rolloffcurve" /><code>{"private AnimationCurve rolloffCurve"}</code> | An animation curve field; this code doesn't read it. |
| <Link id="m-rolloffscale" /><code>{"private float rolloffScale"}</code> | How quickly volume drops with distance in `Falloff`. |
| <Link id="m-volumespeed" /><code>{"private float volumeSpeed"}</code> | How fast the volume eases towards its target, per second. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Mutes the audio, disables the component and waits for the local player to be set. |
| <Link id="m-disable" /><code>{"private void Disable("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Mutes and disables the component when the local player's entity is destroyed by the scene. |
| <Link id="m-falloff" /><code>{"private float Falloff(float input)"}</code> | Turns a distance into a volume factor using `minDistance` and `rolloffScale`. |
| <Link id="m-localplayerset" /><code>{"private void LocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Stores the new local player, hooks its destruction and enables the component. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the local player events. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Finds the loudest nearby river path, moves the source to its closest point and eases the volume. Mutes when far outside the forest. |

</details>
