---
title: "SkillShrine"
description: "A progression shrine showing one path's skill tree."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrine

A **class** in `Root.Township`, the global namespace.

A progression shrine showing one path's skill tree. When a player opens it, the server spawns a `SkillOrb` per slot and lines between them; closing removes them. The current path is saved.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ProgressionShrine`](/mod/game-api/types/global-p/progressionshrine), [`ISavable<SkillShrineSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SkillShrineSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SkillShrineSaveData`](/mod/game-api/types/global-s/skillshrinesavedata)
- **Nested types** [`ApliedSlotTuple`](/mod/game-api/types/global-s/skillshrine-apliedslottuple), [`ConnectionSyncArgument`](/mod/game-api/types/global-s/skillshrine-connectionsyncargument), [`NewPathArgument`](/mod/game-api/types/global-s/skillshrine-newpathargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillShrine()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeconnections" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/skillorbconnectionline">{"SkillOrbConnectionline"}</Link>{"> activeConnections"}</code> | <span className="api-desc">Client: the connection lines drawn between orbs, destroyed when the shrine closes.</span> |
| <Link id="m-connectionshrinkspeed" /><code>{"private float connectionShrinkSpeed"}</code> | <span className="api-desc">Backing field for `ConnectionShrinkSpeed`. Default 0.2.</span> |
| <Link id="m-currentpath" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentPath"}</code> | <span className="api-desc">Backing field for `CurrentPath`, the progression path this shrine shows. Saved and synced.</span> |
| <Link id="m-delaybetweenfirstpracticeandclose" /><code>{"private float delayBetweenFirstPracticeAndClose"}</code> | <span className="api-desc">Seconds to wait after the first practice before ending it. Default 0.5.</span> |
| <Link id="m-fillvisualizer" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" fillVisualizer"}</code> | <span className="api-desc">Experience fill shown for the current path; returned by `GetVisualizer`.</span> |
| <Link id="m-internaloffset" /><code>{"private Vector2 internalOffset"}</code> | <span className="api-desc">Serialized offset, default (0.5, 0.5). Not read anywhere in this class.</span> |
| <Link id="m-linedefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lineDefinition"}</code> | <span className="api-desc">Backing field for `LineDefinition`, the pooled line used between orbs.</span> |
| <Link id="m-maxpathvalue" /><code>{"private int maxPathValue"}</code> | <span className="api-desc">Number of `ProgressionPath` values, the upper bound when syncing the path.</span> |
| <Link id="m-skillorboperator" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" skillOrbOperator"}</code> | <span className="api-desc">Backing field for `SkillOrbOperator`.</span> |
| <Link id="m-skilltreerayorigin" /><code>{"private Transform skillTreeRayOrigin"}</code> | <span className="api-desc">Backing field for `SkillTreeRayOrigin`; orbs spawn here and fly to their slots.</span> |
| <Link id="m-skilltreetarget" /><code>{"private Transform skillTreeTarget"}</code> | <span className="api-desc">Backing field for `SkillTreeTarget`; slot positions are laid out around it.</span> |
| <Link id="m-skilorbprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" skilOrbPrefab"}</code> | <span className="api-desc">Backing field for `SkilOrbPrefab`, the orb spawned for each slot of the skill tree.</span> |
| <Link id="m-spawnedorbsmap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/global-s/skillshrine-apliedslottuple">{"SkillShrine.ApliedSlotTuple"}</Link>{"> spawnedOrbsMap"}</code> | <span className="api-desc">Server: spawned orbs by slot hash, used to build the connection sync.</span> |
| <Link id="m-syncconnections" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-s/skillshrine-connectionsyncargument">{"SkillShrine.ConnectionSyncArgument"}</Link>{"> syncConnections"}</code> | <span className="api-desc">Sync channel (SyncC) for orb connections.</span> |
| <Link id="m-syncpath" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPath"}</code> | <span className="api-desc">Sync channel (SyncB) for the current path.</span> |
| <Link id="m-testingarea" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea"}</code> | <span className="api-desc">Backing field for `TestingArea`, where players practise a skill.</span> |
| <Link id="m-visualizers" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"[] visualizers"}</code> | <span className="api-desc">Backing field for `Visualizers`; each is told the current path.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectionshrinkspeed-2" /><code>{"float ConnectionShrinkSpeed { get; }"}</code> | <span className="api-desc">How fast the lines between orbs shrink away.</span> |
| <Link id="m-currentpath-2" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; }"}</code> | <span className="api-desc">The progression path whose tree this shrine shows.</span> |
| <Link id="m-linedefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LineDefinition { get; }"}</code> | <span className="api-desc">Pooled object used to draw lines between orbs.</span> |
| <Link id="m-skillorboperator-2" /><code><Link to="/mod/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" "}<Link to="/mod/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" { get; }"}</code> | <span className="api-desc">The skill orb operator for this shrine.</span> |
| <Link id="m-skilltreerayorigin-2" /><code>{"Transform SkillTreeRayOrigin { get; }"}</code> | <span className="api-desc">Where orbs start from when they fly out.</span> |
| <Link id="m-skilltreetarget-2" /><code>{"Transform SkillTreeTarget { get; }"}</code> | <span className="api-desc">Centre and rotation the tree's slot positions are laid out from.</span> |
| <Link id="m-skilorbprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" SkilOrbPrefab { get; }"}</code> | <span className="api-desc">Prefab spawned for each skill orb.</span> |
| <Link id="m-spawnedorbs" /><code>{"List<"}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{"> SpawnedOrbs { get; }"}</code> | <span className="api-desc">The orbs currently out.</span> |
| <Link id="m-testingarea-2" /><code><Link to="/mod/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" TestingArea { get; }"}</code> | <span className="api-desc">Area that opens while a player practises an orb.</span> |
| <Link id="m-visualizers-2" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> | <span className="api-desc">The shrine's path visualizers.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualizer" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">The experience fill visualizer for the shrine's own path, else null.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the synced path and connection messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: prepares the orb map and sets the visualizers to the current path.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the path, the orb connections if open, and the testing area state to a new player.</span> |
| <Link id="m-setnewpath" /><code>{"void SetNewPath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Server: changes the shrine's path and syncs it. Does not reopen the tree.</span> |
| <Link id="m-closeinternal" /><code>{"protected override void CloseInternal()"}</code> | <span className="api-desc">Ends any practice, removes connection lines and, on the server, destroys the spawned orbs.</span> |
| <Link id="m-openonclient" /><code>{"protected override void OpenOnClient()"}</code> | <span className="api-desc">Client: hooks the testing area to the player's practised-slot event.</span> |
| <Link id="m-openonserver" /><code>{"protected override void OpenOnServer()"}</code> | <span className="api-desc">Server: spawns an orb for each slot in the path's tree with the player's status and starts watching for practised skills.</span> |
| <Link id="m-updatevisuals" /><code>{"protected override void UpdateVisuals("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" updatedPath)"}</code> | <span className="api-desc">Rechecks every orb's status, then updates the base visuals.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Counts the `ProgressionPath` values for sync bounds and, on clients, creates the connection line list.</span> |
| <Link id="m-delayendpractice" /><code>{"private IEnumerator DelayEndPractice() (iterator)"}</code> | <span className="api-desc">Server: waits `delayBetweenFirstPracticeAndClose` seconds, then ends practice if the same orb is still being practised.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws a sphere at the skill tree target.</span> |
| <Link id="m-skillpracticed" /><code>{"private void SkillPracticed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Server: hooked to `ProfessionSkill.OnSkillExecuted` while open. Marks the practising orb's slot practised when its skill runs, and may end practice.</span> |
| <Link id="m-syncconnections-2" /><code>{"private void SyncConnections("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-s/skillshrine-connectionsyncargument">{"SkillShrine.ConnectionSyncArgument"}</Link>{" arguments)"}</code> | <span className="api-desc">Sync handler that sends orb pairs to link; clients create a connection line for each pair.</span> |
| <Link id="m-syncpath-2" /><code>{"private void SyncPath("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sync handler for `currentPath`; clients update their visualizers to the new path.</span> |
| <Link id="m-updatepracticing" /><code>{"private void UpdatePracticing("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, bool isPracticing, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" playerProgressionManager)"}</code> | <span className="api-desc">Opens the testing area for an orb when practice starts and disables it when practice stops.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SkillShrine`:

<div className="api-used-in">

[`GymnasiumXpStatusDisplay.shrine`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-shrine), [`GymnasiumXpStatusDisplay.Shrine`](/mod/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-shrine-2), [`SkillOrb.InitializeSlot`](/mod/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Shrine`](/mod/game-api/types/global-s/skillorb#m-shrine), [`SkillOrbConnectionline.shrine`](/mod/game-api/types/global-s/skillorbconnectionline#m-shrine), [`SkillOrbConnectionline.SkillOrbConnectionline`](/mod/game-api/types/global-s/skillorbconnectionline#m-ctor), [`SkillOrbScaler.shrine`](/mod/game-api/types/global-s/skillorbscaler#m-shrine), [`SkillShrineTestingArea.shrine`](/mod/game-api/types/global-s/skillshrinetestingarea#m-shrine), [`SkillsStructureRotator.shrine`](/mod/game-api/types/global-s/skillsstructurerotator#m-shrine).

</div>
