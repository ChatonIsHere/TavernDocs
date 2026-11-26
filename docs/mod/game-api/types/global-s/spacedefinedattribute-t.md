---
title: "SpaceDefinedAttribute<T>"
description: "Base for trigger areas whose effect follows a network of connected SpacePoints, such as atmosphere and darkness areas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceDefinedAttribute&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for trigger areas whose effect follows a network of connected `SpacePoint`s, such as atmosphere and darkness areas. While the local player is inside, it finds the nearest point pair and reports progress between them.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`SpaceDefinedAtmosphere`](/mod/game-api/types/alta-world/spacedefinedatmosphere), [`DarknessArea`](/mod/game-api/types/global-c-d/darknessarea), [`TriggerArea`](/mod/game-api/types/global-t-x/triggerarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpaceDefinedAttribute()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-closestpoint" /><code>{"protected T closestPoint"}</code> | <span className="api-desc">The point the player is closest to, or null outside the area.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localplayer" /><code>{"private Transform localPlayer"}</code> | <span className="api-desc">Transform of the collider that entered, treated as the local player.</span> |
| <Link id="m-timestriggered" /><code>{"private int timesTriggered"}</code> | <span className="api-desc">Count of colliders currently inside, so enter and exit run only once.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle of the closest point update.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"abstract IEnumerable<T> Points { get; }"}</code> | <span className="api-desc">The space points that define the area.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterarea" /><code>{"protected virtual void EnterArea()"}</code> | <span className="api-desc">Called when the player first enters the trigger. Does nothing by default.</span> |
| <Link id="m-exitarea" /><code>{"protected abstract void ExitArea()"}</code> | <span className="api-desc">Called when the player leaves the trigger.</span> |
| <Link id="m-sendnewcloserpoint" /><code>{"protected abstract void SendNewCloserPoint(T from, T to, float progress)"}</code> | <span className="api-desc">Called each update with the closest point pair and the blended weight between them.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">On the first overlapping collider, tracks it as the local player, starts updating the closest point and calls `EnterArea`.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">When the last collider leaves, stops updating and calls `ExitArea`.</span> |
| <Link id="m-updateclosest" /><code>{"private void UpdateClosest()"}</code> | <span className="api-desc">Finds the nearest line between connected points to the player and sends the blended weight via `SendNewCloserPoint`.</span> |

</details>
