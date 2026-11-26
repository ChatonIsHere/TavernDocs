---
title: "ActiveCrawl"
description: "Server: running action that makes a creature crawl over any surface (walls, ceilings) by moving its transform along raycast hits, turning at random."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveCrawl

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that makes a creature crawl over any surface (walls, ceilings) by moving its transform along raycast hits, turning at random. Settings come from `AgentCrawlSettings`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentCrawlSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveCrawl()"}</code> | Creates an `ActiveCrawl` with default values. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beganfacingwall" /><code>{"private float beganFacingWall"}</code> | Time the creature started facing the current wall. |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> | The crawl rotation, aligned with the surface it's on. |
| <Link id="m-framecount" /><code>{"private int frameCount"}</code> | Frames since the last raycast check. |
| <Link id="m-hitcolor" /><code>{"private Color hitColor"}</code> | Debug colour for the kind of surface hit last. Not drawn anywhere in this build. |
| <Link id="m-isfacingwall" /><code>{"private bool isFacingWall"}</code> | Whether the creature is blocked by something ahead. |
| <Link id="m-lasthit" /><code>{"private Vector3 lastHit"}</code> | The last surface point the creature was moved to. |
| <Link id="m-maxtimefacingwall" /><code>{"private float maxTimeFacingWall"}</code> | Seconds the creature stays facing a wall before picking a new heading. 2. |
| <Link id="m-targetwalkdirection" /><code>{"private Vector3 targetWalkDirection"}</code> | The heading the creature is turning towards. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | The creature's rigidbody transform, moved directly. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered `Walk` update. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared "Crawler Helper" update module that runs `Walk`. |
| <Link id="m-walkdirection" /><code>{"private Vector3 walkDirection"}</code> | The current walking direction. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update-2" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing. The movement runs in `Walk` every frame instead. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Sets a random duration, stores the starting rotation, picks a heading and registers `Walk` on its own update module. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelaction" /><code>{"private void CancelAction("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Deregisters the crawl update when the action ends. |
| <Link id="m-getnewwalkdirection" /><code>{"private void GetNewWalkDirection()"}</code> | Picks a new heading up to 90 degrees either side, or further when facing a wall. |
| <Link id="m-moveto" /><code>{"private void MoveTo(Vector3 point, Vector3 normal)"}</code> | Puts the creature at a surface point and turns it towards the surface normal and walk direction. |
| <Link id="m-walk" /><code>{"private void Walk()"}</code> | Per frame: moves forward and steers to the heading. Every few frames raycasts to follow surfaces, turn at walls, or switch to the recover-from-falling set. |

</details>
