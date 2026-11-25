---
title: "SpaceDefinedAttribute<T>"
description: "abstract class SpaceDefinedAttribute<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceDefinedAttribute&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

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
| <Link id="m-closestpoint" /><code>{"protected T closestPoint"}</code> |  |
| <Link id="m-localplayer" /><code>{"private Transform localPlayer"}</code> |  |
| <Link id="m-timestriggered" /><code>{"private int timesTriggered"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"abstract IEnumerable<T> Points { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterarea" /><code>{"protected virtual void EnterArea()"}</code> |  |
| <Link id="m-exitarea" /><code>{"protected abstract void ExitArea()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-sendnewcloserpoint" /><code>{"protected abstract void SendNewCloserPoint(T from, T to, float progress)"}</code> |  |
| <Link id="m-updateclosest" /><code>{"private void UpdateClosest()"}</code> |  |
