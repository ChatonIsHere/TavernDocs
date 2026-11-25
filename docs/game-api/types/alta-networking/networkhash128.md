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
| <Link id="m-i1" /><code>{"byte i1"}</code> |  |
| <Link id="m-i10" /><code>{"byte i10"}</code> |  |
| <Link id="m-i11" /><code>{"byte i11"}</code> |  |
| <Link id="m-i12" /><code>{"byte i12"}</code> |  |
| <Link id="m-i13" /><code>{"byte i13"}</code> |  |
| <Link id="m-i14" /><code>{"byte i14"}</code> |  |
| <Link id="m-i15" /><code>{"byte i15"}</code> | Byte 15, the last two hex characters. |
| <Link id="m-i2" /><code>{"byte i2"}</code> |  |
| <Link id="m-i3" /><code>{"byte i3"}</code> |  |
| <Link id="m-i4" /><code>{"byte i4"}</code> |  |
| <Link id="m-i5" /><code>{"byte i5"}</code> |  |
| <Link id="m-i6" /><code>{"byte i6"}</code> |  |
| <Link id="m-i7" /><code>{"byte i7"}</code> |  |
| <Link id="m-i8" /><code>{"byte i8"}</code> |  |
| <Link id="m-i9" /><code>{"byte i9"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid()"}</code> | True if any byte is non-zero. |
| <Link id="m-parse" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkhash128">{"NetworkHash128"}</Link>{" Parse(string text)"}</code> | Reads a hex string, left padding short strings with zeros. Bad characters read as 0. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Sets every byte to zero. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The 32 character lowercase hex form. |
| <Link id="m-hextonumber" /><code>{"private static int HexToNumber(char c)"}</code> |  |
