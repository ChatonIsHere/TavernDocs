---
title: "NetworkEntityComponentController"
description: "class NetworkEntityComponentController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityComponentController

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer), [`IInitializeAsRemotePlayer`](/game-api/types/global-i-l/iinitializeasremoteplayer)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityComponentController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-clientbehaviours" /><code>{"private List<Behaviour> clientBehaviours"}</code> |  |
| <Link id="m-localbehaviours" /><code>{"private List<Behaviour> localBehaviours"}</code> |  |
| <Link id="m-remotebehaviours" /><code>{"private List<Behaviour> remoteBehaviours"}</code> |  |
| <Link id="m-serverbehaviours" /><code>{"private List<Behaviour> serverBehaviours"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-initializeasremoteplayer" /><code>{"private void IInitializeAsRemotePlayer.InitializeAsRemotePlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-setbehavioursenabled" /><code>{"private void SetBehavioursEnabled("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-setcomponentsenabled" /><code>{"private void SetComponentsEnabled(IEnumerable<Behaviour> components, bool isEnabled)"}</code> |  |
