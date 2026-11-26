---
title: "SkillOrbReplacer"
description: "The orb a player pulls from a skill shrine to buy a skill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbReplacer

A **class** in `Root.Township`, the global namespace.

The orb a player pulls from a skill shrine to buy a skill. Holding it at the shrine's operator for a few seconds unlocks the slot; letting go floats it back and destroys it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ProgressionSlotContainer`](/mod/game-api/types/global-p/progressionslotcontainer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbReplacer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Acceleration used while the orb flies back to its target.</span> |
| <Link id="m-distancetosnapsquared" /><code>{"private float distanceToSnapSquared"}</code> | <span className="api-desc">Squared distance to the shrine's operator at which the held orb snaps on and starts the purchase hold.</span> |
| <Link id="m-distancetounsnapsquared" /><code>{"private float distanceToUnSnapSquared"}</code> | <span className="api-desc">Squared distance from the hand grip point that breaks the snap and cancels the hold.</span> |
| <Link id="m-fauxrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" fauxRigidBody"}</code> | <span className="api-desc">Simulated rigidbody used for the fly-back, created on first use.</span> |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> | <span className="api-desc">The running hold-check coroutine.</span> |
| <Link id="m-holdduration" /><code>{"private float holdDuration"}</code> | <span className="api-desc">Seconds the orb must stay snapped to the operator before the purchase is confirmed (3 by default).</span> |
| <Link id="m-isoperating" /><code>{"private bool isOperating"}</code> | <span className="api-desc">True while the orb is snapped to the shrine's operator and the hold timer runs.</span> |
| <Link id="m-maxdistancefromtargetsquared" /><code>{"private float maxDistanceFromTargetSquared"}</code> | <span className="api-desc">Squared distance from its home position before it snaps; pulling it further away forces the player to drop it.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">Top speed while the orb flies back to its target.</span> |
| <Link id="m-returningtotargetcoroutine" /><code>{"private Coroutine returningToTargetCoroutine"}</code> | <span className="api-desc">The running fly-back coroutine, or null.</span> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | <span className="api-desc">How fast the orb turns back to identity rotation while flying back.</span> |
| <Link id="m-targetorb" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" targetOrb"}</code> | <span className="api-desc">The skill orb on the shrine this replacer stands in for. Set by `InitializeOrb` (clients get it from the setup sync).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyafteroperate" /><code>{"protected override bool DestroyAfterOperate { get; }"}</code> | <span className="api-desc">True: the orb is destroyed once the skill is unlocked.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">On clients, plays the orb destroy effect when it is destroyed other than by unloading.</span> |
| <Link id="m-initializeorb" /><code>{"void InitializeOrb("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | <span className="api-desc">Links to the shrine's skill orb and takes its slot and player.</span> |
| <Link id="m-stopoperating" /><code>{"void StopOperating()"}</code> | <span className="api-desc">Ends the operating effect and state.</span> |
| <Link id="m-endinteraction" /><code>{"protected override void EndInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On release, breaks any operator joint without buying and floats the orb back to its spot.</span> |
| <Link id="m-helddurationcheck-2" /><code>{"protected override IEnumerator HeldDurationCheck("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine while held: snaps to the operator when close, fills the progress, and confirms the buy after the hold time.</span> |
| <Link id="m-operate" /><code>{"protected override void Operate("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetManager)"}</code> | <span className="api-desc">Unlocks the slot on the player's progression manager.</span> |
| <Link id="m-startinteraction" /><code>{"protected override void StartInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops the float back when grabbed again.</span> |
| <Link id="m-syncsetup" /><code>{"protected override void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the linked skill orb's entity ID so clients can link to it.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-returnselectionorb" /><code>{"private IEnumerator ReturnSelectionOrb() (iterator)"}</code> | <span className="api-desc">Coroutine run when the player lets go: flies the orb back to its target position with a faux rigidbody, then scene-destroys it.</span> |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Client: plays the orb destroy effect when the entity is destroyed, unless it is unloading or flying back.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbReplacer`:

<div className="api-used-in">

[`SkillOrb.replacer`](/mod/game-api/types/global-s/skillorb#m-replacer), [`SkillOrbOperator.CreateJoint`](/mod/game-api/types/global-s/skillorboperator#m-createjoint), [`SkillOrbOperator.currentReplacer`](/mod/game-api/types/global-s/skillorboperator#m-currentreplacer).

</div>
