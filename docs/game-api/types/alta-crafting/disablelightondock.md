---
title: "DisableLightOnDock"
description: "Turns off a platform light on a crafting part when its root pickup is shrunk into a dock that does not allow glowing items, and back on when undocked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisableLightOnDock

A **class** in `Root.Township`, `Alta.Crafting`.

Turns off a platform light on a crafting part when its root pickup is shrunk into a dock that does not allow glowing items, and back on when undocked.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisableLightOnDock()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Pickup of the current root part. |
| <Link id="m-targetlight" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" targetLight"}</code> | The light to turn on and off. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts listening for the crafting part's root changes. |
| <Link id="m-checkenabledenable" /><code>{"private void CheckEnabledEnable("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On docking: keeps the light on only if the dock allows glowing items or is not scaling the pickup. |
| <Link id="m-forceenable" /><code>{"private void ForceEnable("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On undocking: turns the light back on. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the dock and undock hooks from the pickup. |
| <Link id="m-rootset" /><code>{"private void RootSet("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" root)"}</code> | Moves the dock and undock hooks to the new root's pickup. |

</details>
