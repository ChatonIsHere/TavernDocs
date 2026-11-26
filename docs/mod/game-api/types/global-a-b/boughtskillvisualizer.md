---
title: "BoughtSkillVisualizer"
description: "The ring of orb holders on a skill shrine that shows the skills a player has bought, one orb per bought slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillVisualizer

A **class** in `Root.Township`, the global namespace.

The ring of orb holders on a skill shrine that shows the skills a player has bought, one orb per bought slot. The server spawns the orbs; clients get them through `Serialize`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SkillShrineVisualizer`](/mod/game-api/types/global-s/skillshrinevisualizer), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`OrbHolderHandle`](/mod/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle), [`PositionMachine`](/mod/game-api/types/global-a-b/boughtskillvisualizer-positionmachine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoughtSkillVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property id for `_FillProgress`.</span> |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> | <span className="api-desc">Shader property id for `_NegativeChangeProgress`.</span> |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> | <span className="api-desc">Shader property id for `_PositiveChangeProgress`.</span> |
| <Link id="m-anchorbody" /><code>{"private Rigidbody anchorBody"}</code> | <span className="api-desc">Backing field for `AnchorBody`.</span> |
| <Link id="m-crystalcount" /><code>{"private int crystalCount"}</code> | <span className="api-desc">Number of orb holders, normally `ProgressionSettings.MaxBoughtSkills`.</span> |
| <Link id="m-fillvisualizerobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionshrine">{"ProgressionShrine"}</Link>{" fillVisualizerObject"}</code> | <span className="api-desc">The progression shrine whose path visualizers the orbs reposition to.</span> |
| <Link id="m-holderprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holderPrefab"}</code> | <span className="api-desc">`SkillOrbHolder` prefab placed round the ring.</span> |
| <Link id="m-lastlockedeffect" /><code>{"private float lastLockedEffect"}</code> | <span className="api-desc">Time the locked effect last played, for the cooldown.</span> |
| <Link id="m-lockedbydependencyeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" lockedByDependencyEffect"}</code> | <span className="api-desc">Effect played on orbs locked by an unmet dependency.</span> |
| <Link id="m-lockedeffectcooldown" /><code>{"private float lockedEffectCooldown"}</code> | <span className="api-desc">Minimum seconds between locked effects.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager"}</code> | <span className="api-desc">The progression manager passed to `PrepareOnServer`.</span> |
| <Link id="m-nextfreeholder" /><code>{"private int nextFreeHolder"}</code> | <span className="api-desc">Index of the holder the next spawned orb goes into.</span> |
| <Link id="m-offsetrotation" /><code>{"private Quaternion offsetRotation"}</code> | <span className="api-desc">Extra rotation applied to each placed holder.</span> |
| <Link id="m-orbprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" orbPrefab"}</code> | <span className="api-desc">Prefab spawned for each bought skill orb.</span> |
| <Link id="m-placedholders" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle">{"BoughtSkillVisualizer.OrbHolderHandle"}</Link>{"[] placedHolders"}</code> | <span className="api-desc">The orb holder handles, one per crystal.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius of the holder ring.</span> |
| <Link id="m-showfreepointsavailable" /><code>{"private bool showFreePointsAvailable"}</code> | <span className="api-desc">Whether free skill points show as open holders. Set by `SetPath`.</span> |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | <span className="api-desc">Vertical offset of holders from the ring positions.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anchorbody-2" /><code>{"Rigidbody AnchorBody { get; }"}</code> | <span className="api-desc">Rigidbody the bought skill orbs are anchored to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calllockedbydependencyeffect" /><code>{"void CallLockedByDependencyEffect("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Plays the locked effect on every orb whose skill depends on the given slot, at most once per `lockedEffectCooldown`.</span> |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Clears every orb holder and resets the next free holder. The server destroys the orb entities.</span> |
| <Link id="m-isbeinginteracted" /><code>{"bool IsBeingInteracted()"}</code> | <span className="api-desc">True if a player is holding any of the placed orbs.</span> |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Server: stores the progression manager, syncs orbs to the player's bought slots and updates holder open states.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Syncs free points and which holder has which orb entity; clients wait for the orb to spawn and attach it.</span> |
| <Link id="m-setpath" /><code>{"override void SetPath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Sets the progression path and turns on showing free points as open holders.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `crystalCount` from `ProgressionSettings.MaxBoughtSkills` if unset and places holders if none were baked.</span> |
| <Link id="m-getnextfree" /><code>{"private void GetNextFree()"}</code> | <span className="api-desc">Moves `nextFreeHolder` to the next holder with no orb, wrapping round.</span> |
| <Link id="m-getorbindex" /><code>{"private int GetOrbIndex("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Returns the holder index that holds the given slot, or -1.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the orb mesh at each holder position.</span> |
| <Link id="m-placeorbholders" /><code>{"private void PlaceOrbHolders()"}</code> | <span className="api-desc">Destroys old holders and spawns `crystalCount` holders in a circle of `radius` around the transform.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: recounts crystals from settings and places the holders.</span> |
| <Link id="m-updateholders" /><code>{"private void UpdateHolders(int freePoints)"}</code> | <span className="api-desc">Client: opens empty holders for each free point and closes the rest, or locks ones with unmet dependencies.</span> |
| <Link id="m-updateorbsonserver" /><code>{"private void UpdateOrbsOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Server: spawns an orb for each new bought slot, updates dependency locks on existing ones and clears holders no longer used.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BoughtSkillVisualizer`:

<div className="api-used-in">

[`BoughtSkillOrbReplacer.boughtSkillVisualizer`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-boughtskillvisualizer), [`BoughtSkillOrbReplacer.RepositionAndAnchor`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-repositionandanchor), [`ProfessionsProgressShrine.boughtSkillsVisualizer`](/mod/game-api/types/global-p/professionsprogressshrine#m-boughtskillsvisualizer).

</div>
