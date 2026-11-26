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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrb()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>29 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> | Shader property id for `_MainTex`, used to put the slot icon on the inner model. |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | Acceleration of the return flight. |
| <Link id="m-connectionlinecolor" /><code>{"private Color[] connectionLineColor"}</code> | Backing field for `ConnectionLineColor`, one colour per skill status. |
| <Link id="m-fauxrigidbody" /><code>{"private "}<Link to="/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" fauxRigidBody"}</code> | Faux rigidbody used to move the orb on its return flight. |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> | The running `CheckDistanceToReplace` coroutine. |
| <Link id="m-holdduration" /><code>{"private float holdDuration"}</code> | Serialized hold time (3 seconds). Not read in this build. |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> | Property block that puts the slot icon texture on the inner model. |
| <Link id="m-internalmodelrenderer" /><code>{"private Renderer internalModelRenderer"}</code> | Renderer of the inner model that shows the slot icon. |
| <Link id="m-iscompleteoperation" /><code>{"private bool isCompleteOperation"}</code> | Reset on each grab. When true at release, the orb doesn't fly back. |
| <Link id="m-isininteractioncooldown" /><code>{"private bool isInInteractionCooldown"}</code> | True during the short cooldown after a grab starts. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxdistancefromtargetsquared" /><code>{"private float maxDistanceFromTargetSquared"}</code> | Squared distance from its spot the held orb can move before the replace check fires. |
| <Link id="m-movement" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbmovement">{"SkillOrbMovement"}</Link>{" movement"}</code> | Backing field for `Movement`, which moves the orb to its target spot. |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | Top speed of the return flight. |
| <Link id="m-onacquiredeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnAcquiredEffect"}</code> | Effect event played when a slot is unlocked through the orb. |
| <Link id="m-onsoldeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnSoldEffect"}</code> | Effect event played when a skill is locked again (sold back). |
| <Link id="m-onstarttesteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnStartTestEffect"}</code> | Effect event played when testing a skill starts. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-rendererstransform" /><code>{"private Transform renderersTransform"}</code> | Backing field for `RenderersTransform`. |
| <Link id="m-replacer" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbreplacer">{"SkillOrbReplacer"}</Link>{" replacer"}</code> | The replacer orb spawned while the player tests a skill, or null. |
| <Link id="m-replacerprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" replacerPrefab"}</code> | Prefab spawned as the replacer when the orb is pulled from its spot. |
| <Link id="m-returningtotargetcoroutine" /><code>{"private Coroutine returningToTargetCoroutine"}</code> | The running `ReturnSelectionOrb` coroutine. |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | How fast the rotation levels out on the return flight. Faster when closer. |
| <Link id="m-shellrenderer" /><code>{"private Renderer shellRenderer"}</code> | Backing field for `ShellRenderer`, whose material shows the status. |
| <Link id="m-statusmaterials" /><code>{"private Material[] statusMaterials"}</code> | Shell materials, one per skill status. |
| <Link id="m-syncallowed" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAllowed"}</code> | Method sync made in `Initialize` for `SyncAllowed`. |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> | Method sync made in `Initialize` for `SyncEffect`. |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | Method sync made in `Initialize` for `SyncFull`, sent to players on connect. |
| <Link id="m-syncmodelenabled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncModelEnabled"}</code> | Method sync made in `Initialize` for `SyncModelEnabled`. |

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

| Member | What it is |
| --- | --- |
| <Link id="m-iskillorb-shellmaterial" /><code>{"private Material ISkillOrb.ShellMaterial { get; }"}</code> | The shell renderer's shared material. |

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
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction start, end and filter, and the destroy effect on clients. |
| <Link id="m-checkdistancetoreplace" /><code>{"private IEnumerator CheckDistanceToReplace("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Server coroutine: once the held orb leaves its spot, drops it if it can't be tested, else swaps in a replacer. |
| <Link id="m-destroyeffect" /><code>{"private void DestroyEffect("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Client: plays the progression settings' orb destroy effect unless the orb is only unloading. |
| <Link id="m-endinteraction" /><code>{"private void EndInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On release, the server practises the slot if no replacer took over. The orb then flies back to its spot. |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks grabbing until the orb has arrived, is off cooldown and allowed. Server also requires the shrine's current player. |
| <Link id="m-initializeskill" /><code>{"private void InitializeSkill("}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> | Sets the skill, puts the slot icon on the inner model, applies the status material and, on the server, sends a full sync. |
| <Link id="m-losereplacer" /><code>{"private void LoseReplacer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | When the replacer is destroyed, makes the orb grabbable and visible again and practises the slot. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Removes the orb from the shrine's list and destroys any replacer. |
| <Link id="m-returnselectionorb" /><code>{"private IEnumerator ReturnSelectionOrb() (iterator)"}</code> | Coroutine that flies the released orb back to its target spot with a faux rigidbody and levels its rotation. |
| <Link id="m-runcooldown" /><code>{"private IEnumerator RunCooldown() (iterator)"}</code> | Blocks grabbing for 0.5 seconds after a grab starts. |
| <Link id="m-spawnreplacer" /><code>{"private void SpawnReplacer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: spawns the replacer orb in the same place, hides this one's model and swaps the player's grab to it. |
| <Link id="m-startinteraction" /><code>{"private void StartInteraction("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, stops the return flight, starts the grab cooldown and, on the server, starts `CheckDistanceToReplace`. |
| <Link id="m-syncallowed-2" /><code>{"private void SyncAllowed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync for the orb's status. Clients that aren't the shrine's player see it as not allowed. |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isComplete)"}</code> | Method sync that plays the acquired, start test or sold effect on clients. |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync for the slot hash, status, shrine id, chunk and movement. Clients wait for the shrine, then set up the slot. |
| <Link id="m-syncmodelenabled-2" /><code>{"private void SyncModelEnabled("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isEnabled)"}</code> | Method sync that shows or hides the inner model and sets whether the orb can be grabbed. |
| <Link id="m-updateallowed" /><code>{"private bool UpdateAllowed("}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status, bool isForced = false)"}</code> | Server: rechecks the slot's status for the shrine's player and syncs it if it changed. |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrb`:

[`PlayerProgressionManager.PracticeSlot`](/game-api/types/global-p/playerprogressionmanager#m-practiceslot), [`PlayerProgressionManager.PracticingOrb`](/game-api/types/global-p/playerprogressionmanager#m-practicingorb), [`SkillOrbConnectionline.UpdateColor`](/game-api/types/global-s/skillorbconnectionline#m-updatecolor), [`SkillOrbDelegate.BeginInvoke`](/game-api/types/global-s/skillorbdelegate#m-begininvoke), [`SkillOrbDelegate.Invoke`](/game-api/types/global-s/skillorbdelegate#m-invoke), [`SkillOrbReplacer.InitializeOrb`](/game-api/types/global-s/skillorbreplacer#m-initializeorb), [`SkillOrbReplacer.targetOrb`](/game-api/types/global-s/skillorbreplacer#m-targetorb), [`SkillOrbStatusUpdateDelegate.BeginInvoke`](/game-api/types/global-s/skillorbstatusupdatedelegate#m-begininvoke), [`SkillOrbStatusUpdateDelegate.Invoke`](/game-api/types/global-s/skillorbstatusupdatedelegate#m-invoke), [`SkillShrine.SpawnedOrbs`](/game-api/types/global-s/skillshrine#m-spawnedorbs), [`SkillShrine.UpdatePracticing`](/game-api/types/global-s/skillshrine#m-updatepracticing), [`SkillShrine.ApliedSlotTuple.ApliedSlotTuple`](/game-api/types/global-s/skillshrine-apliedslottuple#m-ctor), [`SkillShrine.ApliedSlotTuple.Orb`](/game-api/types/global-s/skillshrine-apliedslottuple#m-orb), [`SkillShrineTestingArea.Open`](/game-api/types/global-s/skillshrinetestingarea#m-open), [`SkillShrineTestingArea.openSkillOrb`](/game-api/types/global-s/skillshrinetestingarea#m-openskillorb).
