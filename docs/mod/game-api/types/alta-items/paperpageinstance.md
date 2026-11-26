---
title: "PaperPageInstance"
description: "A physical page item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaperPageInstance

A **class** in `Root.Township`, `Alta.Pages`.

A physical page item. An original page joins the shared page collection when a player lets go of it; a duplicate copy is not saved and decays when dropped.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`PageInstance`](/mod/game-api/types/alta-items/pageinstance)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PaperPageInstance()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay" /><code>{"private Coroutine decay"}</code> | Private: the running decay coroutine. |
| <Link id="m-decayduration" /><code>{"private float decayDuration"}</code> | Seconds the decay effect plays before the page is destroyed. Defaults to 5. |
| <Link id="m-decayeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/effectreleaseonfade">{"EffectReleaseOnFade"}</Link>{" decayEffect"}</code> | Private: the decay effect being played. |
| <Link id="m-decayeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" decayEffectDefinition"}</code> | Pooled effect played while a dropped copy decays. |
| <Link id="m-delaytostartdecaying" /><code>{"private float delayToStartDecaying"}</code> | Seconds after a copy is dropped before it starts decaying. Defaults to 1. |
| <Link id="m-isduplicate" /><code>{"private bool isDuplicate"}</code> | Backing field for `IsDuplicate`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The page's `Pickup`, from `Entity.CommonPickup`. |
| <Link id="m-isduplicate-2" /><code>{"protected override bool IsDuplicate { get; set; }"}</code> | Whether this is a copy. Setting it calls `MarkAsDuplicate`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autoadd-2" /><code>{"void AutoAdd("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Dissolves the page on clients and, on the server, adds its data to `GlobalPagesManager` and destroys the item. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Hooks the first grab so original pages can be added on release. |
| <Link id="m-markasduplicate" /><code>{"void MarkAsDuplicate(bool isDuplicate)"}</code> | Makes the page a copy (not saved, decays when dropped) or an original (can't be docked, added on release). |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Adds the duplicate flag to the page sync. Clients apply it with `MarkAsDuplicate`. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoadd" /><code>{"private void AutoAdd("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Dissolves the page on clients and, on the server, adds its data to `GlobalPagesManager` and destroys the item. |
| <Link id="m-autoaddcheckoriginal" /><code>{"private void AutoAddCheckOriginal("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Private, server: on first grab of an original page, blocks docking and other hands and adds it on release. |
| <Link id="m-decay-2" /><code>{"private IEnumerator Decay() (iterator)"}</code> | Private: after the drop delay, plays the decay effect, waits `decayDuration` and then the server destroys the page. Stops if docked. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Private: releases any running decay effect. |
| <Link id="m-originaldockfilter" /><code>{"private void OriginalDockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Private: refuses all docks for an original page. |
| <Link id="m-originalinteractionfilter" /><code>{"private void OriginalInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Private: refuses new interactions with an original page. |
| <Link id="m-startdecay" /><code>{"private void StartDecay("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: starts `Decay` when a duplicate is let go. |
| <Link id="m-stopdecay" /><code>{"private void StopDecay("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: stops decay and its effect when a duplicate is picked up. |
| <Link id="m-stopdecaydock" /><code>{"private void StopDecayDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: stops decay and its effect when a duplicate is docked. |

</details>

## Used in

Members of other types that take, return or hold a `PaperPageInstance`:

[`Book.DuplicatePage`](/mod/game-api/types/alta-items/book#m-duplicatepage), [`GlobalPagesManager.DissolvePage`](/mod/game-api/types/alta-items/globalpagesmanager#m-dissolvepage).
