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
| <Link id="m-ctor" /><code>{"BowStringPullbackInputMethod()"}</code> | <span className="api-desc">Creates a `BowStringPullbackInputMethod` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" arrowEntity"}</code> | <span className="api-desc">The arrow currently nocked.</span> |
| <Link id="m-bowstring" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString"}</code> | <span className="api-desc">The bow string on the held pickup.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler"}</code> | <span className="api-desc">Backing field for the handler.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the input is charged.</span> |
| <Link id="m-isinpullbackrange" /><code>{"private bool isInPullbackRange"}</code> | <span className="api-desc">Whether the string is past the pull threshold.</span> |
| <Link id="m-istimecriteriamet" /><code>{"private bool isTimeCriteriaMet"}</code> | <span className="api-desc">Whether the minimum pull time has passed.</span> |
| <Link id="m-pullbackstructure" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bowstringpullbackstructure">{"BowStringPullbackStructure"}</Link>{" pullbackStructure"}</code> | <span className="api-desc">The settings: pull threshold, minimum time and timeout.</span> |
| <Link id="m-skill" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ichargeableprofessionskill">{"IChargeableProfessionSkill"}</Link>{" skill"}</code> | <span className="api-desc">The chargeable skill told about charge start and cancel.</span> |
| <Link id="m-timeoutcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" timeoutCoroutine"}</code> | <span className="api-desc">The running timeout wait.</span> |
| <Link id="m-waitfortime" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" waitForTime"}</code> | <span className="api-desc">The running minimum time wait.</span> |

</details>

## Properties

<details className="api-private">
<summary>5 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskillinputmethod-handler" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" ISkillInputMethod.Handler { get; }"}</code> | <span className="api-desc">The held pickup handler this input belongs to.</span> |
| <Link id="m-iskillinputmethod-isactive" /><code>{"private bool ISkillInputMethod.IsActive { get; }"}</code> | <span className="api-desc">True while the string is held past the threshold long enough.</span> |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> | <span className="api-desc">Always false; it's driven by string pull events.</span> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | <span className="api-desc">The player holding the bow.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> | <span className="api-desc">Fired when the input becomes charged (true) or is cancelled (false).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> | <span className="api-desc">Deactivates and clears the time flag.</span> |
| <Link id="m-oncancelled" /><code>{"protected virtual void OnCancelled()"}</code> | <span className="api-desc">Releases the skill's effect on the arrow. Virtual.</span> |
| <Link id="m-oncharged" /><code>{"protected virtual void OnCharged()"}</code> | <span className="api-desc">Hook called when the charge completes. Empty here.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforpullback" /><code>{"private void CheckForPullback(float currentPull)"}</code> | <span className="api-desc">String pull handler: with an arrow nocked, starts waiting for the charge once pull passes the threshold and cancels when it drops back.</span> |
| <Link id="m-checkfortime" /><code>{"private IEnumerator CheckForTime() (iterator)"}</code> | <span className="api-desc">Coroutine: waits the structure's minimum pull time, then marks the input charged.</span> |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> | <span className="api-desc">Next frame, resets the input and unsubscribes from the bow string.</span> |
| <Link id="m-deactivate" /><code>{"private void Deactivate(bool isCallingEvent)"}</code> | <span className="api-desc">Stops the timers, tells the skill charging was cancelled for the arrow, and fires `ChangedActive` false if it was active.</span> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Ignores hits and returns false.</span> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/mod/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> | <span className="api-desc">Binds to the pickup's `BowString` (logs an error if there is none) and tracks the nocked arrow.</span> |
| <Link id="m-setarrowentity" /><code>{"private void SetArrowEntity("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Remembers the arrow docked on the string.</span> |
| <Link id="m-stoptimecheck" /><code>{"private void StopTimeCheck()"}</code> | <span className="api-desc">Stops the minimum pull time wait.</span> |
| <Link id="m-stoptimeoutcoroutine" /><code>{"private void StopTimeoutCoroutine()"}</code> | <span className="api-desc">Stops the timeout wait.</span> |
| <Link id="m-timedout" /><code>{"private void TimedOut()"}</code> | <span className="api-desc">Resets the input when the charge times out, but stays in pullback range so it won't restart until the pull drops.</span> |
| <Link id="m-timeoutinput" /><code>{"private IEnumerator TimeoutInput() (iterator)"}</code> | <span className="api-desc">Coroutine: waits the timeout duration, then calls `TimedOut`.</span> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-waitedlongenough" /><code>{"private void WaitedLongEnough()"}</code> | <span className="api-desc">Activates the input, fires `ChangedActive` true, starts the timeout if set and calls `OnCharged`.</span> |
| <Link id="m-waitforcharge" /><code>{"private void WaitForCharge()"}</code> | <span className="api-desc">Marks pullback range, tells the skill charging started and starts the minimum time wait.</span> |

</details>
