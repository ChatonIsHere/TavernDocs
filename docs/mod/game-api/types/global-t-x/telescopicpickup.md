---
title: "TelescopicPickup"
description: "A pickup that extends or shortens along an axis as the player pulls their two hands apart, like a spyglass."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TelescopicPickup

A **class** in `Root.Township`, the global namespace.

A pickup that extends or shortens along an axis as the player pulls their two hands apart, like a spyglass. The length is worked out on the holder's side in the IK update.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TelescopicPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | <span className="api-desc">Local direction the moving part slides along.</span> |
| <Link id="m-centerofmass" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/centerofmasssetter">{"CenterOfMassSetter"}</Link>{" centerOfMass"}</code> | <span className="api-desc">Centre of mass setter averaged between the hands while held.</span> |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | <span className="api-desc">The player holding it with both hands, while they do.</span> |
| <Link id="m-currentlength" /><code>{"private float currentLength"}</code> | <span className="api-desc">Current distance of the moving part along `axis`.</span> |
| <Link id="m-grableft" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabLeft"}</code> | <span className="api-desc">Grab point held by the left hand.</span> |
| <Link id="m-grabright" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/grabpoint">{"GrabPoint"}</Link>{" grabRight"}</code> | <span className="api-desc">Grab point held by the right hand.</span> |
| <Link id="m-lengthoffset" /><code>{"private float lengthOffset"}</code> | <span className="api-desc">Difference between the length and the hand distance when the second hand grabbed.</span> |
| <Link id="m-maximumlength" /><code>{"private float maximumLength"}</code> | <span className="api-desc">Longest length.</span> |
| <Link id="m-minimumlength" /><code>{"private float minimumLength"}</code> | <span className="api-desc">Shortest length.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">Fastest the length can change, per second.</span> |
| <Link id="m-movingpart" /><code>{"private Transform movingPart"}</code> | <span className="api-desc">The part that slides in and out.</span> |
| <Link id="m-progressset" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressSet"}</code> | <span className="api-desc">Event fired with the new progress whenever it changes.</span> |
| <Link id="m-syncprecision" /><code>{"private float syncPrecision"}</code> | <span className="api-desc">Precision used when syncing progress.</span> |
| <Link id="m-syncprogress" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncProgress"}</code> | <span className="api-desc">Message carrying the progress.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">This entity's main pickup.</span> |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> | <span className="api-desc">How far extended it is, 0 at `minimumLength` to 1 at `maximumLength`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the progress sync message.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current progress to a player who connects.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Reads the starting length and progress, hooks grab and release, and disables updates.</span> |
| <Link id="m-ikupdated" /><code>{"private void IkUpdated()"}</code> | <span className="api-desc">Before each IK update, sets the length from the distance between the hands (clamped and speed-limited), moves the hand anchors and reports the new `Progress`.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Clears the released hand's grab point and stops the IK hook.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Records which grab point each hand took; once both hands hold different points, hooks the holder's IK update and stores the length offset.</span> |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Serializes `Progress`; a client applies it to the moving part. As decompiled it uses `InverseLerp` for the length, so remote lengths are probably off.</span> |

</details>
