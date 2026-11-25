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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IChangeWithChunking`](/game-api/types/global-i-l/ichangewithchunking), [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit), [`IForcedPresenceOnServer`](/game-api/types/alta-networking/iforcedpresenceonserver)
- **Derived types** [`DestroyableStaticObject`](/game-api/types/alta-networking/destroyablestaticobject), [`ModifiableStaticEvent`](/game-api/types/alta-networking/modifiablestaticevent), [`ModifiableStaticUnityEvent`](/game-api/types/alta-networking/modifiablestaticunityevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableStaticObject()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canreturn" /><code>{"private bool canReturn"}</code> |  |
| <Link id="m-hash" /><code>{"private int hash"}</code> |  |
| <Link id="m-ismodified" /><code>{"protected bool isModified"}</code> | Whether it's currently in its modified state. |
| <Link id="m-modifiedevent" /><code>{"private "}<Link to="/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" modifiedEvent"}</code> |  |
| <Link id="m-modifiedobjects" /><code>{"private GameObject[] modifiedObjects"}</code> |  |
| <Link id="m-modifyinstant" /><code>{"private "}<Link to="/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" modifyInstant"}</code> |  |
| <Link id="m-originalobjects" /><code>{"private GameObject[] originalObjects"}</code> |  |
| <Link id="m-unmodifiedevent" /><code>{"private "}<Link to="/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" unModifiedEvent"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash-2" /><code>{"uint Hash { get; set; }"}</code> | Id used to look up and set its state in `ModifiableStaticManager`. |
| <Link id="m-modifiedevent-2" /><code><Link to="/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" ModifiedEvent { get; }"}</code> | Raised when it changes to modified while running. |
| <Link id="m-unmodifiedevent-2" /><code><Link to="/game-api/types/alta-networking/modifiablestaticevent">{"ModifiableStaticEvent"}</Link>{" UnModifiedEvent { get; }"}</code> | Raised when it changes back to the original. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"void Modify(bool hasEvents = true)"}</code> | Shows the modified objects. The originals are destroyed unless it can return, in which case they stay active. |
| <Link id="m-unmodify" /><code>{"void UnModify(bool hasEvents = true)"}</code> | Shows the original objects and hides the modified ones. |
| <Link id="m-beforesaving" /><code>{"private void IChangeWithChunking.BeforeSaving()"}</code> |  |
| <Link id="m-checkchange" /><code>{"private void CheckChange(uint objectHash, bool isModified)"}</code> |  |
| <Link id="m-loaded" /><code>{"private void IChangeWithChunking.Loaded()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: makes sure it has a hash. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Reads its state from the manager and applies it without events. |

## Used in

Members of other types that take, return or hold a `ModifiableStaticObject`:

[`DestroyableStaticObject.Modified`](/game-api/types/alta-networking/destroyablestaticobject#m-modified), [`ModifiableAdditionalStaticContent.basePrefab`](/game-api/types/global-m-o/modifiableadditionalstaticcontent#m-baseprefab), [`ModifiableAdditionalStaticContent.instantiated`](/game-api/types/global-m-o/modifiableadditionalstaticcontent#m-instantiated).
