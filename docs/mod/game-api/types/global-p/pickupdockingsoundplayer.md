---
title: "PickupDockingSoundPlayer"
description: "Client-side component that plays a sound when its pickup is docked or undocked by a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockingSoundPlayer

A **class** in `Root.Township`, the global namespace.

Client-side component that plays a sound when its pickup is docked or undocked by a player. Removes itself on a headless server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockingSoundPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docking" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" docking"}</code> | <span className="api-desc">Sound set for docking.</span> |
| <Link id="m-dockingsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" dockingSound"}</code> | <span className="api-desc">Old single docking sound, migrated into `docking`. Still the one actually played.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup on the same object.</span> |
| <Link id="m-undocking" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" undocking"}</code> | <span className="api-desc">Sound set for undocking.</span> |
| <Link id="m-undockingsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" undockingSound"}</code> | <span className="api-desc">Old single undocking sound, migrated into `undocking`. Still the one actually played.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys the component on a headless server.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the dock events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the pickup's `Docked` and `Undocked` events.</span> |
| <Link id="m-playdockingsound" /><code>{"private void PlayDockingSound("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">If an interactor did it, plays the docking or undocking sound at the pickup, depending on whether it's now in a dock.</span> |

</details>
