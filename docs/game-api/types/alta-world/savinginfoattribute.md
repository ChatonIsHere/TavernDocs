---
title: "SavingInfoAttribute"
description: "Attribute that gives a type a fixed saving hash, from a string or a number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingInfoAttribute

A **class** in `Root.Township`, `Alta.Chunks`.

Attribute that gives a type a fixed saving hash, from a string or a number. Without it the hash comes from the type name.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `Attribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavingInfoAttribute(string hash, bool isTag = false)"}</code> | Creates a `SavingInfoAttribute` from `hash` and `isTag`. |
| <Link id="m-ctor-2" /><code>{"SavingInfoAttribute(uint hash = 0, bool isTag = false)"}</code> | Creates a `SavingInfoAttribute` from `hash` and `isTag`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savinghashes" /><code>{"private static Dictionary<Type, uint> savingHashes"}</code> | Cache of hashes by type. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | The hash this attribute sets. |
| <Link id="m-istag" /><code>{"bool IsTag { get; }"}</code> | Whether the type is a tag. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"static uint GetHash(Type type)"}</code> | The type's saving hash: from its attribute if set and non-zero, otherwise a hash of its name. Cached. |
