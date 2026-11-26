---
title: "QuestMarkerDataUpdater"
description: "Client: static updater that feeds the local player's head position to every active quest marker each frame, while any markers exist."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuestMarkerDataUpdater

A **static class** in `Root.Township`, the global namespace.

Client: static updater that feeds the local player's head position to every active quest marker each frame, while any markers exist.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemarkers" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/game-other-namespaces/questmarker">{"QuestMarker"}</Link>{"> activeMarkers"}</code> | Quest markers currently being updated. |
| <Link id="m-update" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered update method. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmarker" /><code>{"static void AddMarker("}<Link to="/mod/game-api/types/game-other-namespaces/questmarker">{"QuestMarker"}</Link>{" marker)"}</code> | Adds a marker; the first one starts listening for the local player. |
| <Link id="m-removemarker" /><code>{"static void RemoveMarker("}<Link to="/mod/game-api/types/game-other-namespaces/questmarker">{"QuestMarker"}</Link>{" marker)"}</code> | Removes a marker; the last one stops the updates. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playercontrollerchanged" /><code>{"private static void PlayerControllerChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" newPlayerController)"}</code> | Starts the per-frame update when there is a local player, stops it when there isn't. |
| <Link id="m-registerplayercontrollerevent" /><code>{"private static void RegisterPlayerControllerEvent()"}</code> | Subscribes to local player changes and applies the current player. |
| <Link id="m-unregisterplayercontrollerevent" /><code>{"private static void UnregisterPlayerControllerEvent()"}</code> | Unsubscribes from local player changes and stops the update. |
| <Link id="m-updatemarker" /><code>{"private static void UpdateMarker()"}</code> | Calls `UpdateMarker` on each active marker with the local player's head position. |

</details>
