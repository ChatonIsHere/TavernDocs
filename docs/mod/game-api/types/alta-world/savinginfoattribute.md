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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `Attribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavingInfoAttribute(string hash, bool isTag = false)"}</code> | <span className="api-desc">Creates a `SavingInfoAttribute` from `hash` and `isTag`.</span> |
| <Link id="m-ctor-2" /><code>{"SavingInfoAttribute(uint hash = 0, bool isTag = false)"}</code> | <span className="api-desc">Creates a `SavingInfoAttribute` from `hash` and `isTag`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-savinghashes" /><code>{"private static Dictionary<Type, uint> savingHashes"}</code> | <span className="api-desc">Cache of hashes by type.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">The hash this attribute sets.</span> |
| <Link id="m-istag" /><code>{"bool IsTag { get; }"}</code> | <span className="api-desc">Whether the type is a tag.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethash" /><code>{"static uint GetHash(Type type)"}</code> | <span className="api-desc">The type's saving hash: from its attribute if set and non-zero, otherwise a hash of its name. Cached.</span> |
