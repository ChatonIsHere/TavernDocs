---
title: "BasicDecay"
description: "Server component that destroys its entity after a decay time, using a saved timeline entry so the timer carries over saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDecay

A **class** in `Root.Township`, the global namespace.

Server component that destroys its entity after a decay time, using a saved timeline entry so the timer carries over saves. Subclasses add conditions.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BasicDecayData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicDecayData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ICleanOnSerialize`](/mod/game-api/types/global-i-l/icleanonserialize)
- **Derived types** [`TreeDecay`](/mod/game-api/types/alta-crafting/treedecay), [`BasicDecayData`](/mod/game-api/types/global-a-b/basicdecaydata), [`PickupDecay`](/mod/game-api/types/global-p/pickupdecay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDecay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled" /><code>{"protected bool isDisabled"}</code> | <span className="api-desc">Saved flag that stops decay while true.</span> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared logger.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decaytimer" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decayTimer"}</code> | <span className="api-desc">The timeline entry that triggers the decay check. Saved and loaded so decay carries across restarts.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/decaysettings">{"DecaySettings"}</Link>{" settings"}</code> | <span className="api-desc">Backing field for `Settings`.</span> |
| <Link id="m-willdestroy" /><code>{"private bool willDestroy"}</code> | <span className="api-desc">Set on load when the saved timer is already in the past, so the entity decays straight away.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code><Link to="/mod/game-api/types/global-c-d/decaysettings">{"DecaySettings"}</Link>{" Settings { get; set; }"}</code> | <span className="api-desc">Decay settings: whether it's enabled and the base decay time.</span> |
| <Link id="m-timermultiplier" /><code>{"protected virtual float TimerMultiplier { get; }"}</code> | <span className="api-desc">Subclass: scales the decay time. 1 by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | <span className="api-desc">Server: starts or continues the timer, or destroys straight away if the saved timer already ran out.</span> |
| <Link id="m-canceltimer" /><code>{"protected void CancelTimer()"}</code> | <span className="api-desc">Cancels the running timer.</span> |
| <Link id="m-decayfailed" /><code>{"protected virtual void DecayFailed()"}</code> | <span className="api-desc">Subclass: called when the timer ran out but decay wasn't valid.</span> |
| <Link id="m-evaluatedecaytime" /><code>{"protected float EvaluateDecayTime()"}</code> | <span className="api-desc">Seconds until decay: settings time times the multiplier, divided by the server's decay multiplier.</span> |
| <Link id="m-finishinitialize" /><code>{"protected virtual void FinishInitialize()"}</code> | <span className="api-desc">Starts the timer. Subclasses can delay this.</span> |
| <Link id="m-isdecayvalid" /><code>{"protected virtual bool IsDecayValid(bool isStarting)"}</code> | <span className="api-desc">Whether the entity may decay now. True if enabled and not disabled.</span> |
| <Link id="m-resettimer" /><code>{"protected void ResetTimer()"}</code> | <span className="api-desc">Cancels and starts a fresh timer.</span> |
| <Link id="m-startorcontinuetimer" /><code>{"protected void StartOrContinueTimer()"}</code> | <span className="api-desc">Starts the timer if none is running and decay is valid.</span> |
| <Link id="m-startorshortentimer" /><code>{"protected void StartOrShortenTimer()"}</code> | <span className="api-desc">Restarts the timer if the time left is longer than a fresh decay time.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkdecay" /><code>{"private void CheckDecay()"}</code> | <span className="api-desc">Runs when the timer fires (or on load): if decay is still valid, destroys the entity next frame, otherwise calls `DecayFailed`.</span> |
| <Link id="m-checkdecay-2" /><code>{"private bool CheckDecay(bool isOnLoad)"}</code> | <span className="api-desc">Runs when the timer fires (or on load): if decay is still valid, destroys the entity next frame, otherwise calls `DecayFailed`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the decay timer.</span> |
| <Link id="m-onserialize" /><code>{"private void ICleanOnSerialize.OnSerialize()"}</code> | <span className="api-desc">Cancels the timer when the entity is serialized away (`ICleanOnSerialize`).</span> |

</details>
