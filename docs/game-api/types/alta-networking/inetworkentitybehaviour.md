---
title: "INetworkEntityBehaviour"
description: "Implement on a component of a NetworkEntity prefab to get the entity's network lifecycle calls (initialise, server spawn, player connect and disconnect)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# INetworkEntityBehaviour

An **interface** in `Root.Township`, `Alta.Networking`.

Implement on a component of a `NetworkEntity` prefab to get the entity's network lifecycle calls (initialise, server spawn, player connect and disconnect).

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`FixedImpactor`](/game-api/types/alta-items/fixedimpactor), [`ImpactDetector`](/game-api/types/alta-items/impactdetector), [`Agent`](/game-api/types/alta-intelligence/agent), [`Babu`](/game-api/types/alta-intelligence/babu), [`GreaterGotera`](/game-api/types/alta-intelligence/greatergotera), [`IAgent`](/game-api/types/alta-intelligence/iagent), [`IInteractAgent`](/game-api/types/alta-intelligence/iinteractagent), [`Spriggull`](/game-api/types/alta-intelligence/spriggull), [`RejectDockArea`](/game-api/types/alta-items/rejectdockarea), [`LandmarkManager`](/game-api/types/alta-world/landmarkmanager), [`NetworkColliderGroup`](/game-api/types/alta-networking/networkcollidergroup), [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`NetworkPrefab`](/game-api/types/alta-networking/networkprefab), [`FlyCamPlayer`](/game-api/types/global-e-h/flycamplayer), [`HandGestureController`](/game-api/types/global-e-h/handgesturecontroller), [`MovingPlatform`](/game-api/types/global-m-o/movingplatform), [`NetworkedIKBody`](/game-api/types/global-m-o/networkedikbody), [`PracticeObjectFader`](/game-api/types/global-p/practiceobjectfader), [`StaticGenerationParent`](/game-api/types/global-s/staticgenerationparent), [`TwoStepLever`](/game-api/types/global-t-x/twosteplever)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The entity this behaviour belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Called on both sides when the entity is set up for networking. Create your message syncs here. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: called when the entity is first spawned, with the spawn data. |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Called when a player starts receiving this entity. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Called when a player stops receiving this entity. |
