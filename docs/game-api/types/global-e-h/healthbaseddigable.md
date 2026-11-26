---
title: "HealthBasedDigable"
description: "class HealthBasedDigable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthBasedDigable

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`BasicDigable`](/game-api/types/global-a-b/basicdigable), [`ISavable<HealthBasedDigableData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<HealthBasedDigableData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`HealthBasedDigableData`](/game-api/types/global-e-h/healthbaseddigabledata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HealthBasedDigable()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currenthealth" /><code>{"private float currentHealth"}</code> |
| <Link id="m-digginghealth" /><code>{"private float diggingHealth"}</code> |
| <Link id="m-onhealthchangedeffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onHealthChangedEffects"}</code> |
| <Link id="m-onhealthchangedprogress" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onHealthChangedProgress"}</code> |
| <Link id="m-synchealth" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncHealth"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-dig" /><code>{"override void Dig(float diggingDamage)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-runeffects" /><code>{"private void RunEffects()"}</code> |
| <Link id="m-synchealth-2" /><code>{"private void SyncHealth("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> |

</details>
