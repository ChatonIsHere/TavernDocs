---
title: Settings and updates
description: The container's settings, updating it, backups, and CPU limits.
summary:
    - "Put container settings like `SCENE` and `MODLIST` in a `.env` file next to `docker-compose.yml`, then run `docker compose up -d`."
    - "To change the name or password, stop the server, edit `tavern-config/server_settings.json`, and start it again."
    - "Update with `docker compose pull` then `docker compose up -d`. Your game files, saves and config are not touched."
    - "For backups, run `docker compose down`, archive `server-data` and `tavern-config`, then start again."
    - "To cap CPU and RAM, set `cpus` and `mem_limit` in the compose file, and keep at least 4 CPUs."
---

# Settings and updates

There are two kinds of settings:

- **Container settings** go in a `.env` file next to `docker-compose.yml`. They're read every time the container starts.
- **Server settings** (name, password, max players, listing) are in `tavern-config/server_settings.json`. See [Config reference](../config-reference.md).

## Container settings

Make a `.env` file next to the compose file:

```bash
cd ~/att-server
nano .env
```

Only add the lines you want to change. For example:

```ini
SCENE=normal
MODLIST=ModdingTavern.TavernEssentials,ChatonIsHere.Steady
```

Then apply it:

```bash
docker compose up -d
```

| Setting | What it does |
| --- | --- |
| `SERVER_PORT` | Game port (UDP). Default `1757`. |
| `RCON_PORT`, `WEB_PORT`, `AUTH_PORT` | Console, web server and login ports (TCP). Defaults `1760`, `1761`, `1762`. Change them to run two servers on one address, see [Join by name](../srv-records.md). |
| `SCENE` | `normal`, `quest` or `tutorial`. Unset keeps what `server_settings.json` says. |
| `MODLIST` | Mods to keep installed, comma-separated, as `Author.Mod` (its latest) or `Author.Mod@1.2.0`. See [Mods on your server](../mods-on-your-server.md). |
| `AUTO_PATCH` | `false` skips patching and update checks on start. |
| `DEBUG` | `true` starts the server with `/debug_helper` for extra logging. |
| `PUID`, `PGID` | User and group the server runs as. Unset means whoever owns `game-source`. |
| `ATT_ACCESS_TOKEN`, `ATT_REFRESH_TOKEN`, `ATT_IDENTITY_TOKEN` | Leave these alone. They default to the offline server tokens. |

## Changing the server's name or password

1. Stop the server: `docker compose down`
2. Edit `tavern-config/server_settings.json`. For a password, add a `password` line with the password in plain text:

   ```json
   {
       "name": "My Tavern Server",
       "password": "pick-something-good",
       "max_players": 24
   }
   ```

   Keep the other lines that are already in the file. When the server reads the file, it swaps the password for a hash and removes the plain one, so it's never left lying around.

3. Start it again: `docker compose up -d`

To remove a password, set `"password_hash": ""`.

Name and password changes work without a restart too, since the server reads the file on every join, but stopping first means nothing writes over your edit.

## Updating

```bash
cd ~/att-server
docker compose pull
docker compose up -d
docker image prune -f   # optional, removes the old image
```

This doesn't touch your game files, saves or config. MelonLoader, TavernLib and the patch are checked on every start anyway.

To force a full re-patch at the latest releases:

```bash
docker compose down
docker compose run --rm a-township-container update
docker compose up -d
```

## Backups

Back up `server-data` and `tavern-config`. Stop the server first so the save isn't half-written:

```bash
cd ~/att-server
docker compose down
tar czf ~/att-backup-$(date +%F).tar.gz server-data tavern-config
docker compose up -d
```

TavernLib also archives the game's log in `server-data/Servers/-1/Logs/logs/Archives` at every start and every 10MB, keeping 20. That folder can reach a few hundred MB, so skip it if space is tight.

The server can also make its own world backups on a timer. Set `server_backup_time` (hours between backups, `0` is off) and `server_backup_max_backups` in `server_settings.json`.

## CPU and RAM

To cap the server, uncomment `cpus` and `mem_limit` in the compose file and set them to what you want. Keep at least 4 CPUs. With fewer, a new world generates more slowly, and saving it while it does can take longer than the 5 minutes a stop allows.

If the machine runs several servers, you can pin each one to its own CPUs with `cpuset` (for example `cpuset: "3-5,15-17"`) instead of capping it with `cpus`. A pinned server can't use more than those CPUs anyway, keeps their caches to itself, and is never paused partway through a frame for hitting a `cpus` limit.

- Pick CPUs that share a cache. `lscpu -e` lists each CPU's core and its L3 cache (the last number under `L1d:L1i:L2:L3`), so take whole cores with the same L3, including each core's second thread.
- Give every server its own set. Servers that share CPUs slow each other down.
- If you run the Steady mod, set its `JobWorkers` to the number of pinned CPUs minus one.

This hasn't been measured yet, so check that the server runs at least as smoothly as before.

## Something went wrong?

See [Server troubleshooting](../troubleshooting.md).
