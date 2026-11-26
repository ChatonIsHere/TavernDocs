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
| <Link id="m-ctor" /><code>{"PowerStrikeTester()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-countvisualprefab" /><code>{"private GameObject countVisualPrefab"}</code> | <span className="api-desc">Marker prefab.</span> |
| <Link id="m-countvisuals" /><code>{"private MeshRenderer[] countVisuals"}</code> | <span className="api-desc">Marker renderers.</span> |
| <Link id="m-currentcount" /><code>{"private int currentCount"}</code> | <span className="api-desc">Strikes made so far.</span> |
| <Link id="m-dimmaterial" /><code>{"private Material dimMaterial"}</code> | <span className="api-desc">Material for markers not yet reached.</span> |
| <Link id="m-litmaterial" /><code>{"private Material litMaterial"}</code> | <span className="api-desc">Material for markers reached.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">Player being tested.</span> |
| <Link id="m-readymaterial" /><code>{"private Material readyMaterial"}</code> | <span className="api-desc">Material for all markers once the count is reached.</span> |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill"}</code> | <span className="api-desc">The skill being tested.</span> |
| <Link id="m-spawnwidth" /><code>{"private float spawnWidth"}</code> | <span className="api-desc">Width of the marker row.</span> |
| <Link id="m-synccount" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCount"}</code> | <span className="api-desc">Sync for the current count.</span> |
| <Link id="m-syncstart" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStart"}</code> | <span className="api-desc">Sync for the needed count.</span> |
| <Link id="m-targetcount" /><code>{"private int targetCount"}</code> | <span className="api-desc">Strikes needed.</span> |
| <Link id="m-visualsfolder" /><code>{"private Transform visualsFolder"}</code> | <span className="api-desc">Parent of the markers.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the start and count sync messages.</span> |
| <Link id="m-initializeforplayer" /><code>{"void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: for a strike succession skill, stores the player, reads the needed strike count, sends it and listens for count changes.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the needed count to a joining player.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializevisuals" /><code>{"private void InitializeVisuals()"}</code> | <span className="api-desc">Client: makes or trims the marker objects to match the needed count and lays them out.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops listening for strike count changes.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the marker layout in the editor.</span> |
| <Link id="m-synccount-2" /><code>{"private void SyncCount("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends or reads the current strike count (0 to 7) and updates the markers.</span> |
| <Link id="m-syncstart-2" /><code>{"private void SyncStart("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends or reads the needed strike count (0 to 7) and builds the markers on clients.</span> |
| <Link id="m-updatecount" /><code>{"private void UpdateCount("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, int strikeCount)"}</code> | <span className="api-desc">Server: when the tracked player's count for the skill changes, sends it.</span> |
| <Link id="m-updatevisual" /><code>{"private void UpdateVisual()"}</code> | <span className="api-desc">Lights one marker per strike, or shows all as ready once the count is reached.</span> |
| <Link id="m-visualpositions" /><code>{"private IEnumerable<Vector3> VisualPositions() (iterator)"}</code> | <span className="api-desc">Spaces the markers evenly along `spawnWidth`.</span> |

</details>
