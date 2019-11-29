import getFormattedCurrentDate from './getFormattedCurrentDate.js'

describe("getFormattedCurrentDate", () => {
  const formattedDate = getFormattedCurrentDate();
  const yearSeparator = formattedDate[4];
  const monthSeparator = formattedDate[7];
  const separator = '-';

  it("returns 10 characters value", () => {
    expect(formattedDate.length).toBe(10)
  });

  it("contains year separator after 4 characters", () => {
    expect(yearSeparator).toBe(separator)
  });
  
  it("contains month separator after 7 characters", () => {
    expect(monthSeparator).toBe(separator)
  });
});
