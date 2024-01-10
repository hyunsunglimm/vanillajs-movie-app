import { Store } from "../core/heropy";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo:
    "https://velog.velcdn.com/images/gustjd3834/profile/4b318994-bf6a-4a9d-be2e-b31ea52ddfb2/image.png",
  name: "ABGAUM / LimHyunSung",
  email: "gustjd9610@gmail.com",
  blog: "https://velog.io/@gustjd3834",
  github: "https://github.com/hyunsunglimm",
  repository: "https://github.com/hyunsunglimm/vanillajs-movie-app",
});
