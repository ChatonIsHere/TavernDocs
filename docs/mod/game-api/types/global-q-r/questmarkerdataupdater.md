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

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemarkers" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/game-other-namespaces/questmarker">{"QuestMarker"}</Link>{"> activeMarkers"}</code> | <span className="api-desc">Quest markers currently being updated.</span> |
| <Link id="m-update" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered update method.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmarker" /><code>{"static void AddMarker("}<Link to="/mod/game-api/types/game-other-namespaces/questmarker">{"QuestMarker"}</Link>{" marker)"}</code> | <span className="api-desc">Adds a marker; the first one starts listening for the local player.</span> |
| <Link id="m-removemarker" /><code>{"static void RemoveMarker("}<Link to="/mod/game-api/types/game-other-namespaces/questmarker">{"QuestMarker"}</Link>{" marker)"}</code> | <span className="api-desc">Removes a marker; the last one stops the updates.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playercontrollerchanged" /><code>{"private static void PlayerControllerChanged("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" newPlayerController)"}</code> | <span className="api-desc">Starts the per-frame update when there is a local player, stops it when there isn't.</span> |
| <Link id="m-registerplayercontrollerevent" /><code>{"private static void RegisterPlayerControllerEvent()"}</code> | <span className="api-desc">Subscribes to local player changes and applies the current player.</span> |
| <Link id="m-unregisterplayercontrollerevent" /><code>{"private static void UnregisterPlayerControllerEvent()"}</code> | <span className="api-desc">Unsubscribes from local player changes and stops the update.</span> |
| <Link id="m-updatemarker" /><code>{"private static void UpdateMarker()"}</code> | <span className="api-desc">Calls `UpdateMarker` on each active marker with the local player's head position.</span> |

</details>
