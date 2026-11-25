---
title: "BoughtSkillVisualizer"
description: "class BoughtSkillVisualizer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillVisualizer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SkillShrineVisualizer`](/game-api/types/global-s/skillshrinevisualizer), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`OrbHolderHandle`](/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle), [`PositionMachine`](/game-api/types/global-a-b/boughtskillvisualizer-positionmachine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoughtSkillVisualizer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> |  |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> |  |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> |  |
| <Link id="m-anchorbody" /><code>{"private Rigidbody anchorBody"}</code> |  |
| <Link id="m-crystalcount" /><code>{"private int crystalCount"}</code> |  |
| <Link id="m-fillvisualizerobject" /><code>{"private "}<Link to="/game-api/types/global-p/progressionshrine">{"ProgressionShrine"}</Link>{" fillVisualizerObject"}</code> |  |
| <Link id="m-holderprefab" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holderPrefab"}</code> |  |
| <Link id="m-lastlockedeffect" /><code>{"private float lastLockedEffect"}</code> |  |
| <Link id="m-lockedbydependencyeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" lockedByDependencyEffect"}</code> |  |
| <Link id="m-lockedeffectcooldown" /><code>{"private float lockedEffectCooldown"}</code> |  |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager"}</code> |  |
| <Link id="m-nextfreeholder" /><code>{"private int nextFreeHolder"}</code> |  |
| <Link id="m-offsetrotation" /><code>{"private Quaternion offsetRotation"}</code> |  |
| <Link id="m-orbprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" orbPrefab"}</code> |  |
| <Link id="m-placedholders" /><code>{"private "}<Link to="/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle">{"BoughtSkillVisualizer.OrbHolderHandle"}</Link>{"[] placedHolders"}</code> |  |
| <Link id="m-radius" /><code>{"private float radius"}</code> |  |
| <Link id="m-showfreepointsavailable" /><code>{"private bool showFreePointsAvailable"}</code> |  |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anchorbody-2" /><code>{"Rigidbody AnchorBody { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calllockedbydependencyeffect" /><code>{"void CallLockedByDependencyEffect("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> |  |
| <Link id="m-isbeinginteracted" /><code>{"bool IsBeingInteracted()"}</code> |  |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-setpath" /><code>{"override void SetPath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-getnextfree" /><code>{"private void GetNextFree()"}</code> |  |
| <Link id="m-getorbindex" /><code>{"private int GetOrbIndex("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-placeorbholders" /><code>{"private void PlaceOrbHolders()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-updateholders" /><code>{"private void UpdateHolders(int freePoints)"}</code> |  |
| <Link id="m-updateorbsonserver" /><code>{"private void UpdateOrbsOnServer("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BoughtSkillVisualizer`:

[`BoughtSkillOrbReplacer.boughtSkillVisualizer`](/game-api/types/global-a-b/boughtskillorbreplacer#m-boughtskillvisualizer), [`BoughtSkillOrbReplacer.RepositionAndAnchor`](/game-api/types/global-a-b/boughtskillorbreplacer#m-repositionandanchor), [`ProfessionsProgressShrine.boughtSkillsVisualizer`](/game-api/types/global-p/professionsprogressshrine#m-boughtskillsvisualizer).
