---
title: "PlayerComponentController"
description: "Turns lists of components on or off for a player entity: server-only, client-only, and local player versus remote player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerComponentController

A **class** in `Root.Township`, `Alta.Networking`.

Turns lists of components on or off for a player entity: server-only, client-only, and local player versus remote player. Starts every player as remote until it becomes the local player.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerComponentController()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientbehaviours" /><code>{"private List<Behaviour> clientBehaviours"}</code> | Components enabled only on clients. |
| <Link id="m-localbehaviours" /><code>{"private List<Behaviour> localBehaviours"}</code> | Components enabled only for the local player. |
| <Link id="m-remotebehaviours" /><code>{"private List<Behaviour> remoteBehaviours"}</code> | Components enabled only for remote players. |
| <Link id="m-serverbehaviours" /><code>{"private List<Behaviour> serverBehaviours"}</code> | Components enabled only on the server. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks up to the entity's `InitializationFinished` event. |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Turns on the local behaviours and turns off the remote ones. |
| <Link id="m-setbehavioursenabled" /><code>{"private void SetBehavioursEnabled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | After init, sets server and client behaviours by side (skipped in local test), then turns local off and remote on. |
| <Link id="m-setcomponentsenabled" /><code>{"private void SetComponentsEnabled(IEnumerable<Behaviour> components, bool isEnabled)"}</code> | Sets `enabled` on each component in the list. |

</details>
