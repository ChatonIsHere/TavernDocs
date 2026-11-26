---
title: "PowerStrikeTester"
description: "Network entity at a skill shrine test area that shows a row of lights counting a player's strikes towards a strike succession skill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStrikeTester

A **class** in `Root.Township`, the global namespace.

Network entity at a skill shrine test area that shows a row of lights counting a player's strikes towards a strike succession skill. The server sends the count; clients light the markers.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IProfessionSkillTester`](/mod/game-api/types/global-i-l/iprofessionskilltester)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PowerStrikeTester()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-countvisualprefab" /><code>{"private GameObject countVisualPrefab"}</code> | Marker prefab. |
| <Link id="m-countvisuals" /><code>{"private MeshRenderer[] countVisuals"}</code> | Marker renderers. |
| <Link id="m-currentcount" /><code>{"private int currentCount"}</code> | Strikes made so far. |
| <Link id="m-dimmaterial" /><code>{"private Material dimMaterial"}</code> | Material for markers not yet reached. |
| <Link id="m-litmaterial" /><code>{"private Material litMaterial"}</code> | Material for markers reached. |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | Player being tested. |
| <Link id="m-readymaterial" /><code>{"private Material readyMaterial"}</code> | Material for all markers once the count is reached. |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill"}</code> | The skill being tested. |
| <Link id="m-spawnwidth" /><code>{"private float spawnWidth"}</code> | Width of the marker row. |
| <Link id="m-synccount" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCount"}</code> | Sync for the current count. |
| <Link id="m-syncstart" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStart"}</code> | Sync for the needed count. |
| <Link id="m-targetcount" /><code>{"private int targetCount"}</code> | Strikes needed. |
| <Link id="m-visualsfolder" /><code>{"private Transform visualsFolder"}</code> | Parent of the markers. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the start and count sync messages. |
| <Link id="m-initializeforplayer" /><code>{"void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: for a strike succession skill, stores the player, reads the needed strike count, sends it and listens for count changes. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the needed count to a joining player. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializevisuals" /><code>{"private void InitializeVisuals()"}</code> | Client: makes or trims the marker objects to match the needed count and lays them out. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops listening for strike count changes. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the marker layout in the editor. |
| <Link id="m-synccount-2" /><code>{"private void SyncCount("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends or reads the current strike count (0 to 7) and updates the markers. |
| <Link id="m-syncstart-2" /><code>{"private void SyncStart("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends or reads the needed strike count (0 to 7) and builds the markers on clients. |
| <Link id="m-updatecount" /><code>{"private void UpdateCount("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, int strikeCount)"}</code> | Server: when the tracked player's count for the skill changes, sends it. |
| <Link id="m-updatevisual" /><code>{"private void UpdateVisual()"}</code> | Lights one marker per strike, or shows all as ready once the count is reached. |
| <Link id="m-visualpositions" /><code>{"private IEnumerable<Vector3> VisualPositions() (iterator)"}</code> | Spaces the markers evenly along `spawnWidth`. |

</details>
