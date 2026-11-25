---
title: "SkillOrbReplacer"
description: "The orb a player pulls from a skill shrine to buy a skill."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbReplacer

A **class** in `Root.Township`, no namespace.

The orb a player pulls from a skill shrine to buy a skill. Holding it at the shrine's operator for a few seconds unlocks the slot; letting go floats it back and destroys it.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ProgressionSlotContainer`](/game-api/types/global-p/progressionslotcontainer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillOrbReplacer()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |
| <Link id="m-distancetosnapsquared" /><code>{"private float distanceToSnapSquared"}</code> |
| <Link id="m-distancetounsnapsquared" /><code>{"private float distanceToUnSnapSquared"}</code> |
| <Link id="m-fauxrigidbody" /><code>{"private "}<Link to="/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" fauxRigidBody"}</code> |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> |
| <Link id="m-holdduration" /><code>{"private float holdDuration"}</code> |
| <Link id="m-isoperating" /><code>{"private bool isOperating"}</code> |
| <Link id="m-maxdistancefromtargetsquared" /><code>{"private float maxDistanceFromTargetSquared"}</code> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |
| <Link id="m-returningtotargetcoroutine" /><code>{"private Coroutine returningToTargetCoroutine"}</code> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> |
| <Link id="m-targetorb" /><code>{"private "}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" targetOrb"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyafteroperate" /><code>{"protected override bool DestroyAfterOperate { get; }"}</code> | True: the orb is destroyed once the skill is unlocked. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | On clients, plays the orb destroy effect when it is destroyed other than by unloading. |
| <Link id="m-initializeorb" /><code>{"void InitializeOrb("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | Links to the shrine's skill orb and takes its slot and player. |
| <Link id="m-stopoperating" /><code>{"void StopOperating()"}</code> | Ends the operating effect and state. |
| <Link id="m-endinteraction" /><code>{"protected override void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On release, breaks any operator joint without buying and floats the orb back to its spot. |
| <Link id="m-helddurationcheck-2" /><code>{"protected override IEnumerator HeldDurationCheck("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine while held: snaps to the operator when close, fills the progress, and confirms the buy after the hold time. |
| <Link id="m-operate" /><code>{"protected override void Operate("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" targetManager)"}</code> | Unlocks the slot on the player's progression manager. |
| <Link id="m-startinteraction" /><code>{"protected override void StartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops the float back when grabbed again. |
| <Link id="m-syncsetup" /><code>{"protected override void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the linked skill orb's entity ID so clients can link to it. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-returnselectionorb" /><code>{"private IEnumerator ReturnSelectionOrb() (iterator)"}</code> |
| <Link id="m-scenedestroy" /><code>{"private void SceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbReplacer`:

[`SkillOrb.replacer`](/game-api/types/global-s/skillorb#m-replacer), [`SkillOrbOperator.CreateJoint`](/game-api/types/global-s/skillorboperator#m-createjoint), [`SkillOrbOperator.currentReplacer`](/game-api/types/global-s/skillorboperator#m-currentreplacer).
