---
title: "AutoContainerLid"
description: "Server component that puts a liquid container's lid back on automatically: when it's docked, or a few seconds after a player lets go of it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoContainerLid

A **class** in `Root.Township`, no namespace.

Server component that puts a liquid container's lid back on automatically: when it's docked, or a few seconds after a player lets go of it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoContainerLid()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containerpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" containerPickup"}</code> | The container's pickup. |
| <Link id="m-isclosingifempty" /><code>{"private bool isClosingIfEmpty"}</code> | If true, the lid closes even when the container is empty. |
| <Link id="m-lid" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerlid">{"LiquidContainerLid"}</Link>{" lid"}</code> | The lid component on this object. |
| <Link id="m-relidcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" relidCoroutine"}</code> | The running recork coroutine, if any. |
| <Link id="m-relidtimer" /><code>{"private float relidTimer"}</code> | Seconds after release before the lid goes back on (5 by default). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks the pickup's dock and interaction events, and the content level change unless `isClosingIfEmpty`. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addlid" /><code>{"private void AddLid("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Closes the lid if it's off and the container isn't empty (or `isClosingIfEmpty` is set). The overload is the dock handler. |
| <Link id="m-addlid-2" /><code>{"private void AddLid()"}</code> | Closes the lid if it's off and the container isn't empty (or `isClosingIfEmpty` is set). The overload is the dock handler. |
| <Link id="m-contentlevelchanged" /><code>{"private void ContentLevelChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | When the container gains liquid while nobody holds it, closes the lid now if docked or starts the delayed recork. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts the delayed recork when the container is released undocked. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Cancels a pending recork when someone grabs the container. |
| <Link id="m-recork" /><code>{"private IEnumerator Recork() (iterator)"}</code> | Coroutine: waits `relidTimer` seconds, then closes the lid. |

</details>
