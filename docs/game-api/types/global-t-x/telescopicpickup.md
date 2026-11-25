---
title: "TelescopicPickup"
description: "class TelescopicPickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TelescopicPickup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TelescopicPickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> |  |
| <Link id="m-centerofmass" /><code>{"private "}<Link to="/game-api/types/global-c-d/centerofmasssetter">{"CenterOfMassSetter"}</Link>{" centerOfMass"}</code> |  |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> |  |
| <Link id="m-currentlength" /><code>{"private float currentLength"}</code> |  |
| <Link id="m-grableft" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabLeft"}</code> |  |
| <Link id="m-grabright" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabRight"}</code> |  |
| <Link id="m-lengthoffset" /><code>{"private float lengthOffset"}</code> |  |
| <Link id="m-maximumlength" /><code>{"private float maximumLength"}</code> |  |
| <Link id="m-minimumlength" /><code>{"private float minimumLength"}</code> |  |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |  |
| <Link id="m-movingpart" /><code>{"private Transform movingPart"}</code> |  |
| <Link id="m-progressset" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressSet"}</code> |  |
| <Link id="m-syncprecision" /><code>{"private float syncPrecision"}</code> |  |
| <Link id="m-syncprogress" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncProgress"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ikupdated" /><code>{"private void IkUpdated()"}</code> |  |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
