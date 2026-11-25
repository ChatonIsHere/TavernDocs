---
title: "SpaceDefinedAttribute<T>"
description: "Base for trigger areas whose effect follows a network of connected SpacePoints, such as atmosphere and darkness areas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceDefinedAttribute&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

Base for trigger areas whose effect follows a network of connected `SpacePoint`s, such as atmosphere and darkness areas. While the local player is inside, it finds the nearest point pair and reports progress between them.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`SpaceDefinedAtmosphere`](/game-api/types/alta-world/spacedefinedatmosphere), [`DarknessArea`](/game-api/types/global-c-d/darknessarea), [`TriggerArea`](/game-api/types/global-t-x/triggerarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpaceDefinedAttribute()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-closestpoint" /><code>{"protected T closestPoint"}</code> | The point the player is closest to, or null outside the area. |
| <Link id="m-localplayer" /><code>{"private Transform localPlayer"}</code> |  |
| <Link id="m-timestriggered" /><code>{"private int timesTriggered"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"abstract IEnumerable<T> Points { get; }"}</code> | The space points that define the area. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterarea" /><code>{"protected virtual void EnterArea()"}</code> | Called when the player first enters the trigger. Does nothing by default. |
| <Link id="m-exitarea" /><code>{"protected abstract void ExitArea()"}</code> | Called when the player leaves the trigger. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-sendnewcloserpoint" /><code>{"protected abstract void SendNewCloserPoint(T from, T to, float progress)"}</code> | Called each update with the closest point pair and the blended weight between them. |
| <Link id="m-updateclosest" /><code>{"private void UpdateClosest()"}</code> |  |
