---
title: "AppDataCacheHandler"
description: "Stores small integers as files under %AppData%/ATT CACHE/OmniBot-ATT-Win-Dev(01-01)/."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AppDataCacheHandler

A **static class** in `Root.Township`, the global namespace.

Stores small integers as files under `%AppData%/ATT CACHE/OmniBot-ATT-Win-Dev(01-01)/`. Used to remember the last local server scene launched.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"static bool Clear(string cacheName)"}</code> | <span className="api-desc">Deletes the named cache file. Returns true if it existed.</span> |
| <Link id="m-load" /><code>{"static bool Load(string cacheName, out int value)"}</code> | <span className="api-desc">Reads the named cache file as an int. Returns false and -1 if it's missing or not a number.</span> |
| <Link id="m-loadandclear" /><code>{"static bool LoadAndClear(string cacheName, out int value)"}</code> | <span className="api-desc">Loads the value and deletes the file. Returns true when nothing was loaded too, so the return value says little.</span> |
| <Link id="m-save" /><code>{"static void Save(string cacheName, int value)"}</code> | <span className="api-desc">Writes the int to the named cache file, replacing any old one.</span> |
