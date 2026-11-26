---
title: "DistanceLODGroupManager"
description: "Client: updates every active DistanceLODGroup from the local player's position each time the player camera renders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceLODGroupManager

A **class** in `Root.Township`, the global namespace.

Client: updates every active `DistanceLODGroup` from the local player's position each time the player camera renders.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceLODGroupManager()"}</code> | Creates a `DistanceLODGroupManager` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activegroups" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{"> activeGroups"}</code> | The LOD groups being updated. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Local player position from the last cull. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addgroup" /><code>{"void AddGroup("}<Link to="/mod/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{" distanceLODGroup)"}</code> | Adds a group and updates its LOD. The first group hooks the local player's camera. |
| <Link id="m-removegroup" /><code>{"void RemoveGroup("}<Link to="/mod/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{" distanceLODGroup)"}</code> | Removes a group. When none are left, unhooks and removes the camera's `CameraRenderEvents`. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cull" /><code>{"private void Cull()"}</code> | Before the camera renders, reads the local player's position and updates every group's LOD. |
| <Link id="m-empty" /><code>{"private void Empty()"}</code> | Empty after-render callback passed to `CameraRenderEvents`. |
| <Link id="m-updateplayer" /><code>{"private void UpdatePlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Hooks the given player's camera render events. Called when the local player is set. |

</details>

## Used in

Members of other types that take, return or hold a `DistanceLODGroupManager`:

[`DistanceLODGroup.manager`](/mod/game-api/types/global-c-d/distancelodgroup#m-manager).
