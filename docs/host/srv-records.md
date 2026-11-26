---
title: Join by name (SRV records)
description: Give your server a name like play.example.com, move its ports, and run two servers on one address.
summary:
    - "On default ports, a normal A record pointing your name at the server's IP is enough."
    - "Players' launchers look up `_townshiptale._tcp.<name>` to find the login port, and use 1762 if there isn't one."
    - "To move ports, set them in `tavern_server.json` (or in `.env` on Docker), restart, and update your port forwards."
    - "Add an SRV record that points at your login port, with a target name that has an A record."
    - "To run two servers on one address, give each its own four ports and its own name."
---

# Join by name (SRV records)

Players can join with an IP address, or with a name like `play.example.com` if you own a domain. A name is easier to remember and keeps working if your IP changes. It also lets you move the server's ports, for example to run two servers on one machine.

## Just a name, default ports

If your server uses the default ports, you only need a normal **A record** pointing your name at the server's IP:

| Type | Name | Value |
| --- | --- | --- |
| A | `play` | `203.0.113.10` |

Players type `play.example.com` in **Destination** and join as usual.

## How players find your ports

A player's launcher only needs to find one port: the login port (`auth_port`, 1762 by default). When it connects there, the server tells it the game and web ports. So players never type a port.

To find the login port, the launcher looks up an **SRV record** for the name they typed: `_townshiptale._tcp.<name>`. If there isn't one, it uses 1762.

## Moving the ports

Set the ports in `tavern_server.json`, in TavernLib's config folder (`%APPDATA%\TheModdingTavern` on Windows, `tavern-config` in Docker):

```json
{
    "server_port": 27015,
    "auth_port": 27016,
    "web_port": 27017,
    "console_port": 27018
}
```

- On the **Windows Server launcher**, set the game port in the launcher. It follows `auth_port`, `web_port` and `console_port` from the file.
- In **Docker**, set `SERVER_PORT`, `AUTH_PORT`, `WEB_PORT` and `RCON_PORT` in `.env` instead. The container writes the file for you on every start. See [Settings and updates](docker/settings-and-updates.md).
- With **Wine**, edit the file and change the game port in `start.sh`.

Restart the server, then update your [port forwards](ports.md) to the new numbers.

## The SRV record

Add one SRV record pointing at your login port. In most DNS panels it looks like this:

| Field | Value |
| --- | --- |
| Type | SRV |
| Name | `_townshiptale._tcp.play` |
| Priority | `0` |
| Weight | `5` |
| Port | your login port, `27016` here |
| Target | `box.example.com` (a name with an A record for your server's IP) |

In a zone file, that's:

```
box.example.com.                       A    203.0.113.10
_townshiptale._tcp.play.example.com.   SRV  0 5 27016 box.example.com.
```

The target has to be a name with an A record, not an IP. Players type `play.example.com`.

DNS changes can take a while to spread. Give it a few minutes, then test with **Check Server** in the launcher.

## Two servers on one address

Give each server its own four ports and its own name:

| Server | Game | Login | Web | Console |
| --- | --- | --- | --- | --- |
| Main | 1757 | 1762 | 1761 | 1760 |
| Event | 27015 | 27016 | 27017 | 27018 |

```
_townshiptale._tcp.main.example.com.   SRV  0 5 1762  box.example.com.
_townshiptale._tcp.event.example.com.  SRV  0 5 27016 box.example.com.
```

With Docker, give the second server its own folder and its own `.env`:

```ini
SERVER_PORT=27015
AUTH_PORT=27016
WEB_PORT=27017
RCON_PORT=27018
```

and a different `container_name` in its compose file.

The launcher keeps players' accounts separate for each login port, so the same name on both servers doesn't clash.

## Community Servers and custom ports

The Community Servers list and the in-game server boards find a listed server's login port the same way: through the SRV record of its **public hostname**. So a listed server on custom ports needs `public_hostname` set to a name with an SRV record. A listed server with no public hostname is always tried on port 1762.

The listing only accepts a public hostname that points at the server's IP, so that name needs its own A record as well as the SRV record:

```
play.example.com.                      A    203.0.113.10
_townshiptale._tcp.play.example.com.   SRV  0 5 27016 box.example.com.
```

See [Getting listed](getting-listed.md).

## Something went wrong?

- **"Cannot reach server" with a name but the IP works.** The SRV record is wrong or hasn't spread yet. Check the name, the port and that the target has an A record.
- **Typing `play.example.com:27016` doesn't work.** A port typed with the address is always the **game** port. Leave the port off and let the SRV record do its job.

More in [Server troubleshooting](troubleshooting.md).
