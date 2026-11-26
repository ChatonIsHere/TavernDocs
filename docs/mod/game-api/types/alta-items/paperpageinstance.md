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
| <Link id="m-ctor" /><code>{"PaperPageInstance()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay" /><code>{"private Coroutine decay"}</code> | <span className="api-desc">Private: the running decay coroutine.</span> |
| <Link id="m-decayduration" /><code>{"private float decayDuration"}</code> | <span className="api-desc">Seconds the decay effect plays before the page is destroyed. Defaults to 5.</span> |
| <Link id="m-decayeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/effectreleaseonfade">{"EffectReleaseOnFade"}</Link>{" decayEffect"}</code> | <span className="api-desc">Private: the decay effect being played.</span> |
| <Link id="m-decayeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" decayEffectDefinition"}</code> | <span className="api-desc">Pooled effect played while a dropped copy decays.</span> |
| <Link id="m-delaytostartdecaying" /><code>{"private float delayToStartDecaying"}</code> | <span className="api-desc">Seconds after a copy is dropped before it starts decaying. Defaults to 1.</span> |
| <Link id="m-isduplicate" /><code>{"private bool isDuplicate"}</code> | <span className="api-desc">Backing field for `IsDuplicate`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The page's `Pickup`, from `Entity.CommonPickup`.</span> |
| <Link id="m-isduplicate-2" /><code>{"protected override bool IsDuplicate { get; set; }"}</code> | <span className="api-desc">Whether this is a copy. Setting it calls `MarkAsDuplicate`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autoadd-2" /><code>{"void AutoAdd("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Dissolves the page on clients and, on the server, adds its data to `GlobalPagesManager` and destroys the item.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Hooks the first grab so original pages can be added on release.</span> |
| <Link id="m-markasduplicate" /><code>{"void MarkAsDuplicate(bool isDuplicate)"}</code> | <span className="api-desc">Makes the page a copy (not saved, decays when dropped) or an original (can't be docked, added on release).</span> |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Adds the duplicate flag to the page sync. Clients apply it with `MarkAsDuplicate`.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autoadd" /><code>{"private void AutoAdd("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Dissolves the page on clients and, on the server, adds its data to `GlobalPagesManager` and destroys the item.</span> |
| <Link id="m-autoaddcheckoriginal" /><code>{"private void AutoAddCheckOriginal("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Private, server: on first grab of an original page, blocks docking and other hands and adds it on release.</span> |
| <Link id="m-decay-2" /><code>{"private IEnumerator Decay() (iterator)"}</code> | <span className="api-desc">Private: after the drop delay, plays the decay effect, waits `decayDuration` and then the server destroys the page. Stops if docked.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Private: releases any running decay effect.</span> |
| <Link id="m-originaldockfilter" /><code>{"private void OriginalDockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Private: refuses all docks for an original page.</span> |
| <Link id="m-originalinteractionfilter" /><code>{"private void OriginalInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Private: refuses new interactions with an original page.</span> |
| <Link id="m-startdecay" /><code>{"private void StartDecay("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: starts `Decay` when a duplicate is let go.</span> |
| <Link id="m-stopdecay" /><code>{"private void StopDecay("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: stops decay and its effect when a duplicate is picked up.</span> |
| <Link id="m-stopdecaydock" /><code>{"private void StopDecayDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: stops decay and its effect when a duplicate is docked.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PaperPageInstance`:

<div className="api-used-in">

[`Book.DuplicatePage`](/mod/game-api/types/alta-items/book#m-duplicatepage), [`GlobalPagesManager.DissolvePage`](/mod/game-api/types/alta-items/globalpagesmanager#m-dissolvepage).

</div>
