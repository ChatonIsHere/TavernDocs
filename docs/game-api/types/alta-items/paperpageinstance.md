---
title: "PaperPageInstance"
description: "A loose page you find."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaperPageInstance

A **class** in `Root.Township`, `Alta.Pages`.

A loose page you find.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`PageInstance`](/game-api/types/alta-items/pageinstance)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PaperPageInstance()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-decay" /><code>{"private Coroutine decay"}</code> |  |
| <Link id="m-decayduration" /><code>{"private float decayDuration"}</code> |  |
| <Link id="m-decayeffect" /><code>{"private "}<Link to="/game-api/types/global-e-h/effectreleaseonfade">{"EffectReleaseOnFade"}</Link>{" decayEffect"}</code> |  |
| <Link id="m-decayeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" decayEffectDefinition"}</code> |  |
| <Link id="m-delaytostartdecaying" /><code>{"private float delayToStartDecaying"}</code> |  |
| <Link id="m-isduplicate" /><code>{"private bool isDuplicate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isduplicate-2" /><code>{"protected override bool IsDuplicate { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autoadd-2" /><code>{"void AutoAdd("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-markasduplicate" /><code>{"void MarkAsDuplicate(bool isDuplicate)"}</code> |  |
| <Link id="m-autoadd" /><code>{"private void AutoAdd("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-autoaddcheckoriginal" /><code>{"private void AutoAddCheckOriginal("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-decay-2" /><code>{"private IEnumerator Decay() (iterator)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-originaldockfilter" /><code>{"private void OriginalDockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |  |
| <Link id="m-originalinteractionfilter" /><code>{"private void OriginalInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-startdecay" /><code>{"private void StartDecay("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stopdecay" /><code>{"private void StopDecay("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stopdecaydock" /><code>{"private void StopDecayDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PaperPageInstance`:

[`Book.DuplicatePage`](/game-api/types/alta-items/book#m-duplicatepage), [`GlobalPagesManager.DissolvePage`](/game-api/types/alta-items/globalpagesmanager#m-dissolvepage).
