---
title: "DontDestroyOnLoad"
description: "Keeps an object alive across scene loads, allowing only one per identifier; later duplicates destroy themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DontDestroyOnLoad

A **class** in `Root.Township`, no namespace.

Keeps an object alive across scene loads, allowing only one per `identifier`; later duplicates destroy themselves.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DontDestroyOnLoad()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"protected string identifier"}</code> | Key that decides which objects count as duplicates. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-identifiers" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/global-c-d/dontdestroyonload">{"DontDestroyOnLoad"}</Link>{"> identifiers"}</code> | Static map from identifier to the surviving instance. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isofficial" /><code>{"bool IsOfficial { get; private set; }"}</code> | True on the instance that registered and survived, false on a duplicate. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Destroys this object if another live one has the same identifier, otherwise registers it and marks it don't-destroy-on-load. |
