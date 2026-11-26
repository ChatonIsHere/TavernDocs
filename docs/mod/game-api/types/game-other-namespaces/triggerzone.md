---
title: "TriggerZone"
description: "Client: a box zone that fires its zone events when the local player leaves it (or teleports through it, or logs out inside it), passing how long they were..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerZone

A **class** in `Root.Township`, `ATT.Triggers`.

Client: a box zone that fires its zone events when the local player leaves it (or teleports through it, or logs out inside it), passing how long they were inside.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`ITeleportAwareTrigger`](/mod/game-api/types/global-i-l/iteleportawaretrigger), [`IForcePresenceOnAndroidClient`](/mod/game-api/types/alta-networking/iforcepresenceonandroidclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerZone()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entertimestampinseconds" /><code>{"private int enterTimeStampInSeconds"}</code> | <span className="api-desc">Real time the player entered, in whole seconds.</span> |
| <Link id="m-localbounds" /><code>{"private Bounds localBounds"}</code> | <span className="api-desc">The zone box in local space.</span> |
| <Link id="m-onexittriggers" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/zoneevent">{"ZoneEvent"}</Link>{"[] onExitTriggers"}</code> | <span className="api-desc">Zone events fired on exit.</span> |
| <Link id="m-triggereventdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/triggereventdata">{"TriggerEventData"}</Link>{" triggerEventData"}</code> | <span className="api-desc">Data (such as the event name) passed to the zone events.</span> |
| <Link id="m-wasplayerinsidezone" /><code>{"private bool wasPlayerInsideZone"}</code> | <span className="api-desc">Whether the player was inside at the last position change.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" _)"}</code> | <span className="api-desc">Fires the exit events when a teleport passes through the zone.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activateexitevent" /><code>{"private void ActivateExitEvent()"}</code> | <span className="api-desc">Fires every exit trigger with the event data and time spent, then clears the entry time.</span> |
| <Link id="m-checkinside" /><code>{"private bool CheckInside(Vector3 worldPosition)"}</code> | <span className="api-desc">True if a world position is inside the local bounds.</span> |
| <Link id="m-getduration" /><code>{"private int GetDuration()"}</code> | <span className="api-desc">Seconds since the player entered, or 0 if no entry was recorded.</span> |
| <Link id="m-loggedout" /><code>{"private void LoggedOut()"}</code> | <span className="api-desc">Fires the exit events if the player was inside.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the player, position and logout listeners.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the zone box in the editor.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the local player now, or when it is set.</span> |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">Listens to the local player's position changes and to logout.</span> |
| <Link id="m-onplayerpositionchanged" /><code>{"private void OnPlayerPositionChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Records the entry time on entering and fires the exit events on leaving.</span> |
| <Link id="m-setentrytimestamp" /><code>{"private void SetEntryTimeStamp()"}</code> | <span className="api-desc">Stores the current real time as the entry time.</span> |

</details>
