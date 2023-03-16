import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("should format a date", () => {
    const date = new Date("2020-01-01");
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("Dec 31, 2019"); // conversion to UTC
  });

  it("should format a date string", () => {
    const date = "2020-01-01";
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("Dec 31, 2019"); // conversion to UTC

    const date2 = "2023-02-11T23:53:48.267Z";
    const formattedDate2 = formatDate(date2);
    expect(formattedDate2).toBe("Feb 11, 2023");

    const date3 = "2023-02-11T23:53:48.267+07:00";
    const formattedDate3 = formatDate(date3);
    expect(formattedDate3).toBe("Feb 11, 2023");

    const date4 = "2023-02-11";
    const formattedDate4 = formatDate(date4);
    expect(formattedDate4).toBe("Feb 10, 2023"); // conversion to UTC
  });

  it("should return undefined if no date is provided", () => {
    const formattedDate = formatDate();
    expect(formattedDate).toBe("undefined");
  });
});
