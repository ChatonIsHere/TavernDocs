---
title: "SerializeHashedObject"
description: "Stream extension methods that send a HashedGeneralValue (or a PlayerProgressFlag) as its 16-bit hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializeHashedObject

A **static class** in `Root.Township`, `Alta`.

Stream extension methods that send a `HashedGeneralValue` (or a `PlayerProgressFlag`) as its 16-bit hash.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializehashed" /><code>{"static void SerializeHashed<T>("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref T value)"}</code> | <span className="api-desc">Writes the value's hash in 16 bits (0 for null) and looks it up again on read.</span> |
| <Link id="m-serializehashedcached" /><code>{"static void SerializeHashedCached<T>("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref T value, ref T last)"}</code> | <span className="api-desc">Sends one bit if the value is the same as `last`, otherwise the hash, and updates `last`.</span> |
| <Link id="m-serializeprogressflag" /><code>{"static void SerializeProgressFlag<T>("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref T value)"}</code> | <span className="api-desc">Like `SerializeHashed`, for progress flags, cast back to the flag type on read.</span> |
