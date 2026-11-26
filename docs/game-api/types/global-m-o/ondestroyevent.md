---
title: "OnDestroyEvent"
description: "Fires a Unity event when its entity is destroyed, on the sides you pick."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnDestroyEvent

A **class** in `Root.Township`, no namespace.

Fires a Unity event when its entity is destroyed, on the sides you pick. Also fires when the entity is unloaded.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnDestroyEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyevent" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" destroyEvent"}</code> | Event to fire. |
| <Link id="m-iscallinginlocaltest" /><code>{"private bool isCallingInLocalTest"}</code> | Fire in local test. |
| <Link id="m-iscallingonclient" /><code>{"private bool isCallingOnClient"}</code> | Fire on clients. |
| <Link id="m-iscallingonserver" /><code>{"private bool isCallingOnServer"}</code> | Fire on the server. |
| <Link id="m-isusingunitydestroy" /><code>{"private bool isUsingUnityDestroy"}</code> | If true, fires from Unity's `OnDestroy`, when child objects are already gone, instead of the scene destroy event. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the entity's scene destroy event, unless using Unity's destroy. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"private void Destroyed()"}</code> | Fires the event if this side is enabled. |
| <Link id="m-entitydestroyedbyscene" /><code>{"private void EntityDestroyedByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Calls `Destroyed` when the scene destroys or unloads the entity. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Calls `Destroyed` if using Unity's destroy. |

</details>
