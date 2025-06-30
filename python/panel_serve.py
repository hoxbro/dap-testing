import asyncio

import panel as pn


async def fn():
    t = 0
    while True:
        await asyncio.sleep(1)
        yield str(t)
        t += 1


pn.panel(fn).servable()
