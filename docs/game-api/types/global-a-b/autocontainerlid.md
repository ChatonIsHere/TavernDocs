---
title: "AutoContainerLid"
description: "class AutoContainerLid in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoContainerLid

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoContainerLid()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-containerpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" containerPickup"}</code> |  |
| <Link id="m-isclosingifempty" /><code>{"private bool isClosingIfEmpty"}</code> |  |
| <Link id="m-lid" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerlid">{"LiquidContainerLid"}</Link>{" lid"}</code> |  |
| <Link id="m-relidcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" relidCoroutine"}</code> |  |
| <Link id="m-relidtimer" /><code>{"private float relidTimer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-addlid" /><code>{"private void AddLid("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-addlid-2" /><code>{"private void AddLid()"}</code> |  |
| <Link id="m-contentlevelchanged" /><code>{"private void ContentLevelChanged("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-recork" /><code>{"private IEnumerator Recork() (iterator)"}</code> |  |
