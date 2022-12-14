export interface PageData {
  user: string;
}

export const load = () => {
  return {
    user: "Nak Muay",
  } satisfies PageData;
};
