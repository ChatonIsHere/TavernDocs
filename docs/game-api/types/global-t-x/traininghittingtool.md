---
title: "TrainingHittingTool"
description: "A training dummy part that swings on a curve and re-arms its impactor once per cycle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrainingHittingTool

A **class** in `Root.Township`, no namespace.

A training dummy part that swings on a curve and re-arms its impactor once per cycle. Both sides run the swing; new players get the current progress on connect.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrainingHittingTool()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecollider" /><code>{"private Collider activeCollider"}</code> | Collider that can hit; turned off after a hit and back on each new cycle. |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | The parent's rotation at `Start`, which the swing is applied on top of. |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | How far through the current swing cycle it is, 0 to 1. |
| <Link id="m-fixedimpactor" /><code>{"private "}<Link to="/game-api/types/alta-items/fixedimpactor">{"FixedImpactor"}</Link>{" fixedImpactor"}</code> | Impactor charged at the start of each cycle. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Axis the swing rotates around. |
| <Link id="m-rotationovertime" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" rotationOverTime"}</code> | Swing angle curve and cycle duration. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Sync message (`SyncA`) for `currentProgress`. |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | The rigidbody that is rotated. |
| <Link id="m-tool" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool"}</code> | The impact tool whose collisions are watched. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the progress sync message. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current swing progress to the joining player. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the tool's collision event. |
| <Link id="m-collided" /><code>{"private void Collided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Turns off the active collider after the tool hits something, so it hits once per swing. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Advances the swing progress; at the end of each cycle wraps round, re-enables the collider and charges the impactor. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Records the parent's rotation as the base rotation. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes `currentProgress` as a 0 to 1 float. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | Rotates the rigidbody around `rotationAxis` by the curve's angle at the current progress. |

</details>
