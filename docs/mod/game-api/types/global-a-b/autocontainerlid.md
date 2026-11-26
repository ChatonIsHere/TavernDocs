---
title: "AutoContainerLid"
description: "Server component that puts a liquid container's lid back on automatically: when it's docked, or a few seconds after a player lets go of it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoContainerLid

A **class** in `Root.Township`, the global namespace.

Server component that puts a liquid container's lid back on automatically: when it's docked, or a few seconds after a player lets go of it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoContainerLid()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containerpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" containerPickup"}</code> | <span className="api-desc">The container's pickup.</span> |
| <Link id="m-isclosingifempty" /><code>{"private bool isClosingIfEmpty"}</code> | <span className="api-desc">If true, the lid closes even when the container is empty.</span> |
| <Link id="m-lid" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainerlid">{"LiquidContainerLid"}</Link>{" lid"}</code> | <span className="api-desc">The lid component on this object.</span> |
| <Link id="m-relidcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" relidCoroutine"}</code> | <span className="api-desc">The running recork coroutine, if any.</span> |
| <Link id="m-relidtimer" /><code>{"private float relidTimer"}</code> | <span className="api-desc">Seconds after release before the lid goes back on (5 by default).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks the pickup's dock and interaction events, and the content level change unless `isClosingIfEmpty`.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addlid" /><code>{"private void AddLid("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Closes the lid if it's off and the container isn't empty (or `isClosingIfEmpty` is set). The overload is the dock handler.</span> |
| <Link id="m-addlid-2" /><code>{"private void AddLid()"}</code> | <span className="api-desc">Closes the lid if it's off and the container isn't empty (or `isClosingIfEmpty` is set). The overload is the dock handler.</span> |
| <Link id="m-contentlevelchanged" /><code>{"private void ContentLevelChanged("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | <span className="api-desc">When the container gains liquid while nobody holds it, closes the lid now if docked or starts the delayed recork.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts the delayed recork when the container is released undocked.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Cancels a pending recork when someone grabs the container.</span> |
| <Link id="m-recork" /><code>{"private IEnumerator Recork() (iterator)"}</code> | <span className="api-desc">Coroutine: waits `relidTimer` seconds, then closes the lid.</span> |

</details>
