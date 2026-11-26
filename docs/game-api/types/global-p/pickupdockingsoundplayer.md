---
title: "PickupDockingSoundPlayer"
description: "Client-side component that plays a sound when its pickup is docked or undocked by a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockingSoundPlayer

A **class** in `Root.Township`, no namespace.

Client-side component that plays a sound when its pickup is docked or undocked by a player. Removes itself on a headless server.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupDockingSoundPlayer()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docking" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" docking"}</code> | Sound set for docking. |
| <Link id="m-dockingsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" dockingSound"}</code> | Old single docking sound, migrated into `docking`. Still the one actually played. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on the same object. |
| <Link id="m-undocking" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" undocking"}</code> | Sound set for undocking. |
| <Link id="m-undockingsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" undockingSound"}</code> | Old single undocking sound, migrated into `undocking`. Still the one actually played. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys the component on a headless server. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the dock events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the pickup's `Docked` and `Undocked` events. |
| <Link id="m-playdockingsound" /><code>{"private void PlayDockingSound("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | If an interactor did it, plays the docking or undocking sound at the pickup, depending on whether it's now in a dock. |

</details>
