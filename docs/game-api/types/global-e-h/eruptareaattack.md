---
title: "EruptAreaAttack"
description: "Networked creature attack that makes an object erupt from the ground near the agent's target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EruptAreaAttack

A **class** in `Root.Township`, no namespace.

Networked creature attack that makes an object erupt from the ground near the agent's target. The server picks the spot and syncs it to clients.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EruptAreaAttack()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | Agent whose target is attacked; it must be alive. |
| <Link id="m-animators" /><code>{"private Animator[] animators"}</code> | Animators that get the trigger. |
| <Link id="m-attack" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" attack"}</code> | Method sync for the attack. |
| <Link id="m-attacking" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" attacking"}</code> | The running hide timer. |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Seconds the eruption stays visible. |
| <Link id="m-erupting" /><code>{"private Transform erupting"}</code> | Object that is moved to the spot and shown. |
| <Link id="m-isusingnormalup" /><code>{"private bool isUsingNormalUp"}</code> | Align the eruption to the ground normal instead of straight up. |
| <Link id="m-offsetfromtarget" /><code>{"private float offsetFromTarget"}</code> | How far short of the target the spot is placed. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Furthest the spot can be from the attacker. |
| <Link id="m-raycastlength" /><code>{"private float raycastLength"}</code> | Length of the ground raycast. |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | Layers the ground raycast hits. |
| <Link id="m-raycaststartabovetargethead" /><code>{"private float raycastStartAboveTargetHead"}</code> | Height above the target's position where the ground raycast starts. |
| <Link id="m-trigger" /><code>{"private string trigger"}</code> | Animator trigger name, "Attack" by default. |
| <Link id="m-worldposition" /><code>{"private Vector3 worldPosition"}</code> | Chosen eruption position, also synced. |
| <Link id="m-worldrotation" /><code>{"private Quaternion worldRotation"}</code> | Chosen eruption rotation, also synced. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attack-2" /><code>{"void Attack()"}</code> | Server: picks a spot towards the target (or random within `radius`), raycasts down to the ground, shows the eruption and syncs it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync, hides the eruption object and reparents it when the entity is destroyed by the scene. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attacklocal" /><code>{"private void AttackLocal()"}</code> | Unparents the eruption object, places it, enables it, fires the animator triggers and starts the hide timer. |
| <Link id="m-attacksync" /><code>{"private void AttackSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the position and rotation; clients play the attack when they read it. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Forgets the running timer. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-rechild" /><code>{"private void Rechild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Puts the eruption object back under this transform. |
| <Link id="m-timer" /><code>{"private IEnumerator Timer() (iterator)"}</code> | Waits `duration`, then hides the eruption object and reparents it. |

</details>
