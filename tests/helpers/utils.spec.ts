import { average } from "@/helpers/utils";
import { describe, it } from "node:test";

describe('average',() => {
  it('should be true if the average is right', () => {
    const result = average([1, 2, 3, 4, 5])
    expect(result).toBe(3)
  })
})