---
title: "ModifiableStaticObject"
description: "Part of the static world that can be swapped between an original and a modified look (a cleared rock, opened passage and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableStaticObject

A **class** in `Root.Township`, `Alta.Networking`.

Part of the static world that can be swapped between an original and a modified look (a cleared rock, opened passage and so on). Its state comes from `ModifiableStaticManager` by hash.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IChangeWithChunking`](/mod/game-api/types/global-i-l/ichangewithchunking), [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit), [`IForcedPresenceOnServer`](/mod/game-api/types/alta-networking/iforcedpresenceonserver)
- **Derived types** [`DestroyableStaticObject`](/mod/game-api/types/alta-networking/destroyablestaticobject), [`ModifiableStaticEvent`](/mod/game-api/types/alta-networking/modifiablestaticevent), [`ModifiableStaticUnityEvent`](/mod/game-api/types/alta-networking/modifiablestaticunityevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableStaticObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ismodified" /><code>{"protected bool isModified"}</code> | <span className="api-desc">Whether it's currently in its modified state.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canreturn" /><code>{"private bool canReturn"}</code> | <span className="api-desc">If true the object can go back to its original state, so `Modify` keeps the original objects instead of destroying them.</span> |
| <Link id="m-hash" /><code>{"private int hash"}</code> | <span className="api-desc">Backing field for `Hash`, set in the editor by `OnValidate`.</span> |
| <Link id="m-modifiedevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" modifiedEvent"}</code> | <span className="api-desc">Backing field for `ModifiedEvent`, run when the object is modified live.</span> |
| <Link id="m-modifiedobjects" /><code>{"private GameObject[] modifiedObjects"}</code> | <span className="api-desc">Objects turned on when modified and off when unmodified.</span> |
| <Link id="m-modifyinstant" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" modifyInstant"}</code> | <span className="api-desc">Event run instead of `modifiedEvent` when the object starts already modified (no live change).</span> |
| <Link id="m-originalobjects" /><code>{"private GameObject[] originalObjects"}</code> | <span className="api-desc">Objects shown before the change. Destroyed on modify unless `canReturn` is set.</span> |
| <Link id="m-unmodifiedevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" unModifiedEvent"}</code> | <span className="api-desc">Backing field for `UnModifiedEvent`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash-2" /><code>{"uint Hash { get; set; }"}</code> | <span className="api-desc">Id used to look up and set its state in `ModifiableStaticManager`.</span> |
| <Link id="m-modifiedevent-2" /><code><Link to="/mod/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" ModifiedEvent { get; }"}</code> | <span className="api-desc">Raised when it changes to modified while running.</span> |
| <Link id="m-unmodifiedevent-2" /><code><Link to="/mod/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" UnModifiedEvent { get; }"}</code> | <span className="api-desc">Raised when it changes back to the original.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"void Modify(bool hasEvents = true)"}</code> | <span className="api-desc">Shows the modified objects. The originals are destroyed unless it can return, in which case they stay active.</span> |
| <Link id="m-unmodify" /><code>{"void UnModify(bool hasEvents = true)"}</code> | <span className="api-desc">Shows the original objects and hides the modified ones.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: makes sure it has a hash.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Reads its state from the manager and applies it without events.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beforesaving" /><code>{"private void IChangeWithChunking.BeforeSaving()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-checkchange" /><code>{"private void CheckChange(uint objectHash, bool isModified)"}</code> | <span className="api-desc">Handler for `ModifiableStaticManager.ObjectChanged`: if the hash is this object's, modifies or unmodifies it with events.</span> |
| <Link id="m-loaded" /><code>{"private void IChangeWithChunking.Loaded()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops listening for changes and removes the object from `ModifiableStaticManager`.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Listens for changes and registers the object with `ModifiableStaticManager` by hash.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ModifiableStaticObject`:

<div className="api-used-in">

[`DestroyableStaticObject.Modified`](/mod/game-api/types/alta-networking/destroyablestaticobject#m-modified), [`ModifiableAdditionalStaticContent.basePrefab`](/mod/game-api/types/global-m-o/modifiableadditionalstaticcontent#m-baseprefab), [`ModifiableAdditionalStaticContent.instantiated`](/mod/game-api/types/global-m-o/modifiableadditionalstaticcontent#m-instantiated).

</div>
