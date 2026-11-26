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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`FixedImpactor`](/mod/game-api/types/alta-items/fixedimpactor), [`ImpactDetector`](/mod/game-api/types/alta-items/impactdetector), [`Agent`](/mod/game-api/types/alta-intelligence/agent), [`Babu`](/mod/game-api/types/alta-intelligence/babu), [`GreaterGotera`](/mod/game-api/types/alta-intelligence/greatergotera), [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`IInteractAgent`](/mod/game-api/types/alta-intelligence/iinteractagent), [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull), [`RejectDockArea`](/mod/game-api/types/alta-items/rejectdockarea), [`LandmarkManager`](/mod/game-api/types/alta-world/landmarkmanager), [`NetworkColliderGroup`](/mod/game-api/types/alta-networking/networkcollidergroup), [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`NetworkPrefab`](/mod/game-api/types/alta-networking/networkprefab), [`FlyCamPlayer`](/mod/game-api/types/global-e-h/flycamplayer), [`HandGestureController`](/mod/game-api/types/global-e-h/handgesturecontroller), [`MovingPlatform`](/mod/game-api/types/global-m-o/movingplatform), [`NetworkedIKBody`](/mod/game-api/types/global-m-o/networkedikbody), [`PracticeObjectFader`](/mod/game-api/types/global-p/practiceobjectfader), [`StaticGenerationParent`](/mod/game-api/types/global-s/staticgenerationparent), [`TwoStepLever`](/mod/game-api/types/global-t-x/twosteplever)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The entity this behaviour belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Called on both sides when the entity is set up for networking. Create your message syncs here.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: called when the entity is first spawned, with the spawn data.</span> |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Called when a player starts receiving this entity.</span> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Called when a player stops receiving this entity.</span> |
