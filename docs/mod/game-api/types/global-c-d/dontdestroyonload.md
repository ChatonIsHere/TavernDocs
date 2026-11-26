---
title: "DontDestroyOnLoad"
description: "Keeps an object alive across scene loads, allowing only one per identifier; later duplicates destroy themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DontDestroyOnLoad

A **class** in `Root.Township`, the global namespace.

Keeps an object alive across scene loads, allowing only one per `identifier`; later duplicates destroy themselves.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DontDestroyOnLoad()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"protected string identifier"}</code> | <span className="api-desc">Key that decides which objects count as duplicates.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-identifiers" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/global-c-d/dontdestroyonload">{"DontDestroyOnLoad"}</Link>{"> identifiers"}</code> | <span className="api-desc">Static map from identifier to the surviving instance.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofficial" /><code>{"bool IsOfficial { get; private set; }"}</code> | <span className="api-desc">True on the instance that registered and survived, false on a duplicate.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Destroys this object if another live one has the same identifier, otherwise registers it and marks it don't-destroy-on-load.</span> |
