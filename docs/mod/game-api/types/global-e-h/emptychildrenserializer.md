---
title: "EmptyChildrenSerializer"
description: "ISerializeChildren with no children, for saving or loading an object that has none."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyChildrenSerializer

A **class** in `Root.Township`, the global namespace.

`ISerializeChildren` with no children, for saving or loading an object that has none. Use the shared `Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`ISerializeChildren`](/mod/game-api/types/alta-networking/iserializechildren)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private EmptyChildrenSerializer()"}</code> | <span className="api-desc">Creates an `EmptyChildrenSerializer` with default values.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/emptychildrenserializer">{"EmptyChildrenSerializer"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The shared instance.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-iserializechildren-childcount" /><code>{"private int Alta.Networking.ISerializeChildren.ChildCount { get; }"}</code> | <span className="api-desc">Always 0.</span> |
| <Link id="m-alta-networking-iserializechildren-childprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab-childprefab">{"NetworkPrefab.ChildPrefab"}</Link>{"> Alta.Networking.ISerializeChildren.ChildPrefabs { get; }"}</code> | <span className="api-desc">An empty list.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addchild" /><code>{"private void Alta.Networking.ISerializeChildren.AddChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-addemptychildatindex" /><code>{"private void Alta.Networking.ISerializeChildren.AddEmptyChildAtIndex(int index)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-getchildindex" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | <span className="api-desc">Always -1.</span> |
| <Link id="m-getchildindex-2" /><code>{"private int Alta.Networking.ISerializeChildren.GetChildIndex("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent)"}</code> | <span className="api-desc">Always -1.</span> |
| <Link id="m-getspawnedchildren" /><code>{"private void Alta.Networking.ISerializeChildren.GetSpawnedChildren(int index, "}<Link to="/mod/game-api/types/alta-networking/networkprefabchildeventhandler">{"NetworkPrefabChildEventHandler"}</Link>{" callback)"}</code> | <span className="api-desc">Does nothing and never calls the callback.</span> |

</details>
