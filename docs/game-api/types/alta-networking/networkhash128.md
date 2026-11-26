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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-i0" /><code>{"byte i0"}</code> | Byte 0, the first two hex characters. |
| <Link id="m-i1" /><code>{"byte i1"}</code> | Byte 1 of the hash. |
| <Link id="m-i10" /><code>{"byte i10"}</code> | Byte 10 of the hash. |
| <Link id="m-i11" /><code>{"byte i11"}</code> | Byte 11 of the hash. |
| <Link id="m-i12" /><code>{"byte i12"}</code> | Byte 12 of the hash. |
| <Link id="m-i13" /><code>{"byte i13"}</code> | Byte 13 of the hash. |
| <Link id="m-i14" /><code>{"byte i14"}</code> | Byte 14 of the hash. |
| <Link id="m-i15" /><code>{"byte i15"}</code> | Byte 15, the last two hex characters. |
| <Link id="m-i2" /><code>{"byte i2"}</code> | Byte 2 of the hash. |
| <Link id="m-i3" /><code>{"byte i3"}</code> | Byte 3 of the hash. |
| <Link id="m-i4" /><code>{"byte i4"}</code> | Byte 4 of the hash. |
| <Link id="m-i5" /><code>{"byte i5"}</code> | Byte 5 of the hash. |
| <Link id="m-i6" /><code>{"byte i6"}</code> | Byte 6 of the hash. |
| <Link id="m-i7" /><code>{"byte i7"}</code> | Byte 7 of the hash. |
| <Link id="m-i8" /><code>{"byte i8"}</code> | Byte 8 of the hash. |
| <Link id="m-i9" /><code>{"byte i9"}</code> | Byte 9 of the hash. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid()"}</code> | True if any byte is non-zero. |
| <Link id="m-parse" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkhash128">{"NetworkHash128"}</Link>{" Parse(string text)"}</code> | Reads a hex string, left padding short strings with zeros. Bad characters read as 0. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Sets every byte to zero. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The 32 character lowercase hex form. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hextonumber" /><code>{"private static int HexToNumber(char c)"}</code> | Turns one hex digit into its number; anything else gives 0. Used by `Parse`. |

</details>
