---
title: "SkillOrb"
description: "One orb at a skill shrine standing for a skill slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrb

A **class** in `Root.Township`, the global namespace.

One orb at a skill shrine standing for a skill slot. Players grab it to practise the skill and pull it away to buy or sell. Spawned by `SkillShrine` on the server and not saved.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISkillOrb`](/mod/game-api/types/global-i-l/iskillorb)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrb()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>29 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> | <span className="api-desc">Shader property id for `_MainTex`, used to put the slot icon on the inner model.</span> |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Acceleration of the return flight.</span> |
| <Link id="m-connectionlinecolor" /><code>{"private Color[] connectionLineColor"}</code> | <span className="api-desc">Backing field for `ConnectionLineColor`, one colour per skill status.</span> |
| <Link id="m-fauxrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" fauxRigidBody"}</code> | <span className="api-desc">Faux rigidbody used to move the orb on its return flight.</span> |
| <Link id="m-helddurationcheck" /><code>{"private Coroutine heldDurationCheck"}</code> | <span className="api-desc">The running `CheckDistanceToReplace` coroutine.</span> |
| <Link id="m-holdduration" /><code>{"private float holdDuration"}</code> | <span className="api-desc">Serialized hold time (3 seconds). Not read in this build.</span> |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> | <span className="api-desc">Property block that puts the slot icon texture on the inner model.</span> |
| <Link id="m-internalmodelrenderer" /><code>{"private Renderer internalModelRenderer"}</code> | <span className="api-desc">Renderer of the inner model that shows the slot icon.</span> |
| <Link id="m-iscompleteoperation" /><code>{"private bool isCompleteOperation"}</code> | <span className="api-desc">Reset on each grab. When true at release, the orb doesn't fly back.</span> |
| <Link id="m-isininteractioncooldown" /><code>{"private bool isInInteractionCooldown"}</code> | <span className="api-desc">True during the short cooldown after a grab starts.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxdistancefromtargetsquared" /><code>{"private float maxDistanceFromTargetSquared"}</code> | <span className="api-desc">Squared distance from its spot the held orb can move before the replace check fires.</span> |
| <Link id="m-movement" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorbmovement">{"SkillOrbMovement"}</Link>{" movement"}</code> | <span className="api-desc">Backing field for `Movement`, which moves the orb to its target spot.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">Top speed of the return flight.</span> |
| <Link id="m-onacquiredeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnAcquiredEffect"}</code> | <span className="api-desc">Effect event played when a slot is unlocked through the orb.</span> |
| <Link id="m-onsoldeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnSoldEffect"}</code> | <span className="api-desc">Effect event played when a skill is locked again (sold back).</span> |
| <Link id="m-onstarttesteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" OnStartTestEffect"}</code> | <span className="api-desc">Effect event played when testing a skill starts.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |
| <Link id="m-rendererstransform" /><code>{"private Transform renderersTransform"}</code> | <span className="api-desc">Backing field for `RenderersTransform`.</span> |
| <Link id="m-replacer" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorbreplacer">{"SkillOrbReplacer"}</Link>{" replacer"}</code> | <span className="api-desc">The replacer orb spawned while the player tests a skill, or null.</span> |
| <Link id="m-replacerprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" replacerPrefab"}</code> | <span className="api-desc">Prefab spawned as the replacer when the orb is pulled from its spot.</span> |
| <Link id="m-returningtotargetcoroutine" /><code>{"private Coroutine returningToTargetCoroutine"}</code> | <span className="api-desc">The running `ReturnSelectionOrb` coroutine.</span> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | <span className="api-desc">How fast the rotation levels out on the return flight. Faster when closer.</span> |
| <Link id="m-shellrenderer" /><code>{"private Renderer shellRenderer"}</code> | <span className="api-desc">Backing field for `ShellRenderer`, whose material shows the status.</span> |
| <Link id="m-statusmaterials" /><code>{"private Material[] statusMaterials"}</code> | <span className="api-desc">Shell materials, one per skill status.</span> |
| <Link id="m-syncallowed" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAllowed"}</code> | <span className="api-desc">Method sync made in `Initialize` for `SyncAllowed`.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> | <span className="api-desc">Method sync made in `Initialize` for `SyncEffect`.</span> |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFull"}</code> | <span className="api-desc">Method sync made in `Initialize` for `SyncFull`, sent to players on connect.</span> |
| <Link id="m-syncmodelenabled" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncModelEnabled"}</code> | <span className="api-desc">Method sync made in `Initialize` for `SyncModelEnabled`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectionlinecolor-2" /><code>{"Color[] ConnectionLineColor { get; }"}</code> | <span className="api-desc">Colour of the tree line for each `SkillStatus`.</span> |
| <Link id="m-internalmodeltransform" /><code>{"Transform InternalModelTransform { get; }"}</code> | <span className="api-desc">Transform of the icon model inside the orb.</span> |
| <Link id="m-isinteractable" /><code>{"bool IsInteractable { get; private set; }"}</code> | <span className="api-desc">False while a replacer orb is out being pulled; only interactable orbs can be grabbed.</span> |
| <Link id="m-movement-2" /><code><Link to="/mod/game-api/types/global-s/skillorbmovement">{"SkillOrbMovement"}</Link>{" Movement { get; }"}</code> | <span className="api-desc">Moves the orb to its place in the tree.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The orb's `Pickup`.</span> |
| <Link id="m-rendererstransform-2" /><code>{"Transform RenderersTransform { get; }"}</code> | <span className="api-desc">Parent transform of the orb's renderers.</span> |
| <Link id="m-shellrenderer-2" /><code>{"Renderer ShellRenderer { get; }"}</code> | <span className="api-desc">Outer shell renderer; its material shows the status.</span> |
| <Link id="m-shrine" /><code><Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" Shrine { get; private set; }"}</code> | <span className="api-desc">The shrine that spawned the orb.</span> |
| <Link id="m-skill" /><code><Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" Skill { get; private set; }"}</code> | <span className="api-desc">The `ProfessionSkill` the slot grants.</span> |
| <Link id="m-slot" /><code><Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" Slot { get; private set; }"}</code> | <span className="api-desc">The progression slot this orb stands for.</span> |
| <Link id="m-status" /><code><Link to="/mod/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" Status { get; private set; }"}</code> | <span className="api-desc">The shrine user's `SkillStatus` for this slot. Other players see `OtherPlayer`.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillorb-shellmaterial" /><code>{"private Material ISkillOrb.ShellMaterial { get; }"}</code> | <span className="api-desc">The shell renderer's shared material.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-alowedupdated" /><code>{"event "}<Link to="/mod/game-api/types/global-s/skillorbstatusupdatedelegate">{"SkillOrbStatusUpdateDelegate"}</Link>{" AlowedUpdated"}</code> | <span className="api-desc">Raised when the orb's `Status` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the orb's synced messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: makes the orb's pickup unsaved.</span> |
| <Link id="m-initializeslot" /><code>{"void InitializeSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot, "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" callingShrine, "}<Link to="/mod/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> | <span className="api-desc">Sets the slot, shrine and status, shows the slot icon and, on the server, syncs the orb.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the orb's slot, status and position to a new player.</span> |
| <Link id="m-operate" /><code>{"void Operate(bool isComplete)"}</code> | <span className="api-desc">Server: complete buys or sells by status; not complete starts practising the slot. Ignored for orbs not allowed.</span> |
| <Link id="m-updateallowed-2" /><code>{"void UpdateAllowed()"}</code> | <span className="api-desc">Server: rechecks the slot's status for the shrine's player and syncs it if it changed.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction start, end and filter, and the destroy effect on clients.</span> |
| <Link id="m-checkdistancetoreplace" /><code>{"private IEnumerator CheckDistanceToReplace("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Server coroutine: once the held orb leaves its spot, drops it if it can't be tested, else swaps in a replacer.</span> |
| <Link id="m-destroyeffect" /><code>{"private void DestroyEffect("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Client: plays the progression settings' orb destroy effect unless the orb is only unloading.</span> |
| <Link id="m-endinteraction" /><code>{"private void EndInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On release, the server practises the slot if no replacer took over. The orb then flies back to its spot.</span> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Blocks grabbing until the orb has arrived, is off cooldown and allowed. Server also requires the shrine's current player.</span> |
| <Link id="m-initializeskill" /><code>{"private void InitializeSkill("}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill, "}<Link to="/mod/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> | <span className="api-desc">Sets the skill, puts the slot icon on the inner model, applies the status material and, on the server, sends a full sync.</span> |
| <Link id="m-losereplacer" /><code>{"private void LoseReplacer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">When the replacer is destroyed, makes the orb grabbable and visible again and practises the slot.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Removes the orb from the shrine's list and destroys any replacer.</span> |
| <Link id="m-returnselectionorb" /><code>{"private IEnumerator ReturnSelectionOrb() (iterator)"}</code> | <span className="api-desc">Coroutine that flies the released orb back to its target spot with a faux rigidbody and levels its rotation.</span> |
| <Link id="m-runcooldown" /><code>{"private IEnumerator RunCooldown() (iterator)"}</code> | <span className="api-desc">Blocks grabbing for 0.5 seconds after a grab starts.</span> |
| <Link id="m-spawnreplacer" /><code>{"private void SpawnReplacer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: spawns the replacer orb in the same place, hides this one's model and swaps the player's grab to it.</span> |
| <Link id="m-startinteraction" /><code>{"private void StartInteraction("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, stops the return flight, starts the grab cooldown and, on the server, starts `CheckDistanceToReplace`.</span> |
| <Link id="m-syncallowed-2" /><code>{"private void SyncAllowed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync for the orb's status. Clients that aren't the shrine's player see it as not allowed.</span> |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isComplete)"}</code> | <span className="api-desc">Method sync that plays the acquired, start test or sold effect on clients.</span> |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync for the slot hash, status, shrine id, chunk and movement. Clients wait for the shrine, then set up the slot.</span> |
| <Link id="m-syncmodelenabled-2" /><code>{"private void SyncModelEnabled("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isEnabled)"}</code> | <span className="api-desc">Method sync that shows or hides the inner model and sets whether the orb can be grabbed.</span> |
| <Link id="m-updateallowed" /><code>{"private bool UpdateAllowed("}<Link to="/mod/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status, bool isForced = false)"}</code> | <span className="api-desc">Server: rechecks the slot's status for the shrine's player and syncs it if it changed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrb`:

<div className="api-used-in">

[`PlayerProgressionManager.PracticeSlot`](/mod/game-api/types/global-p/playerprogressionmanager#m-practiceslot), [`PlayerProgressionManager.PracticingOrb`](/mod/game-api/types/global-p/playerprogressionmanager#m-practicingorb), [`SkillOrbConnectionline.UpdateColor`](/mod/game-api/types/global-s/skillorbconnectionline#m-updatecolor), [`SkillOrbDelegate.BeginInvoke`](/mod/game-api/types/global-s/skillorbdelegate#m-begininvoke), [`SkillOrbDelegate.Invoke`](/mod/game-api/types/global-s/skillorbdelegate#m-invoke), [`SkillOrbReplacer.InitializeOrb`](/mod/game-api/types/global-s/skillorbreplacer#m-initializeorb), [`SkillOrbReplacer.targetOrb`](/mod/game-api/types/global-s/skillorbreplacer#m-targetorb), [`SkillOrbStatusUpdateDelegate.BeginInvoke`](/mod/game-api/types/global-s/skillorbstatusupdatedelegate#m-begininvoke), [`SkillOrbStatusUpdateDelegate.Invoke`](/mod/game-api/types/global-s/skillorbstatusupdatedelegate#m-invoke), [`SkillShrine.SpawnedOrbs`](/mod/game-api/types/global-s/skillshrine#m-spawnedorbs), [`SkillShrine.UpdatePracticing`](/mod/game-api/types/global-s/skillshrine#m-updatepracticing), [`SkillShrine.ApliedSlotTuple.ApliedSlotTuple`](/mod/game-api/types/global-s/skillshrine-apliedslottuple#m-ctor), [`SkillShrine.ApliedSlotTuple.Orb`](/mod/game-api/types/global-s/skillshrine-apliedslottuple#m-orb), [`SkillShrineTestingArea.Open`](/mod/game-api/types/global-s/skillshrinetestingarea#m-open), [`SkillShrineTestingArea.openSkillOrb`](/mod/game-api/types/global-s/skillshrinetestingarea#m-openskillorb).

</div>
