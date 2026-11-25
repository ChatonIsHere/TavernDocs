---
title: "BasicDigable"
description: "class BasicDigable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDigable

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDigable`](/game-api/types/global-i-l/idigable)
- **Derived types** [`HealthBasedDigable`](/game-api/types/global-e-h/healthbaseddigable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDigable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ondighiteffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDigHitEffects"}</code> |  |
| <Link id="m-ondugeffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDugEffects"}</code> |  |
| <Link id="m-ondugserver" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onDugServer"}</code> |  |
| <Link id="m-syncdig" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDig"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"virtual void Dig(float diggingDamage)"}</code> |  |
| <Link id="m-diggingtoolhit" /><code>{"void DiggingToolHit()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-syncdig-2" /><code>{"private void SyncDig("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isDig)"}</code> |  |
