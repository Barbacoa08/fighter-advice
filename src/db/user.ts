import type { FighterUser } from "src/types/FighterUser";

export const getUserInformation = async (sessionid: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/user/${sessionid}`
  );
  const user: FighterUser = await res.json();

  return user;
};
