---
title: "PlayerComponentController"
description: "class PlayerComponentController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerComponentController

A **class** in `Root.Township`, `Alta.Networking`.

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

| Member |
| --- |
| <Link id="m-clientbehaviours" /><code>{"private List<Behaviour> clientBehaviours"}</code> |
| <Link id="m-localbehaviours" /><code>{"private List<Behaviour> localBehaviours"}</code> |
| <Link id="m-remotebehaviours" /><code>{"private List<Behaviour> remoteBehaviours"}</code> |
| <Link id="m-serverbehaviours" /><code>{"private List<Behaviour> serverBehaviours"}</code> |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-setbehavioursenabled" /><code>{"private void SetBehavioursEnabled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-setcomponentsenabled" /><code>{"private void SetComponentsEnabled(IEnumerable<Behaviour> components, bool isEnabled)"}</code> |

</details>
