time = 0
dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"]
chars = input()

for char in chars:
    for i in range(len(dial)):
        j = dial[i]
        if char in j:
            time += i+3

print(time)