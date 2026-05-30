import os
import time

a = 1
print(os.getpid())

while True:
    time.sleep(1)
    print("zzz")
    a += 1
