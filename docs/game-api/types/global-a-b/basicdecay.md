---
title: "BasicDecay"
description: "class BasicDecay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDecay

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BasicDecayData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicDecayData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ICleanOnSerialize`](/game-api/types/global-i-l/icleanonserialize)
- **Derived types** [`TreeDecay`](/game-api/types/alta-crafting/treedecay), [`BasicDecayData`](/game-api/types/global-a-b/basicdecaydata), [`PickupDecay`](/game-api/types/global-p/pickupdecay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDecay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-decaytimer" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decayTimer"}</code> |  |
| <Link id="m-isdisabled" /><code>{"protected bool isDisabled"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-c-d/decaysettings">{"DecaySettings"}</Link>{" settings"}</code> |  |
| <Link id="m-willdestroy" /><code>{"private bool willDestroy"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/global-c-d/decaysettings">{"DecaySettings"}</Link>{" Settings { get; set; }"}</code> |  |
| <Link id="m-timermultiplier" /><code>{"protected virtual float TimerMultiplier { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data)"}</code> |  |
| <Link id="m-canceltimer" /><code>{"protected void CancelTimer()"}</code> |  |
| <Link id="m-checkdecay" /><code>{"private void CheckDecay()"}</code> |  |
| <Link id="m-checkdecay-2" /><code>{"private bool CheckDecay(bool isOnLoad)"}</code> |  |
| <Link id="m-decayfailed" /><code>{"protected virtual void DecayFailed()"}</code> |  |
| <Link id="m-evaluatedecaytime" /><code>{"protected float EvaluateDecayTime()"}</code> |  |
| <Link id="m-finishinitialize" /><code>{"protected virtual void FinishInitialize()"}</code> |  |
| <Link id="m-isdecayvalid" /><code>{"protected virtual bool IsDecayValid(bool isStarting)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onserialize" /><code>{"private void ICleanOnSerialize.OnSerialize()"}</code> |  |
| <Link id="m-resettimer" /><code>{"protected void ResetTimer()"}</code> |  |
| <Link id="m-startorcontinuetimer" /><code>{"protected void StartOrContinueTimer()"}</code> |  |
| <Link id="m-startorshortentimer" /><code>{"protected void StartOrShortenTimer()"}</code> |  |
