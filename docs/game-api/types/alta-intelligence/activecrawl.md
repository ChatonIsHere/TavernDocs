---
title: "ActiveCrawl"
description: "class ActiveCrawl in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveCrawl

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentCrawlSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveCrawl()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beganfacingwall" /><code>{"private float beganFacingWall"}</code> |  |
| <Link id="m-currentrotation" /><code>{"private Quaternion currentRotation"}</code> |  |
| <Link id="m-framecount" /><code>{"private int frameCount"}</code> |  |
| <Link id="m-hitcolor" /><code>{"private Color hitColor"}</code> |  |
| <Link id="m-isfacingwall" /><code>{"private bool isFacingWall"}</code> |  |
| <Link id="m-lasthit" /><code>{"private Vector3 lastHit"}</code> |  |
| <Link id="m-maxtimefacingwall" /><code>{"private float maxTimeFacingWall"}</code> |  |
| <Link id="m-targetwalkdirection" /><code>{"private Vector3 targetWalkDirection"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-walkdirection" /><code>{"private Vector3 walkDirection"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update-2" /><code>{"override void Update(bool hasTarget)"}</code> |  |
| <Link id="m-cancelaction" /><code>{"private void CancelAction("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-getnewwalkdirection" /><code>{"private void GetNewWalkDirection()"}</code> |  |
| <Link id="m-moveto" /><code>{"private void MoveTo(Vector3 point, Vector3 normal)"}</code> |  |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |  |
| <Link id="m-walk" /><code>{"private void Walk()"}</code> |  |
