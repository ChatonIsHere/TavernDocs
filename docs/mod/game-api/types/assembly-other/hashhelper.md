---
title: "HashHelper"
description: "Helpers for the 16-bit hashes used to identify assets and prefabs over the network, and a stable string hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashHelper

A **static class** in `Alta.Values`, `Alta.Networking`.

Helpers for the 16-bit hashes used to identify assets and prefabs over the network, and a stable string hash.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hashbits" /><code>{"const int HashBits"}</code> | <span className="api-desc">Number of bits in a compressed hash (16).</span> |
| <Link id="m-maxhash" /><code>{"const ulong MaxHash"}</code> | <span className="api-desc">Largest valid compressed hash (65535).</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-savinghashes" /><code>{"private static Dictionary<Type, uint> savingHashes"}</code> | <span className="api-desc">Unused cache of saving hashes per type.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethashcodeforstring" /><code>{"static int GetHashCodeForString(string src)"}</code> | <span className="api-desc">Fixed string hash (two djb2-style passes over alternating characters), so a string always gives the same hash on every machine.</span> |
| <Link id="m-hash" /><code>{"static uint Hash(string text)"}</code> | <span className="api-desc">Hashes a string with `GetHashCodeForString`, as a `uint`.</span> |
| <Link id="m-hashcompressed" /><code>{"static uint HashCompressed(string text)"}</code> | <span className="api-desc">Hashes a string and keeps the low 16 bits.</span> |
| <Link id="m-validate" /><code>{"static bool Validate(ref int hash, Object current, Object target)"}</code> | <span className="api-desc">Replaces the hash with a new one if it is 0 or out of range (or, in one overload, the object was copied); returns true if it changed.</span> |
| <Link id="m-validate-2" /><code>{"static bool Validate(ref int hash, Object target)"}</code> | <span className="api-desc">Replaces the hash with a new one if it is 0 or out of range (or, in one overload, the object was copied); returns true if it changed.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getnewhash" /><code>{"private static int GetNewHash(Object target)"}</code> | <span className="api-desc">Makes a new hash from the low 16 bits of the object's instance ID.</span> |

</details>
