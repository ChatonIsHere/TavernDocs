---
title: "TriggerZone"
description: "class TriggerZone in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerZone

A **class** in `Root.Township`, `ATT.Triggers`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`, [`ITeleportAwareTrigger`](/game-api/types/global-i-l/iteleportawaretrigger), [`IForcePresenceOnAndroidClient`](/game-api/types/alta-networking/iforcepresenceonandroidclient)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerZone()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-entertimestampinseconds" /><code>{"private int enterTimeStampInSeconds"}</code> |
| <Link id="m-localbounds" /><code>{"private Bounds localBounds"}</code> |
| <Link id="m-onexittriggers" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/zoneevent">{"ZoneEvent"}</Link>{"[] onExitTriggers"}</code> |
| <Link id="m-triggereventdata" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/triggereventdata">{"TriggerEventData"}</Link>{" triggerEventData"}</code> |
| <Link id="m-wasplayerinsidezone" /><code>{"private bool wasPlayerInsideZone"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" _)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-activateexitevent" /><code>{"private void ActivateExitEvent()"}</code> |
| <Link id="m-checkinside" /><code>{"private bool CheckInside(Vector3 worldPosition)"}</code> |
| <Link id="m-getduration" /><code>{"private int GetDuration()"}</code> |
| <Link id="m-loggedout" /><code>{"private void LoggedOut()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-onlocalplayerset" /><code>{"private void OnLocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |
| <Link id="m-onplayerpositionchanged" /><code>{"private void OnPlayerPositionChanged("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-setentrytimestamp" /><code>{"private void SetEntryTimeStamp()"}</code> |

</details>
