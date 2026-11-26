# Snippets

Short answers the bot can post with `/snippet`, for questions that come up often but aren't a whole guide.

One file per answer. The file name is its id (`logs.md` is `/snippet logs`). This README is skipped.

```markdown
---
title: Where are my logs?
aliases: [log, logs, latest.log]
links:
    - label: Where files live
      url: /help/where-files-live
---

The answer, in a few lines of markdown. Keep it under 1500 characters.
```

- `title`: the question, as people would ask it.
- `aliases`: other words people might search for.
- `links`: pages for the full story. A `url` starting with `/` is a page on this site.

Write them like the rest of the docs: short, plain, no dashes. The voice check runs on these too.
