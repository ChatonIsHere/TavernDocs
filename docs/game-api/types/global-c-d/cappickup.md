---
title: "CapPickup"
description: "class CapPickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CapPickup

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-bottlepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bottlePickup"}</code> |
| <Link id="m-checkingpop" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" checkingPop"}</code> |
| <Link id="m-lid" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainerlid">{"LiquidContainerLid"}</Link>{" lid"}</code> |
| <Link id="m-popdirection" /><code>{"private Vector3 popDirection"}</code> |
| <Link id="m-popdistance" /><code>{"private float popDistance"}</code> |
| <Link id="m-synccapremoved" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCapRemoved"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-assessscore" /><code>{"override bool AssessScore("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkpop" /><code>{"private IEnumerator CheckPop() (iterator)"}</code> |
| <Link id="m-release" /><code>{"private void Release("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-releasedocked" /><code>{"private void ReleaseDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-synccapremoved-2" /><code>{"private void SyncCapRemoved("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-togglecolliders" /><code>{"private void ToggleColliders(bool isEnabled)"}</code> |

</details>
