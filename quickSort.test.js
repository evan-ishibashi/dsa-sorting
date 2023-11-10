const { pivot, quickSort } = require("./quickSort")

describe('pivot', function () {
  it('should exist', function () {
    expect(typeof pivot).toBe('function', "did you remember to define the 'pivot' function?");
  });

  it('mutate arrays and return pivot index', function () {
    let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

    expect(pivot(arr1)).toEqual(3)
    expect(pivot(arr2)).toEqual(4)

    expect(arr1.slice(0, 3).sort((a, b) => a - b)).toEqual([2, 3, 4])
    expect(arr1.slice(3).sort((a, b) => a - b)).toEqual([5, 7, 8, 9, 10, 20])

    expect(arr2.slice(0, 4).sort((a, b) => a - b)).toEqual([0, 2, 4, 5])
    expect(arr2.slice(4).sort((a, b) => a - b)).toEqual([8, 10, 11, 12, 13, 16])
  });
});