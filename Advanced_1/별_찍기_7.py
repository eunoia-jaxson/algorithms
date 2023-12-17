'''
문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2xN-1번째 줄까지 차례대로 별을 출력한다.
'''

N = int(input())

for i in range(N):
    for j in range(N):
        if j >= N-i-1:
            print("*", end="")
        else:
            print(" ", end="")
    
    for j in range(N):
        if j < i:
            print("*", end="")
        else:
            break

    print()

for i in range(1, N):
    for j in range(N):
        if j >= i:
            print("*", end="")
        else:
            print(" ", end="")

    for j in range(N):
        if j < N-i-1:
            print("*", end="")
        else:
            break

    print()