---
title: "BowStringPullbackInputMethod"
description: "Skill input that activates when a bow string with an arrow nocked is pulled past a set amount for long enough, for chargeable bow skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowStringPullbackInputMethod

A **class** in `Root.Township`, the global namespace.

Skill input that activates when a bow string with an arrow nocked is pulled past a set amount for long enough, for chargeable bow skills. Made by `BowStringPullbackStructure.GetNewInput`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`ISkillInputMethod`](/mod/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowStringPullbackInputMethod()"}</code> | Creates a `BowStringPullbackInputMethod` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger for this class. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" arrowEntity"}</code> | The arrow currently nocked. |
| <Link id="m-bowstring" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString"}</code> | The bow string on the held pickup. |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler"}</code> | Backing field for the handler. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the input is charged. |
| <Link id="m-isinpullbackrange" /><code>{"private bool isInPullbackRange"}</code> | Whether the string is past the pull threshold. |
| <Link id="m-istimecriteriamet" /><code>{"private bool isTimeCriteriaMet"}</code> | Whether the minimum pull time has passed. |
| <Link id="m-pullbackstructure" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bowstringpullbackstructure">{"BowStringPullbackStructure"}</Link>{" pullbackStructure"}</code> | The settings: pull threshold, minimum time and timeout. |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ichargeableprofessionskill">{"IChargeableProfessionSkill"}</Link>{" skill"}</code> | The chargeable skill told about charge start and cancel. |
| <Link id="m-timeoutcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" timeoutCoroutine"}</code> | The running timeout wait. |
| <Link id="m-waitfortime" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" waitForTime"}</code> | The running minimum time wait. |

</details>

## Properties

<details>
<summary>5 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" ISkillInputMethod.Handler { get; }"}</code> | The held pickup handler this input belongs to. |
| <Link id="m-iskillinputmethod-isactive" /><code>{"private bool ISkillInputMethod.IsActive { get; }"}</code> | True while the string is held past the threshold long enough. |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | Always false; it's driven by string pull events. |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | Always false. |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | The player holding the bow. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | Fired when the input becomes charged (true) or is cancelled (false). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | Deactivates and clears the time flag. |
| <Link id="m-oncancelled" /><code>{"protected virtual void OnCancelled()"}</code> | Releases the skill's effect on the arrow. Virtual. |
| <Link id="m-oncharged" /><code>{"protected virtual void OnCharged()"}</code> | Hook called when the charge completes. Empty here. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforpullback" /><code>{"private void CheckForPullback(float currentPull)"}</code> | String pull handler: with an arrow nocked, starts waiting for the charge once pull passes the threshold and cancels when it drops back. |
| <Link id="m-checkfortime" /><code>{"private IEnumerator CheckForTime() (iterator)"}</code> | Coroutine: waits the structure's minimum pull time, then marks the input charged. |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | Next frame, resets the input and unsubscribes from the bow string. |
| <Link id="m-deactivate" /><code>{"private void Deactivate(bool isCallingEvent)"}</code> | Stops the timers, tells the skill charging was cancelled for the arrow, and fires `ChangedActive` false if it was active. |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Ignores hits and returns false. |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | Binds to the pickup's `BowString` (logs an error if there is none) and tracks the nocked arrow. |
| <Link id="m-setarrowentity" /><code>{"private void SetArrowEntity("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Remembers the arrow docked on the string. |
| <Link id="m-stoptimecheck" /><code>{"private void StopTimeCheck()"}</code> | Stops the minimum pull time wait. |
| <Link id="m-stoptimeoutcoroutine" /><code>{"private void StopTimeoutCoroutine()"}</code> | Stops the timeout wait. |
| <Link id="m-timedout" /><code>{"private void TimedOut()"}</code> | Resets the input when the charge times out, but stays in pullback range so it won't restart until the pull drops. |
| <Link id="m-timeoutinput" /><code>{"private IEnumerator TimeoutInput() (iterator)"}</code> | Coroutine: waits the timeout duration, then calls `TimedOut`. |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | Does nothing. |
| <Link id="m-waitedlongenough" /><code>{"private void WaitedLongEnough()"}</code> | Activates the input, fires `ChangedActive` true, starts the timeout if set and calls `OnCharged`. |
| <Link id="m-waitforcharge" /><code>{"private void WaitForCharge()"}</code> | Marks pullback range, tells the skill charging started and starts the minimum time wait. |

</details>
