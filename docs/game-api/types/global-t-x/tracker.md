---
title: "Tracker"
description: "class Tracker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Tracker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TrackerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TrackerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TrackerData`](/game-api/types/global-t-x/trackerdata)
- **Attributes** `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tracker()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-removing" /><code>{"private static HashSet<string> removing"}</code> |  |
| <Link id="m-trackers" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/global-t-x/tracker">{"Tracker"}</Link>{"> trackers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> |  |
| <Link id="m-alta-saving-isavablesavebase-name" /><code>{"private string Alta.Saving.ISavableSaveBase.name { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static void Create("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string name)"}</code> |  |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Get(string name)"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/global-t-x/trackerdata">{"TrackerData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-remove" /><code>{"static void Remove(string name)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/global-t-x/trackerdata">{"TrackerData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Initialize(string name)"}</code> |  |
| <Link id="m-remove-2" /><code>{"private void Remove()"}</code> |  |
