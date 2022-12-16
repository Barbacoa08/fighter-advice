import type { FighterUser } from "src/types/FighterUser";

export const getUserInformation = async (sessionid: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${sessionid}`
  );
  const user: FighterUser = (await res.json()) || emptyUser;

  return user;
};

const emptyUser = {
  id: -1,
  name: "",
  username: "Nak Muay",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
} satisfies FighterUser;
