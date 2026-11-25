---
title: "SkillOrb"
description: "One orb at a skill shrine standing for a skill slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrb

A **class** in `Root.Township`, no namespace.

One orb at a skill shrine standing for a skill slot. Players grab it to practise the skill and pull it away to buy or sell. Spawned by `SkillShrine` on the server and not saved.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISkillOrb`](/game-api/types/global-i-l/iskillorb)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillOrb()"}</code> |

## Fields

<details>
<summary>29 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |
| <Link id="m-connectionlinecolor" /><code>{"private Color[] connectionLineColor"}</code> |
| <Link id="m-fauxrigidbody" /><code>{"private "}<Link to="/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" fauxRigidBody"}</code> |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> |
| <Link id="m-holdduration" /><code>{"private float holdDuration"}</code> |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> |
| <Link id="m-internalmodelrenderer" /><code>{"private Renderer internalModelRenderer"}</code> |
| <Link id="m-iscompleteoperation" /><code>{"private bool isCompleteOperation"}</code> |
| <Link id="m-isininteractioncooldown" /><code>{"private bool isInInteractionCooldown"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maxdistancefromtargetsquared" /><code>{"private float maxDistanceFromTargetSquared"}</code> |
| <Link id="m-movement" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbmovement">{"SkillOrbMovement"}</Link>{" movement"}</code> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |
| <Link id="m-onacquiredeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnAcquiredEffect"}</code> |
| <Link id="m-onsoldeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnSoldEffect"}</code> |
| <Link id="m-onstarttesteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnStartTestEffect"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-rendererstransform" /><code>{"private Transform renderersTransform"}</code> |
| <Link id="m-replacer" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbreplacer">{"SkillOrbReplacer"}</Link>{" replacer"}</code> |
| <Link id="m-replacerprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" replacerPrefab"}</code> |
| <Link id="m-returningtotargetcoroutine" /><code>{"private Coroutine returningToTargetCoroutine"}</code> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> |
| <Link id="m-shellrenderer" /><code>{"private Renderer shellRenderer"}</code> |
| <Link id="m-statusmaterials" /><code>{"private Material[] statusMaterials"}</code> |
| <Link id="m-syncallowed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAllowed"}</code> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> |
| <Link id="m-syncmodelenabled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncModelEnabled"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectionlinecolor-2" /><code>{"Color[] ConnectionLineColor { get; }"}</code> | Colour of the tree line for each `SkillStatus`. |
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> | Transform of the icon model inside the orb. |
| <Link id="m-isinteractable" /><code>{"bool IsInteractable { get; private set; }"}</code> | False while a replacer orb is out being pulled; only interactable orbs can be grabbed. |
| <Link id="m-movement-2" /><code><Link to="/game-api/types/global-s/skillorbmovement">{"SkillOrbMovement"}</Link>{" Movement { get; }"}</code> | Moves the orb to its place in the tree. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The orb's `Pickup`. |
| <Link id="m-rendererstransform-2" /><code>{"Transform RenderersTransform { get; }"}</code> | Parent transform of the orb's renderers. |
| <Link id="m-shellrenderer-2" /><code>{"Renderer ShellRenderer { get; }"}</code> | Outer shell renderer; its material shows the status. |
| <Link id="m-shrine" /><code><Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" Shrine { get; private set; }"}</code> | The shrine that spawned the orb. |
| <Link id="m-skill" /><code><Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" Skill { get; private set; }"}</code> | The `ProfessionSkill` the slot grants. |
| <Link id="m-slot" /><code><Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; private set; }"}</code> | The progression slot this orb stands for. |
| <Link id="m-status" /><code><Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" Status { get; private set; }"}</code> | The shrine user's `SkillStatus` for this slot. Other players see `OtherPlayer`. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-iskillorb-shellmaterial" /><code>{"private Material ISkillOrb.ShellMaterial { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-alowedupdated" /><code>{"event "}<Link to="/game-api/types/global-s/skillorbstatusupdatedelegate">{"SkillOrbStatusUpdateDelegate"}</Link>{" AlowedUpdated"}</code> | Raised when the orb's `Status` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the orb's synced messages. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: makes the orb's pickup unsaved. |
| <Link id="m-initializeslot" /><code>{"void InitializeSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" callingShrine, "}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> | Sets the slot, shrine and status, shows the slot icon and, on the server, syncs the orb. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the orb's slot, status and position to a new player. |
| <Link id="m-operate" /><code>{"void Operate(bool isComplete)"}</code> | Server: complete buys or sells by status; not complete starts practising the slot. Ignored for orbs not allowed. |
| <Link id="m-updateallowed-2" /><code>{"void UpdateAllowed()"}</code> | Server: rechecks the slot's status for the shrine's player and syncs it if it changed. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkdistancetoreplace" /><code>{"private IEnumerator CheckDistanceToReplace("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-destroyeffect" /><code>{"private void DestroyEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-endinteraction" /><code>{"private void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-initializeskill" /><code>{"private void InitializeSkill("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> |  |
| <Link id="m-losereplacer" /><code>{"private void LoseReplacer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-returnselectionorb" /><code>{"private IEnumerator ReturnSelectionOrb() (iterator)"}</code> |  |
| <Link id="m-runcooldown" /><code>{"private IEnumerator RunCooldown() (iterator)"}</code> |  |
| <Link id="m-spawnreplacer" /><code>{"private void SpawnReplacer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-startinteraction" /><code>{"private void StartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-syncallowed-2" /><code>{"private void SyncAllowed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isComplete)"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncmodelenabled-2" /><code>{"private void SyncModelEnabled("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isEnabled)"}</code> |  |
| <Link id="m-updateallowed" /><code>{"private bool UpdateAllowed("}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status, bool isForced = false)"}</code> | Server: rechecks the slot's status for the shrine's player and syncs it if it changed. |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrb`:

[`PlayerProgressionManager.PracticeSlot`](/game-api/types/global-p/playerprogressionmanager#m-practiceslot), [`PlayerProgressionManager.PracticingOrb`](/game-api/types/global-p/playerprogressionmanager#m-practicingorb), [`SkillOrbConnectionline.UpdateColor`](/game-api/types/global-s/skillorbconnectionline#m-updatecolor), [`SkillOrbDelegate.BeginInvoke`](/game-api/types/global-s/skillorbdelegate#m-begininvoke), [`SkillOrbDelegate.Invoke`](/game-api/types/global-s/skillorbdelegate#m-invoke), [`SkillOrbReplacer.InitializeOrb`](/game-api/types/global-s/skillorbreplacer#m-initializeorb), [`SkillOrbReplacer.targetOrb`](/game-api/types/global-s/skillorbreplacer#m-targetorb), [`SkillOrbStatusUpdateDelegate.BeginInvoke`](/game-api/types/global-s/skillorbstatusupdatedelegate#m-begininvoke), [`SkillOrbStatusUpdateDelegate.Invoke`](/game-api/types/global-s/skillorbstatusupdatedelegate#m-invoke), [`SkillShrine.SpawnedOrbs`](/game-api/types/global-s/skillshrine#m-spawnedorbs), [`SkillShrine.UpdatePracticing`](/game-api/types/global-s/skillshrine#m-updatepracticing), [`SkillShrine.ApliedSlotTuple.ApliedSlotTuple`](/game-api/types/global-s/skillshrine-apliedslottuple#m-ctor), [`SkillShrine.ApliedSlotTuple.Orb`](/game-api/types/global-s/skillshrine-apliedslottuple#m-orb), [`SkillShrineTestingArea.Open`](/game-api/types/global-s/skillshrinetestingarea#m-open), [`SkillShrineTestingArea.openSkillOrb`](/game-api/types/global-s/skillshrinetestingarea#m-openskillorb).
