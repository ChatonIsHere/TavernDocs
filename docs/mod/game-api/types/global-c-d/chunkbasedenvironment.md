---
title: "ChunkBasedEnvironment"
description: "Client: switches the player's environment to the EnvironmentNode of the location chunk they walk into."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkBasedEnvironment

A **class** in `Root.Township`, the global namespace.

Client: switches the player's environment to the `EnvironmentNode` of the location chunk they walk into.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkBasedEnvironment()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | <span className="api-desc">Location chunk found for the latest position.</span> |
| <Link id="m-environmentassesser" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/environmenthandler">{"EnvironmentHandler"}</Link>{" environmentAssesser"}</code> | <span className="api-desc">The `EnvironmentHandler` on this object.</span> |
| <Link id="m-locomotion" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" locomotion"}</code> | <span className="api-desc">Locomotion controller whose moves are watched.</span> |
| <Link id="m-oldchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" oldChunk"}</code> | <span className="api-desc">Location chunk the player was last in.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positionchanged" /><code>{"private void PositionChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">On each move, finds the best location chunk for the new position and, if it changed, sets its environment without snapping.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Gets the `EnvironmentHandler` and hooks the locomotion position event.</span> |

</details>
