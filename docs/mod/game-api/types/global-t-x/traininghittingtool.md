---
title: "TrainingHittingTool"
description: "A training dummy part that swings on a curve and re-arms its impactor once per cycle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrainingHittingTool

A **class** in `Root.Township`, the global namespace.

A training dummy part that swings on a curve and re-arms its impactor once per cycle. Both sides run the swing; new players get the current progress on connect.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrainingHittingTool()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecollider" /><code>{"private Collider activeCollider"}</code> | <span className="api-desc">Collider that can hit; turned off after a hit and back on each new cycle.</span> |
| <Link id="m-baserotation" /><code>{"private Quaternion baseRotation"}</code> | <span className="api-desc">The parent's rotation at `Start`, which the swing is applied on top of.</span> |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">How far through the current swing cycle it is, 0 to 1.</span> |
| <Link id="m-fixedimpactor" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/fixedimpactor">{"FixedImpactor"}</Link>{" fixedImpactor"}</code> | <span className="api-desc">Impactor charged at the start of each cycle.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Axis the swing rotates around.</span> |
| <Link id="m-rotationovertime" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" rotationOverTime"}</code> | <span className="api-desc">Swing angle curve and cycle duration.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Sync message (`SyncA`) for `currentProgress`.</span> |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | <span className="api-desc">The rigidbody that is rotated.</span> |
| <Link id="m-tool" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool"}</code> | <span className="api-desc">The impact tool whose collisions are watched.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the progress sync message.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current swing progress to the joining player.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the tool's collision event.</span> |
| <Link id="m-collided" /><code>{"private void Collided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Turns off the active collider after the tool hits something, so it hits once per swing.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Advances the swing progress; at the end of each cycle wraps round, re-enables the collider and charges the impactor.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Records the parent's rotation as the base rotation.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Serializes `currentProgress` as a 0 to 1 float.</span> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation()"}</code> | <span className="api-desc">Rotates the rigidbody around `rotationAxis` by the curve's angle at the current progress.</span> |

</details>
