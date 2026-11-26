---
title: "BoughtSkillOrbReplacer"
description: "The orb for a skill a player already owns on the progression board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillOrbReplacer

A **class** in `Root.Township`, the global namespace.

The orb for a skill a player already owns on the progression board. Pulling it away and holding it for `timeToBreak` seconds sells the skill back. Synced by the server.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`ProgressionSlotContainer`](/mod/game-api/types/global-p/progressionslotcontainer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoughtSkillOrbReplacer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boughtskillvisualizer" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boughtskillvisualizer">{"BoughtSkillVisualizer"}</Link>{" boughtSkillVisualizer"}</code> | <span className="api-desc">The skill visualizer this orb is anchored to. Used for the locked effect and to block grabs while it is in use.</span> |
| <Link id="m-fixedjoint" /><code>{"private FixedJoint fixedJoint"}</code> | <span className="api-desc">Joint holding the orb to the visualizer's anchor body. Added on first anchor.</span> |
| <Link id="m-hapticoverduration" /><code>{"private AnimationCurve hapticOverDuration"}</code> | <span className="api-desc">Haptic strength over the pull-out progress.</span> |
| <Link id="m-hasvisualizer" /><code>{"private bool hasVisualizer"}</code> | <span className="api-desc">Whether an experience fill visualizer was given.</span> |
| <Link id="m-mindistancetobreak" /><code>{"private float minDistanceToBreak"}</code> | <span className="api-desc">Squared distance the hand must pull from the start point before progress counts.</span> |
| <Link id="m-syncdependencylock" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncDependencyLock"}</code> | <span className="api-desc">Message used to send `IsLockedByDependencies` to clients.</span> |
| <Link id="m-timetobreak" /><code>{"private float timeToBreak"}</code> | <span className="api-desc">Seconds the orb must be held pulled out before it operates.</span> |
| <Link id="m-visualizer" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" visualizer"}</code> | <span className="api-desc">Fill visualizer showing the sell progress.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islockedbydependencies" /><code>{"bool IsLockedByDependencies { get; private set; }"}</code> | <span className="api-desc">True when the skill can't be sold because a skill that needs it is owned (unless the game config allows selling skills with children).</span> |
| <Link id="m-destroyafteroperate" /><code>{"protected override bool DestroyAfterOperate { get; }"}</code> | <span className="api-desc">False: the orb is kept after selling.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the dependency lock sync and the destroy effect.</span> |
| <Link id="m-initializeslot" /><code>{"override void InitializeSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer)"}</code> | <span className="api-desc">Sets the slot and player, then checks the dependency lock.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the dependency lock state to a joining player.</span> |
| <Link id="m-repositionandanchor" /><code>{"void RepositionAndAnchor("}<Link to="/mod/game-api/types/global-a-b/boughtskillvisualizer">{"BoughtSkillVisualizer"}</Link>{" boughtSkillVisualizer, "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" visualizer)"}</code> | <span className="api-desc">Joins the orb to the board's anchor body with a fixed joint and links the sell visualizer.</span> |
| <Link id="m-updatedependencylock" /><code>{"void UpdateDependencyLock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Server: rechecks whether the skill is locked by dependencies and syncs any change.</span> |
| <Link id="m-endinteraction" /><code>{"protected override void EndInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Ends the sell progress visual when let go.</span> |
| <Link id="m-filterinteraction" /><code>{"protected override void FilterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks grabbing while locked by dependencies (playing a locked effect) or while the board is in use.</span> |
| <Link id="m-helddurationcheck" /><code>{"protected override IEnumerator HeldDurationCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">While held away from its spot, fills the sell progress with haptics. When full it sends the operate message and drops the orb.</span> |
| <Link id="m-operate" /><code>{"protected override void Operate("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetManager)"}</code> | <span className="api-desc">Sells the skill: locks the slot in the player's `PlayerProgressionManager`, which refunds part of the experience.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Client: plays the orb destroy effect when the entity is destroyed other than by unload.</span> |
| <Link id="m-syncdependencylock-2" /><code>{"private void SyncDependencyLock("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isLockedByDependencies)"}</code> | <span className="api-desc">Receives the dependency lock state from the server and stores it in `IsLockedByDependencies`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BoughtSkillOrbReplacer`:

<div className="api-used-in">

[`BoughtSkillVisualizer.OrbHolderHandle.AssignOrb`](/mod/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-assignorb), [`BoughtSkillVisualizer.OrbHolderHandle.Orb`](/mod/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-orb).

</div>
