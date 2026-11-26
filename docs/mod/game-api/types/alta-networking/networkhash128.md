---
title: "NetworkHash128"
description: "A 128-bit ID stored as 16 bytes, written and read as a 32 character hex string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkHash128

A **struct** in `Root.Township`, `Alta.Networking`.

A 128-bit ID stored as 16 bytes, written and read as a 32 character hex string.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-i0" /><code>{"byte i0"}</code> | <span className="api-desc">Byte 0, the first two hex characters.</span> |
| <Link id="m-i1" /><code>{"byte i1"}</code> | <span className="api-desc">Byte 1 of the hash.</span> |
| <Link id="m-i10" /><code>{"byte i10"}</code> | <span className="api-desc">Byte 10 of the hash.</span> |
| <Link id="m-i11" /><code>{"byte i11"}</code> | <span className="api-desc">Byte 11 of the hash.</span> |
| <Link id="m-i12" /><code>{"byte i12"}</code> | <span className="api-desc">Byte 12 of the hash.</span> |
| <Link id="m-i13" /><code>{"byte i13"}</code> | <span className="api-desc">Byte 13 of the hash.</span> |
| <Link id="m-i14" /><code>{"byte i14"}</code> | <span className="api-desc">Byte 14 of the hash.</span> |
| <Link id="m-i15" /><code>{"byte i15"}</code> | <span className="api-desc">Byte 15, the last two hex characters.</span> |
| <Link id="m-i2" /><code>{"byte i2"}</code> | <span className="api-desc">Byte 2 of the hash.</span> |
| <Link id="m-i3" /><code>{"byte i3"}</code> | <span className="api-desc">Byte 3 of the hash.</span> |
| <Link id="m-i4" /><code>{"byte i4"}</code> | <span className="api-desc">Byte 4 of the hash.</span> |
| <Link id="m-i5" /><code>{"byte i5"}</code> | <span className="api-desc">Byte 5 of the hash.</span> |
| <Link id="m-i6" /><code>{"byte i6"}</code> | <span className="api-desc">Byte 6 of the hash.</span> |
| <Link id="m-i7" /><code>{"byte i7"}</code> | <span className="api-desc">Byte 7 of the hash.</span> |
| <Link id="m-i8" /><code>{"byte i8"}</code> | <span className="api-desc">Byte 8 of the hash.</span> |
| <Link id="m-i9" /><code>{"byte i9"}</code> | <span className="api-desc">Byte 9 of the hash.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid()"}</code> | <span className="api-desc">True if any byte is non-zero.</span> |
| <Link id="m-parse" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/networkhash128">{"NetworkHash128"}</Link>{" Parse(string text)"}</code> | <span className="api-desc">Reads a hex string, left padding short strings with zeros. Bad characters read as 0.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Sets every byte to zero.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The 32 character lowercase hex form.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hextonumber" /><code>{"private static int HexToNumber(char c)"}</code> | <span className="api-desc">Turns one hex digit into its number; anything else gives 0. Used by `Parse`.</span> |

</details>
