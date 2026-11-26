---
title: "EruptAreaAttack"
description: "class EruptAreaAttack in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EruptAreaAttack

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EruptAreaAttack()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> |
| <Link id="m-animators" /><code>{"private Animator[] animators"}</code> |
| <Link id="m-attack" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" attack"}</code> |
| <Link id="m-attacking" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" attacking"}</code> |
| <Link id="m-duration" /><code>{"private float duration"}</code> |
| <Link id="m-erupting" /><code>{"private Transform erupting"}</code> |
| <Link id="m-isusingnormalup" /><code>{"private bool isUsingNormalUp"}</code> |
| <Link id="m-offsetfromtarget" /><code>{"private float offsetFromTarget"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-raycastlength" /><code>{"private float raycastLength"}</code> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> |
| <Link id="m-raycaststartabovetargethead" /><code>{"private float raycastStartAboveTargetHead"}</code> |
| <Link id="m-trigger" /><code>{"private string trigger"}</code> |
| <Link id="m-worldposition" /><code>{"private Vector3 worldPosition"}</code> |
| <Link id="m-worldrotation" /><code>{"private Quaternion worldRotation"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-attack-2" /><code>{"void Attack()"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-attacklocal" /><code>{"private void AttackLocal()"}</code> |
| <Link id="m-attacksync" /><code>{"private void AttackSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-rechild" /><code>{"private void Rechild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-timer" /><code>{"private IEnumerator Timer() (iterator)"}</code> |

</details>
