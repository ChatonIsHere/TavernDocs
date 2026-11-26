---
title: "BowStringPullbackInputMethod"
description: "class BowStringPullbackInputMethod in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowStringPullbackInputMethod

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`ISkillInputMethod`](/game-api/types/global-i-l/iskillinputmethod)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BowStringPullbackInputMethod()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-arrowentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" arrowEntity"}</code> |
| <Link id="m-bowstring" /><code>{"private "}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{" bowString"}</code> |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-isinpullbackrange" /><code>{"private bool isInPullbackRange"}</code> |
| <Link id="m-istimecriteriamet" /><code>{"private bool isTimeCriteriaMet"}</code> |
| <Link id="m-pullbackstructure" /><code>{"private "}<Link to="/game-api/types/global-a-b/bowstringpullbackstructure">{"BowStringPullbackStructure"}</Link>{" pullbackStructure"}</code> |
| <Link id="m-skill" /><code>{"private "}<Link to="/game-api/types/global-i-l/ichargeableprofessionskill">{"IChargeableProfessionSkill"}</Link>{" skill"}</code> |
| <Link id="m-timeoutcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" timeoutCoroutine"}</code> |
| <Link id="m-waitfortime" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" waitForTime"}</code> |

</details>

## Properties

<details>
<summary>5 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-iskillinputmethod-handler" /><code>{"private "}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" ISkillInputMethod.Handler { get; }"}</code> |
| <Link id="m-iskillinputmethod-isactive" /><code>{"private bool ISkillInputMethod.IsActive { get; }"}</code> |
| <Link id="m-iskillinputmethod-needsupdate" /><code>{"private bool ISkillInputMethod.NeedsUpdate { get; }"}</code> |
| <Link id="m-iskillinputmethod-receiveshits" /><code>{"private bool ISkillInputMethod.ReceivesHits { get; }"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-changedactive" /><code>{"event Action<bool, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{"> ChangedActive"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-reset" /><code>{"void Reset(bool isCallingEvent)"}</code> |
| <Link id="m-oncancelled" /><code>{"protected virtual void OnCancelled()"}</code> |
| <Link id="m-oncharged" /><code>{"protected virtual void OnCharged()"}</code> |

<details>
<summary>14 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkforpullback" /><code>{"private void CheckForPullback(float currentPull)"}</code> |
| <Link id="m-checkfortime" /><code>{"private IEnumerator CheckForTime() (iterator)"}</code> |
| <Link id="m-clear" /><code>{"private void ISkillInputMethod.Clear()"}</code> |
| <Link id="m-deactivate" /><code>{"private void Deactivate(bool isCallingEvent)"}</code> |
| <Link id="m-receivehit" /><code>{"private bool ISkillInputMethod.ReceiveHit("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |
| <Link id="m-registerhandler" /><code>{"private void ISkillInputMethod.RegisterHandler("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" pickupHandler, "}<Link to="/game-api/types/global-s/skillinputstructure">{"SkillInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-p/professionskill">{"ProfessionSkill"}</Link>{" skill)"}</code> |
| <Link id="m-setarrowentity" /><code>{"private void SetArrowEntity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-stoptimecheck" /><code>{"private void StopTimeCheck()"}</code> |
| <Link id="m-stoptimeoutcoroutine" /><code>{"private void StopTimeoutCoroutine()"}</code> |
| <Link id="m-timedout" /><code>{"private void TimedOut()"}</code> |
| <Link id="m-timeoutinput" /><code>{"private IEnumerator TimeoutInput() (iterator)"}</code> |
| <Link id="m-update" /><code>{"private void ISkillInputMethod.Update()"}</code> |
| <Link id="m-waitedlongenough" /><code>{"private void WaitedLongEnough()"}</code> |
| <Link id="m-waitforcharge" /><code>{"private void WaitForCharge()"}</code> |

</details>
