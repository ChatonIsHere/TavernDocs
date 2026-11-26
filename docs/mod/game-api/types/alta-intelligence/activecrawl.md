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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentCrawlSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveCrawl()"}</code> | <span className="api-desc">Creates an `ActiveCrawl` with default values.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beganfacingwall" /><code>{"private float beganFacingWall"}</code> | <span className="api-desc">Time the creature started facing the current wall.</span> |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> | <span className="api-desc">The crawl rotation, aligned with the surface it's on.</span> |
| <Link id="m-framecount" /><code>{"private int frameCount"}</code> | <span className="api-desc">Frames since the last raycast check.</span> |
| <Link id="m-hitcolor" /><code>{"private Color hitColor"}</code> | <span className="api-desc">Debug colour for the kind of surface hit last. Not drawn anywhere in this build.</span> |
| <Link id="m-isfacingwall" /><code>{"private bool isFacingWall"}</code> | <span className="api-desc">Whether the creature is blocked by something ahead.</span> |
| <Link id="m-lasthit" /><code>{"private Vector3 lastHit"}</code> | <span className="api-desc">The last surface point the creature was moved to.</span> |
| <Link id="m-maxtimefacingwall" /><code>{"private float maxTimeFacingWall"}</code> | <span className="api-desc">Seconds the creature stays facing a wall before picking a new heading. 2.</span> |
| <Link id="m-targetwalkdirection" /><code>{"private Vector3 targetWalkDirection"}</code> | <span className="api-desc">The heading the creature is turning towards.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">The creature's rigidbody transform, moved directly.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered `Walk` update.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared "Crawler Helper" update module that runs `Walk`.</span> |
| <Link id="m-walkdirection" /><code>{"private Vector3 walkDirection"}</code> | <span className="api-desc">The current walking direction.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update-2" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Does nothing. The movement runs in `Walk` every frame instead.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Sets a random duration, stores the starting rotation, picks a heading and registers `Walk` on its own update module.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelaction" /><code>{"private void CancelAction("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Deregisters the crawl update when the action ends.</span> |
| <Link id="m-getnewwalkdirection" /><code>{"private void GetNewWalkDirection()"}</code> | <span className="api-desc">Picks a new heading up to 90 degrees either side, or further when facing a wall.</span> |
| <Link id="m-moveto" /><code>{"private void MoveTo(Vector3 point, Vector3 normal)"}</code> | <span className="api-desc">Puts the creature at a surface point and turns it towards the surface normal and walk direction.</span> |
| <Link id="m-walk" /><code>{"private void Walk()"}</code> | <span className="api-desc">Per frame: moves forward and steers to the heading. Every few frames raycasts to follow surfaces, turn at walls, or switch to the recover-from-falling set.</span> |

</details>
