---
title: "OnDestroyEvent"
description: "Fires a Unity event when its entity is destroyed, on the sides you pick."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnDestroyEvent

A **class** in `Root.Township`, the global namespace.

Fires a Unity event when its entity is destroyed, on the sides you pick. Also fires when the entity is unloaded.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnDestroyEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyevent" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" destroyEvent"}</code> | <span className="api-desc">Event to fire.</span> |
| <Link id="m-iscallinginlocaltest" /><code>{"private bool isCallingInLocalTest"}</code> | <span className="api-desc">Fire in local test.</span> |
| <Link id="m-iscallingonclient" /><code>{"private bool isCallingOnClient"}</code> | <span className="api-desc">Fire on clients.</span> |
| <Link id="m-iscallingonserver" /><code>{"private bool isCallingOnServer"}</code> | <span className="api-desc">Fire on the server.</span> |
| <Link id="m-isusingunitydestroy" /><code>{"private bool isUsingUnityDestroy"}</code> | <span className="api-desc">If true, fires from Unity's `OnDestroy`, when child objects are already gone, instead of the scene destroy event.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the entity's scene destroy event, unless using Unity's destroy.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"private void Destroyed()"}</code> | <span className="api-desc">Fires the event if this side is enabled.</span> |
| <Link id="m-entitydestroyedbyscene" /><code>{"private void EntityDestroyedByScene("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Calls `Destroyed` when the scene destroys or unloads the entity.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Calls `Destroyed` if using Unity's destroy.</span> |

</details>
