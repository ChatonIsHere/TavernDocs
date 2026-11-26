---
title: "EruptAreaAttack"
description: "Networked creature attack that makes an object erupt from the ground near the agent's target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EruptAreaAttack

A **class** in `Root.Township`, the global namespace.

Networked creature attack that makes an object erupt from the ground near the agent's target. The server picks the spot and syncs it to clients.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EruptAreaAttack()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | <span className="api-desc">Agent whose target is attacked; it must be alive.</span> |
| <Link id="m-animators" /><code>{"private Animator[] animators"}</code> | <span className="api-desc">Animators that get the trigger.</span> |
| <Link id="m-attack" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" attack"}</code> | <span className="api-desc">Method sync for the attack.</span> |
| <Link id="m-attacking" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" attacking"}</code> | <span className="api-desc">The running hide timer.</span> |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Seconds the eruption stays visible.</span> |
| <Link id="m-erupting" /><code>{"private Transform erupting"}</code> | <span className="api-desc">Object that is moved to the spot and shown.</span> |
| <Link id="m-isusingnormalup" /><code>{"private bool isUsingNormalUp"}</code> | <span className="api-desc">Align the eruption to the ground normal instead of straight up.</span> |
| <Link id="m-offsetfromtarget" /><code>{"private float offsetFromTarget"}</code> | <span className="api-desc">How far short of the target the spot is placed.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Furthest the spot can be from the attacker.</span> |
| <Link id="m-raycastlength" /><code>{"private float raycastLength"}</code> | <span className="api-desc">Length of the ground raycast.</span> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | <span className="api-desc">Layers the ground raycast hits.</span> |
| <Link id="m-raycaststartabovetargethead" /><code>{"private float raycastStartAboveTargetHead"}</code> | <span className="api-desc">Height above the target's position where the ground raycast starts.</span> |
| <Link id="m-trigger" /><code>{"private string trigger"}</code> | <span className="api-desc">Animator trigger name, "Attack" by default.</span> |
| <Link id="m-worldposition" /><code>{"private Vector3 worldPosition"}</code> | <span className="api-desc">Chosen eruption position, also synced.</span> |
| <Link id="m-worldrotation" /><code>{"private Quaternion worldRotation"}</code> | <span className="api-desc">Chosen eruption rotation, also synced.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attack-2" /><code>{"void Attack()"}</code> | <span className="api-desc">Server: picks a spot towards the target (or random within `radius`), raycasts down to the ground, shows the eruption and syncs it.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync, hides the eruption object and reparents it when the entity is destroyed by the scene.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attacklocal" /><code>{"private void AttackLocal()"}</code> | <span className="api-desc">Unparents the eruption object, places it, enables it, fires the animator triggers and starts the hide timer.</span> |
| <Link id="m-attacksync" /><code>{"private void AttackSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the position and rotation; clients play the attack when they read it.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Forgets the running timer.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-rechild" /><code>{"private void Rechild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Puts the eruption object back under this transform.</span> |
| <Link id="m-timer" /><code>{"private IEnumerator Timer() (iterator)"}</code> | <span className="api-desc">Waits `duration`, then hides the eruption object and reparents it.</span> |

</details>
