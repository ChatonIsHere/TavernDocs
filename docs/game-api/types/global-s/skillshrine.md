---
title: "SkillShrine"
description: "A progression shrine showing one path's skill tree."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrine

A **class** in `Root.Township`, no namespace.

A progression shrine showing one path's skill tree. When a player opens it, the server spawns a `SkillOrb` per slot and lines between them; closing removes them. The current path is saved.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ProgressionShrine`](/game-api/types/global-p/progressionshrine), [`ISavable<SkillShrineSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SkillShrineSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SkillShrineSaveData`](/game-api/types/global-s/skillshrinesavedata)
- **Nested types** [`ApliedSlotTuple`](/game-api/types/global-s/skillshrine-apliedslottuple), [`ConnectionSyncArgument`](/game-api/types/global-s/skillshrine-connectionsyncargument), [`NewPathArgument`](/game-api/types/global-s/skillshrine-newpathargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillShrine()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeconnections" /><code>{"private List<"}<Link to="/game-api/types/global-s/skillorbconnectionline">{"SkillOrbConnectionline"}</Link>{"> activeConnections"}</code> | Client: the connection lines drawn between orbs, destroyed when the shrine closes. |
| <Link id="m-connectionshrinkspeed" /><code>{"private float connectionShrinkSpeed"}</code> | Backing field for `ConnectionShrinkSpeed`. Default 0.2. |
| <Link id="m-currentpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentPath"}</code> | Backing field for `CurrentPath`, the progression path this shrine shows. Saved and synced. |
| <Link id="m-delaybetweenfirstpracticeandclose" /><code>{"private float delayBetweenFirstPracticeAndClose"}</code> | Seconds to wait after the first practice before ending it. Default 0.5. |
| <Link id="m-fillvisualizer" /><code>{"private "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" fillVisualizer"}</code> | Experience fill shown for the current path; returned by `GetVisualizer`. |
| <Link id="m-internaloffset" /><code>{"private Vector2 internalOffset"}</code> | Serialized offset, default (0.5, 0.5). Not read anywhere in this class. |
| <Link id="m-linedefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lineDefinition"}</code> | Backing field for `LineDefinition`, the pooled line used between orbs. |
| <Link id="m-maxpathvalue" /><code>{"private int maxPathValue"}</code> | Number of `ProgressionPath` values, the upper bound when syncing the path. |
| <Link id="m-skillorboperator" /><code>{"private "}<Link to="/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" skillOrbOperator"}</code> | Backing field for `SkillOrbOperator`. |
| <Link id="m-skilltreerayorigin" /><code>{"private Transform skillTreeRayOrigin"}</code> | Backing field for `SkillTreeRayOrigin`; orbs spawn here and fly to their slots. |
| <Link id="m-skilltreetarget" /><code>{"private Transform skillTreeTarget"}</code> | Backing field for `SkillTreeTarget`; slot positions are laid out around it. |
| <Link id="m-skilorbprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" skilOrbPrefab"}</code> | Backing field for `SkilOrbPrefab`, the orb spawned for each slot of the skill tree. |
| <Link id="m-spawnedorbsmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-s/skillshrine-apliedslottuple">{"SkillShrine.ApliedSlotTuple"}</Link>{"> spawnedOrbsMap"}</code> | Server: spawned orbs by slot hash, used to build the connection sync. |
| <Link id="m-syncconnections" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-s/skillshrine-connectionsyncargument">{"SkillShrine.ConnectionSyncArgument"}</Link>{"> syncConnections"}</code> | Sync channel (SyncC) for orb connections. |
| <Link id="m-syncpath" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPath"}</code> | Sync channel (SyncB) for the current path. |
| <Link id="m-testingarea" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea"}</code> | Backing field for `TestingArea`, where players practise a skill. |
| <Link id="m-visualizers" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"[] visualizers"}</code> | Backing field for `Visualizers`; each is told the current path. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectionshrinkspeed-2" /><code>{"float ConnectionShrinkSpeed { get; }"}</code> | How fast the lines between orbs shrink away. |
| <Link id="m-currentpath-2" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; }"}</code> | The progression path whose tree this shrine shows. |
| <Link id="m-linedefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LineDefinition { get; }"}</code> | Pooled object used to draw lines between orbs. |
| <Link id="m-skillorboperator-2" /><code><Link to="/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" "}<Link to="/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" { get; }"}</code> | The skill orb operator for this shrine. |
| <Link id="m-skilltreerayorigin-2" /><code>{"Transform SkillTreeRayOrigin { get; }"}</code> | Where orbs start from when they fly out. |
| <Link id="m-skilltreetarget-2" /><code>{"Transform SkillTreeTarget { get; }"}</code> | Centre and rotation the tree's slot positions are laid out from. |
| <Link id="m-skilorbprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" SkilOrbPrefab { get; }"}</code> | Prefab spawned for each skill orb. |
| <Link id="m-spawnedorbs" /><code>{"List<"}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{"> SpawnedOrbs { get; }"}</code> | The orbs currently out. |
| <Link id="m-testingarea-2" /><code><Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" TestingArea { get; }"}</code> | Area that opens while a player practises an orb. |
| <Link id="m-visualizers-2" /><code>{"override IEnumerable<"}<Link to="/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> | The shrine's path visualizers. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualizer" /><code>{"override "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | The experience fill visualizer for the shrine's own path, else null. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the synced path and connection messages. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: prepares the orb map and sets the visualizers to the current path. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the path, the orb connections if open, and the testing area state to a new player. |
| <Link id="m-setnewpath" /><code>{"void SetNewPath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Server: changes the shrine's path and syncs it. Does not reopen the tree. |
| <Link id="m-closeinternal" /><code>{"protected override void CloseInternal()"}</code> | Ends any practice, removes connection lines and, on the server, destroys the spawned orbs. |
| <Link id="m-openonclient" /><code>{"protected override void OpenOnClient()"}</code> | Client: hooks the testing area to the player's practised-slot event. |
| <Link id="m-openonserver" /><code>{"protected override void OpenOnServer()"}</code> | Server: spawns an orb for each slot in the path's tree with the player's status and starts watching for practised skills. |
| <Link id="m-updatevisuals" /><code>{"protected override void UpdateVisuals("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" updatedPath)"}</code> | Rechecks every orb's status, then updates the base visuals. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Counts the `ProgressionPath` values for sync bounds and, on clients, creates the connection line list. |
| <Link id="m-delayendpractice" /><code>{"private IEnumerator DelayEndPractice() (iterator)"}</code> | Server: waits `delayBetweenFirstPracticeAndClose` seconds, then ends practice if the same orb is still being practised. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws a sphere at the skill tree target. |
| <Link id="m-skillpracticed" /><code>{"private void SkillPracticed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Server: hooked to `ProfessionSkill.OnSkillExecuted` while open. Marks the practising orb's slot practised when its skill runs, and may end practice. |
| <Link id="m-syncconnections-2" /><code>{"private void SyncConnections("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-s/skillshrine-connectionsyncargument">{"SkillShrine.ConnectionSyncArgument"}</Link>{" arguments)"}</code> | Sync handler that sends orb pairs to link; clients create a connection line for each pair. |
| <Link id="m-syncpath-2" /><code>{"private void SyncPath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sync handler for `currentPath`; clients update their visualizers to the new path. |
| <Link id="m-updatepracticing" /><code>{"private void UpdatePracticing("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, bool isPracticing, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" playerProgressionManager)"}</code> | Opens the testing area for an orb when practice starts and disables it when practice stops. |

</details>

## Used in

Members of other types that take, return or hold a `SkillShrine`:

[`GymnasiumXpStatusDisplay.shrine`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-shrine), [`GymnasiumXpStatusDisplay.Shrine`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-shrine-2), [`SkillOrb.InitializeSlot`](/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Shrine`](/game-api/types/global-s/skillorb#m-shrine), [`SkillOrbConnectionline.shrine`](/game-api/types/global-s/skillorbconnectionline#m-shrine), [`SkillOrbConnectionline.SkillOrbConnectionline`](/game-api/types/global-s/skillorbconnectionline#m-ctor), [`SkillOrbScaler.shrine`](/game-api/types/global-s/skillorbscaler#m-shrine), [`SkillShrineTestingArea.shrine`](/game-api/types/global-s/skillshrinetestingarea#m-shrine), [`SkillsStructureRotator.shrine`](/game-api/types/global-s/skillsstructurerotator#m-shrine).
