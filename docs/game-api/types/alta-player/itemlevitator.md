---
title: "ItemLevitator"
description: "class ItemLevitator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemLevitator

A **class** in `Root.Township`, `Alta.Progression.Skills`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemLevitator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animatehover" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" animateHover"}</code> |  |
| <Link id="m-hoverposition" /><code>{"private Vector3 hoverPosition"}</code> |  |
| <Link id="m-hoverspeed" /><code>{"private float hoverSpeed"}</code> |  |
| <Link id="m-hoverstrength" /><code>{"private float hoverStrength"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-randomstartoffset" /><code>{"private float randomStartOffset"}</code> |  |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> |  |
| <Link id="m-velocitydrag" /><code>{"private float velocityDrag"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-checkhover" /><code>{"event "}<Link to="/game-api/types/global-q-r/refbooldelegate">{"RefBoolDelegate"}</Link>{" CheckHover"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stophovering-4" /><code>{"void StopHovering()"}</code> |  |
| <Link id="m-animatehover-2" /><code>{"private void AnimateHover()"}</code> |  |
| <Link id="m-checkstarthovering" /><code>{"private void CheckStartHovering("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-ensurenotdocked" /><code>{"private void EnsureNotDocked(ref bool isValid)"}</code> |  |
| <Link id="m-ensurenotinteractedwith" /><code>{"private void EnsureNotInteractedWith(ref bool isValid)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-starthovering" /><code>{"private void StartHovering()"}</code> |  |
| <Link id="m-stophovering" /><code>{"private void StopHovering("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-stophovering-2" /><code>{"private void StopHovering("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-stophovering-3" /><code>{"private void StopHovering("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ItemLevitator`:

[`ItemLevitatorExtension.levitator`](/game-api/types/alta-player/itemlevitatorextension#m-levitator), [`RemoteObiturator.levitator`](/game-api/types/alta-customization/remoteobiturator#m-levitator).
