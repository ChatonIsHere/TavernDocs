---
title: "NetworkEntityComponentController"
description: "Turns lists of components on or off depending on whether this is the server or a client, and whether the player entity is the local player or a remote one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityComponentController

A **class** in `Root.Township`, `Alta.Networking`.

Turns lists of components on or off depending on whether this is the server or a client, and whether the player entity is the local player or a remote one.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer), [`IInitializeAsRemotePlayer`](/mod/game-api/types/global-i-l/iinitializeasremoteplayer)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityComponentController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientbehaviours" /><code>{"private List<Behaviour> clientBehaviours"}</code> | <span className="api-desc">Components enabled only on clients.</span> |
| <Link id="m-localbehaviours" /><code>{"private List<Behaviour> localBehaviours"}</code> | <span className="api-desc">Components enabled only for the local player.</span> |
| <Link id="m-remotebehaviours" /><code>{"private List<Behaviour> remoteBehaviours"}</code> | <span className="api-desc">Components enabled only for remote players.</span> |
| <Link id="m-serverbehaviours" /><code>{"private List<Behaviour> serverBehaviours"}</code> | <span className="api-desc">Components enabled only on the server.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks up to the entity's `InitializationFinished` event.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Turns on the local behaviours and turns off the remote ones.</span> |
| <Link id="m-initializeasremoteplayer" /><code>{"private void IInitializeAsRemotePlayer.InitializeAsRemotePlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Turns on the remote behaviours and turns off the local ones.</span> |
| <Link id="m-setbehavioursenabled" /><code>{"private void SetBehavioursEnabled("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">After init, turns server behaviours on only on the server and client behaviours only on clients. Skipped in local test.</span> |
| <Link id="m-setcomponentsenabled" /><code>{"private void SetComponentsEnabled(IEnumerable<Behaviour> components, bool isEnabled)"}</code> | <span className="api-desc">Sets `enabled` on each component in the list.</span> |

</details>
