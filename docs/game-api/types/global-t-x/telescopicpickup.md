---
title: "TelescopicPickup"
description: "A pickup that extends or shortens along an axis as the player pulls their two hands apart, like a spyglass."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TelescopicPickup

A **class** in `Root.Township`, no namespace.

A pickup that extends or shortens along an axis as the player pulls their two hands apart, like a spyglass. The length is worked out on the holder's side in the IK update.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TelescopicPickup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | Local direction the moving part slides along. |
| <Link id="m-centerofmass" /><code>{"private "}<Link to="/game-api/types/global-c-d/centerofmasssetter">{"CenterOfMassSetter"}</Link>{" centerOfMass"}</code> | Centre of mass setter averaged between the hands while held. |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | The player holding it with both hands, while they do. |
| <Link id="m-currentlength" /><code>{"private float currentLength"}</code> | Current distance of the moving part along `axis`. |
| <Link id="m-grableft" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabLeft"}</code> | Grab point held by the left hand. |
| <Link id="m-grabright" /><code>{"private "}<Link to="/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabRight"}</code> | Grab point held by the right hand. |
| <Link id="m-lengthoffset" /><code>{"private float lengthOffset"}</code> | Difference between the length and the hand distance when the second hand grabbed. |
| <Link id="m-maximumlength" /><code>{"private float maximumLength"}</code> | Longest length. |
| <Link id="m-minimumlength" /><code>{"private float minimumLength"}</code> | Shortest length. |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | Fastest the length can change, per second. |
| <Link id="m-movingpart" /><code>{"private Transform movingPart"}</code> | The part that slides in and out. |
| <Link id="m-progressset" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressSet"}</code> | Event fired with the new progress whenever it changes. |
| <Link id="m-syncprecision" /><code>{"private float syncPrecision"}</code> | Precision used when syncing progress. |
| <Link id="m-syncprogress" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncProgress"}</code> | Message carrying the progress. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | This entity's main pickup. |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> | How far extended it is, 0 at `minimumLength` to 1 at `maximumLength`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the progress sync message. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current progress to a player who connects. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Reads the starting length and progress, hooks grab and release, and disables updates. |
| <Link id="m-ikupdated" /><code>{"private void IkUpdated()"}</code> | Before each IK update, sets the length from the distance between the hands (clamped and speed-limited), moves the hand anchors and reports the new `Progress`. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Clears the released hand's grab point and stops the IK hook. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Records which grab point each hand took; once both hands hold different points, hooks the holder's IK update and stores the length offset. |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes `Progress`; a client applies it to the moving part. As decompiled it uses `InverseLerp` for the length, so remote lengths are probably off. |

</details>
