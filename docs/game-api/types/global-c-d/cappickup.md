---
title: "CapPickup"
description: "The grabbable cap on a potion bottle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CapPickup

A **class** in `Root.Township`, no namespace.

The grabbable cap on a potion bottle. While the same player holds the bottle, pulling the cap far enough off removes the lid, which the server applies.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`Pickup`](/game-api/types/global-p/pickup)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CapPickup()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bottlepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bottlePickup"}</code> | The bottle this cap belongs to. |
| <Link id="m-checkingpop" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" checkingPop"}</code> | The running `CheckPop` coroutine, if any. |
| <Link id="m-lid" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerlid">{"LiquidContainerLid"}</Link>{" lid"}</code> | The bottle's `LiquidContainerLid`, removed when the cap pops. |
| <Link id="m-popdirection" /><code>{"private Vector3 popDirection"}</code> | Local direction the hand has to pull to pop the cap. |
| <Link id="m-popdistance" /><code>{"private float popDistance"}</code> | How far (0.1 by default) the hand has to pull along `popDirection` to pop the cap. |
| <Link id="m-synccapremoved" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCapRemoved"}</code> | Method sync that sends the cap removal from client to server. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | Only lets the cap be grabbed while its lid is on and the bottle is held by the same player. Gives it top priority when allowed. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `PotionCapRemoved` method sync. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks `InteractionStarted` to start checking for the pop. |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | Turns off the cap's colliders. |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> | Turns the cap's colliders back on. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Hooks the bottle's release and dock events. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpop" /><code>{"private IEnumerator CheckPop() (iterator)"}</code> | Local coroutine: once the hand has moved `popDistance` along `popDirection`, lets go and tells the server the cap came off. |
| <Link id="m-release" /><code>{"private void Release("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Lets go of the cap when the bottle is let go. |
| <Link id="m-releasedocked" /><code>{"private void ReleaseDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Lets go of the cap when the bottle is docked. |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Restarts the pop check coroutine when the local player grabs the cap. |
| <Link id="m-synccapremoved-2" /><code>{"private void SyncCapRemoved("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: removes the lid when the message comes from the player who last held the cap. |
| <Link id="m-togglecolliders" /><code>{"private void ToggleColliders(bool isEnabled)"}</code> | Turns all the cap's colliders on or off. |

</details>
