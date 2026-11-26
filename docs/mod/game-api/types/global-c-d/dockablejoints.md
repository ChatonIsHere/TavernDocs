---
title: "DockableJoints"
description: "A pickup with jointed child rigidbodies that freezes them and snaps them back to their starting local poses while it is docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockableJoints

A **class** in `Root.Township`, the global namespace.

A pickup with jointed child rigidbodies that freezes them and snaps them back to their starting local poses while it is docked.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`Pickup`](/mod/game-api/types/global-p/pickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockableJoints()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodiescount" /><code>{"private int bodiesCount"}</code> | <span className="api-desc">Number of entries in `jointedBodies`, cached in `Awake`.</span> |
| <Link id="m-jointedbodies" /><code>{"private Rigidbody[] jointedBodies"}</code> | <span className="api-desc">The child rigidbodies to freeze while docked.</span> |
| <Link id="m-saves" /><code>{"private TransformSave[] saves"}</code> | <span className="api-desc">Local transform of each jointed body as recorded in `Awake`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks the dock and undock events and records each jointed body's local transform.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondocked" /><code>{"private void OnDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Makes every jointed body kinematic and restores its saved local transform.</span> |
| <Link id="m-onundocked" /><code>{"private void OnUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Makes the jointed bodies non-kinematic again so the joints move freely.</span> |

</details>
