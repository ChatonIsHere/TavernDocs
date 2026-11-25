---
title: "IndependentWalker"
description: "Lets a navigator part of a creature detach from its body and walk on its own (update module \"Independent Walker\"), then reattach."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndependentWalker

A **class** in `Root.Township`, `Alta.Pathfinding`.

Lets a navigator part of a creature detach from its body and walk on its own (update module "Independent Walker"), then reattach.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IndependentWalker()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basetopic" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" baseTopic"}</code> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-isattached" /><code>{"private bool isAttached"}</code> |
| <Link id="m-isfollowingbydefault" /><code>{"private bool isFollowingByDefault"}</code> |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> |
| <Link id="m-navigator" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-attach" /><code>{"void Attach()"}</code> |
| <Link id="m-dettach" /><code>{"void Dettach()"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-basedestroyed" /><code>{"private void BaseDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-destroyed" /><code>{"private void Destroyed()"}</code> |
| <Link id="m-internaldettach" /><code>{"private void InternalDettach(bool isRepositioning)"}</code> |
| <Link id="m-onbasekilled" /><code>{"private void OnBaseKilled("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" lastHit)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> |

</details>
