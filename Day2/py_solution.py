def f(x): return ('  BXCYAZAXBYCZCXAYBZ'.index(x[0]+x[2]),
                  '  BXCXAXAYBYCYCZAZBZ'.index(x[0]+x[2]))


print(*[sum(x)//2 for x in zip(*map(f, open('input.txt')))])
