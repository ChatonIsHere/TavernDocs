---
title: "BoughtSkillOrbReplacer"
description: "class BoughtSkillOrbReplacer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillOrbReplacer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`ProgressionSlotContainer`](/game-api/types/global-p/progressionslotcontainer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoughtSkillOrbReplacer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boughtskillvisualizer" /><code>{"private "}<Link to="/game-api/types/global-a-b/boughtskillvisualizer">{"BoughtSkillVisualizer"}</Link>{" boughtSkillVisualizer"}</code> |  |
| <Link id="m-fixedjoint" /><code>{"private FixedJoint fixedJoint"}</code> |  |
| <Link id="m-hapticoverduration" /><code>{"private AnimationCurve hapticOverDuration"}</code> |  |
| <Link id="m-hasvisualizer" /><code>{"private bool hasVisualizer"}</code> |  |
| <Link id="m-mindistancetobreak" /><code>{"private float minDistanceToBreak"}</code> |  |
| <Link id="m-syncdependencylock" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDependencyLock"}</code> |  |
| <Link id="m-timetobreak" /><code>{"private float timeToBreak"}</code> |  |
| <Link id="m-visualizer" /><code>{"private "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" visualizer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islockedbydependencies" /><code>{"bool IsLockedByDependencies { get; private set; }"}</code> |  |
| <Link id="m-destroyafteroperate" /><code>{"protected override bool DestroyAfterOperate { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeslot" /><code>{"override void InitializeSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-repositionandanchor" /><code>{"void RepositionAndAnchor("}<Link to="/game-api/types/global-a-b/boughtskillvisualizer">{"BoughtSkillVisualizer"}</Link>{" boughtSkillVisualizer, "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" visualizer)"}</code> |  |
| <Link id="m-updatedependencylock" /><code>{"void UpdateDependencyLock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-endinteraction" /><code>{"protected override void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-filterinteraction" /><code>{"protected override void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-helddurationcheck" /><code>{"protected override IEnumerator HeldDurationCheck("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-operate" /><code>{"protected override void Operate("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetManager)"}</code> |  |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-syncdependencylock-2" /><code>{"private void SyncDependencyLock("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isLockedByDependencies)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BoughtSkillOrbReplacer`:

[`BoughtSkillVisualizer.OrbHolderHandle.AssignOrb`](/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-assignorb), [`BoughtSkillVisualizer.OrbHolderHandle.Orb`](/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-orb).
