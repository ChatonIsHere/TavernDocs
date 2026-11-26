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
| <Link id="m-ctor" /><code>{"TriggerZone()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entertimestampinseconds" /><code>{"private int enterTimeStampInSeconds"}</code> | Real time the player entered, in whole seconds. |
| <Link id="m-localbounds" /><code>{"private Bounds localBounds"}</code> | The zone box in local space. |
| <Link id="m-onexittriggers" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/zoneevent">{"ZoneEvent"}</Link>{"[] onExitTriggers"}</code> | Zone events fired on exit. |
| <Link id="m-triggereventdata" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/triggereventdata">{"TriggerEventData"}</Link>{" triggerEventData"}</code> | Data (such as the event name) passed to the zone events. |
| <Link id="m-wasplayerinsidezone" /><code>{"private bool wasPlayerInsideZone"}</code> | Whether the player was inside at the last position change. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" _)"}</code> | Fires the exit events when a teleport passes through the zone. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activateexitevent" /><code>{"private void ActivateExitEvent()"}</code> | Fires every exit trigger with the event data and time spent, then clears the entry time. |
| <Link id="m-checkinside" /><code>{"private bool CheckInside(Vector3 worldPosition)"}</code> | True if a world position is inside the local bounds. |
| <Link id="m-getduration" /><code>{"private int GetDuration()"}</code> | Seconds since the player entered, or 0 if no entry was recorded. |
| <Link id="m-loggedout" /><code>{"private void LoggedOut()"}</code> | Fires the exit events if the player was inside. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the player, position and logout listeners. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the zone box in the editor. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the local player now, or when it is set. |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Listens to the local player's position changes and to logout. |
| <Link id="m-onplayerpositionchanged" /><code>{"private void OnPlayerPositionChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Records the entry time on entering and fires the exit events on leaving. |
| <Link id="m-setentrytimestamp" /><code>{"private void SetEntryTimeStamp()"}</code> | Stores the current real time as the entry time. |

</details>
