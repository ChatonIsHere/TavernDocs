---
title: "EmptyChildrenSerializer"
description: "ISerializeChildren with no children, for saving or loading an object that has none."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyChildrenSerializer

A **class** in `Root.Township`, no namespace.

`ISerializeChildren` with no children, for saving or loading an object that has none. Use the shared `Instance`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`ISerializeChildren`](/game-api/types/alta-networking/iserializechildren)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private EmptyChildrenSerializer()"}</code> | Creates an `EmptyChildrenSerializer` with default values. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-e-h/emptychildrenserializer">{"EmptyChildrenSerializer"}</Link>{" Instance { get; }"}</code> | The shared instance. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-iserializechildren-childcount" /><code>{"private int Alta.Networking.ISerializeChildren.ChildCount { get; }"}</code> | Always 0. |
| <Link id="m-alta-networking-iserializechildren-childprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> Alta.Networking.ISerializeChildren.ChildPrefabs { get; }"}</code> | An empty list. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addchild" /><code>{"private void Alta.Networking.ISerializeChildren.AddChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | Does nothing. |
| <Link id="m-addemptychildatindex" /><code>{"private void Alta.Networking.ISerializeChildren.AddEmptyChildAtIndex(int index)"}</code> | Does nothing. |
| <Link id="m-getchildindex" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | Always -1. |
| <Link id="m-getchildindex-2" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | Always -1. |
| <Link id="m-getspawnedchildren" /><code>{"private void Alta.Networking.ISerializeChildren.GetSpawnedChildren(int index, "}<Link to="/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{" callback)"}</code> | Does nothing and never calls the callback. |

</details>
