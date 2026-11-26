---
title: "HealthBasedDigable"
description: "Diggable object (such as a dirt pile) that takes several digs to remove."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthBasedDigable

A **class** in `Root.Township`, the global namespace.

Diggable object (such as a dirt pile) that takes several digs to remove. Server tracks and saves its remaining health and syncs it to clients.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`BasicDigable`](/mod/game-api/types/global-a-b/basicdigable), [`ISavable<HealthBasedDigableData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<HealthBasedDigableData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`HealthBasedDigableData`](/mod/game-api/types/global-e-h/healthbaseddigabledata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthBasedDigable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenthealth" /><code>{"private float currentHealth"}</code> | Remaining health from 1 down to 0; saved. |
| <Link id="m-digginghealth" /><code>{"private float diggingHealth"}</code> | Total digging damage needed to remove the object. |
| <Link id="m-onhealthchangedeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onHealthChangedEffects"}</code> | Event raised with the position when a dig doesn't finish the object. |
| <Link id="m-onhealthchangedprogress" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onHealthChangedProgress"}</code> | Event raised with dig progress from 0 to 1. |
| <Link id="m-synchealth" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncHealth"}</code> | Network message used to send health. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"override void Dig(float diggingDamage)"}</code> | Server: lowers health by the damage over `diggingHealth`; removes it like a normal dig at zero, else syncs and plays hit effects. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the health sync message. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current health to a joining player without effects. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-runeffects" /><code>{"private void RunEffects()"}</code> | Plays the hit effects at this position and reports progress as one minus health. |
| <Link id="m-synchealth-2" /><code>{"private void SyncHealth("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | Reads or writes health and an effects flag; clients play the effects when the flag is set. |

</details>
