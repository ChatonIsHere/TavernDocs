---
title: "SavingInfoAttribute"
description: "class SavingInfoAttribute in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingInfoAttribute

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `Attribute`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SavingInfoAttribute(string hash, bool isTag = false)"}</code> |
| <Link id="m-ctor-2" /><code>{"SavingInfoAttribute(uint hash = 0, bool isTag = false)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-savinghashes" /><code>{"private static Dictionary<Type, uint> savingHashes"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> |
| <Link id="m-istag" /><code>{"bool IsTag { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-gethash" /><code>{"static uint GetHash(Type type)"}</code> |
