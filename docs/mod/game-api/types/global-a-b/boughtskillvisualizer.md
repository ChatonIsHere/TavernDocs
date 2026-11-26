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
| <Link id="m-ctor" /><code>{"BoughtSkillVisualizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | Shader property id for `_FillProgress`. |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> | Shader property id for `_NegativeChangeProgress`. |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> | Shader property id for `_PositiveChangeProgress`. |
| <Link id="m-anchorbody" /><code>{"private Rigidbody anchorBody"}</code> | Backing field for `AnchorBody`. |
| <Link id="m-crystalcount" /><code>{"private int crystalCount"}</code> | Number of orb holders, normally `ProgressionSettings.MaxBoughtSkills`. |
| <Link id="m-fillvisualizerobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionshrine">{"ProgressionShrine"}</Link>{" fillVisualizerObject"}</code> | The progression shrine whose path visualizers the orbs reposition to. |
| <Link id="m-holderprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorbholder">{"SkillOrbHolder"}</Link>{" holderPrefab"}</code> | `SkillOrbHolder` prefab placed round the ring. |
| <Link id="m-lastlockedeffect" /><code>{"private float lastLockedEffect"}</code> | Time the locked effect last played, for the cooldown. |
| <Link id="m-lockedbydependencyeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" lockedByDependencyEffect"}</code> | Effect played on orbs locked by an unmet dependency. |
| <Link id="m-lockedeffectcooldown" /><code>{"private float lockedEffectCooldown"}</code> | Minimum seconds between locked effects. |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager"}</code> | The progression manager passed to `PrepareOnServer`. |
| <Link id="m-nextfreeholder" /><code>{"private int nextFreeHolder"}</code> | Index of the holder the next spawned orb goes into. |
| <Link id="m-offsetrotation" /><code>{"private Quaternion offsetRotation"}</code> | Extra rotation applied to each placed holder. |
| <Link id="m-orbprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" orbPrefab"}</code> | Prefab spawned for each bought skill orb. |
| <Link id="m-placedholders" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle">{"BoughtSkillVisualizer.OrbHolderHandle"}</Link>{"[] placedHolders"}</code> | The orb holder handles, one per crystal. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius of the holder ring. |
| <Link id="m-showfreepointsavailable" /><code>{"private bool showFreePointsAvailable"}</code> | Whether free skill points show as open holders. Set by `SetPath`. |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | Vertical offset of holders from the ring positions. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anchorbody-2" /><code>{"Rigidbody AnchorBody { get; }"}</code> | Rigidbody the bought skill orbs are anchored to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calllockedbydependencyeffect" /><code>{"void CallLockedByDependencyEffect("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | Plays the locked effect on every orb whose skill depends on the given slot, at most once per `lockedEffectCooldown`. |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Clears every orb holder and resets the next free holder. The server destroys the orb entities. |
| <Link id="m-isbeinginteracted" /><code>{"bool IsBeingInteracted()"}</code> | True if a player is holding any of the placed orbs. |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Server: stores the progression manager, syncs orbs to the player's bought slots and updates holder open states. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Syncs free points and which holder has which orb entity; clients wait for the orb to spawn and attach it. |
| <Link id="m-setpath" /><code>{"override void SetPath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Sets the progression path and turns on showing free points as open holders. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `crystalCount` from `ProgressionSettings.MaxBoughtSkills` if unset and places holders if none were baked. |
| <Link id="m-getnextfree" /><code>{"private void GetNextFree()"}</code> | Moves `nextFreeHolder` to the next holder with no orb, wrapping round. |
| <Link id="m-getorbindex" /><code>{"private int GetOrbIndex("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | Returns the holder index that holds the given slot, or -1. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the orb mesh at each holder position. |
| <Link id="m-placeorbholders" /><code>{"private void PlaceOrbHolders()"}</code> | Destroys old holders and spawns `crystalCount` holders in a circle of `radius` around the transform. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: recounts crystals from settings and places the holders. |
| <Link id="m-updateholders" /><code>{"private void UpdateHolders(int freePoints)"}</code> | Client: opens empty holders for each free point and closes the rest, or locks ones with unmet dependencies. |
| <Link id="m-updateorbsonserver" /><code>{"private void UpdateOrbsOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Server: spawns an orb for each new bought slot, updates dependency locks on existing ones and clears holders no longer used. |

</details>

## Used in

Members of other types that take, return or hold a `BoughtSkillVisualizer`:

[`BoughtSkillOrbReplacer.boughtSkillVisualizer`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-boughtskillvisualizer), [`BoughtSkillOrbReplacer.RepositionAndAnchor`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-repositionandanchor), [`ProfessionsProgressShrine.boughtSkillsVisualizer`](/mod/game-api/types/global-p/professionsprogressshrine#m-boughtskillsvisualizer).
