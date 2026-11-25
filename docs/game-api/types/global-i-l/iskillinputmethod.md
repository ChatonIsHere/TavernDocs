---
title: "ISkillInputMethod"
description: "One gesture a held tool skill waits for (shake, downward swing, strike succession, bow pullback, hand position and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISkillInputMethod

An **interface** in `Root.Township`, no namespace.

One gesture a held tool skill waits for (shake, downward swing, strike succession, bow pullback, hand position and so on). Created from a `SkillInputStructure` and owned by a `HeldPickupHandler`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`BowStringPullbackInputMethod`](/game-api/types/global-a-b/bowstringpullbackinputmethod), [`DownwardSwingInput`](/game-api/types/global-c-d/downwardswinginput), [`HandPositionInput`](/game-api/types/global-e-h/handpositioninput), [`PickupGrabInputMethod`](/game-api/types/global-p/pickupgrabinputmethod), [`ShakeInput`](/game-api/types/global-s/shakeinput), [`StrikeSuccessionInput`](/game-api/types/global-s/strikesuccessioninput), [`TemperatureCheckInput`](/game-api/types/global-t-x/temperaturecheckinput)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" Handler { get; }"}</code> | The held pickup handler this input was registered with. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | True while the gesture has been performed and the skill can fire. |
| <Link id="m-needsupdate" /><code>{"bool NeedsUpdate { get; }"}</code> | Whether the input needs `Update` every frame; if any input does, the handler registers for updates. |
| <Link id="m-receiveshits" /><code>{"bool ReceivesHits { get; }"}</code> | Whether hits go to this input's `ReceiveHit` instead of directly executing the skill when active. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | Raised when the gesture becomes active or stops being active; skills listen to it to arm or disarm. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Tears down whatever the input set up when it is removed from the handler. |
| <Link id="m-receivehit" /><code>{"bool ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | For inputs that react to hits: handles a tool hit and returns true if the input should then reset. |
| <Link id="m-registerhandler" /><code>{"void RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Links the input to its handler, structure and skill, and sets up any detectors it needs. |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | Makes the input inactive again, optionally raising `ChangedActive`. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Per-frame check for the gesture, called by the handler while `NeedsUpdate` is true. |

## Used in

Members of other types that take, return or hold a `ISkillInputMethod`:

[`BowDrawSkill.bowStrings`](/game-api/types/alta-player/bowdrawskill#m-bowstrings), [`BowDrawSkill.Deregister`](/game-api/types/alta-player/bowdrawskill#m-deregister), [`BowDrawSkill.HandleInputChanged`](/game-api/types/alta-player/bowdrawskill#m-handleinputchanged), [`BowDrawSkill.InputChangedState`](/game-api/types/alta-player/bowdrawskill#m-inputchangedstate), [`BowDrawSkill.inputs`](/game-api/types/alta-player/bowdrawskill#m-inputs), [`BowDrawSkill.Register`](/game-api/types/alta-player/bowdrawskill#m-register), [`BowMultiArrowShot.bowStrings`](/game-api/types/alta-player/bowmultiarrowshot#m-bowstrings), [`BowMultiArrowShot.Deregister`](/game-api/types/alta-player/bowmultiarrowshot#m-deregister), [`BowMultiArrowShot.GetIdentifier`](/game-api/types/alta-player/bowmultiarrowshot#m-getidentifier), [`BowMultiArrowShot.InputChangedState`](/game-api/types/alta-player/bowmultiarrowshot#m-inputchangedstate), [`BowMultiArrowShot.inputs`](/game-api/types/alta-player/bowmultiarrowshot#m-inputs), [`BowMultiArrowShot.Modify`](/game-api/types/alta-player/bowmultiarrowshot#m-modify), [`BowMultiArrowShot.Register`](/game-api/types/alta-player/bowmultiarrowshot#m-register), [`LightBeamSkill.HandleInputChanged`](/game-api/types/alta-player/lightbeamskill#m-handleinputchanged), [`BowStringPullbackInputMethod.ChangedActive`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-changedactive), [`BowStringPullbackStructure.GetNewInput`](/game-api/types/global-a-b/bowstringpullbackstructure#m-getnewinput), [`DownwardSwingInput.ChangedActive`](/game-api/types/global-c-d/downwardswinginput#m-changedactive), [`DownwardSwingInputStructure.GetNewInput`](/game-api/types/global-c-d/downwardswinginputstructure#m-getnewinput), [`DynamiteStrike.Deregister`](/game-api/types/global-c-d/dynamitestrike#m-deregister), [`DynamiteStrike.Register`](/game-api/types/global-c-d/dynamitestrike#m-register), [`DynamiteStrike.toolInputs`](/game-api/types/global-c-d/dynamitestrike#m-toolinputs), [`EmberComposer.Deregister`](/game-api/types/global-e-h/embercomposer#m-deregister), [`EmberComposer.Register`](/game-api/types/global-e-h/embercomposer#m-register), [`EmberComposer.HeatPointCollectionHandler.HeatPointCollectionHandler`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-ctor), [`EmberComposer.HeatPointCollectionHandler.Input`](/game-api/types/global-e-h/embercomposer-heatpointcollectionhandler#m-input), [`ForgingHeartCall.InputChangedState`](/game-api/types/global-e-h/forgingheartcall#m-inputchangedstate), [`ForgingHeartCallModifier.Modify`](/game-api/types/global-e-h/forgingheartcallmodifier#m-modify), [`Gatherer.Deregister`](/game-api/types/global-e-h/gatherer#m-deregister), [`HandPositionInput.ChangedActive`](/game-api/types/global-e-h/handpositioninput#m-changedactive), [`HandPositionStructure.GetNewInput`](/game-api/types/global-e-h/handpositionstructure#m-getnewinput), [`HeartCall.Deregister`](/game-api/types/global-e-h/heartcall#m-deregister), [`HeldPickupHandler.Inputs`](/game-api/types/global-e-h/heldpickuphandler#m-inputs), [`HeldPickupHandler.inputstoReset`](/game-api/types/global-e-h/heldpickuphandler#m-inputstoreset), [`HeldPickupHandler.RegisterToInput`](/game-api/types/global-e-h/heldpickuphandler#m-registertoinput), [`HeldPickupHandler.SkillsToInputs`](/game-api/types/global-e-h/heldpickuphandler#m-skillstoinputs), [`IInputBasedSkill.Deregister`](/game-api/types/global-i-l/iinputbasedskill#m-deregister), [`IInputBasedSkill.InputChangedState`](/game-api/types/global-i-l/iinputbasedskill#m-inputchangedstate), [`IInputBasedSkill.Register`](/game-api/types/global-i-l/iinputbasedskill#m-register), [`MiningEcho.Deregister`](/game-api/types/global-m-o/miningecho#m-deregister), [`MiningEcho.Register`](/game-api/types/global-m-o/miningecho#m-register), [`MiningEcho.toolInputs`](/game-api/types/global-m-o/miningecho#m-toolinputs), [`PickupBasedSkill.Deregister`](/game-api/types/global-p/pickupbasedskill#m-deregister), [`PickupBasedSkill.InputChangedState`](/game-api/types/global-p/pickupbasedskill#m-inputchangedstate), [`PickupBasedSkill.Register`](/game-api/types/global-p/pickupbasedskill#m-register-2), [`PickupBasedSkillModifier.Deregister`](/game-api/types/global-p/pickupbasedskillmodifier#m-deregister), [`PickupBasedSkillModifier.GetIdentifier`](/game-api/types/global-p/pickupbasedskillmodifier#m-getidentifier), [`PickupBasedSkillModifier.InputChangedState`](/game-api/types/global-p/pickupbasedskillmodifier#m-inputchangedstate), [`PickupBasedSkillModifier.Modify`](/game-api/types/global-p/pickupbasedskillmodifier#m-modify), [`PickupBasedSkillModifier.Register`](/game-api/types/global-p/pickupbasedskillmodifier#m-register), [`PickupBasedSkillModifier.RequiredSetActive`](/game-api/types/global-p/pickupbasedskillmodifier#m-requiredsetactive), [`PickupGrabInputMethod.ChangedActive`](/game-api/types/global-p/pickupgrabinputmethod#m-changedactive), [`PickupGrabInputStructure.GetNewInput`](/game-api/types/global-p/pickupgrabinputstructure#m-getnewinput), [`PlayerToolBasedSkillHelper.ActivateInput`](/game-api/types/global-p/playertoolbasedskillhelper#m-activateinput), [`ShakeInput.ChangedActive`](/game-api/types/global-s/shakeinput#m-changedactive), [`ShakeInputStructure.GetNewInput`](/game-api/types/global-s/shakeinputstructure#m-getnewinput), [`SkillInputStructure.GetNewInput`](/game-api/types/global-s/skillinputstructure#m-getnewinput), [`SteelSong.Deregister`](/game-api/types/global-s/steelsong#m-deregister), [`SteelSong.Register`](/game-api/types/global-s/steelsong#m-register), [`SteelSong.SendStatusToLocalPlayer`](/game-api/types/global-s/steelsong#m-sendstatustolocalplayer), [`StrikeSuccessionInput.ChangedActive`](/game-api/types/global-s/strikesuccessioninput#m-changedactive) and 5 more.
