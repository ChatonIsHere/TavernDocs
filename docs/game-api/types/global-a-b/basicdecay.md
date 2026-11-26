---
title: "BasicDecay"
description: "Server component that destroys its entity after a decay time, using a saved timeline entry so the timer carries over saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDecay

A **class** in `Root.Township`, no namespace.

Server component that destroys its entity after a decay time, using a saved timeline entry so the timer carries over saves. Subclasses add conditions.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BasicDecayData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicDecayData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ICleanOnSerialize`](/game-api/types/global-i-l/icleanonserialize)
- **Derived types** [`TreeDecay`](/game-api/types/alta-crafting/treedecay), [`BasicDecayData`](/game-api/types/global-a-b/basicdecaydata), [`PickupDecay`](/game-api/types/global-p/pickupdecay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDecay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdisabled" /><code>{"protected bool isDisabled"}</code> | Saved flag that stops decay while true. |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared logger. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decaytimer" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decayTimer"}</code> | The timeline entry that triggers the decay check. Saved and loaded so decay carries across restarts. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-c-d/decaysettings">{"DecaySettings"}</Link>{" settings"}</code> | Backing field for `Settings`. |
| <Link id="m-willdestroy" /><code>{"private bool willDestroy"}</code> | Set on load when the saved timer is already in the past, so the entity decays straight away. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/global-c-d/decaysettings">{"DecaySettings"}</Link>{" Settings { get; set; }"}</code> | Decay settings: whether it's enabled and the base decay time. |
| <Link id="m-timermultiplier" /><code>{"protected virtual float TimerMultiplier { get; }"}</code> | Subclass: scales the decay time. 1 by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> | Server: starts or continues the timer, or destroys straight away if the saved timer already ran out. |
| <Link id="m-canceltimer" /><code>{"protected void CancelTimer()"}</code> | Cancels the running timer. |
| <Link id="m-decayfailed" /><code>{"protected virtual void DecayFailed()"}</code> | Subclass: called when the timer ran out but decay wasn't valid. |
| <Link id="m-evaluatedecaytime" /><code>{"protected float EvaluateDecayTime()"}</code> | Seconds until decay: settings time times the multiplier, divided by the server's decay multiplier. |
| <Link id="m-finishinitialize" /><code>{"protected virtual void FinishInitialize()"}</code> | Starts the timer. Subclasses can delay this. |
| <Link id="m-isdecayvalid" /><code>{"protected virtual bool IsDecayValid(bool isStarting)"}</code> | Whether the entity may decay now. True if enabled and not disabled. |
| <Link id="m-resettimer" /><code>{"protected void ResetTimer()"}</code> | Cancels and starts a fresh timer. |
| <Link id="m-startorcontinuetimer" /><code>{"protected void StartOrContinueTimer()"}</code> | Starts the timer if none is running and decay is valid. |
| <Link id="m-startorshortentimer" /><code>{"protected void StartOrShortenTimer()"}</code> | Restarts the timer if the time left is longer than a fresh decay time. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkdecay" /><code>{"private void CheckDecay()"}</code> | Runs when the timer fires (or on load): if decay is still valid, destroys the entity next frame, otherwise calls `DecayFailed`. |
| <Link id="m-checkdecay-2" /><code>{"private bool CheckDecay(bool isOnLoad)"}</code> | Runs when the timer fires (or on load): if decay is still valid, destroys the entity next frame, otherwise calls `DecayFailed`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the decay timer. |
| <Link id="m-onserialize" /><code>{"private void ICleanOnSerialize.OnSerialize()"}</code> | Cancels the timer when the entity is serialized away (`ICleanOnSerialize`). |

</details>
