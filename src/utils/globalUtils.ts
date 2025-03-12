import {Global} from "@/model/Global";

export default async function getGlobalData(): Promise<Global> {
  const data = await fetch("http://127.0.0.1:4000/global?locale=en", {
    cache: "force-cache"
  });
  return await data.json();
}