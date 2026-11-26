---
title: "ISkillInputMethod"
description: "One gesture a held tool skill waits for (shake, downward swing, strike succession, bow pullback, hand position and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISkillInputMethod

An **interface** in `Root.Township`, the global namespace.

One gesture a held tool skill waits for (shake, downward swing, strike succession, bow pullback, hand position and so on). Created from a `SkillInputStructure` and owned by a `HeldPickupHandler`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`BowStringPullbackInputMethod`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod), [`DownwardSwingInput`](/mod/game-api/types/global-c-d/downwardswinginput), [`HandPositionInput`](/mod/game-api/types/global-e-h/handpositioninput), [`PickupGrabInputMethod`](/mod/game-api/types/global-p/pickupgrabinputmethod), [`ShakeInput`](/mod/game-api/types/global-s/shakeinput), [`StrikeSuccessionInput`](/mod/game-api/types/global-s/strikesuccessioninput), [`TemperatureCheckInput`](/mod/game-api/types/global-t-x/temperaturecheckinput)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; }"}</code> | The held pickup handler this input was registered with. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | True while the gesture has been performed and the skill can fire. |
| <Link id="m-needsupdate" /><code>{"bool NeedsUpdate { get; }"}</code> | Whether the input needs `Update` every frame; if any input does, the handler registers for updates. |
| <Link id="m-receiveshits" /><code>{"bool ReceivesHits { get; }"}</code> | Whether hits go to this input's `ReceiveHit` instead of directly executing the skill when active. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | Raised when the gesture becomes active or stops being active; skills listen to it to arm or disarm. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Tears down whatever the input set up when it is removed from the handler. |
| <Link id="m-receivehit" /><code>{"bool ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | For inputs that react to hits: handles a tool hit and returns true if the input should then reset. |
| <Link id="m-registerhandler" /><code>{"void RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Links the input to its handler, structure and skill, and sets up any detectors it needs. |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | Makes the input inactive again, optionally raising `ChangedActive`. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Per-frame check for the gesture, called by the handler while `NeedsUpdate` is true. |

## Used in

Members of other types that take, return or hold a `ISkillInputMethod`:

[`BowDrawSkill.bowStrings`](/mod/game-api/types/alta-player/bowdrawskill#m-bowstrings), [`BowDrawSkill.Deregister`](/mod/game-api/types/alta-player/bowdrawskill#m-deregister), [`BowDrawSkill.HandleInputChanged`](/mod/game-api/types/alta-player/bowdrawskill#m-handleinputchanged), [`BowDrawSkill.InputChangedState`](/mod/game-api/types/alta-player/bowdrawskill#m-inputchangedstate), [`BowDrawSkill.inputs`](/mod/game-api/types/alta-player/bowdrawskill#m-inputs), [`BowDrawSkill.Register`](/mod/game-api/types/alta-player/bowdrawskill#m-register), [`BowMultiArrowShot.bowStrings`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-bowstrings), [`BowMultiArrowShot.Deregister`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-deregister), [`BowMultiArrowShot.GetIdentifier`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-getidentifier), [`BowMultiArrowShot.InputChangedState`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-inputchangedstate), [`BowMultiArrowShot.inputs`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-inputs), [`BowMultiArrowShot.Modify`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-modify), [`BowMultiArrowShot.Register`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-register), [`LightBeamSkill.HandleInputChanged`](/mod/game-api/types/alta-player/lightbeamskill#m-handleinputchanged), [`BowStringPullbackInputMethod.ChangedActive`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-changedactive), [`BowStringPullbackStructure.GetNewInput`](/mod/game-api/types/global-a-b/bowstringpullbackstructure#m-getnewinput), [`DownwardSwingInput.ChangedActive`](/mod/game-api/types/global-c-d/downwardswinginput#m-changedactive), [`DownwardSwingInputStructure.GetNewInput`](/mod/game-api/types/global-c-d/downwardswinginputstructure#m-getnewinput), [`DynamiteStrike.Deregister`](/mod/game-api/types/global-c-d/dynamitestrike#m-deregister), [`DynamiteStrike.Register`](/mod/game-api/types/global-c-d/dynamitestrike#m-register), [`DynamiteStrike.toolInputs`](/mod/game-api/types/global-c-d/dynamitestrike#m-toolinputs), [`EmberComposer.Deregister`](/mod/game-api/types/global-e-h/embercomposer#m-deregister), [`EmberComposer.Register`](/mod/game-api/types/global-e-h/embercomposer#m-register), [`EmberComposer.HeatPointCollectionHandler.HeatPointCollectionHandler`](/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-ctor), [`EmberComposer.HeatPointCollectionHandler.Input`](/mod/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-input), [`ForgingHeartCall.InputChangedState`](/mod/game-api/types/global-e-h/forgingheartcall#m-inputchangedstate), [`ForgingHeartCallModifier.Modify`](/mod/game-api/types/global-e-h/forgingheartcallmodifier#m-modify), [`Gatherer.Deregister`](/mod/game-api/types/global-e-h/gatherer#m-deregister), [`HandPositionInput.ChangedActive`](/mod/game-api/types/global-e-h/handpositioninput#m-changedactive), [`HandPositionStructure.GetNewInput`](/mod/game-api/types/global-e-h/handpositionstructure#m-getnewinput), [`HeartCall.Deregister`](/mod/game-api/types/global-e-h/heartcall#m-deregister), [`HeldPickupHandler.Inputs`](/mod/game-api/types/global-e-h/heldpickuphandler#m-inputs), [`HeldPickupHandler.inputstoReset`](/mod/game-api/types/global-e-h/heldpickuphandler#m-inputstoreset), [`HeldPickupHandler.RegisterToInput`](/mod/game-api/types/global-e-h/heldpickuphandler#m-registertoinput), [`HeldPickupHandler.SkillsToInputs`](/mod/game-api/types/global-e-h/heldpickuphandler#m-skillstoinputs), [`IInputBasedSkill.Deregister`](/mod/game-api/types/global-i-l/iinputbasedskill#m-deregister), [`IInputBasedSkill.InputChangedState`](/mod/game-api/types/global-i-l/iinputbasedskill#m-inputchangedstate), [`IInputBasedSkill.Register`](/mod/game-api/types/global-i-l/iinputbasedskill#m-register), [`MiningEcho.Deregister`](/mod/game-api/types/global-m-o/miningecho#m-deregister), [`MiningEcho.Register`](/mod/game-api/types/global-m-o/miningecho#m-register), [`MiningEcho.toolInputs`](/mod/game-api/types/global-m-o/miningecho#m-toolinputs), [`PickupBasedSkill.Deregister`](/mod/game-api/types/global-p/pickupbasedskill#m-deregister), [`PickupBasedSkill.InputChangedState`](/mod/game-api/types/global-p/pickupbasedskill#m-inputchangedstate), [`PickupBasedSkill.Register`](/mod/game-api/types/global-p/pickupbasedskill#m-register-2), [`PickupBasedSkillModifier.Deregister`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-deregister), [`PickupBasedSkillModifier.GetIdentifier`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-getidentifier), [`PickupBasedSkillModifier.InputChangedState`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-inputchangedstate), [`PickupBasedSkillModifier.Modify`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-modify), [`PickupBasedSkillModifier.Register`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-register), [`PickupBasedSkillModifier.RequiredSetActive`](/mod/game-api/types/global-p/pickupbasedskillmodifier#m-requiredsetactive), [`PickupGrabInputMethod.ChangedActive`](/mod/game-api/types/global-p/pickupgrabinputmethod#m-changedactive), [`PickupGrabInputStructure.GetNewInput`](/mod/game-api/types/global-p/pickupgrabinputstructure#m-getnewinput), [`PlayerToolBasedSkillHelper.ActivateInput`](/mod/game-api/types/global-p/playertoolbasedskillhelper#m-activateinput), [`ShakeInput.ChangedActive`](/mod/game-api/types/global-s/shakeinput#m-changedactive), [`ShakeInputStructure.GetNewInput`](/mod/game-api/types/global-s/shakeinputstructure#m-getnewinput), [`SkillInputStructure.GetNewInput`](/mod/game-api/types/global-s/skillinputstructure#m-getnewinput), [`SteelSong.Deregister`](/mod/game-api/types/global-s/steelsong#m-deregister), [`SteelSong.Register`](/mod/game-api/types/global-s/steelsong#m-register), [`SteelSong.SendStatusToLocalPlayer`](/mod/game-api/types/global-s/steelsong#m-sendstatustolocalplayer), [`StrikeSuccessionInput.ChangedActive`](/mod/game-api/types/global-s/strikesuccessioninput#m-changedactive) and 5 more.
