---
title: "PowerStrikeTester"
description: "class PowerStrikeTester in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PowerStrikeTester

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IProfessionSkillTester`](/game-api/types/global-i-l/iprofessionskilltester)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PowerStrikeTester()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-countvisualprefab" /><code>{"private GameObject countVisualPrefab"}</code> |
| <Link id="m-countvisuals" /><code>{"private MeshRenderer[] countVisuals"}</code> |
| <Link id="m-currentcount" /><code>{"private int currentCount"}</code> |
| <Link id="m-dimmaterial" /><code>{"private Material dimMaterial"}</code> |
| <Link id="m-litmaterial" /><code>{"private Material litMaterial"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |
| <Link id="m-readymaterial" /><code>{"private Material readyMaterial"}</code> |
| <Link id="m-skill" /><code>{"private "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill"}</code> |
| <Link id="m-spawnwidth" /><code>{"private float spawnWidth"}</code> |
| <Link id="m-synccount" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCount"}</code> |
| <Link id="m-syncstart" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStart"}</code> |
| <Link id="m-targetcount" /><code>{"private int targetCount"}</code> |
| <Link id="m-visualsfolder" /><code>{"private Transform visualsFolder"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeforplayer" /><code>{"void InitializeForPlayer("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-initializevisuals" /><code>{"private void InitializeVisuals()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-synccount-2" /><code>{"private void SyncCount("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncstart-2" /><code>{"private void SyncStart("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updatecount" /><code>{"private void UpdateCount("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, int strikeCount)"}</code> |
| <Link id="m-updatevisual" /><code>{"private void UpdateVisual()"}</code> |
| <Link id="m-visualpositions" /><code>{"private IEnumerable<Vector3> VisualPositions() (iterator)"}</code> |

</details>
