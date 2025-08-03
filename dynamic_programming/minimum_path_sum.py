class Solution:
    def mpsRec(self, g : List[List[int]], i : int, j : int) -> int:
        
        if ((i, j) in self.cache):
            return self.cache[(i, j)]

        if (not (i < self.m) or not (j < self.n)):
            return float('inf')

        sum = g[i][j]

        if (self.m - 1) == i and (self.n - 1) == j:
            return sum

        self.cache[(i, j)] = min(sum + self.mpsRec(g, i + 1, j), sum + self.mpsRec(g, i, j + 1))

        return self.cache[(i, j)]

    def minPathSum(self, grid: List[List[int]]) -> int:
        self.m = len(grid)
        self.n = len(grid[0])
        self.cache = {}
        return self.mpsRec(grid, 0, 0)
