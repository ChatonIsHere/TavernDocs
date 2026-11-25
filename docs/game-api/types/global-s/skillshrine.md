---
title: "SkillShrine"
description: "class SkillShrine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrine

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ProgressionShrine`](/game-api/types/global-p/progressionshrine), [`ISavable<SkillShrineSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SkillShrineSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SkillShrineSaveData`](/game-api/types/global-s/skillshrinesavedata)
- **Nested types** [`ApliedSlotTuple`](/game-api/types/global-s/skillshrine-apliedslottuple), [`ConnectionSyncArgument`](/game-api/types/global-s/skillshrine-connectionsyncargument), [`NewPathArgument`](/game-api/types/global-s/skillshrine-newpathargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillShrine()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeconnections" /><code>{"private List<"}<Link to="/game-api/types/global-s/skillorbconnectionline">{"SkillOrbConnectionline"}</Link>{"> activeConnections"}</code> |  |
| <Link id="m-connectionshrinkspeed" /><code>{"private float connectionShrinkSpeed"}</code> |  |
| <Link id="m-currentpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentPath"}</code> |  |
| <Link id="m-delaybetweenfirstpracticeandclose" /><code>{"private float delayBetweenFirstPracticeAndClose"}</code> |  |
| <Link id="m-fillvisualizer" /><code>{"private "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" fillVisualizer"}</code> |  |
| <Link id="m-internaloffset" /><code>{"private Vector2 internalOffset"}</code> |  |
| <Link id="m-linedefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lineDefinition"}</code> |  |
| <Link id="m-maxpathvalue" /><code>{"private int maxPathValue"}</code> |  |
| <Link id="m-skillorboperator" /><code>{"private "}<Link to="/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" skillOrbOperator"}</code> |  |
| <Link id="m-skilltreerayorigin" /><code>{"private Transform skillTreeRayOrigin"}</code> |  |
| <Link id="m-skilltreetarget" /><code>{"private Transform skillTreeTarget"}</code> |  |
| <Link id="m-skilorbprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" skilOrbPrefab"}</code> |  |
| <Link id="m-spawnedorbsmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/global-s/skillshrine-apliedslottuple">{"SkillShrine.ApliedSlotTuple"}</Link>{"> spawnedOrbsMap"}</code> |  |
| <Link id="m-syncconnections" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-s/skillshrine-connectionsyncargument">{"SkillShrine.ConnectionSyncArgument"}</Link>{"> syncConnections"}</code> |  |
| <Link id="m-syncpath" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPath"}</code> |  |
| <Link id="m-testingarea" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea"}</code> |  |
| <Link id="m-visualizers" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"[] visualizers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectionshrinkspeed-2" /><code>{"float ConnectionShrinkSpeed { get; }"}</code> |  |
| <Link id="m-currentpath-2" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; }"}</code> |  |
| <Link id="m-linedefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LineDefinition { get; }"}</code> |  |
| <Link id="m-skillorboperator-2" /><code><Link to="/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" "}<Link to="/game-api/types/global-s/skillorboperator">{"SkillOrbOperator"}</Link>{" { get; }"}</code> |  |
| <Link id="m-skilltreerayorigin-2" /><code>{"Transform SkillTreeRayOrigin { get; }"}</code> |  |
| <Link id="m-skilltreetarget-2" /><code>{"Transform SkillTreeTarget { get; }"}</code> |  |
| <Link id="m-skilorbprefab-2" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" SkilOrbPrefab { get; }"}</code> |  |
| <Link id="m-spawnedorbs" /><code>{"List<"}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{"> SpawnedOrbs { get; }"}</code> |  |
| <Link id="m-testingarea-2" /><code><Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" TestingArea { get; }"}</code> |  |
| <Link id="m-visualizers-2" /><code>{"override IEnumerable<"}<Link to="/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualizer" /><code>{"override "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setnewpath" /><code>{"void SetNewPath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-closeinternal" /><code>{"protected override void CloseInternal()"}</code> |  |
| <Link id="m-delayendpractice" /><code>{"private IEnumerator DelayEndPractice() (iterator)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-openonclient" /><code>{"protected override void OpenOnClient()"}</code> |  |
| <Link id="m-openonserver" /><code>{"protected override void OpenOnServer()"}</code> |  |
| <Link id="m-skillpracticed" /><code>{"private void SkillPracticed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |  |
| <Link id="m-syncconnections-2" /><code>{"private void SyncConnections("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-s/skillshrine-connectionsyncargument">{"SkillShrine.ConnectionSyncArgument"}</Link>{" arguments)"}</code> |  |
| <Link id="m-syncpath-2" /><code>{"private void SyncPath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatepracticing" /><code>{"private void UpdatePracticing("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, bool isPracticing, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" playerProgressionManager)"}</code> |  |
| <Link id="m-updatevisuals" /><code>{"protected override void UpdateVisuals("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" updatedPath)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SkillShrine`:

[`GymnasiumXpStatusDisplay.shrine`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-shrine), [`GymnasiumXpStatusDisplay.Shrine`](/game-api/types/game-other-namespaces/gymnasiumxpstatusdisplay#m-shrine-2), [`SkillOrb.InitializeSlot`](/game-api/types/global-s/skillorb#m-initializeslot), [`SkillOrb.Shrine`](/game-api/types/global-s/skillorb#m-shrine), [`SkillOrbConnectionline.shrine`](/game-api/types/global-s/skillorbconnectionline#m-shrine), [`SkillOrbConnectionline.SkillOrbConnectionline`](/game-api/types/global-s/skillorbconnectionline#m-ctor), [`SkillOrbScaler.shrine`](/game-api/types/global-s/skillorbscaler#m-shrine), [`SkillShrineTestingArea.shrine`](/game-api/types/global-s/skillshrinetestingarea#m-shrine), [`SkillsStructureRotator.shrine`](/game-api/types/global-s/skillsstructurerotator#m-shrine).
