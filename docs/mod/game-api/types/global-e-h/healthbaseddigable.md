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
| <Link id="m-ctor" /><code>{"HealthBasedDigable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenthealth" /><code>{"private float currentHealth"}</code> | <span className="api-desc">Remaining health from 1 down to 0; saved.</span> |
| <Link id="m-digginghealth" /><code>{"private float diggingHealth"}</code> | <span className="api-desc">Total digging damage needed to remove the object.</span> |
| <Link id="m-onhealthchangedeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onHealthChangedEffects"}</code> | <span className="api-desc">Event raised with the position when a dig doesn't finish the object.</span> |
| <Link id="m-onhealthchangedprogress" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onHealthChangedProgress"}</code> | <span className="api-desc">Event raised with dig progress from 0 to 1.</span> |
| <Link id="m-synchealth" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncHealth"}</code> | <span className="api-desc">Network message used to send health.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"override void Dig(float diggingDamage)"}</code> | <span className="api-desc">Server: lowers health by the damage over `diggingHealth`; removes it like a normal dig at zero, else syncs and plays hit effects.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the health sync message.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current health to a joining player without effects.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-runeffects" /><code>{"private void RunEffects()"}</code> | <span className="api-desc">Plays the hit effects at this position and reports progress as one minus health.</span> |
| <Link id="m-synchealth-2" /><code>{"private void SyncHealth("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | <span className="api-desc">Reads or writes health and an effects flag; clients play the effects when the flag is set.</span> |

</details>
