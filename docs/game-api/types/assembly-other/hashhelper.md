---
title: "HashHelper"
description: "The hashing the game uses: Hash(string), HashCompressed, GetHashCodeForString, and the editor-side hash validation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashHelper

A **static class** in `Alta.Values`, `Alta.Networking`.

The hashing the game uses: `Hash(string)`, `HashCompressed`, `GetHashCodeForString`, and the editor-side hash validation. Hashes are 16 bits (`MaxHash` 65535).

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hashbits" /><code>{"const int HashBits"}</code> |  |
| <Link id="m-maxhash" /><code>{"const ulong MaxHash"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-savinghashes" /><code>{"private static Dictionary<Type, uint> savingHashes"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethashcodeforstring" /><code>{"static int GetHashCodeForString(string src)"}</code> |  |
| <Link id="m-hash" /><code>{"static uint Hash(string text)"}</code> |  |
| <Link id="m-hashcompressed" /><code>{"static uint HashCompressed(string text)"}</code> |  |
| <Link id="m-validate" /><code>{"static bool Validate(ref int hash, Object current, Object target)"}</code> |  |
| <Link id="m-validate-2" /><code>{"static bool Validate(ref int hash, Object target)"}</code> |  |
| <Link id="m-getnewhash" /><code>{"private static int GetNewHash(Object target)"}</code> |  |
