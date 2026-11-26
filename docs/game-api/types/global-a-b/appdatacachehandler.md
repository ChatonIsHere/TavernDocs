---
title: "AppDataCacheHandler"
description: "Stores small integers as files under %AppData%/ATT CACHE/OmniBot-ATT-Win-Dev(01-01)/."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AppDataCacheHandler

A **static class** in `Root.Township`, no namespace.

Stores small integers as files under `%AppData%/ATT CACHE/OmniBot-ATT-Win-Dev(01-01)/`. Used to remember the last local server scene launched.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"static bool Clear(string cacheName)"}</code> | Deletes the named cache file. Returns true if it existed. |
| <Link id="m-load" /><code>{"static bool Load(string cacheName, out int value)"}</code> | Reads the named cache file as an int. Returns false and -1 if it's missing or not a number. |
| <Link id="m-loadandclear" /><code>{"static bool LoadAndClear(string cacheName, out int value)"}</code> | Loads the value and deletes the file. Returns true when nothing was loaded too, so the return value says little. |
| <Link id="m-save" /><code>{"static void Save(string cacheName, int value)"}</code> | Writes the int to the named cache file, replacing any old one. |
